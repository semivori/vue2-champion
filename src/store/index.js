import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import { uid } from 'uid'

Vue.use(Vuex)

const lsState = createPersistedState() 

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function makeLap(teams) {
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
      match.hc_id = home[j].id;
      match.ac_id = away[j].id;

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
    matchesStatus: false
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
      return state.teams.filter(team => team.user_id === id).sort((a, b) => {
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
    table: state => {
      return state.teams.sort((a, b) => {
        if (a.points != b.points) {
          return a.points > b.points;
        }
        return a.priority > b.priority;
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
          ...makeLap(teams)
        ]
      }

      state.matches = matches
      state.config.matchesStatus = true
    },
    setConfig(state, payload) {
      state.config = { ...state.config, ...payload }
    },
    saveConfig(state) {
      const teams = []

      for (let index = 0; index < state.config.teams; index++) {
        teams.push({
          id: index,
          name: '',
          user_id: index < (state.config.teams / 2) ? 1 : 2,
          priority: index < (state.config.teams / 2) ? index + 1 : index - (state.config.teams / 2 - 1),
          points: 0,
          games: 0,
        })
      }

      state.config = {
        ...state.config,
        status: true,
      }

      state.teams = teams
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

          this.commit("addTeamMatchData", { id: match.hc_id, points: homePoints, g_score: match.hc_score, g_left: match.ac_score })
          this.commit("addTeamMatchData", { id: match.ac_id, points: awayPoints, g_score: match.ac_score, g_left: match.hc_score })
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
