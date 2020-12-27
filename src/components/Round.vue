<template>
  <div class="list-group">
    <div class="list-group-item" v-for="match in matches" :key="match.id">
      <match-form :match="match" />
    </div>
  </div>
</template>

<script>
import MatchForm from "./MatchForm.vue";
export default {
  props: ["number"],
  components: { MatchForm },
  computed: {
    matches() {
      return this.$store.getters.getRoundMatches(this.number);
    },
  },
};
</script>

<style>
</style>