<template>
<v-layout row wrap>
        <v-flex v-for="(item, index) in items" :key="index">
            <v-card-media>
            <div class="container" >
            <img :src="item.img" alt="" width="300px" class="image">
            <div class="middle">
                <v-btn @click="getVideo(index)" icon><v-icon large>play_circle_outline</v-icon></v-btn>
            </div>
            </div>
            </v-card-media>
        </v-flex>
</v-layout>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    data () {
        return {
            index: '',
            items : [
                {
                    img: 'https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg',
                    urlVideo: 'https://www.youtube.com/embed/dW1BIid8Osg' ,
                
                },
                {
                    img: 'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg',
                    urlVideo: 'https://www.youtube.com/embed/UUkn-enk2RU' ,
                },
                {
                    img: 'https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg',
                    urlVideo: 'https://www.youtube.com/embed/T6DJcgm3wNY' ,
                },
            ]
        }
    },
    methods: {
        ...mapActions([
            'getVideo'
        ])
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
