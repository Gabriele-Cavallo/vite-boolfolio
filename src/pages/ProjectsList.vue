<script>
    import axios from 'axios';
    import { store } from '../store.js';
    import SingleProjectCard from '../components/SingleProjectCard.vue';
    import Loader from '../components/Loader.vue';

    export default {
        name: 'ProjectsList',
        components: {
            SingleProjectCard,
            Loader
        },
        data() {
            return {
                projects: [],
                activePage: 1,
                previousPageUrl: null,
                nextPageUrl: null,
                store,
                loading:false,
            }
        },
        methods: {
            getAllProjects(pageNumber){
                axios.get(`${this.store.apiUrl}/api/projects`, {
                    params: {
                        page: pageNumber
                    }
                })
                .then((response) => {
                    this.projects = response.data.results.data;
                    this.activePage = response.data.results.current_page;
                    this.previousPageUrl = response.data.results.prev_page_url;
                    this.nextPageUrl = response.data.results.next_page_url;
                    this.loading = true;
                })
            },
            firstPage(){
                axios.get(`${this.store.apiUrl}/api/projects?page=1`)
                .then((response) => {
                    this.projects = response.data.results.data;
                    this.activePage = response.data.results.current_page;
                    this.previousPageUrl = response.data.results.prev_page_url;
                    this.nextPageUrl = response.data.results.next_page_url;
                })
            },
            lastPage(){
                axios.get(`${this.store.apiUrl}/api/projects?page=5`)
                .then((response) => {
                    this.projects = response.data.results.data;
                    this.activePage = response.data.results.current_page;
                    this.previousPageUrl = response.data.results.prev_page_url;
                    this.nextPageUrl = response.data.results.next_page_url;
                })
            }
        },
        mounted() {
            this.getAllProjects(this.activePage);
        }
    }

</script>

<template>
    <div class="container">
        <h1>Projects List</h1>
        {{ activePage }}
        <Loader v-if="!loading"></Loader>
        <div class="row row-cols-3">
            <SingleProjectCard v-for="project in projects" :projectInfo="project" :key="project.id"></SingleProjectCard>
        </div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li v-if="previousPageUrl" class="page-item"><a class="page-link" @click.prevent="firstPage()">First</a></li>
                <li v-if="previousPageUrl" class="page-item"><a class="page-link" @click.prevent="getAllProjects(activePage - 1)">Previous</a></li>
                <li v-if="nextPageUrl" class="page-item"><a class="page-link" @click.prevent="getAllProjects(activePage + 1)">Next</a></li>
                <li v-if="nextPageUrl" class="page-item"><a class="page-link" @click.prevent="lastPage()">Last</a></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped lang="scss">

</style>