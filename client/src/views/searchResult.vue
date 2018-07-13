<template>
<div>
    <v-toolbar style="background-color:lightcoral">
          <v-toolbar-title> <img :src="imdbLogo" alt="" height="40px" width="100px"></v-toolbar-title>
              <v-flex style="margin-left:50px">
              <input v-model="inputSearch" type="text" class="fname" placeholder="Find Movies, TV shows">
              </v-flex>
              <v-flex>
                <v-btn @click="searchFilm" to="/search" ><v-icon>search</v-icon></v-btn>
              </v-flex>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down" >
              <v-btn @click= "logout()"  color="white" >logout</v-btn>
              </v-toolbar-items>
        </v-toolbar>
    <h1> {{searchResult.length}} hasil Pencarian untuk {{searchQuery}} </h1>
   <div style="border: 10px solid blue;">
   <v-layout row wrap>
       <v-flex xs3 v-for="(movie, index) in searchResult" :key="index" >
           <v-card-media>
               <div class="container">
                   <img :src="movie.Poster" class="image" alt="">
                   <div class="middle">
                       <v-btn color="grey" @click="getDetail(movie.Title)" to="/detail" >detail</v-btn>
                        <p>{{movie.Title}} </p>
                        <p>{{movie.Year}}</p>
                   </div>
               </div>
           </v-card-media>
       </v-flex>
   </v-layout>
   </div>
</div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    computed: {
        ...mapState([
            'searchResult','searchQuery'
        ]),
        inputSearch: {
            get () {
                return this.$store.state.searchQuery
            },
            set (value) {
                this.$store.commit('getSearchQuery', value)
            }
        }
    },
    methods: {
        ...mapActions([
        'searchFilm', 'getDetail'
        ]),  logout () {
      localStorage.clear()
      this.$router.push('/about')
    }
    },
    data () {
        return {
        imdbLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/3000px-IMDB_Logo_2016.svg.png'
        }
    },
    created () {
        this.$store.dispatch('getFilmBySearch')
    }
}
</script>

<style scoped>
.container {
    position: relative;
    width: 50%;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.middletop {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  text-decoration-color: black
}

.container:hover .image {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
</style>

