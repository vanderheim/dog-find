<template>
<v-container>

    <v-row v-if='loading' class="text-center d-flex flex-column" align='center' justify='center'>
        <v-progress-circular color="indigo lighten-3" :size="70" :width="10" indeterminate></v-progress-circular>
        <br>
        <h3>Letting the dogs out...</h3>
    </v-row>

    <v-row v-if='dogs && dogs.length === 0' class="text-center d-flex flex-column" align='center' justify='center'>
        <h1>No dogs found!</h1>
        <p>It doesn't seem like you have any dogs in your collection. <router-link to='/find'>How about adding some?</router-link></p>
    </v-row>

    <v-row v-else>
        <v-col v-for="dog in dogs" :key="dog.id" class="d-flex child-flex" cols="3">
            <v-dialog v-model="dialog" :retain-focus="false" max-width="500px">

                <template v-slot:activator="{ on }">
                    <v-hover v-slot="{ hover }">
                        <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" @click="viewDog(dog)">
                            <v-img :src="dog.url" aspect-ratio="1" class="grey lighten-2">
                            </v-img>
                        </v-card>
                    </v-hover>
                </template>

                <v-card>
                    <v-card-title>
                        <v-img :src="currentDog.url" aspect-ratio="1" />
                    </v-card-title>

                    <v-card-text>
                        <v-container>
                            <h1>Dog #{{ currentDog.id }}</h1>
                            <br>
                            <p>This dog was added on {{ new Date(Date.parse(currentDog.created_at)).toLocaleDateString() }}.</p>

                            <p class='remove-text'>Would you like to remove this dog from your collection?</p>
                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red" @click="deleteDog(currentDog)">REMOVE</v-btn>
                        <v-btn @click="close">CLOSE</v-btn>
                    </v-card-actions>
                </v-card>

            </v-dialog>
        </v-col>
        <v-snackbar v-model="removeNotification" color='pink'>
            You just deleted a dog from your collection. Don't worry, all dogs go to heaven!

            <v-btn outlined text @click="removeNotification = false">
                CLOSE
            </v-btn>
        </v-snackbar>
    </v-row>
</v-container>
</template>

<script>
import axios from "axios";
export default {
    data: () => ({
        removeNotification: false,
        loading: false,
        dialog: false,
        currentDog: {},
        dogs: null
    }),
    created() {
        this.initialize();
    },
    methods: {
        initialize() {

            this.loading = true;

            return axios
                .get("/dogs")
                .then(response => {
                    console.log('dogs list', response.data);
                    this.dogs = response.data;
                    this.loading = false;
                })
                .catch(e => {
                    console.log(e);
                });

        },
        viewDog(dog) {
            this.dialog = true;
            this.currentDog = dog;
        },
        deleteDog(dog) {
            axios
                .delete(`/dogs/${dog.id}`)
                .then(response => {
                    this.dialog = false;
                    this.removeNotification = true;
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

<style scoped>
.remove-text {
    color: red;
    font-weight: bold;
}
</style>
