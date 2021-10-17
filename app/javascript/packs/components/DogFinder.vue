<template>
<v-card class="mx-auto my-12" max-width="600">
    <v-img aspect-ratio="1" height="600" :src='dog.message' />


    <v-card-text class="text-center">

        <v-snackbar v-model="createdNotification" color='success'>
            You just added a new dog to your collection!

                <v-btn outlined text @click="createdNotification = false">
                    CLOSE
                </v-btn>
        </v-snackbar>

        <v-btn x-large color="success" @click="save(dog.message)">
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
        dog: {}
    }),

    created() {
        this.initialize();
    },

    methods: {

        fetchDog() {
            return axios
                .get("https://dog.ceo/api/breed/maltese/images/random")
                .then(response => {
                    console.log(response.data);
                    this.dog = response.data;
                })
                .catch(e => {
                    console.log(e);
                });
        },

        initialize() {
            return axios
                .get("https://dog.ceo/api/breed/maltese/images/random")
                .then(response => {
                    console.log(response.data);
                    this.dog = response.data;
                })
                .catch(e => {
                    console.log(e);
                });
        },

        save(item) {
            this.createdNotification = true;
            console.log(item);

            const dog = {
                url: item
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
