<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Teams</h5>
      <form action="#" @submit.prevent.stop="save">
        <div class="row form-group">
          <div class="col-6">
            Vlad
            <hr />
            <div v-for="team in teams1" :key="team.id">
              <team-form :team="team" />
            </div>
          </div>
          <div class="col-6">
            Oleg
            <hr />
            <div v-for="team in teams2" :key="team.id">
              <team-form :team="team" />
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-sm btn-info">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
import TeamForm from "./TeamForm.vue";
export default {
  components: { TeamForm },
  name: "TeamsForm",
  computed: {
    teams1: {
      get() {
        return this.$store.getters.getUserTeams(1);
      },
    },
    teams2: {
      get() {
        return this.$store.getters.getUserTeams(2);
      },
    },
  },
  methods: {
    save() {
      this.$store.commit("saveTeams");
    },
  },
};
</script>