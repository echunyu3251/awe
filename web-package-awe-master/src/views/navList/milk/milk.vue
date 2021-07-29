<template>
  <div id="milk">
    <div class="Breadcrumb">
      <breadcrumb></breadcrumb>
      <div class="Breadcrumb_right">
        <span>One Paragraph</span>
        <span>Two Paragraph</span>
        <span>Three Paragraph</span>
        <span>Four Paragraph</span>
      </div>
    </div>
    <div class="milk_content">
      <div class="content_left">
        <div class="delivery">
          <h2>Delivery & Pickup<span class="h">▔▔</span></h2>
          <p>show all</p>
          <p> 2-day deliery</p>
          <p> Delivery to home</p>
          <p> Free pickup today</p>
        </div>

        <div class="delivery brands">
          <h2>Brands<span class="h">▔▔</span></h2>
          <input type="text" placeholder="Find a brands" class="brandseach">
          <input type="checkbox"><span>Oli6</span><br />
          <input type="checkbox"><span>NAN</span><br />
          <input type="checkbox"><span>Ozfarm</span><br />
          <input type="checkbox"><span>Karicare</span><br />
          <input type="checkbox"><span>A2</span><br />
          <input type="checkbox"><span>Oli6</span><br />
          <input type="checkbox"><span>NAN</span><br />
          <input type="checkbox"><span>Ozfarm</span><br />
          <input type="checkbox"><span>Karicare</span><br />


        </div>
        <!-- <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item   title="Delivery & Pickup" name="1">
            <div>show all</div>
            <div> 2-day deliery</div>
            <div> Delivery to home</div>
            <div> Free pickup today</div>
          </el-collapse-item>
          <el-collapse-item title="Brands" name="2">
            <div></div>
            <div></div>
          </el-collapse-item>
        </el-collapse> -->


      </div>
      <div class="content_right">
        <div class="sort">
          <div class="select_box1">
            <span>Sort By </span>
            <select name="status" id="status" @click='sort1($event)'>
              <option :value="sel.name" v-for="sel in selectlist" :key="sel.id">{{sel.name}}</option>
            </select>
          </div>

          <div class="select_box2">
            <span>In Stock </span>
            <select name="status" id="status2" @click='sort1($event)'>
              <option :value="sel.name" v-for="sel in selectlist2" :key="sel.id">{{sel.name}}</option>
            </select>
          </div>

          <div class="filter">
            <div class="filter_box1">
              <span class="filter_text1">Filter: one Paragraph</span>
            </div>
            <div class="filter_box2">
              <span>Filter: A2</span>
            </div>
          </div>

        </div>

        <div class="list_box">
          <div class="list_box_l">
            <div class="list_box_l_shop" v-for="(shopitem,index) in shopList" :key="index">
              <div class="list_box_l_shop_img">
                <img :src="shopitem.shopimg" alt="">
              </div>
              <div class="list_box_l_shop_text">
                <div class="a">
                  <router-link to="/milk/milkdetails">
                    <p class="addxhx">{{shopitem.shopname1}} </p>
                  </router-link>
                  <el-rate v-model="shopitem.rateValue" show-text text-color="#848ea1" :texts="texts" disabled
                    :colors="colors">
                  </el-rate>
                  <p class="money">$ {{shopitem.money}}</p>
                  <p class="today">{{shopitem.today}}</p>
                </div>
                <div class="shopcar">
                  <img src="../../../assets/ShopCar1.png" alt="" class="shopcarimg">
                  <div class="joincart">
                    <span>
                      Add to Cart
                    </span>
                  </div>
                </div>
              </div>
              <div class="small_box">
                <span>Sale</span>
              </div>
              <div class="xin">
                <img src="../../../assets/xin1.png" alt="" @click="xin($event)">
                <div class="joinwish">
                  <span>
                    Add to wish lish
                  </span>
                </div>
              </div>

            </div>
          </div>
          <div class="list_box_r">
            <span>First</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>...</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>Last</span>
          </div>
        </div>
      </div>
    </div>
    <instagram></instagram>
    <brandimg></brandimg>
    <logistics></logistics>
    <follow></follow>
    <email></email>
    <!-- <router-view /> -->

  </div>
</template>

