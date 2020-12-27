<template>
<table class="table table-sm table-striped mt-2">
    <thead>
        <tr>
            <th class="text-left">#</th>
            <th class="text-left">Club</th>
            <th class="text-left">Played</th>
            <th class="text-left">Goals</th>
            <th class="text-left">Points</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(team, index) in table" :key="team.id">
            <td class="text-left">{{index + 1}}</td>
            <td class="text-left">{{team.name}}</td>
            <td class="text-left">{{team.games}}</td>
            <td class="text-left">{{team.g_score}}/{{team.g_left}}</td>
            <td class="text-left">{{team.points}}</td>
        </tr>
    </tbody>
</table>
</template>

<script>
export default {
    name: 'SummaryTable',
    computed: {
        table() {
            return this.$store.getters.table
        }
    }
}
</script>

<style>

</style>