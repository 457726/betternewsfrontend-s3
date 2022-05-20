<template>
    <div>
        <div class="row" v-for="item in list" v-bind:key="item.Amount">
            <div class="column">
                <b-card :title="item.title"
                        :img-src="item.imgurl"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2">
                    <b-card-text>
                        {{item.description}}
                    </b-card-text>

                    <b-button :href="item.url" variant="primary">Lees meer</b-button>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
    import  Vue  from 'vue';
    import { BootstrapVue } from 'bootstrap-vue';
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(BootstrapVue, VueAxios, axios)

    export default {
        name: 'SearchView',
        data() {
            return {
                list: undefined,
                criteria: this.$route.params.criteria
            }
        },
        mounted() {
            axios
                .get('https://localhost:44345/api/News?criteria=' + this.criteria)
                .then((result) => {
                    console.warn(result)
                    this.list = result.data
                })
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
