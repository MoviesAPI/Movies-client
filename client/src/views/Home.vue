<template>
  <div class="home">
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
              <v-btn  color="white" >link 1</v-btn>
              </v-toolbar-items>
        </v-toolbar>
    <v-container xs12 >
        <Header></Header>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import { mapActions } from 'vuex';

export default {
  name: 'home',
  computed: {
    inputSearch: {
      get () {
        return this.$store.state.searchQuery
      },
      set (value) {
        this.$store.commit('getSearchQuery', value)
      }
    }
  },
  components: {
    HelloWorld,
    Header
  },
  data () {
    return {
      imdbLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/3000px-IMDB_Logo_2016.svg.png'
    }
  },
  methods: {
    ...mapActions([
      'searchFilm'
    ])
  }
}

</script>
<style scoped>
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box
}
</style>

</script>