<script>
  import instagram from "../../home/instagram";
  import brandimg from "../../home/brandimg";
  import logistics from "../../home/logistics";
  import follow from "../../home/follow";
  import email from "../../home/email";
  import breadcrumb from "../../../components/breadcrumb";
  export default {
    name: "milk",
    data() {
      return {
        colors: ['#F7BA2A', '#F7BA2A', '#F7BA2A'],
        texts: ['1.0', '2.0', '3.0', '4.0', '5.0'],
        shopList: [
          {
            id: 1,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 14,
            shopimg: require("../../../assets/milk2.png"),
            today: "Free pickup today",
            rateValue: 5.0
          },
          {
            id: 2,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 24,
            shopimg: require("../../../assets/milk2.png"),
            today: "Free pickup today",
            rateValue: 3.0

          },
          {
            id: 3,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 26,
            shopimg: require("../../../assets/milk2.png"),
            today: "Free pickup today",
            rateValue: 4.0

          },
          {
            id: 4,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 80,
            shopimg: require("../../../assets/milk2.png"),
            today: "Free pickup today",
            rateValue: 5.0

          },
          {
            id: 5,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 65,
            shopimg: require("../../../assets/milk2.png"),
            today: "Free pickup today",
            rateValue: 4.0

          },
          {
            id: 6,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 55,
            shopimg: require("../../../assets/milk2.png"),
            today: "Free pickup today",
            rateValue: 5.0

          },
          {
            id: 7,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 78,
            shopimg: require("../../../assets/milk2.png"),
            today: "Free pickup today",
            rateValue: 4.0

          },
          {
            id: 8,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 96,
            shopimg: require("../../../assets/milk2.png"),
            today: "Free pickup today",
            rateValue: 5.0

          },
          {
            id: 9,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 36,
            shopimg: require("../../../assets/milk2.png"),
            today: "Free pickup today",
            rateValue: 4.0

          },
          {
            id: 10,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 20,
            shopimg: require("../../../assets/milk2.png"),
            rateValue: 5.0,
            today: "Free pickup today",
          },
          {
            id: 11,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 15,
            rateValue: 2.0,
            shopimg: require("../../../assets/milk2.png"),
            today: "Free pickup today"
          },
          {
            id: 12,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 30,
            rateValue: 5.0,
            shopimg: require("../../../assets/milk2.png"),
            today: "Free pickup today"
          },
          {
            id: 13,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 63,
            shopimg: require("../../../assets/milk2.png"),
            rateValue: 4.0,
            today: "Free pickup today"
          },
          {
            id: 14,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 65,
            shopimg: require("../../../assets/milk2.png"),
            rateValue: 5.0,
            today: "Free pickup today"
          },
          {
            id: 15,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 40,
            shopimg: require("../../../assets/milk2.png"),
            rateValue: 3.0,
            today: "Free pickup today"
          },
        ]

        ,
        selectlist: [
          { id: 0, name: 'Please' },
          { id: 1, name: 'Price +' },
          { id: 2, name: 'Price -' }
        ],
        selectlist2: [
          { id: 0, name: 'Please' },
          { id: 1, name: 'Stock' },
          { id: 2, name: 'Rated' }
        ],
      };
    },
    components: {
      instagram,
      brandimg,
      logistics,
      follow,
      email,
      breadcrumb
    },

    methods: {
      sort1(event) {
        var val = event.target.value;
        if (val == "Price +") {
          this.shopList.sort((a, b) => {
            return a.money - b.money;
          });
        } else if (val == "Price -") {
          this.shopList.sort((a, b) => {
            return b.money - a.money;
          });
        }
        else if (val == "Stock") {
          this.shopList.sort((a, b) => {
            return a.rateValue - b.rateValue;
          });
        } else if (val == "Rated") {
          this.shopList.sort((a, b) => {
            return b.rateValue - a.rateValue;
          });
        }

      },
      xin(event) {
        var imgsrc = event.target.src
        var imgsrc1 = require('../../../assets/xin.png')
        var imgsrc2 = require('../../../assets/xin1.png')
        if (imgsrc == imgsrc1) {
          event.target.src = imgsrc2
        } else {
          event.target.src = imgsrc1
        }
      }

    },
    created() {
    },
    mounted() {

    },
  };
</script>

