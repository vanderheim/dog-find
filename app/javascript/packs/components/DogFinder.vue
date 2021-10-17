<template>
<v-card :loading="loading" class="mx-auto my-12" max-width="600">

    <!-- Loading bar -->
    <template slot="progress">
      <v-progress-linear
        color="indigo lighten-3"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <!-- Main dog UI -->
    <v-img aspect-ratio="1" :height="height" :src='dog.message' />

    <v-card-text class="text-center">

        <v-snackbar v-model="createdNotification" color='success'>
            You just added a new dog to your collection!

            <v-btn outlined text @click="createdNotification = false">
                CLOSE
            </v-btn>
        </v-snackbar>

        <v-btn x-large color="success" @click="saveDog(dog.message)">
            LOVE IT!
        </v-btn>
        <v-btn x-large color="error" @click="fetchDog">
            NO THANKS
        </v-btn>

    </v-card-text>
</v-card>
</template>

<script>
import axios from "axios";

export default {

    data: () => ({
        createdNotification: false,
        loading: false,
        dog: {}
    }),

    computed: {

        // Computed property to handle main dog image scaling per device breakpoint
        height() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return 250
                case 'sm': return 400
                case 'md': return 500
                case 'lg': return 550
                case 'xl': return 600
            }
        }
    },

    created() {
        this.initialize();
    },

    methods: {

        fetchDog() {
            this.loading = true;

            return axios
                .get("https://dog.ceo/api/breed/maltese/images/random")
                .then(response => {
                    this.dog = response.data;
                    this.loading = false;
                })
                .catch(e => {
                    console.log(e);
                });
        },

        initialize() {
            this.fetchDog();
        },

        saveDog(url) {
            this.createdNotification = true;

            const dog = {
                url: url
            };

            axios
                .post(`/dogs/`, {
                    dog: dog
                })
                .then(response => {
                    this.initialize();
                })
                .catch(error => {
                    console.log(error);
                });
        },

        close() {
            this.dialog = false;
        }

    }
};
</script>
