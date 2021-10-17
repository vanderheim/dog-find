<template>
<div id="app">

    <v-app>

        <v-app-bar app color="grey-blue lighten-5">
            <v-toolbar-title>
                <h2>
                    <font-awesome-icon :icon="['fas', 'dog']" /> The Dog Finder
                </h2>
            </v-toolbar-title>

            <template v-slot:extension>
                <v-tabs align-with-title>
                    <v-tab to="/">Home</v-tab>
                    <v-tab to="/find">Find</v-tab>
                    <v-tab to="/collection">Collection</v-tab>
                </v-tabs>
            </template>
            <v-spacer></v-spacer>

            <v-btn href='https://github.com/vanderheim/dog-find' icon>
                <v-icon>mdi-github</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <v-container fluid>
                <router-view />
            </v-container>
        </v-main>

        <v-footer app padless>
            <v-col class="text-center" cols="12">
                <v-card flat tile class="indigo lighten-1 white--text text-center">
                    <v-card-text class="white--text">
                        {{ new Date().getFullYear() }} — <router-link to='/'><strong>The Dog Finder</strong></router-link>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-footer>

    </v-app>
</div>
</template>

<script>
export default {
    name: 'App',
    data: function () {
        return {};
    },
    components: {}
};
</script>
