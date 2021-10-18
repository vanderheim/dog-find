<template>
<v-container>
    <v-row no-gutters>
        <v-col>
            <h1>Welcome to the Dog Finder!</h1>
            <p>The Dog Finder is a web application built with VueJS and Ruby On Rails that lets you collect pictures of various dogs and build your own dog collection.</p>
            <h2>How does it work?</h2>
            <p>The application has two main features, the first feature can be found in the Find tab, which allows you to browse various images of dogs. You can then add them to your collection but clicking the LOVE IT! button.</p>
            <p>After adding some dogs to your collection, you can view it on the Collection tab. If you don't like one of the dogs in your collection, click on it and you can remove them.</p>

            <h4>Ready to get started? Head on over to the <router-link to='/find'>Find</router-link> tab and start building your collection of furry friends now!</h4>
        </v-col>
    </v-row>
</v-container>
</template>
