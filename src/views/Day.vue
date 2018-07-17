<template>
    <div>
        <router-link to="/">Zurück</router-link>
        <h1>{{$route.params.date}}.{{$route.params.month}}.{{$route.params.year}}</h1>
    </div>
</template>

<script>
export default {
    name: 'day',

}
</script>

<style scoped>
</style>
