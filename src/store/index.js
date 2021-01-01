import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import { uid } from 'uid'

Vue.use(Vuex)

const lsState = createPersistedState()

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function makeLap(teams, randomMode) {
  shuffle(teams)

  const matches = [];
  let away = teams.splice(teams.length / 2);
  let home = teams;

  for (let i = 0; i < (home.length + away.length - 1); i++) {
    for (let j = 0; j < home.length; j++) {
      let match = {
        id: uid(),
        round: i + 1,
        hc_score: null,
        ac_score: null,
      }
      match.homeTeam = home[j];
      match.awayTeam = away[j];

      if (match.homeTeam.user.id != match.awayTeam.user.id || match.homeTeam.priority < match.awayTeam.priority) {
        match.homePlayerId = match.homeTeam.user.id == 1 ? 1 : 2
        match.awayPlayerId = match.homeTeam.user.id == 1 ? 2 : 1
      } else {
        match.homePlayerId = match.awayTeam.user.id == 1 ? 2 : 1
        match.awayPlayerId = match.awayTeam.user.id == 1 ? 1 : 2
      }

      match.isPlayable = randomMode ? match.homeTeam.priority == 1 || match.awayTeam.priority == 1 : true;

      matches.push(match)
    }

    if ((home.length + away.length - 1) > 2) {
      let splice = home.splice(1, 1);
      away.unshift(splice.shift())
      home.push(away.pop())
    }
  }

  return matches
}

const initialState = {
  config: {
    teams: 10,
    laps: 1,
    status: false,
    teamsStatus: false,
    matchesStatus: false,
    randomMode: false,
  },
  teams: [],
  matches: [],
  users: [
    {
      id: 1,
      name: 'Vlad',
    },
    {
      id: 2,
      name: 'Oleg',
    }
  ]
}

