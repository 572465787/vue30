<template>
  <swiper :options="swiperOption" class="swiper-c">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img :src="slide" alt=""/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    props:['swiperSlides'],
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    }
  }
</script>
<style lang="less">
    .swiper-c{
        width: 100%;
        img{
            max-width: 100%;
            height:auto
        }
    }
</style>

