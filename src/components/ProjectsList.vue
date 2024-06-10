<script>
    import axios from 'axios';
    import SingleProjectCard from './SingleProjectCard.vue';

    export default {
        name: 'ProjectsList',
        components: {
            SingleProjectCard
        },
        data() {
            return {
                projects: [],
            }
        },
        methods: {
            getAllProjects(){
                axios.get('http://127.0.0.1:8000/api/projects')
                .then((response) => {
                    this.projects = response.data.results;
                })
            }
        },
        mounted() {
            this.getAllProjects();
        }
    }

</script>

<template>
    <div class="container">
        <h1>Projects List</h1>
        <div class="row row-cols-3">
            <SingleProjectCard v-for="project in projects" :projectInfo="project" :key="project.id"></SingleProjectCard>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>