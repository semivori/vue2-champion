<template>
  <div class="card">
    <div class="card-body p-0">
      <h5 class="card-header mb-0">
        <div class="row">
          <div class="col-3">
            <button
              type="button"
              class="btn btn-sm btn-link"
              v-if="round > 1"
              @click="decrementRound()"
            >
              Prev
            </button>
          </div>
          <div class="col-6">
            Round {{ round }}
            <br>
            <button v-if="randomMode" type="button" class="btn btn-sm btn-primary" @click="playRandom">Play Random</button>
          </div>
          <div class="col-3">
            <button
              type="button"
              class="btn btn-sm btn-light"
              v-if="round < numberOfRounds"
              @click="incrementRound()"
            >
              Next
            </button>
          </div>
        </div>
      </h5>
      <round :number="round" />
    </div>
  </div>
</template>

<script>
import Round from "./Round.vue";
export default {
  components: { Round },
  data() {
    return {
      round: 1,
    };
  },
  computed: {
    numberOfRounds() {
      return this.$store.getters.numberOfRounds;
    },
    randomMode() {
      return this.$store.state.config.randomMode
    }
  },
  methods: {
    incrementRound() {
      this.round = this.round + 1;
    },
    decrementRound() {
      this.round = this.round - 1;
    },
    playRandom() {
      this.$store.commit("playRandom", {round: this.round})
    }
  },
};
</script>

<style>
</style>