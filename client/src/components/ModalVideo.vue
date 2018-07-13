<template>
        <iframe v-if="show" :src="items[0].urlVideo" frameborder="0"></iframe>
</template>

<script>
export default {
    computed: {
    ...mapState([
        'show'
       ])
    },
}
</script>

<style scoped>

</style>

