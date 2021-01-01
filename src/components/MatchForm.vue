<template>
<div>
  <div class="row">
    <div class="col-4">
      {{ match.homeTeam.name }}
      <span v-if="match.isPlayable" :class="`badge badge-pill badge-${homeColor}`">###</span>
    </div>
    <div class="col-2">
      <input type="number" class="form-control text-center" v-model="homeScore" :disabled="!match.isPlayable" />
    </div>
    <div class="col-2">
      <input type="number" class="form-control text-center" v-model="awayScore" :disabled="!match.isPlayable" />
    </div>
    <div class="col-4">
      {{ match.awayTeam.name }}
      <span v-if="match.isPlayable" :class="`badge badge-pill badge-${awayColor}`">###</span>
    </div>
  </div>
  <div class="row" v-if="!randomMode">
    <div class="col-4">
       User: {{match.homeTeam.user.name}}
      <br />
      Player: <select class="" v-model="homePlayerId" :disabled="!match.isPlayable">
        <option v-for="user in users" :key="user.id" :value="user.id" :selected="user.id == homePlayerId">
          {{user.name}}
        </option>
      </select>
    </div>
    <div class="col-4"></div>
    <div class="col-4">
       User: {{match.awayTeam.user.name}}  
      <br />
      Player: <select v-model="awayPlayerId" :disabled="!match.isPlayable">
        <option v-for="user in users" :key="user.id" :value="user.id" :selected="user.id == awayPlayerId">
          {{user.name}}
        </option>
      </select>
    </div>
  </div>
</div>
</template>

<script>
const color1 = "primary";
const color2 = "success";

export default {
  name: "MatchForm",
  props: ["match"],
  computed: {
    randomMode() {
      return this.$store.state.config.randomMode
    },
    users() {
      return this.$store.state.users
    },
    homePlayer: {
      get() {
        return this.$store.getters.getUserById(this.match.homePlayerId)
      }
    },
    awayPlayer: {
      get() {
        return this.$store.getters.getUserById(this.match.awayPlayerId)
      }
    },
    homePlayerId: {
      get() {
        return this.match.homePlayerId
      },
      set(value) {
        this.$store.commit("updateMatchHomePlayer", {
          match_id: this.match.id,
          player_id: value,
        })
      }
    },
    awayPlayerId: {
      get() {
        return this.match.awayPlayerId
      },
      set(value) {
        this.$store.commit("updateMatchAwayPlayer", {
          match_id: this.match.id,
          player_id: value,
        })
      }
    },
    homeScore: {
      get() {
        return this.match.hc_score;
      },
      set(value) {
        if (!isNaN(value)) {
          this.$store.commit("updateMatchScore", {
            id: this.match.id,
            hc_score: +value,
          });
        }
      },
    },
    awayScore: {
      get() {
        return this.match.ac_score;
      },
      set(value) {
        if (!isNaN(value)) {
          this.$store.commit("updateMatchScore", {
            id: this.match.id,
            ac_score: +value,
          });
        }
      },
    },
    homeColor() {
        return this.homePlayerId == 1 ? color1 : color2;
    },
    awayColor() {
        return this.awayPlayerId == 1 ? color1 : color2;
    },
  },
};
</script>

<style>
</style>