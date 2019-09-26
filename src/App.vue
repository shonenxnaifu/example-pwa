<template>
    <v-app>
        <v-app-bar app>
            <v-btn icon v-if="$route.name !== 'home'"
                @click="$router.go(-1) "
            >
                <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-toolbar-title >
                <span>CropChien</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    import Home from './components/Home';

    export default {
        name: 'App',
        components: {
            Home,
        },
        data () {
            return {

            }
        },
    };
</script>
