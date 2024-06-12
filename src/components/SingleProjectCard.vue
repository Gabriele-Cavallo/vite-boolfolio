<script>
    export default {
        name: 'SingleProjectCard',
        props: {
            projectInfo : Object,
        },
        data(){
            return{
            }
        },
        methods: {
            cardText(text){
                if (text.length > 100) {
                    return text.substr(0, 99) + ' ...';
                }
                return text;
            }
        }
    }
</script>

<template>
    <div class="col">
        <div class="card my-3">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
                <h5 class="card-title">Project: {{ projectInfo.name }}</h5>
                <p class="card-text"><strong>Client name</strong>: {{ projectInfo.client_name }}</p>
                <p class="card-text"><strong>Summary</strong>: {{ cardText(projectInfo.summary) }}</p>
                <p v-if="projectInfo.type" class="card-text"><strong>Type</strong>: {{ projectInfo.type.name }}</p>
                <p v-if="projectInfo.technologies.length > 0" class="card-text"><strong>Technologies</strong>: 
                    <span v-for="technology in projectInfo.technologies">{{ technology.name }} &nbsp;</span>
                </p>
                <router-link :to="{ name: 'single-project', params: { slug: projectInfo.slug } }" class="btn btn-primary">View More</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>