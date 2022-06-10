<template>
    <div class="nieuwsartikelen">
        <b-card-group columns>
            <b-card v-bind:key="item.Amount"
                    v-for="item in list"
                    :title="item.title"
                    :img-src="item.imgurl"
                    img-alt="Image"
                    img-top
                    img-height="200"
                    img-width="200"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
                <b-card-text>
                    {{item.description}}
                </b-card-text>
                <b-button :href="item.url" variant="primary">Lees meer</b-button>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { BootstrapVue } from 'bootstrap-vue';
    import axios from 'axios'
    Vue.use(BootstrapVue, axios)

    export default {
        name: 'CoronaView',
        components: {

        },
        data() {
            return {
                list: undefined
            }
        },
        mounted() {
            axios
                .get('https://newsbackendapiservice-s3.azurewebsites.net/api/News/GetCoronaNewsArticles')
                .then((result) => {
                    console.warn(result)
                    this.list = result.data
                })
        }
    }
</script>

<style scoped>
    .mb-2 {
        margin: auto;
        display: inline-block;
    }

    .nieuwsartikelen {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        min-height: 100vh;
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
