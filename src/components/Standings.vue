<template>
<table class="table table-sm table-striped mt-2">
    <thead>
        <tr>
            <th class="text-left">#</th>
            <th class="text-left">Club</th>
            <th class="text-left">Played</th>
            <th class="text-left">G</th>
            <th class="text-left">GD</th>
            <th class="text-left">Points</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(team, index) in standings" :key="team.id">
            <td class="text-left">{{index + 1}}</td>
            <td class="text-left">{{team.name}}</td>
            <td class="text-left">{{team.games}}</td>
            <td class="text-left">{{team.g_score}}:{{team.g_left}}</td>
            <td class="text-left">{{team.g_score - team.g_left}}</td>
            <td class="text-left">{{team.points}}</td>
        </tr>
    </tbody>
</table>
</template>

<script>
export default {
    name: 'Standings',
    computed: {
        standings() {
            return this.$store.getters.standings
        }
    }
}
</script>

<style>

</style>