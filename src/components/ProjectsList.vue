<script>
    import axios from 'axios';

    export default {
        name: 'ProjectsList',
        components: '',
        data() {
            return {

            }
        },
        methods: {
            getAllProjects(){
                axios.get('http://127.0.0.1:8000/api/projects')
                .then((response) => {
                    console.log('axios' , response.data.results);
                })
            }
        },
        mounted() {
            this.getAllProjects();
        }
    }

</script>

<template>
    <h1>ProjectsList</h1>
</template>

<style scoped lang="scss">

</style>