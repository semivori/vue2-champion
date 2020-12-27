<template>
  <div class="form-group row">
    <div class="col-3">
      <input type="number" class="form-control" v-model="priority" required />
    </div>
    <div class="col-9">
      <input type="text" class="form-control" v-model="name" required />
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamForm",
  props: ["team"],
  computed: {
    name: {
      get() {
        return this.team.name;
      },
      set(value) {
        this.$store.commit("updateTeam", {
          id: this.team.id,
          name: value,
        });
      },
    },
    priority: {
      get() {
        return this.team.priority;
      },
      set(value) {
        if (value) {
          this.$store.commit("updateTeam", {
            id: this.team.id,
            priority: value,
          });
        }
      },
    },
  },
};
</script>

<style>
</style>