<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Settings</h5>
      <div class="row form-group">
        <label class="col-6 col-form-label"> Teams: </label>
        <div class="col-6">
          <input
            type="number"
            class="form-control"
            v-model="teams"
            :disabled="status"
            required
          />
        </div>
      </div>
      <div class="row form-group">
        <label class="col-6 col-form-label"> Laps: </label>
        <div class="col-6">
          <input
            type="number"
            class="form-control"
            v-model="laps"
            :disabled="status"
            required
          />
        </div>
      </div>
      <button type="button" class="btn btn-sm btn-info" @click="save">
        Save
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfigForm",
  computed: {
    teams: {
      get() {
        return this.$store.state.config.teams;
      },
      set(value) {
        this.$store.commit("setConfig", { teams: value });
      },
    },
    laps: {
      get() {
        return this.$store.state.config.laps;
      },
      set(value) {
        this.$store.commit("setConfig", { laps: value });
      },
    },
    status: {
      get() {
        return this.$store.state.config.status;
      },
    },
  },
  methods: {
    save() {
      this.$store.commit("saveConfig");
    },
  },
};
</script>