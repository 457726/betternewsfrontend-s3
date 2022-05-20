<template>
    <div>
        <!--<search-view />-->
    </div>
</template>

<script>
    import  Vue  from 'vue';
    import { BootstrapVue } from 'bootstrap-vue';
    Vue.use(BootstrapVue)
   /* import SearchView from '@/views/SearchView.vue'*/

    export default {
        name: 'HomeView',
        components: {
            /*'search-view': SearchView*/
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .mb-2 {
        margin: auto
    }

    .column {
        margin: auto;
        width: 25%;
        padding: 0 10px;
    }

    .row {
        margin: 0 -5px;
    }

    .row:after {
        content: "";
        display: table;
        clear: both;
    }
</style>