<style scoped>
  #milk {
    width: 91.6%;
    height: auto;
    margin: auto;
    color: #091d44;
  }

  a {
    color: #091d44;
  }

  .Breadcrumb {
    width: 100%;
    height: 60px;
    border-bottom-color: #b2b3b3;
    border-bottom-width: 0.5px;
    border-bottom-style: solid;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 0.5px;
  }

  .content_left {
    width: 285px;
    height: auto;
    border-right: 0.5px #b2b3b3 solid;
  }

  .delivery {
    width: calc(100% - 20px);
    height: auto;
    border-bottom: 0.5px #b2b3b3 solid;
    padding: 0 0 20px 10px;
    margin-top: 30px;
    position: relative;
  }

  .h {
    position: absolute;
    right: 10px;
    top: 13px;
    font-size: 16px;
  }

  .delivery p {
    margin-top: 17px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-left: 5px;
  }

  .brandseach {
    width: 260px;
    height: 40px;
    margin-left: -3px;
    margin-top: 15px;
  }

  .brands input {
    margin-top: 15px;
    font-size: 14px;
    font-weight: 400;

  }

  .brands span {
    font-size: 14px;
    font-weight: 500;
    margin-left: 10px;
    margin-top: -5px;
  }

  .Breadcrumb_right {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    border-left: solid #b2b3b3 1px;

  }

  .Breadcrumb_right span {
    display: block;
    margin-left: 20px;
  }

  .Breadcrumb_right,
  .content_right {
    width: calc(100% - 284px);
    height: 100%;
  }

  .milk_content {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
  }

  .drop_down1 {
    width: 100%;
    height: 220px;
    border-bottom-color: #000;
    border-bottom-width: 0.5px;
    border-bottom-style: solid;
  }

  .sort {
    width: auto;
    height: 25px;
    margin-left: 30px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
  }

  .select_box1 {
    display: flex;
    justify-content: space-between;
  }

  #status {
    margin-top: 5px;
  }

  .select_box2 {
    margin-left: 20px;
  }

  select {
    border: none;
    width: auto;
    color: #091d44;
    margin-left: 5px;
    background-color: #f4f5f5;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
  }

  .filter {
    margin-left: 100px;
    display: flex;
    justify-content: space-between;
  }

  .filter_box1,
  .filter_box2 {
    width: 185px;
    height: 33px;
    border: 2px #f38d7f solid;
    background-color: #f8b7ae;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
  }

  .filter_box2 {
    width: 87px;
    margin-left: 30px;
  }

  .list_box {
    width: 1460px;
    height: calc(100% - 80px);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .list_box_l {
    width: 1390px;
    height: 100%;
  }

  .list_box_l_shop {
    width: 250px;
    height: 375px;
    background-color: #fff;
    float: left;
    margin-left: 25px;
    margin-top: 25px;
    position: relative;
  }

  .list_box_l_shop_img {
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list_box_l_shop_img img {
    width: 80%;
    height: 80%;
    margin-top: 20px;
  }

  .list_box_l_shop:hover .addxhx {
    text-decoration: underline;
  }

  .list_box_l_shop_text {
    width: 233px;
    height: 115px;
    margin-left: 10px;
    margin-right: 7px;
    text-overflow: ellipsis;
    word-break: break-all;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.5px;
  }

  .money {
    font-size: 26px;
    font-weight: 600;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    padding: 8px 0 10px 0;
  }

  .today {
    font-size: 12px;
  }

  .small_box {
    width: 75px;
    height: 27px;
    background-color: #b6d5eb;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1074bc;
    letter-spacing: 1px;
    font-size: 16px;
  }

  .xin {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 20px;
    height: 20px;
  }

  .shopcar {
    width: 70px;
    height: 70px;
    background-color: #f4f5f5;
    position: absolute;
    bottom: 10px;
    right: 15px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
  }

  .xin img {
    width: 100%;
    height: 100%;
  }

  .shopcar img {
    width: 50%;
    height: 50%;
  }

  .joincart,
  .joinwish {
    width: 200px;
    height: 30px;
    background-color: #f4f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 400;
    position: absolute;
    top: -260px;
    left: 50%;
    margin-left: -175px;
    display: none;
  }

  .joinwish {
    top: 25px;
    left: 50%;
    margin-left: -205px;
  }

  .list_box_l_shop_text:hover .shopcar,
  .xin:hover .joinwish {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .shopcar:hover .joincart {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list_box_r {
    width: 66px;
    height: 300px;
    display: flex;
    align-items: center;
    background-color: #fff;
    flex-grow: 1;
    flex-flow: 1;
    flex-direction: column;
    justify-content: center;
    padding-top: 15px;
  }

  .list_box_r span {
    display: block;
    letter-spacing: 1px;
    font-size: 17px;
    font-weight: 600;
    float: left;
    text-align: center;
    display: flex;
    flex-grow: 1;
    flex-flow: 1;
    justify-content: center;
    color: #aeafb4;

  }
</style>