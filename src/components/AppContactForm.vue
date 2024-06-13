<script>
    import axios from 'axios';
    import { store } from '../store.js';

    export default {
        name: 'AppContactForm',
        data() {
            return {
                userName: '',
                userEmail: '',
                userMessage: '',
                errors: {},
                success: null,
                loading: false,
                store
            };
        },
        methods: {
            sendForm() {
                const userData = {
                    name: this.userName,
                    email: this.userEmail,
                    message: this.userMessage,
                };

                this.loading = true;

                axios.post(`${this.store.apiUrl}/api/contacts`, userData)
                .then(response => {
                    this.success = response.data.success;
                    if (response.data.success) {
                        this.errors = {};
                        this.userName = '';
                        this.userEmail = '';
                        this.userMessage = '';
                    } else {
                        this.errors = response.data.errors;
                    }
                    this.loading = false;
                });
            }
        }
    }
</script>

<template>
    <div class="container">
        <div v-if="success" class="alert alert-success" role="alert">
            Grazie per averci contattato, ti ricontatteremo il prima possibile!
        </div>

        <form @submit.prevent="sendForm">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" v-model="userName">
            </div>
            <div v-if="errors.name">
                <div v-for="error in errors.name" class="alert alert-danger" role="alert">
                    {{ error }}
                </div>
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="userEmail">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div v-if="errors.email">
                <div v-for="error in errors.email" class="alert alert-danger" role="alert">
                    {{ error }}
                </div>
            </div>

            <div class="mb-3">
                <label class="form-label" for="message">Message</label>
                <textarea class="form-control" rows="10" id="message" v-model="userMessage"></textarea>
            </div>
            <div v-if="errors.message">
                <div v-for="error in errors.message" class="alert alert-danger" role="alert">
                    {{ error }}
                </div>
            </div>

            <button :disabled="loading" type="submit" class="btn btn-primary">{{ loading ? 'Invio...' : 'Invia'}}</button>
        </form>
    </div>
</template>