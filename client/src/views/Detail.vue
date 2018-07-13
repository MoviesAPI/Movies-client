<template>
    <v-container xs12>
        <v-layout row wrap>
            <v-flex xs6>
                 <v-jumbotron>
                    <v-container fill-height>
                    <v-layout align-center>
                        <v-flex>
                        <h3 class="display-3"> {{getDetailFilm.Title}} ({{getDetailFilm.Year}}) </h3>

                        <span class="subheading"> {{getDetailFilm.Plot}} </span>

                        <v-divider class="my-3"></v-divider>

                        <div class="title mb-3"> {{getDetailFilm.Genre}} </div>

                        <v-btn
                            class="mx-0"
                            color="black"
                            large 
                            @click="getReviewFilm(getDetailFilm.Title)"
                        >
                            Get Review From Newyork Times
                        </v-btn>
                        </v-flex>
                    </v-layout>
                    </v-container>
                </v-jumbotron>
            </v-flex>
            <br>
            <v-flex xs6 style="margin-top=200px">
                <v-card color="white" class="" height="350px">
                    <v-layout row>
                        <v-flex xs5>
                        <v-card-media
                            :src="getDetailFilm.Poster"
                            height="350px"
                            contain
                        ></v-card-media>
                        </v-flex>
                        <v-flex xs7>
                            <v-card>
                                <v-card-text> Rated : {{getDetailFilm.Rated}}  </v-card-text>
                                <v-card-text> Released : {{getDetailFilm.Released}}  </v-card-text>
                                <v-card-text> Runtime : {{getDetailFilm.Runtime}}  </v-card-text>
                                <v-card-text> Director  : {{getDetailFilm.Director}}  </v-card-text>
                                <v-card-text> Actors : {{getDetailFilm.Actors}}  </v-card-text>
                                <v-card-text> Type : {{getDetailFilm.Type}}  </v-card-text>
                                <v-card-text> imdbRating : {{getDetailFilm.imdbRating}}  </v-card-text>
                            </v-card>
                        </v-flex>
                        
                    </v-layout>
                </v-card>
                </v-flex>
            <v-flex xs12>
                <!-- The Modal -->
                <div id="myModal" class="modal">

                <!-- Modal content -->
                <div class="modal-content">
                    <span class="close"> <v-btn icon @click="spanClose" ><v-icon>close</v-icon></v-btn> </span>
                    <p>Some text in the Modal..</p>
                </div>

                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import {mapActions, mapState} from 'vuex'

    export default {
        computed: {
            ...mapState([
                'getDetailFilm'
            ])
        },
        methods: {
            ...mapActions([
                 'getReviewFilm','spanClose'
            ])
        },
        created () {
            this.$store.dispatch('loadFilmDetail')
        }
    }
</script>

<style scoped>

.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
}

/* The Close Button */
.close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

</style>
