<template>
    <div id="billingbox">
        <div class="billing">
            <breadcrumb style="border-right-style: 0px;;font-size: 14px;"></breadcrumb>
            <div class="content">
                <div class="selectbox">
                    <div class="billingTitle">
                        <p>Billing details</p>
                    </div>
                    <div class="billingAddressbox">
                        <div class="billingaddress"><span>Please confirm your billing address</span></div>
                        <div class="Edit"><span>Edit billing address</span></div>
                    </div>
                    <div class="AddressText">
                        <p>Brown ice</p>
                        <p>U 1b</p>
                        <p>489 Nichokson Road</p>
                        <p>CANNING VALE 6155</p>
                        <p>Western Australia</p>
                        <p>Australia</p>
                    </div>
                    <div class="ConditionsBox">
                        <p>Choose payment method</p>
                        <p>By proceeding with payment you agree to the Terms & Conditions and Privacy Policy</p>
                        <div class="cards" style="margin-top: 5px;">
                            <span><i class="el-icon-info"></i></span>
                            <span>You can split payment using Gift cards with Credit,Paypal,Afterpay or Zip.</span>
                        </div>
                    </div>
                    <div class="ConditionsBox">
                        <p>Reddeem</p>
                        <div class="cards cards2">
                            <span><img src="../../assets/CreditCard.png" alt="" class="credit"></span>
                            <span>Gift Card</span><span><i class="el-icon-plus"></i></span>
                        </div>
                    </div>
                    <div class="ConditionsBox">
                        <p>Payment option</p>
                        <div class="cards cards3" style="margin-top: 5px;">
                            <span><i class="y"></i></span>
                            <span>Credit Card</span>
                        </div>
                        <div class="cards cards3 cards4">
                            <span>
                                <i class="el-icon-success"></i>
                            </span>
                            <span>Paypal</span>
                            <img src="../../assets/Paypal.png" alt="" class="payimg">
                            <p class="balance">Balance Payable: 70</p>
                        </div>
                        <div class="cards cards3">
                            <span><i class="y"></i></span>
                            <span>Afterpay</span>
                        </div>
                        <div class="cards cards3">
                            <span><i class="y"></i></span>
                            <span>Zip</span>
                        </div>

                    </div>
                    <div class="payment">
                        <span>Proceed to PayPal</span>
                    </div>
                </div>

                <div class="summary">
                    <div class="billingTitle billingTitle2">
                        <p>Order summary</p>
                    </div>
                    <div class="billingAddressbox">
                        <div class="billingaddress"><span>Delliver to:</span></div>
                        <div class="Edit Edit2"><span>Edit billing address</span></div>
                    </div>
                    <div class="AddressText">
                        <p>Brown ice</p>
                        <p>U 1b</p>
                        <p>489 Nichokson Road</p>
                        <p>CANNING VALE 6155</p>
                        <p>Western Australia</p>
                        <p>Australia</p>
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
        name: "billing",
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
    #billingbox {
        color: #091d44;
        background-color: #fff;
        width: 100%;
        height: auto;
    }

    a {
        color: #091d44;

    }

    .billing {
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
        height: auto;
        min-height: 460px;
    }

    .billingTitle {
        width: 100%;
        height: 35px;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0.5px;
        margin: 10px 0 0 10px;
    }

    .billingAddressbox {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .billingaddress {
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.5px;
    }

    .Edit {
        border: 1px #000 solid;
        width: 200px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.5px;
        margin-right: 80px;
    }
    .Edit2{
        margin-right: 0;

    }

    .AddressText {
        width: 100%;
        height: auto;
        margin-top: 25px;
        font-size: 14px;
        font-weight: 500;
        line-height: 25px;
        margin-left: 5px;
    }

    .ConditionsBox {
        width: 100%;
        height: auto;
        margin-top: 25px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.5px;
        line-height: 30px;
    }

    .ConditionsBox p:first-child {
        font-size: 14px;
        font-weight: 600;
    }

    .cards {
        width: 100%;
        height: 45px;
        background-color: #f4f5f5;
        line-height: 45px;
        margin-top: 10px;
       
    }
    
    .cards span {
        margin: 0 10px 0 10px;
        float: left;
        font-size: 14px;
    }

    .cards span:first-child {
        font-size: 20px;
    }

    .cards span:last-child {
        display: block;

    }

    .credit {
        width: 23px;
        height: 23px;
        margin-top: 10px;
    }

    .cards2 span:nth-child(2) {
        font-size: 14px;
        font-weight: 600;
    }

    .el-icon-plus {
        font-size: 24px;
        font-weight: 500;
        margin-top: 11px;
    }

    .y {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 1px #000 solid;
        border-radius: 50%;
        margin-top: 11px;
    }

    .cards3 {
        margin-top: 20px;
    }

    .cards4 {
        width: 100%;
        height: 80px;
        position: relative
    }

    .el-icon-success {
        font-size: 24px;
    }


    .payimg {
        width: 80px;
        height: 20px;
        margin-top: 15px;
        margin-left: 10px;
    }

    .balance {
        width: auto;
        height: 20px;
        position: absolute;
        left: 15px;
        top: 35px;
        font-size: 14px;
        font-weight: 600;
    }

    .payment {
        float: right;
        width: 300px;
        height: 60px;
        background-color: #091d44;
        color: #fff;
        text-align: center;
        line-height: 60px;
        border-radius: 30px;
        font-size: 20px;
        font-weight: 700;
        margin-top: 40px;
        letter-spacing: 0.8px;
        margin-right: 15px;
    }

    .summary {
        width: 22%;
        height: auto;
        min-height: 460px;
        margin-top: -5px;
        margin-right: -5px;
        /* border: 1px solid #000; */
    }
.billingTitle2{
    margin:0;
    margin-top: 15px;
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