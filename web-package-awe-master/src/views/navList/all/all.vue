<template>
  <div id="all">
    <banner></banner>
    <div id="main_">
      <div class="best_box">
        <div class="best">
          <div class="parcel">
            <span>BEST SELLERS</span>
          </div>
        </div>
      </div>
      <div class="best_swiper_box">
        <swiper :options="swiperOptions" class="swiper swiper-no-swiping">
          <swiper-slide v-for="(item,index) in shopList" :key="index">
            <div class="best_swiper_list">
              <div class="list_box_img">
                <img :src="item.shopimg2" alt />
              </div>
              <div class="list_box_text">
                <p>{{item.shopname1}}</p>
                <p>{{item.shopname2}}</p>
                <p>$ {{item.money}}</p>
                <div class="list_box_car">
                  <div class="inputnumber">

                    <div class="number">
                      <span @click="reducenumber(index)"><i class="el-icon-minus"></i></span>
                      <span>
                        <input type="number" :value="item.shopnumber" oninput="if(value.length>2)value=value.slice(0,2)" />
                      </span>
                      <span @click="addnumber(index)"><i class="el-icon-plus"></i></span>
                    </div>
                    <div class="wish_xin">
                      <img src="../../../assets/xin.png" alt="" @click="qiehuan(even)">
                    </div>
                  </div>
                  <div class="addtocar">
                    Add To Cart
                  </div>

                </div>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="middle_box">
        <div class="m_l_box">
          <div class="l_box_t">
            <div class="l_box_t_l">
              <div class="t_l_img">
                <img src="../../../assets/9.png" alt />
              </div>
              <div class="t_l_text">
                <p>Quick Search Our Products</p>
                <p>Text introductiontext</p>
                <p>VIEW NOW</p>
              </div>
            </div>
            <div class="l_box_t_r">
              <div class="t_r_img">
                <img src="../../../assets/121.png" alt />
              </div>
              <div class="t_r_text">
                <p>Quick Search</p>
                <p>Featured</p>
                <p>VIEW NOW</p>
              </div>
            </div>
          </div>
          <div class="l_box_b">
            <div class="l_box_b_l">
              <div class="b_l_img">
                <img src="../../../assets/131.png" alt />
              </div>
              <div class="b_l_text">
                <p>Quick Search</p>
                <p>Featured</p>
                <p>VIEW NOW</p>
              </div>
            </div>

            <div class="l_box_b_r">
              <div class="b_r_img">
                <img src="../../../assets/milk4.png" alt />
              </div>
              <div class="b_r_text">
                <p>Quick Search Our Products</p>
                <p>Text introductiontext</p>
                <p>
                  <router-link to="/milk/milkdetails"> VIEW NOW</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="m_r_box">
          <div class="m_r_text">
            <p>Quick Search Our Products</p>
            <p>Text introductiontext</p>
            <p>
              <router-link to="/boots/bootsdetail"> VIEW NOW</router-link>
            </p>
          </div>
          <div class="m_r_img">
            <img src="../../../assets/16.png" alt />
          </div>
        </div>
      </div>

      <div class="activity1">
        <div class="activity1_box">
          <p>Activity</p>
          <p>Text introductiontext Text introductiontext Text introduction</p>
          <p>SHOP NOW</p>
        </div>
        <div class="shop_list">
          <swiper :options="swiperOptions2" class="swiper2 swiper-no-swiping" >
            <swiper-slide v-for="(listitem,index) in shopList" :key="index">
              <div class="list_box list_box1">
                <div class="list_img">
                  <span>Sale</span>
                  <img :src="listitem.shopimg" alt />
                </div>
                <div class="list_text">
                  <p>{{listitem.shopname1}}</p>
                  <p>{{listitem.shopname3}}</p>
                  <p>$ {{listitem.money}}</p>
                  <p>*****</p>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-button-prev swiper-button-prev2" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-next2" slot="button-next"></div>
          </swiper>
        </div>
      </div>

      <div class="activity1">
        <div class="shop_list">
          <swiper :options="swiperOptions2" class="swiper2 swiper-no-swiping">
            <swiper-slide v-for="(listitem,index) in shopList" :key="index">
              <div class="list_box">
                <div class="list_img">
                  <span>Sale</span>
                  <img :src="listitem.shopimg" alt />
                </div>
                <div class="list_text">
                  <p>{{listitem.shopname1}}</p>
                  <p>{{listitem.shopname2}}</p>
                  <p>$ {{listitem.money}}</p>
                  <p>*****</p>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-button-prev swiper-button-prev2" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-next2" slot="button-next"></div>
          </swiper>
        </div>
        <div class="activity1_box">
          <p>Activity</p>
          <p>Text introductiontext Text introductiontext Text introduction</p>
          <p>SHOP NOW</p>
        </div>
      </div>
      <instagram></instagram>
      <brandimg></brandimg>
      <logistics></logistics>
      <follow></follow>
      <email></email>
    </div>
    <!-- <div class="cs" style="width: 1920px;background-color: darkorange;height: 50px;"></div>
    <div class="cs" style="width: 12rem;background-color: darkorange;height: 50px;"></div> -->

  </div>
