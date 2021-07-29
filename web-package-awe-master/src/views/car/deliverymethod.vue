<template>
  <div id="deliverymethodbox">
    <div class="deliverymethod">
      <breadcrumb style="border-right-style: 0px;;font-size: 14px;"></breadcrumb>
      <div class="shopnumber">
        <span>Delivery Mothod</span>
      </div>
      <div class="content">
        <div class="methodsbox">
          <div class="clickbox">
            <div class="click">
              <div class="click_l">
                <router-link to="/home/delivery" exact>
                  <span>local delivery</span>
                </router-link>
              </div>
              <div class="click_r">
                <router-link to="/home/pickup">
                  <span>in-store pickup</span>
                </router-link>
              </div>
            </div>
            <div class="main">
              <router-view></router-view>
            </div>
          </div>
            

          <div class="car_shop_list" v-for="item in carshoplist" :key="item.id">
            <div class="car_shop_list_img">
              <img :src="item.carshopimg" />
            </div>
            <div class="car_shop_list_details">
              <p>{{item.carshoptitle}}</p>
              <p>{{item.carshopweight}}</p>
            </div>
            <div class="s"><span>x 1</span></div>
            <div class="q"><span>$ 32</span></div>
          </div>          
        </div>

        <div class="jiesuan">
          <div class="js_item">
            <span>Subtotal (2 items)</span>
            <span>$64</span>
          </div>
          <div class="js_item">
            <span>Delivery</span>
            <span>$6</span>
          </div>
          <div class="js_item">
            <p>
              <span>Taxer and frees</span></br>
              <span class="jsspan">(calculated in checkout)</span>
            </p>
            <span>---</span>
          </div>
          <div class="js_item">
            <span>Est.total</span>
            <span>$70</span>
          </div>

        </div>
      </div>
      <div class="continue">
        <router-link to="/home/address">
          <span>Continue</span>
        </router-link>
      </div>

    </div>
    <!-- x -->
    <div style="background-color: #f4f5f5;">
      <div style="width:91.6%;margin:auto;height: auto;">
        <div class="carshoptitle">
          <span>Customers also bought these products</span>
        </div>
        <div class="shoplist">
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
                <img src="../../assets/ShopCar1.png" alt="" class="shopcarimg">
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
              <img src="../../assets/xin1.png" alt="" @click="xin($event)">
              <div class="joinwish">
                <span>
                  Add to wish lish
                </span>
              </div>

            </div>
          </div>
          <div style="clear: both;"> </div>
        </div>
        <div>
          <brandimg></brandimg>
        </div>
        <logistics></logistics>
        <div class="emalibox">
          <email></email>
        </div>
        <div class="followbox">
          <follow></follow>
        </div>
        <div class="copyright">
          <p> copyright @2021.AWESOME rights</p>
          <span>reserved.</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import breadcrumb from "../../components/breadcrumb";
  import brandimg from "../home/brandimg";
  import logistics from "../home/logistics";
  import follow from "../home/follow";
  import email from "../home/email";

  export default {
    name: "deliverymethod",
    data() {
      return {
        rateValue: 5.0,
        inputnumber: 1,
        number: "",
        texts: ['1.0', '2.0', '3.0', '4.0', '5.0'],
        colors: ['#F7BA2A', '#F7BA2A', '#F7BA2A'],

        carshoplist: [
          {
            id: 1, carshopimg: require('../../assets/detailsmilk.png'),
            carshoptitle: " Aptamil Profutura Stage 3 PremiumToddler Nutritional Supplement From 1 Year 900g",
            carshopweight: "(Made in UK) 900g",
            money: 32,
            delivery: "2-day delivery",
            Pickup: "Pickup today",
          },
          {
            id: 2, carshopimg: require('../../assets/detailsmilk.png'),
            carshoptitle: " Aptamil Profutura Stage 3 PremiumToddler Nutritional Supplement From 1 Year 900g",
            carshopweight: "(Made in UK) 900g",
            money: 32,
            delivery: "2-day delivery",
            Pickup: "Pickup today",
          },
          {
            id: 3, carshopimg: require('../../assets/detailsmilk.png'),
            carshoptitle: " Aptamil Profutura Stage 3 PremiumToddler Nutritional Supplement From 1 Year 900g",
            carshopweight: "(Made in UK) 900g",
            money: 32,
            delivery: "2-day delivery",
            Pickup: "Pickup today",
          },
        
        ],
        shopList: [
          {
            id: 1,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 14,
            shopimg: require("../../assets/milk2.png"),
            today: "Free pickup today",
            rateValue: 5.0
          },

          {
            id: 2,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 24,
            shopimg: require("../../assets/milk2.png"),
            today: "Free pickup today",
            rateValue: 5.0

          },
          {
            id: 3,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 26,
            shopimg: require("../../assets/milk2.png"),
            today: "Free pickup today",
            rateValue: 4.0

          },
          {
            id: 4,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 14,
            shopimg: require("../../assets/milk2.png"),
            today: "Free pickup today",
            rateValue: 5.0
          },
          {
            id: 5,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 24,
            shopimg: require("../../assets/milk2.png"),
            today: "Free pickup today",
            rateValue: 3.0

          },
          {
            id: 6,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 26,
            shopimg: require("../../assets/milk2.png"),
            today: "Free pickup today",
            rateValue: 4.0

          },
          {
            id: 7,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 14,
            shopimg: require("../../assets/milk2.png"),
            today: "Free pickup today",
            rateValue: 5.0
          },
          {
            id: 8,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 24,
            shopimg: require("../../assets/milk2.png"),
            today: "Free pickup today",
            rateValue: 3.0

          },
          {
            id: 9,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 26,
            shopimg: require("../../assets/milk2.png"),
            today: "Free pickup today",
            rateValue: 4.0

          },
          {
            id: 10,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 14,
            shopimg: require("../../assets/milk2.png"),
            today: "Free pickup today",
            rateValue: 5.0
          },
          {
            id: 11,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 24,
            shopimg: require("../../assets/milk2.png"),
            today: "Free pickup today",
            rateValue: 3.0

          },
          {
            id: 12,
            shopname1: "Text introductiontext Text Text introductiontext Text",
            money: 26,
            shopimg: require("../../assets/milk2.png"),
            today: "Free pickup today",
            rateValue: 4.0

          },
        ]
      };
    },
    components: {
      breadcrumb,
      brandimg,
      logistics,
      follow,
      email

    }, methods: {
      reducenumber() {
        this.number = this.inputnumber

        if (this.number <= 0) {
          this.inputnumber = 0
        } else {
          this.inputnumber--

        }
      },


      addnumber() {
        this.number = this.inputnumber
        console.log(this.number)
        if (this.number >= 99) {
          this.inputnumber = 99

        } else {
          this.inputnumber++;
        }
      },
      xin(event) {
        var imgsrc = event.target.src
        var imgsrc1 = require('../../assets/xin.png')
        var imgsrc2 = require('../../assets/xin1.png')
        if (imgsrc == imgsrc1) {
          event.target.src = imgsrc2
        } else {
          event.target.src = imgsrc1
        }
      }
    },
  };
