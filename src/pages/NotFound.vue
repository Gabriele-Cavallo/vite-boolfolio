<script>
    export default{
        name: 'NotFound',
        data() {

        }
    }
</script>

<template>
    <div class="container">
        <h2>ERROR 404: Page not found</h2>
        <router-link class="nav-link active btn btn-primary" aria-current="page" :to="{ name: 'projects'}">Return</router-link>
    </div>
</template>