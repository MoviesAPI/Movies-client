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
                            color="primary"
                            large to="/"
                        >
                            See more
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
        created () {
            this.$store.dispatch('loadFilmDetail')
        }
    }
</script>

<style scoped>

</style>
