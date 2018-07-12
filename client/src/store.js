import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show : false,
    searchDate : [],
    searchQuery : ''
  },
  mutations: {

  },
  actions: {
    getVideo (context) {
      console.log('store get video')
    },
    getFilmBySearch (context) {
      console.log('get Film')
    },
    searchFilm (context) {
      console.log('search film')
      console.log(this.state.searchQuery)
    }
  }
})
