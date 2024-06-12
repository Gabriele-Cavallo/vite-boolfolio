<script>
    import axios from 'axios';
    import { store } from '../store.js';
    import Loader from '../components/Loader.vue';


    export default{
        name: 'SingleProject',
        components: {
            Loader
        },
        data(){
            return{
                project: null,
                store,
                loading:false,
            };
        },
        methods: {
            getSingleProject(){
                axios.get(`${this.store.apiUrl}/api/projects/${this.$route.params.slug}`)
                .then((response) => {
                    if(response.data.success) {
                        this.project = response.data.project;
                        this.loading = true;
                    } else {
                        this.$router.push ({name: 'not-found'});
                    }
                });
            }
        },
        mounted(){
            this.getSingleProject();
        }
    }
</script>

<template>
    <div class="container">
        <Loader v-if="!loading"></Loader>
        <div v-if="project">
            <h5 class="card-title my-2"><strong>Project</strong>: {{ project.name }}</h5>
            <img v-if="project.cover_image" :src="`http://127.0.0.1:8000/storage/${project.cover_image}`" :alt="project.name">
            <p class="card-text"><strong>Client name</strong>: {{ project.client_name }}</p>
            <p class="card-text"><strong>Summary</strong>: {{ project.summary }}</p>
            <p v-if="project.type" class="card-text"><strong>Type</strong>: {{ project.type.name }}</p>
            <p v-if="project.technologies.length > 0" class="card-text"><strong>Technologies</strong>: 
                <span v-for="technology in project.technologies">{{ technology.name }} &nbsp;</span>
            </p>
            <router-link class="nav-link active btn btn-primary" aria-current="page" :to="{ name: 'projects'}">Return</router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>