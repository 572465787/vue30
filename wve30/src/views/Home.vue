<template>
  <div>
    <Header>首页</Header>
    <div class="contaniner">
      <Banner :swiperSlides="sliders"></Banner>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header'
import Banner from '../components/Banner'
import {getBannaer} from  '../api'
export default {
  data(){
    return{
      sliders:[]
    }
  },
  name: 'home',
  components:{
    Header,
    Banner
  },
  async created(){
     this.sliders= await getBannaer()
  }
}
</script>