</template>

<script>
  import banner from "../all/banner";
  import instagram from "../../home/instagram";
  import brandimg from "../../home/brandimg";
  import logistics from "../../home/logistics";
  import follow from "../../home/follow";
  import email from "../../home/email";

  export default {
    name: "MainContent",
    data() {
      return {
      
        number: "",
        swiperOptions: {
          slidesPerView: 7,
          spaceBetween: 30,
          slidesPerGroup: 1,
          autoplay:false,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            //当屏幕宽度大于等于1280
            /*   1200: {
                slidesPerView: 5,
                spaceBetween: 10
              },
              1100: {
                slidesPerView: 4,
                spaceBetween: -100
              }, */
            /*      1024: {
                slidesPerView: 4,
                spaceBetween: 30
              },
              950: {
                slidesPerView: 3,
                spaceBetween: -200
              },
              900: {
                slidesPerView: 3,
                spaceBetween: -160
              },
              850: {
                slidesPerView: 3,
                spaceBetween: -120
              }, */
            /*    800: {
                slidesPerView: 3,
                spaceBetween: -80
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 100
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 20
              },
  
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              } */
          },
        },
        swiperOptions2: {
          slidesPerView: 6,
          spaceBetween: 15,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination2",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        },

        num: 1,

        shopList: [
          {
            id: 1,shopnumber:1,
            shopname1: "Text introductiontext",
            shopname2: "introductiontext",
            shopname3: "Text",
            money: "24",
            shopimg: require("../../../assets/milk2.png"),
            shopimg2: require("../../../assets/32.jpg"),

            shopimg3: require("../../../assets/17.jpg"),
          },
          {
            id: 2,shopnumber:1,
            shopname1: "Text introductiontext",
            shopname2: "introductiontext",
            shopname3: "Text",
            money: "24",
            shopimg: require("../../../assets/milk2.png"),
            shopimg2: require("../../../assets/32.jpg"),
            shopimg3: require("../../../assets/18.jpg"),
          },
          {
            id: 3,shopnumber:1,
            shopname1: "Text introductiontext",
            shopname2: "introductiontext",
            shopname3: "Text",
            money: "24",
            shopimg: require("../../../assets/milk2.png"),
            shopimg2: require("../../../assets/32.jpg"),

            shopimg3: require("../../../assets/19.jpg"),
          },
          {
            id: 4,shopnumber:1,
            shopname1: "Text introductiontext",
            shopname2: "introductiontext",
            shopname3: "Text",
            money: "24",
            shopimg: require("../../../assets/milk2.png"),
            shopimg2: require("../../../assets/32.jpg"),
            shopimg3: require("../../../assets/20.jpg"),
          },
          {
            id: 5,shopnumber:1,
            shopname1: "Text introductiontext",
            shopname2: "introductiontext",
            shopname3: "Text",
            money: "24",
            shopimg: require("../../../assets/milk2.png"),
            shopimg2: require("../../../assets/32.jpg"),

            shopimg3: require("../../../assets/21.png"),
          },
          {
            id: 6,shopnumber:1,
            shopname1: "Text introductiontext",
            shopname2: "introductiontext",
            shopname3: "Text",
            money: "24",
            shopimg: require("../../../assets/milk2.png"),
            shopimg2: require("../../../assets/32.jpg"),

            shopimg3: require("../../../assets/17.jpg"),
          },
          {
            id: 7,shopnumber:1,
            shopname1: "Text introductiontext",
            shopname2: "introductiontext",
            shopname3: "Text",
            money: "24",
            shopimg: require("../../../assets/milk2.png"),
            shopimg2: require("../../../assets/32.jpg"),

            shopimg3: require("../../../assets/18.jpg"),
          },
          {
            id: 8,shopnumber:1,
            shopname1: "Text introductiontext",
            shopname2: "introductiontext",
            shopname3: "Text",
            money: "24",
            shopimg: require("../../../assets/milk2.png"),
            shopimg2: require("../../../assets/32.jpg"),

            shopimg3: require("../../../assets/19.jpg"),
          },
          {
            id: 9,shopnumber:1,
            shopname1: "Text introductiontext",
            shopname2: "introductiontext",
            shopname3: "Text",
            money: "24",
            shopimg: require("../../../assets/milk2.png"),

            shopimg2: require("../../../assets/32.jpg"),
          },
          {
            id: 10,shopnumber:1,
            shopname1: "Text introductiontext",
            shopname2: "introductiontext",
            shopname3: "Text",
            money: "24",
            shopimg: require("../../../assets/milk2.png"),
            shopimg2: require("../../../assets/32.jpg"),
          },
        ],
      };
    },
    components: {
      banner,
      instagram,
      brandimg,
      logistics,
      follow,
      email,
    },
    methods: {
      reducenumber(index) {
       
       var number = this.shopList[index].shopnumber
       if (number <= 1) {
         this.shopList[index].shopnumber = 1
       } else {
         this.shopList[index].shopnumber--
       }

     },
     addnumber(index) {
       
       var number = this.shopList[index].shopnumber
       if (number >= 99) {
         this.shopList[index].shopnumber = 99
       } else {
         this.shopList[index].shopnumber++
       }

     },
      qiehuan(even) {
        var imgsrc = event.target.src
        var imgsrc1 = require('../../../assets/xin.png')
        var imgsrc2 = require('../../../assets/xin1.png')
        if (imgsrc == imgsrc1) {
          event.target.src = imgsrc2
        } else {
          event.target.src = imgsrc1
        }

      },

     
    },
  };
