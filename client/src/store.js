import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show : false,
    searchQuery : '',
    searchResult : [],
    detailFilm : '',
    getDetailFilm : ''
  },
  mutations: {
    getSearchQuery (state, payload) {
      state.searchQuery = payload
    },
    setFilm (state, payload) {
      state.searchResult = payload
    },
    setDetail (state, payload) {
      state.detailFilm = payload
    },
    setDetailFilm (state, payload) {
      state.getDetailFilm = payload
    }
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
      let query = this.state.searchQuery
      axios.get(`http://www.omdbapi.com/?s=${query}&apikey=8ea6ca18`)
      .then(({data})=> {
        console.log(data.Search)
        let result = data.Search
        context.commit('setFilm',result)
        // console.log(result[0].Poster)
      })
      .catch(err=> {
        console.log(err.message)
      })
    },
    getDetail (context, query) {
      console.log('get details', query)
      context.commit('setDetail', query)
      console.log(this.state.detailFilm)
    },
    loadFilmDetail (context) {
      let query = this.state.detailFilm
      axios.get(`http://www.omdbapi.com/?t=${query}&apikey=8ea6ca18`)
      .then(({data})=> {
        console.log(data)
        let result = data
        context.commit('setDetailFilm',result)
        console.log(this.state.getDetailFilm)
      })
    }
  }
})