export default new Vuex.Store({
  state: { ...initialState },
  getters: {
    dump: state => {
      return JSON.stringify(state)
    },
    getUserById: state => id => {
      return state.users.find(item => item.id === id);
    },
    getTeamById: state => id => {
      return state.teams.find(team => team.id === id);
    },
    getUserTeams: state => id => {
      return state.teams.filter(team => team.user.id === id).sort((a, b) => {
        if (a.points != b.points) {
          return a.points - b.points
        }
        return a.priority - b.priority;
      })
    },
    getRoundMatches: state => number => {
      return state.matches.filter(match => match.round === number)
    },
    numberOfRounds: state => {
      return (state.config.teams - 1) * state.config.laps
    },
    standings: state => {
      const teams = state.teams.sort((a, b) => {
        if (a.points != b.points) {
          return b.points - a.points;
        }

        if (b.g_score - b.g_left != a.g_score - a.g_left) {
          return (b.g_score - b.g_left) - (a.g_score - a.g_left);
        }
        return b.g_score - a.g_score;
      });

      console.log(
        teams
      );

      return state.teams.sort((a, b) => {
        if (a.points != b.points) {
          return a.points < b.points;
        }
        return a.g_score < b.g_score;
      })
    }
  },
  mutations: {
    makeCalendar(state) {
      const teams = [...state.teams]
      let matches = [];

      for (let i = 0; i < state.config.laps; i++) {
        matches = [
          ...matches,
          ...makeLap(teams, state.config.randomMode)
        ]
      }

      state.matches = matches
      state.config.matchesStatus = true
    },
    toggleRandomMode(state) {
      this.commit("setConfig", {
        randomMode: !state.config.randomMode
      })
    },
    setConfig(state, payload) {
      state.config = { ...state.config, ...payload }
    },
    saveConfig(state) {
      const teams = []
      const user1 = this.getters.getUserById(1)
      const user2 = this.getters.getUserById(2)

      for (let index = 0; index < state.config.teams; index++) {
        teams.push({
          id: index,
          name: '',
          user: index < (state.config.teams / 2) ? user1 : user2,
          priority: index < (state.config.teams / 2) ? index + 1 : index - (state.config.teams / 2 - 1),
          points: 0,
          games: 0,
          g_score: 0,
          g_left: 0,
        })
      }

      state.config = {
        ...state.config,
        status: true,
      }

      state.teams = teams

      console.log(
        teams
      );
    },
    updateTeam(state, payload) {
      const teamIndex = state.teams.findIndex(t => t.id == payload.id)

      if (teamIndex != -1) {
        Vue.set(state.teams, teamIndex, { ...state.teams[teamIndex], ...payload, id: state.teams[teamIndex].id })
      }
    },
    addTeamMatchData(state, payload) {
      const teamIndex = state.teams.findIndex(t => t.id == payload.id)

      if (teamIndex != -1) {
        const games = isNaN(state.teams[teamIndex].games) ? 1 : state.teams[teamIndex].games + 1
        const points = isNaN(state.teams[teamIndex].points) ? payload.points : state.teams[teamIndex].points + +(payload.points)
        const g_score = isNaN(state.teams[teamIndex].g_score) ? payload.g_score : state.teams[teamIndex].g_score + +(payload.g_score)
        const g_left = isNaN(state.teams[teamIndex].g_left) ? payload.g_left : state.teams[teamIndex].g_left + +(payload.g_left)

        Vue.set(state.teams, teamIndex, { ...state.teams[teamIndex], points, games, g_score, g_left })
      }
    },
    saveTeams(state) {
      state.config = { ...state.config, teamsStatus: true }
      this.commit('makeCalendar')
    },
    recalculatePoints(state) {
      state.teams.map(team => {
        this.commit("updateTeam", { id: team.id, points: 0, games: 0, g_score: 0, g_left: 0 })
      })

      state.matches.map(match => {
        if (
          !isNaN(match.hc_score) && !isNaN(match.ac_score)
          && match.hc_score !== null && match.ac_score !== null
          && match.hc_score !== undefined && match.ac_score !== undefined
        ) {
          let homePoints = 0
          let awayPoints = 0

          if (match.hc_score > match.ac_score) {
            homePoints = 3
          } else if (match.hc_score == match.ac_score) {
            homePoints = 1
            awayPoints = 1
          } else {
            awayPoints = 3
          }

          this.commit("addTeamMatchData", { id: match.homeTeam.id, points: homePoints, g_score: match.hc_score, g_left: match.ac_score })
          this.commit("addTeamMatchData", { id: match.awayTeam.id, points: awayPoints, g_score: match.ac_score, g_left: match.hc_score })
        }
      })
    },
    updateMatchScore(state, payload) {
      const index = state.matches.findIndex(t => t.id == payload.id)

      if (index != -1) {
        const score = {
          hc_score: !isNaN(payload.hc_score) ? payload.hc_score : state.matches[index].hc_score,
          ac_score: !isNaN(payload.ac_score) ? payload.ac_score : state.matches[index].ac_score,
        }

        Vue.set(state.matches, index, { ...state.matches[index], ...score })

        if (state.matches[index].hc_score != null && state.matches[index].ac_score != null) {
          this.commit("recalculatePoints")
        }
      }
    },
    updateMatchHomePlayer(state, payload) {
      const index = state.matches.findIndex(i => i.id == payload.match_id)

      if (index != -1) {
        const data = {
          homePlayerId: payload.player_id,
          awayPlayerId: payload.player_id == 1 ? 2 : 1
        }

        Vue.set(state.matches, index, { ...state.matches[index], ...data })
      }
    },
    updateMatchAwayPlayer(state, payload) {
      const index = state.matches.findIndex(i => i.id == payload.match_id)

      if (index != -1) {
        const data = {
          awayPlayerId: payload.player_id,
          homePlayerId: payload.player_id == 1 ? 2 : 1
        }

        Vue.set(state.matches, index, { ...state.matches[index], ...data })
      }
    },
    playRandom(state, payload) {
      const newMatches = state.matches.map(match => {
        if (match.round != payload.round || match.hc_score != null || match.ac_score != null || match.isPlayable) {
          return match
        }

        const res = getRandomInt(1, 5)
        const loserScore = getRandomInt(0, 3)
        const winnerScore = getRandomInt(loserScore, 5)
        let hc_score = 0
        let ac_score = 0

        if (res == 3) {
          hc_score = loserScore
          ac_score = loserScore
        } else if (res < 3) {
          hc_score = winnerScore
          ac_score = loserScore
        } else {
          hc_score = loserScore
          ac_score = winnerScore
        }

        return {
          ...match,
          hc_score: hc_score,
          ac_score: ac_score
        }
      })

      state.matches = newMatches
    },
    reset(state) {
      Object.assign(state, initialState)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [lsState],
})
