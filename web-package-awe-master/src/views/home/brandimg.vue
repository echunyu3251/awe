<template>
  <div class="brand">
    <swiper :options="swiperOptions3" class="swiper3">
      <swiper-slide v-for="(branditem,index) in brandlist" :key="index">
        <div class="brand_img">
        <img :src="branditem.brandimg" alt />
        </div>
      </swiper-slide>
      <div class="swiper-pagination swiper-button_box" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
         /*   */
export default {
  name: "home",
  data() {
    return {
      swiperOptions3: {
        slidesPerView: 13,
        spaceBetween: 1,
        loopFillGroupWithBlank: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          bulletActiveClass: "my-bullet-active",
        },
      },

      brandlist: [
        { id: 1, brandimg: require("../../assets/1.jpg") },
        { id: 2, brandimg: require("../../assets/2.png") },
        { id: 3, brandimg: require("../../assets/3.jpg") },
        { id: 4, brandimg: require("../../assets/4.jpg") },
        { id: 5, brandimg: require("../../assets/5.jpg") },
        { id: 6, brandimg: require("../../assets/3.jpg") },
        { id: 7, brandimg: require("../../assets/4.jpg") },
        { id: 8, brandimg: require("../../assets/5.jpg") },
      ],
    };
  },
  components: {},
};
</script>

<style scoped>
.brand {
  width: 100%;
  height: 10.625rem;
  display: flex;
  margin-top: 4.375rem;
  flex-flow: wrap;
  position: relative;
}
.brand_img {
  width: 8rem;
  height: 7rem;
  background: #000;
}
.brand_img img{
  width: 8rem;
  height: 7rem;
}
.swiper-button_box {
  width: 100%;
  height: 1.25rem;
  position: absolute;
  top: 8.125rem;
}
.swiper-button_box >>> .swiper-pagination-bullet {
  width: 1rem;
  height: 1rem;
  background: #fff;
  opacity: 1;
}

.swiper-pagination >>> .my-bullet-active {
  background: #000;
}
</style>