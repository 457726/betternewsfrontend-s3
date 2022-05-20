<template>
    <div id="app">
        <nav-bar />
        <router-view />
    </div>
</template>

<script>
    import NavBar from '@/components/NavbarView.vue'
    export default {
        name: 'app',
        components: {
            'nav-bar': NavBar
        }
    };
</script>

<style>
</style>