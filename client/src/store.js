import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import request from 'request'
var request = require('request');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show : false,
    searchQuery : '',
    searchResult : [],
    detailFilm : '',
    getDetailFilm : '',
    nytReview : ''
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
    },
    setNYT (state, payload) {
      state.nytReview = payload
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
    },
    getReviewFilm (context,query) {
      console.log('ini review film', query)
      var modal = document.getElementById('myModal');
      var span = document.getElementsByClassName("close")[0];
      modal.style.display = "block";
      axios.get('http://localhost:3000/users/nyt/'+query)
      .then(({data})=>{
        // console.log(data.results[0].headline, 'ini dari axios get review film')
        let tempeDua = data.results[0].headline
        console.log(tempeDua, ' ini tempe dua')
        context.commit('setNYT', tempeDua)
        console.log(this.state.nytReview, ' ini dari state')
      })
      
    },
    spanClose (context) {
      console.log('span close')
      var modal = document.getElementById('myModal');
      modal.style.display = "none";
    }
  }
})
