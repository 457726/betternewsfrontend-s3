<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#"></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form @submit="getData" method="get">
                    <b-form-input type="text" name="criteria" v-model="gets.criteria" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>

                <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                        <em>User</em>
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
    </template>

<style>
    .sb{
        margin-left: 10px
    }
</style>

<script>
    import  Vue  from 'vue';
    import { BootstrapVue } from 'bootstrap-vue';
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(BootstrapVue, VueAxios, axios)
    export default {
        name: 'NavbarView',
        data() {
            return {
                gets: {
                    criteria: null
                }
            }
        },
        components: {

        },
        methods: {
            getData(e) {
                this.axios.get("https://localhost:44345/api/News?criteria=" + JSON.stringify(this.gets))
                    .then((result) => {
                        console.warn(result.data)
                    })
                e.preventDefault();
            }
        }
    }
</script>