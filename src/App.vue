<template>
  <div id="app">
    PES2021
    <div id="panel">
      <button type="button" class="btn btn-sm btn-primary mr-2" @click="dump">
        Export
      </button>
      <button type="button" class="btn btn-sm btn-danger" @click="reset">
        Reset
      </button>
    </div>
    <div class="row justify-content-center" v-if="!configStatus">
      <div class="col-6">
        <config-form />
      </div>
    </div>
    <div class="row justify-content-center" v-else-if="!teamsStatus">
      <div class="col-12">
        <teams-form />
      </div>
    </div>
    <div v-else-if="matchesStatus">
      <matches />
      <hr />
      <h5 class="mt-4 mb-2">Table</h5>
      <div class="row justify-content-center">
        <div class="col-4">
          <summary-table />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ConfigForm from "./components/ConfigForm";
import Matches from "./components/Matches.vue";
import TeamsForm from "./components/TeamsForm";
import SummaryTable from "./components/SummaryTable";
import { saveAs } from 'file-saver';

export default {
  name: "App",
  components: {
    ConfigForm,
    TeamsForm,
    Matches,
    SummaryTable,
  },
  computed: {
    ...mapState({
      configStatus: (state) => state.config.status,
      teamsStatus: (state) => state.config.teamsStatus,
      matchesStatus: (state) => state.config.matchesStatus,
    }),
  },
  methods: {
    reset() {
      if (confirm("Are you sure?")) {
        this.$store.commit("reset");
      }
    },
    dump() {
      var blob = new Blob([this.$store.getters.dump], {
        type: "text/json;charset=utf-8",
      });
      saveAs(blob, "dump.json");
    },
  },
};
</script>

<style>
#panel {
  position: absolute;
  right: 20px;
  top: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
