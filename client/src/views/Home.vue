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
              <v-btn @click="logout"  color="white" >Logout </v-btn>
              </v-toolbar-items>
        </v-toolbar>

    <v-container xs12 >
     <!-- ============= tambahan weather disini ========== -->
              
                <h6 id="timing">{{weatherAgain.main.temp}} &#8451;</h6>
                <img v-bind:src="'http://openweathermap.org/img/w/' + weatherAgain.weather[0].icon + '.png'">
                <h6 id="timing"> Zone : {{weather.zone}}</h6>
                <h6 id="timing"> Local Time : {{weather.localtime}}</h6>

                <!-- ============= tambahan weather disini ========== -->
        <Header></Header>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import { mapActions } from 'vuex';
import axios from 'axios'

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
      imdbLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/3000px-IMDB_Logo_2016.svg.png',
      weather:'',
      weatherAgain:''
    }
  },
  methods: {
    ...mapActions([
      'searchFilm'
    ]),
    logout () {
      localStorage.clear()
      this.$router.push('/about')
    },    getWeather() {
      axios
        .get(
          'http://api.worldweatheronline.com/premium/v1/tz.ashx?key=407b727e36594b6286834502181007&q=jakarta&format=json'
        )
        .then(response => {
          // console.log('==============',response);
          // console.log(response.data.data.time_zone[0].zone);

          this.weather = response.data.data.time_zone[0]
        })
        .catch(err => {
          console.log(err)
        })
    },
    getWeatherAgain() {
      axios
        .get(
          'http://api.openweathermap.org/data/2.5/forecast?id=1642907&units=metric&APPID=6671e05679c0882dab719d2d8b238ea6'
        )
        .then(response => {
          // console.log('xxxxxxxxxxxxxxxxxx',response)
          // console.log(response.data.data.time_zone[0].zone);

          this.weatherAgain = response.data.list[0]
        })
        .catch(err => {
          console.log(err)
        })
    }

    //  ============= tambahan weather disini ==========
  },
  created () {
    this.getWeather()
    this.getWeatherAgain()
    if (!localStorage.hasOwnProperty('token')) {
      this.$router.push('/about')
    }
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

