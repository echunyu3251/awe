<template>
  <div id="orders">
    <div class="search">
      <div class="search_number">
        <span>Order number:</span>
        <input type="text" placeholder="12445645454">
      </div>
      <div class="search_status">
        <span>Order status:</span>
        <input type="text" placeholder="signed in">
      </div>
      <div class="search_box">
        <span>Search:</span>
        <input type="text">
      </div>
    </div>
    <div class="order_status_list">
      <span>Order Information</span>
      <span>Freight + Package</span>
      <span>Order amount</span>
      <span>Order status</span>
      <span>Operation</span>
    </div>
    <div class="order_list_box" v-for="item in orderlist" :key="item.id">
      <div class="order_time">
        <span>{{item.time}}</span>
        <span>Order number: {{item.ordernumber}}</span>
      </div>
      <div class="order_shop">
        <img :src="item.shopimg" alt="">
        <div class="order_shop_details">
          <p>
            {{item.shoptitle}}
          </p>
          <span> {{item.shopweight}}</span><span>${{item.shopprice}} * {{item.shopnumber}}</span>
        </div>
      </div>
      <span class="yf">${{item.freight}}</span>
      <span class="sl">${{item.amount}}</span>
      <span class="zt">{{item.status}}</span>
      <div class="order_btn_box">
        <div class="order_btn1"><span>Pay immediately</span></div>
        <div class="order_btn2"><span>See more</span></div>
      </div>

    </div>
  </div>
</template>

<script>


  export default {
    name: "orders",
    data() {
      return {
        orderlist: [
          {
            id: 1,
            time: "2021-5-5 19:20:40",
            ordernumber: 456456163133,
            shopimg: require('../../assets/milk2.png'),
            shoptitle: " Aptamil Profutura Stage 3 PremiumToddler Nutritional Supplement From 1 Year 900g",
            shopweight: "(Made in UK) 900g",
            shopprice: 60,
            shopnumber: 1,
            freight: 6,
            amount: 60,
            status: "Signed in",
          },
          {
            id: 2,
            time: "2021-4-5 20:50:40",
            ordernumber: 44325565677,
            shopimg: require('../../assets/milk2.png'),
            shoptitle: " Aptamil Profutura Stage 3 PremiumToddler Nutritional Supplement From 1 Year 900g",
            shopweight: "(Made in UK) 900g",
            shopprice: 81,
            shopnumber: 1,
            freight: 7,
            amount: 60,
            status: "Signed in",
          },
          {
            id: 3,
            time: "2021-3-4 13:30:40",
            ordernumber: 4564353223,
            shopimg: require('../../assets/milk2.png'),
            shoptitle: " Aptamil Profutura Stage 3 PremiumToddler Nutritional Supplement From 1 Year 900g",
            shopweight: "(Made in UK) 900g",
            shopprice: 60,
            shopnumber: 1,
            freight: 6,
            amount: 60,
            status: "Signed in",
          },
          {
            id: 4,
            time: "2021-2-5 14:20:50",
            ordernumber: 41651269666,
            shopimg: require('../../assets/milk2.png'),
            shoptitle: " Aptamil Profutura Stage 3 PremiumToddler Nutritional Supplement From 1 Year 900g",
            shopweight: "(Made in UK) 900g",
            shopprice: 60,
            shopnumber: 1,
            freight: 7,
            amount: 60,
            status: "Signed in",
          },
          {
            id: 5,
            time: "2021-1-5 17:20:50",
            ordernumber: 4162515532535,
            shopimg: require('../../assets/milk2.png'),
            shoptitle: " Aptamil Profutura Stage 3 PremiumToddler Nutritional Supplement From 1 Year 900g",
            shopweight: "(Made in UK) 900g",
            shopprice: 60,
            shopnumber: 1,
            freight: 7,
            amount: 60,
            status: "Signed in",
          },
        ]

      };
    },
  };
</script>

<style scoped>
  #orders {
    color: #091d44;
    width: 98%;
    height: auto;
  }

  .search {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
  }

  .search div {
    width: auto;
    height: 100%;

  }

  .search_number span,
  .search_status span,
  .search_box span {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 30px;
  }

  .search_number input,
  .search_status input,
  .search_box input {
    width: 180px;
    height: 100%;
    border: 1px solid #000;
    margin-left: 15px;
  }

  .search_box input {
    width: 600px
  }

  .order_status_list {
    width: 100%;
    height: 50px;
    background-color: #fff;
    position: relative;
    margin-top: 50px;
  }

  .order_status_list span {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 50px;
    position: absolute;
  }

  .order_status_list span:nth-child(1) {
    left: 2.5%;
  }

  .order_status_list span:nth-child(2) {
    right: 49%;
  }

  .order_status_list span:nth-child(3) {
    right: 34%;
  }

  .order_status_list span:nth-child(4) {
    right: 20%;
  }

  .order_status_list span:nth-child(5) {
    right: 4.7%
  }

  .order_list_box {
    width: 100%;
    height: 173px;
    background-color: #fff;
    margin-top: 40px;
    position: relative;
    font-size: 14px;
    font-weight: 400;
  }

  .order_time {
    width: 100%;
    height: 40px;
    border-bottom: 1px #efefef solid;
    letter-spacing: 1px;

    line-height: 50px;
  }

  .order_time span {
    margin-left: 18px;
  }

  .order_shop {
    width: 520px;
    height: 135px;
    display: flex;
    justify-content: space-between;
  }

  .order_shop img {
    width: 100px;
    height: 100px;
    margin-top: 15px;
    margin-left: 5px;
  }

  .order_shop_details {
    width: 410px;
    height: 80px;
    margin-top: 25px;
  }

  .order_shop_details p {
    letter-spacing: 1px;
    line-height: 20px;
  }

  .order_shop_details span {

    letter-spacing: 1px;
    line-height: 40px;
    color: #9a9d9c;
  }

  .order_shop_details span:nth-child(3) {
    font-size: 13px;
    float: right;
    color: #091d44;
    margin-right: 15px;
  }

  .yf {
    position: absolute;
    right: 53%;
    top: 57%;
  }

  .sl {
    position: absolute;
    right: 36%;
    top: 57%;
  }

  .zt {
    position: absolute;
    right: 21%;
    top: 57%;
  }

  .order_btn_box {
    width: 155px;
    height: auto;
    position: absolute;
    right: 20px;
    top: 60px;
  }

  .order_btn1,
  .order_btn2 {
    width: 155px;
    height: 40px;
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    text-align: center;
    line-height: 40px;
    letter-spacing: 1px;
    background-color: #f7931d;
  }

  .order_btn2 {
    background-color: #091d44;
    margin-top: 10px;
    float: right;
  }
</style>