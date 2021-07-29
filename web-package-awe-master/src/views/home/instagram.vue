<template>
   <div class="instagram">
        <div class="instagram_img" v-for="(imgitem,index) in imglist" :key="index">
          <img :src="imgitem.shopimg3" alt />
        </div>

        <div class="instagram_box">
          <span>INSTAGRAM</span>
        </div>
      </div>
</template>
  
<script>
export default {
    name: 'person',
    data () {
      return {
       imglist: [
        {
          id: 1,
          shopimg3: require("../../assets/18.jpg"),
        },
        {
          id: 2,
          shopimg3: require("../../assets/20.jpg"),
        },
        {
          id: 3,
          shopimg3: require("../../assets/19.jpg"),
        },
        {
          id: 4,
          shopimg3: require("../../assets/17.jpg"),
        },
        {
          id: 5,
          shopimg3: require("../../assets/21.png"),
        },
        {
          id: 6,
          shopimg3: require("../../assets/17.jpg"),
        },
        {
          id: 7,
          shopimg3: require("../../assets/18.jpg"),
        },
        {
          id: 8,
          shopimg3: require("../../assets/19.jpg"),
        },
      ],
      }
    }
  }
</script>
  
<style scoped>
  .instagram {
  width: 100%;
  height: 12.5rem;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  position: relative;
}
.instagram_box {
  position: absolute;
  width: 32%;
  height: 3.625rem;
  background: #fff;
  opacity: 0.6;
  top: 50%;
  margin-top: -1.8125rem;
  left: 50%;
  margin-left: -17.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  font-weight: 600;
  color: #898b89;
}
.instagram_img {
  width: 12.5rem;
  height: 100%;
}
.instagram_img img,
.brand_img img {
  width: 100%;
  height: 100%;
}
</style>
  