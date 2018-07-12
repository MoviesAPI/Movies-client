<template>
    
</template>

<script>
export default {
    created () {
        this.$store.dispatch('getFilmBySearch')
    }
}
</script>

<style scoped>

</style>

