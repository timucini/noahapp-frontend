<template>
    <v-card
    max-width="600"
    class="mx-auto"
    >
        <v-container class="pa-2" fluid>
            <div>
                <div class="output">
                    TEST
                </div>
                <input v-model="element" placeholder="edit me">
                <button v-on:click="add(element)">Add to List</button>
                <p>Test-Liste: {{ TESTLIST }}</p>
                <v-row>
                    <v-col
                    v-for="item in unfilter"
                    :key="item"
                    v-bind="{ [`xs${item.flex}`]: true }"
                    >
                         <v-card>
                            <v-img class="white--text" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                                <v-card-title class="align-end fill-height">{{item.name}}</v-card-title>
                            </v-img>
                            <v-card-text>
                                <span class="text--primary">
                                    <span>Kategorie: {{item.category}}</span><br>
                                    <span>Länge: {{item.length}}</span>
                                </span>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn textcolor="orange"> Share</v-btn>
                                <v-btn text color="orange">Explore</v-btn>
                             </v-card-actions>
                         </v-card>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </v-card>
</template>


<script>
import {mapGetters} from 'vuex';
import exampleList from '../assets/datasrc/example.json';

export default {
    computed: {
        ...mapGetters(['TESTLIST']),
    }, 
    data: function() {
        return {
            element: "",
            unfilter: exampleList,
        }
    },
    methods: {
        add: function (element) {
            this.$store.commit('ADD_BOAT', element)
        }
    }
}
</script>