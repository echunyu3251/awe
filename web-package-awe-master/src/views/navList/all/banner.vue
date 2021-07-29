<template>
  <div id="banner">
    <div class="banner_box">
      <div class="box_l">
        <div class="l_text">
          <p>Finding Best Products Now</p>
          <p>In Your Fingertips</p>
          <p>Quick Search Our Products</p>
          <p>
            <router-link to="/milk/milkdetails">
            VIEW NOW
          </router-link>
          </p>
        </div>
        <img src="../../../assets/milk.png" alt class="milk_img" />
        <div class="box_t">
          <span>BACK</span>
          <span>|</span>
          <span>NEXT</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {};
  },
};
</script>

<style scoped>

#banner {
  width: 100%;
  height: 36.25rem;
  background-color: #ebf6fe;
}
.banner_box {
  width: 83.3%;
  height: 100%;
  margin: auto;
}
.box_l {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.l_text {
  width: 40rem;
  height: 17.5rem;
  margin-top: 10.625rem;
  margin-left: 40px;
/*   background: chartreuse; */
  color: #091d44;
  font-size: 45px;
  font-weight: bold;
  text-align: center;
}

.l_text p:nth-child(2) {
  margin-top: 1.125rem;
}
.l_text p:nth-child(3) {
  color: #f7931d;
  font-size: 30px;
  font-weight: 400;
  margin-top: 2.1875rem;
}
.l_text p:nth-child(4) {
  display: block;
  width: 12.5rem;
  height: 2.5rem;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  background: #091d44;
  margin: auto;
  margin-top: 2.8125rem;
  line-height: 2.5rem;
}

.milk_img {
  width: 27.8125rem;
  height: 30rem;
  margin-top: 4rem;
  margin-right: 120px;
}
.box_t {
  width: 6rem;
  height: 1.5625rem;
  position: absolute;
  color: #000;
  bottom: 1.5625rem;
  left: 50%;
  margin-left: -2rem;
  font-weight: 400;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  
}
.box_t span:nth-child(2) {
  line-height: -10px;
  margin-top: -5px;
 font-size: 16px;
}
.box_t span:nth-child(3){
    color:#90999c ;
}
</style>