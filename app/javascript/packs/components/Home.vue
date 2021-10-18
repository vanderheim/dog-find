<template>
<v-container>
    <v-row no-gutters>
        <v-col>
            <h1>Welcome to the Dog Finder!</h1>
            <p>The Dog Finder is a web application built with VueJS and Ruby On Rails that lets you collect pictures of various dogs and build your own dog collection.</p>

            <h2>How does it work?</h2>
            <p>The application has two main features. The first feature is the dog finder, which is located in the Find tab.
                This feature allows you to browse various images of dogs courtesy of the <a href='https://dog.ceo/dog-api/'>Dog API</a>.
                You can then add them to your collection by clicking the LOVE IT! button.
            </p>
            <p>After adding some dogs to your collection, you can view it on the Collection tab. If you don't like one of the dogs in your collection, you can remove them by clicking on their picture.</p>

            <h4>Ready to get started? Head on over to the <router-link to='/find'>Find</router-link> tab and start building your collection of furry friends now!</h4>

            <h2>Want to contribute?</h2>
            <p>This application is fully open-source and you are welcome to contribute to the codebase if you'd like.</p>
            <p>The source is available on <a href='http://github.com/vanderheim/dog-find'>Github</a>.</p>
        </v-col>
    </v-row>
</v-container>
</template>