</script>

<style scoped>
  #deliverymethodbox {
    color: #091d44;
    background-color: #fff;
    width: 100%;
    height: auto;
  }

  a {
    color: #091d44;

  }

  .deliverymethod {
    width: 91%;
    height: 100%;
    margin: auto;
    padding-bottom: 180px;
  }

  .methodsbox {
    width: 77%;
    height: auto;
    min-height: 460px;
    border-right: 1.5px #b8b8b8 solid;
  }

  .clickbox {
    width: 85%;
    height: 280px;
  }

  .click {
    width: 400px;
    height: 35px;
    display: flex;
    justify-content: space-between;
  }

  .click div {
    width: 50%;
    height: 100%;
    border: 1px #000 solid;
    border-bottom: none;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 35px;
  }

  .router-link-active {
    display: block;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  .main {
    width: 100%;
    height: 245px;
    border: 1px #000 solid;
  }

  .shopnumber {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-left: 5px;
  }

  .content {
    width: 100%;
    height: auto;
    min-height: 460px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }



  .car_shop_list {
    width: 100%;
    height: 110px;
    border-bottom: #b8b8b8 1px solid;
    margin-top: 20px;
    position: relative;
  }

  .car_shop_list_img {
    width: 90px;
    height:90px;
    float: left;
    margin-left: 20px;
  }


  .car_shop_list_img img {
    width: 100%;
    height: 100%;
  }

  .car_shop_list_details {
    width: 350px;
    height: 80px;
    float: left;
    margin-left: 30px;
  }


  .car_shop_list_details p:nth-child(1),
  .car_shop_list_details p:nth-child(2) {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 25px;
  }

  .car_shop_list_details p:nth-child(2) {
    color: #9a9d9c;
    margin-top: 10px;
  }

.s{
  font-size: 20px;
  font-weight: 700;
  position: absolute;
  right: 45%;
  top: 35%;
}
.q{
  font-size: 20px;
  font-weight: 700;
  position: absolute;
  right: 30%;
  top: 35%;
}
.continue{
  width: 200px;
  height: 40px;
  background-color: #41a5f2;
  text-align: center;
  line-height: 38px;
  border-radius: 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  float: right;
  margin-right: 30%;
  margin-top: 50px;

}
.continue a{
  color:#fff;
}
  .jiesuan {
    width: 22%;
    height: auto;
    min-height: 460px;
    margin-top: -5px;
    margin-right: -5px;
  }

  .js_item {
    width: 99%;
    height: auto;
    font-size: 16px;
    font-weight: 600;
    margin-top: 15px;
    letter-spacing: 1px;
    display: flex;
    justify-content: space-between;
  }

  .js_item:last-child {
    font-size: 20px;
    font-weight: 600;
    margin-top: 30px;
  }

  .jsspan {
    font-size: 12px;
    font-weight: 400;
    padding-top: 10px;
    margin-left: 3px;
    display: block;
  }



  .carshoptitle {
    width: 100%;
    height: 25px;
    font-size: 18px;
    font-weight: 600;
    margin-left: 25px;
    padding-top: 10px;
  }

  .shoplist {
    width: 100%;
    height: auto;

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



  .emalibox {
    width: 35%;
    height: 100px;
    float: left;
    margin-top: 28px;

  }

  .followbox {
    width: 57%;
    height: 100px;
    float: right;
    margin-top: 20px;

  }

  .copyright {
    width: calc(100% - 20px);
    height: 90px;
    float: left;
    margin-left: 20px;
    margin-top: 30px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1.5px;
    line-height: 20px;
  }
</style>