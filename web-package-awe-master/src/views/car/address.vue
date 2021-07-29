<template>
    <div id="addressbox">
        <div class="address">
            <breadcrumb style="border-right-style: 0px;;font-size: 14px;"></breadcrumb>
            <div class="content">
                <div class="selectbox">
                    <div class="addressTitle">
                        <p>Select Delivery Address</p>
                    </div>
                    <div class="selectAddress">
                        <div v-for="item in addresslist" :key="item.id" class="addresstext">
                            <p class="pr">{{item.default}}</p>
                            <p>{{item.name}}</p>
                            <p>{{item.address}}</p>
                            <p>{{item.tel}}</p>
                            <div class="default" v-show="item.id==1">
                                <img src="../../assets/bd.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="newAddress">
                        <span>The address of the new increase</span>
                    </div>
                    <div class="sell">
                        <div class="selltext">
                            <span class="fk"><i class="el-icon-check"></i></span>
                            <span class="notice">Email me about hot items,great savings,and more</span>
                        </div>
                        <div class="continue">
                            <router-link to="/home/paypal">
                                <span>Continue</span>
                            </router-link>
                        </div>
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
                                <el-rate v-model="shopitem.rateValue" show-text text-color="#848ea1" :texts="texts"
                                    disabled :colors="colors">
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
                addresslist: [
                    {
                        id: 1, default: "The default address",
                        name: "Edward Bulcock received",
                        address: "EMU FLAT EMU FLAT 29 Bungana Drive SA",
                        tel: "(08) 8364 5992 5453"
                    },
                    {
                        id: 2,
                        name: "Edward Bulcock received",
                        address: "EMU FLAT EMU FLAT 29 Bungana Drive SA",
                        tel: "(08) 8364 5992 1153"
                    },
                    {
                        id: 3,
                        name: "Edward Bulcock received",
                        address: "EMU FLAT EMU FLAT 29 Bungana Drive SA",
                        tel: "(08) 8364 5992 1323"
                    },
                    {
                        id: 4,
                        name: "Edward Bulcock received",
                        address: "EMU FLAT EMU FLAT 29 Bungana Drive SA",
                        tel: "(08) 8364 5992 5003"
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
    #addressbox {
        color: #091d44;
        background-color: #fff;
        width: 100%;
        height: auto;
    }

    a {
        color: #091d44;

    }

    .address {
        width: 91%;
        height: 100%;
        margin: auto;
        padding-bottom: 100px;
    }

    .content {
        width: 100%;
        height: auto;
        min-height: 460px;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
    }

    .selectbox {
        width: 77%;
        height: 520px;
        min-height: 460px;
        border: 1.5px #c0a7a7 solid;
    }

    .addressTitle {
        width: 100%;
        height: 70px;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0.5px;
        margin: 10px 0 0 10px;
    }

    .selectAddress {
        width: 100%;
        height: 150px;
        font-size: 12px;
        font-weight: 400;
        display: flex;
        justify-content: space-around;
    }

    .addresstext {
        width: 285px;
        height: 100%;
        border: 2px #091d44 solid;
        letter-spacing: 1px;
        line-height: 28px;
        padding-left: 15px;
        position: relative;
    }

    .pr {
        text-align: right;
        height: 20px;
        padding-bottom: 10px;
        /* font-size: scale(0.5); */
    }

    .default {
        width: 60px;
        height: 30px;
        position: absolute;
        bottom: 0;
        right: 0;
    }


    .newAddress {
        width: 250px;
        height: 30px;
        border: 1px #000 solid;
        margin: 180px 0 0 15px;
        font-size: 12px;
        font-weight: 400;
        text-align: center;
        line-height: 30px;
        letter-spacing: 0.5px;
    }

    .sell {
        width: 100%;
        height: 40px;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }

    .selltext {
        width: 50%;
        height: 100%;
        margin-left: 15px;
    }

    .fk {
        display: inline-block;
        width: 20px;
        height: 19px;
        border: #caa57b 2px solid;
        margin-top: 10px;
        text-align: center;
        line-height: 20px;
        font-size: 20px;
        color: #caa57b;
        border-radius: 2px;
    }


    .notice {
        display: block;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.5px;
        margin-top: -17px;
        margin-left: 40px;
    }

    .continue {
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
        margin-right: 30px;

    }

    .continue a {
        color: #fff;
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