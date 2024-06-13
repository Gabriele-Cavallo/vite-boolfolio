<script>
    export default{
        name: 'AppHeader',
        data() {
            return {
                navLinks : [
                    {
                        label: 'Home',
                        route: 'home',
                    },
                    {
                        label: 'Abouts Us',
                        route: 'about',
                    },
                    {
                        label: 'Projects',
                        route: 'projects',
                    },
                    {
                        label: 'Contact Us',
                        route: 'contact-us',
                    },
                ]
            }
        }
    }
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <div v-for="link in navLinks">
                            <li class="nav-item">
                                <router-link class="nav-link active" aria-current="page" :to="{ name: link.route }">{{ link.label }}</router-link>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">

</style>