</script>

<style scoped>
  #all {
    width: 100%;
    height: auto;
    background-color: #f4f5f5;
  }
 
  #main_ {
    width: 91.6%;
    height: auto;
    min-height: 500px;
    margin: auto;
    color: #000;
  }

  .best_box {
    width: 100%;
    height: 4.375rem;
    margin-top: 6.25rem;
  }

  .best {
    height: 1px;
    border-top: 1px solid #b1b2b2;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .parcel {
    width: 22.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.375rem;
    background: #f4f5f5;
    position: relative;
  }

  .best span {
    display: inline-block;
    width: 12.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.5px solid #b1b2b2;
    font-size: 18px;
    font-weight: 700;
    color: #091d44;
  }

  .best_swiper_box {
    width: 100%;
    height: 24.375rem;
    margin-top: 0.625rem;
    overflow: hidden;
  }

  .best_swiper_list {
    width: 13.9375rem;
    height: 24.375rem;
    background-color: #fff;
    float: left;
    margin-left: 1.625rem;
  }

  .best_swiper_list:first-child {
    margin-left: 0.625rem;
  }

  .list_box_img {
    width: 100%;
    height: 13.9375rem;
  }

  .list_box_img img {
    width: 100%;
    height: 100%;
  }

  .list_box_text {
    width: 90%;
    height: 10.4375rem;
    margin: auto;
  }

  .list_box_text p {
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 1px;
  }

  .list_box_text p:nth-child(3) {
    margin-top: 0.625rem;
    font-size: 27px;
    font-weight: 600;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }

  .list_box_car {
    width: 7.1875rem;
    height: 4.375rem;
    margin-top: 0.625rem;
  }

  .inputnumber {
    width: 130px;
    height: 35px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  .number {
    width: 87px;
    height: 26px;
    border: 2px #000 solid;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  .number span {
    display: inline-block;
    width: 25px;
    height: 100%;
    line-height: 26px;
    text-align: center;
    font-size: 14px;

  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }



  .number span input {
    width: 100%;
    border: none;
    text-align: center;
    font-weight: 700;
    font-size: 14px;
  }

  .el-icon-minus,
  .el-icon-plus {
    font-weight: 900;

  }

  .addtocar {
    width: 120px;
    height: 30px;
    background-color: #41a5f2;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
    font-weight: 400;
    font-size: 18px;
    color: #fff;
  }

  .wish_xin {
    width: 27px;
    height: 27px;
    border: 1px #000 solid;
    border-radius: 3px;
  }

  .wish_xin img {
    width: 100%;
    height: 100%;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 4.125rem;
    height: 4.125rem;
    border-radius: 50%;
    border: 2.5px solid #939496;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-weight: 900;
    color: #939496;
    font-size: 40px;
  }

  .middle_box {
    width: 100%;
    height: 48.125rem;
    margin-top: 4.375rem;
    display: flex;
    justify-content: space-between;
  }

  .m_l_box {
    width: 74.5%;
    height: 100%;
  }

  .l_box_t,
  .l_box_b {
    width: 100%;
    height: 23rem;
    display: flex;
    justify-content: space-between;
  }

  .l_box_t_l,
  .l_box_t_r {
    width: 49rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    background: #f9d9da;
  }

  .l_box_t_r {
    width: 30.0625rem;
    background: #d3f6eb;
  }

  .t_l_img {
    width: 16.25rem;
    height: 20.5rem;
    margin: 1.875rem 0 0 3.125rem;
  }

  .t_l_img img,
  .t_r_img img,
  .b_l_img img,
  .b_r_img img,
  .m_r_img img {
    width: 100%;
    height: 100%;
  }

  .t_l_text {
    width: 21.875rem;
    height: 11.25rem;
    margin-top: 6.25rem;
    margin-right: 5rem;
    text-align: center;
  }

  .t_l_text p:nth-child(1),
  .t_r_text p:nth-child(1),
  .b_l_text p:nth-child(1),
  .b_r_text p:nth-child(1),
  .m_r_text p:nth-child(1) {
    font-size: 20px;
    font-weight: 400;
    color: #fb8e80;
    margin-top: 1.5625rem;
  }

  .t_l_text p:nth-child(2),
  .t_r_text p:nth-child(2),
  .b_l_text p:nth-child(2),
  .b_r_text p:nth-child(2),
  .m_r_text p:nth-child(2) {
    font-size: 34px;
    font-weight: 600;
    margin-top: 0.9375rem;
  }

  .t_l_text p:nth-child(3),
  .t_r_text p:nth-child(3),
  .b_l_text p:nth-child(3),
  .b_r_text p:nth-child(3),
  .m_r_text p:nth-child(3) {
    display: block;
    width: 8.375rem;
    height: 2.0625rem;
    background: #fc7b69;
    font-size: 15px;
    font-weight: 600;
    line-height: 2.0625rem;
    text-align: center;
    color: #fff;
    margin: 2.5rem auto;
  }

  .t_r_text p:nth-child(3) {
    margin: 2.1875rem auto;
  }

  .m_r_text p:nth-child(3) {
    margin: 2.625rem auto;
  }

  .t_r_text p:nth-child(3) {
    background: #34d6a1;
  }

  .t_r_img {
    width: 7.5rem;
    height: 18.75rem;
    margin: 2.3125rem 0 0 4.0625rem;
    text-align: center;
  }

  .t_r_text {
    width: 10.625rem;
    height: 11.25rem;
    margin-top: 6.25rem;
    margin-right: 2.6875rem;
    text-align: center;
  }

  .t_r_text p:nth-child(1) {
    color: #34d6a1;
  }

  .t_r_text p:nth-child(3) {
    background: #34d6a1;
    margin-top: 2.6875rem;
  }

  .l_box_b {
    margin-top: 1.875rem;
    display: flex;
    justify-content: space-between;
  }

  .l_box_b_l {
    width: 35.9375rem;
    height: 100%;
    float: left;
    display: flex;
    justify-content: space-between;
    background: #99cdf3;
  }

  .b_l_img {
    width: 13.75rem;
    height: 16.25rem;
    margin: 3.75rem 0 0 3.125rem;
  }

  .b_l_text,
  .b_r_text {
    width: 9.375rem;
    height: 11.25rem;
    margin: 6.25rem 4.0625rem 0 0;
    text-align: center;
  }

  .b_l_text p:nth-child(1) {
    color: #4baaf2;
  }

  .b_r_text p:nth-child(1) {
    color: #091d44;
  }

  .b_r_text p:nth-child(3) {
    background: #091d44;
  }

  .b_l_text p:nth-child(3) {
    background: #41a5f2;
  }

  .l_box_b_r {
    width: 43rem;
    height: 100%;
    background: #dcdee4;
    display: flex;
    justify-content: space-between;
  }

  .b_r_text {
    width: 21.875rem;
    margin-right: 3.125rem;
  }

  .b_r_img {
    width: 11.875rem;
    height: 16.25rem;
    margin: 3.75rem 0 0 3.75rem;
  }

  .m_r_box {
    width: 23%;
    height: 100%;
    background: #fdeada;
  }

  .m_r_text {
    width: 100%;
    height: 9.375rem;
    margin: 7.5rem 0px 0 0;
    text-align: center;
  }

  .m_r_text p:nth-child(3) {
    background: #f5a35e;
  }

  .m_r_text p:nth-child(1) {
    color: #f49f58;
    margin-top: 7.8125rem;
  }

  .m_r_img {
    width: 100%;
    height: 16.25rem;
    margin-top: 9.0625rem;
  }

  .activity1 {
    width: 100%;
    height: 21.25rem;
    margin-top: 4.0625rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .activity1_box {
    width: 16.5625rem;
    height: 15.4375rem;
    border-radius: 0.625rem;
    background: #fff;
    box-shadow: 0.3125rem.3125rem 3.125rem #a5a6ab;
    padding: 0 0.625rem 0 0.625rem;
    text-align: center;
  }

  .activity1_box p:nth-child(1) {
    margin-top: 2.1875rem;
    font-size: 33px;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .activity1_box p:nth-child(2) {
    margin-top: 1.5625rem;
    font-size: 1rem;
    font-weight: 400;
    color: #848ea1;
    word-break: break-all;
    display: flex;
    flex-wrap: wrap;
    letter-spacing: 0.5px;
    line-height: 1.875rem;
  }

  .activity1_box p:nth-child(3) {
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    width: 8.3125rem;
    height: 2.0625rem;
    background: #41a5f2;
    display: block;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.875rem;
    border-radius: 0.4375rem;
    letter-spacing: 0.5px;
  }

  .shop_list {
    width: 81.6%;
    height: 100%;
    overflow: hidden;
  }

  .list_box {
    width: 13.9375rem;
    height: 100%;
    position: relative;
    background: #fff;
    margin-right: 1.25rem;
  }

  .list_img {
    width: 100%;
    height: 13.9375rem;
  }

  .list_img img {
    width: 100%;
    height: 100%;
  }

  .list_box span {
    width: 4.375rem;
    height: 1.5625rem;
    color: #fff;
    background: #fc7b69;
    text-align: center;
    line-height: 1.5625rem;
    position: absolute;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 0.5px;
  }

  .list_text {
    width: 12.0625rem;
    padding-left: 1.875rem;
    height: 6.25rem;
    margin-top: 0.625rem;
  }

  .list_text p:nth-child(1),
  .list_text p:nth-child(2) {
    margin-top: 7px;
    font-size: 15px;
    font-weight: 600;
    color: #f5a35e;
    line-height: 10px;
    letter-spacing: 1px;
  }

  .list_text p:nth-child(3) {
    margin-top: 1.25rem;
    font-size: 18px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }

  .list_text p:nth-child(4) {
    margin-top: 0.625rem;
    font-size: 18px;
    color: #f5a35e;
  }

  .swiper-button-prev2,
  .swiper-button-next2 {
    width: 2.0625rem;
    height: 5.625rem;
    border-radius: 0px;
    border: 1px solid #939496;
    margin-left: -0.625rem;
    margin-top: -2.5rem;
  }

  .swiper-button-next2 {
    margin-right: -0.625rem;
  }

  .swiper-button-prev2:after,
  .swiper-button-next2:after {
    font-weight: 600;
    color: #939496;
    font-size: 20px;
  }
</style>