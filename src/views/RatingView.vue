<template>
    <div>
        <div>
            <h1>Beoordeel dit artikel</h1>
            <hr /><br />
        </div>
        <div class="rate">
            <h1>{{this.form.articleId}}</h1>
            <b-form-rating v-model="value"></b-form-rating>
            <p class="mt-2">Beoordeling: {{ value }} / 5</p>
            <div class="rate-comment">
                <h4>Comment:</h4>
                <b-form-textarea id="comment"
                                 v-model="form.comment"
                                 placeholder="Voer hier je opmerkingen in."
                                 rows="3"
                                 max-rows="5">
                </b-form-textarea>
            </div>
            <b-button variant="primary" class="btn" type="submit" @click="onSubmit"><a @click="$router.go(-1)" class="nav">Verstuur</a></b-button>
            <b-button variant="danger"><a @click="$router.go(-1)" class="nav">Ga terug.</a></b-button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    Vue.use(VueRouter)
    Vue.use(VueAxios, axios, VueRouter)
    export default {
        name: 'RatingView',
        components: {
        },
        data() {
            return {
                form: {
                    comment: '',
                    articleId: this.$route.params.article,
                    rating: null
                },
                value: null
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault()
                console.warn(this.form)
                alert("Thanks for your feedback!")
                axios({
                    method: 'post',
                    url: 'https://localhost:44345/api/Review',
                    data: {
                        "comment": this.form.comment,
                        "title": this.form.articleId,
                        "rating": this.form.rating
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .rate {
        margin-left: 50px;
        margin-bottom: 25px;
    }

    .rate-comment {
        margin-top: 25px;
        margin-bottom: 25px;
    }

    .btn {
        margin-left: 10px;
    }

    .nav {
        color: white;
    }
</style>