<template>
    <div id="app">
        <home-view msg="Hello world!" />
        <router-view />
    </div>
</template>

<script>
    import HomeView from './views/HomeView.vue';
    export default {
        name: 'app',
        components: {
            'home-view': HomeView
        }
    };
</script>

<style>
</style>