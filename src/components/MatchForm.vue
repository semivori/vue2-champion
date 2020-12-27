<template>
  <div class="row">
    <div class="col-4">
      {{ home.name }} ({{homeUser.name}})
      <br />
      <span :class="`badge badge-pill badge-${homeColor}`">###</span>
    </div>
    <div class="col-2">
      <input type="number" class="form-control text-center" v-model="homeScore" />
    </div>
    <div class="col-2">
      <input type="number" class="form-control text-center" v-model="awayScore" />
    </div>
    <div class="col-4">
      {{ away.name }} ({{awayUser.name}})
      <br />
      <span :class="`badge badge-pill badge-${awayColor}`">###</span>
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
    home() {
      return this.$store.getters.getTeamById(this.match.hc_id);
    },
    away() {
      return this.$store.getters.getTeamById(this.match.ac_id);
    },
    homeUser() {
      return this.$store.getters.getUserById(this.home.user_id);
    },
    awayUser() {
      return this.$store.getters.getUserById(this.away.user_id);
    },
    homeColor() {
      if (this.home.user_id != this.away.user_id) {
        return this.home.user_id == 1 ? color1 : color2;
      }
      if (this.home.priority < this.away.priority) {
        return this.home.user_id == 1 ? color1 : color2;
      } else {
        return this.home.user_id == 1 ? color2 : color1;
      }
    },
    awayColor() {
      if (this.home.user_id != this.away.user_id) {
        return this.away.user_id == 1 ? color1 : color2;
      }
      if (this.home.priority < this.away.priority) {
        return this.away.user_id == 1 ? color2 : color1;
      } else {
        return this.away.user_id == 1 ? color1 : <color2></color2>;
      }
    },
  },
};
</script>

<style>
</style>