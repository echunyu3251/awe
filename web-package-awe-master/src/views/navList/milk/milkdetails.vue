<template>
    <div id="milkdetails">
        <div style="width: 100%;background-color: #fff;">
            <div style="width: 91.6%;margin:auto">
                <div class="Breadcrumb">
                    <breadcrumb style="border-right-style: 0px;"></breadcrumb>
                </div>
                <div class="detailscontent">
                    <div class="detailscontent_l">
                        <div class="detailimgbox">
                            <div class="detailimglist" v-for="(item,index) in detailslist" :key="item.id">
                                <img :src="item.detailsimg" alt="" @click='getIndex(item.detailsimg)'>
                            </div>
                        </div>
                        <div class="bigimg">
                            <img :src="ImgUrl" alt="" @click="open()">
                        </div>
                        <!-- 浮窗 -->
                        <div class="floatingbox" v-show="boxshow">
                            <div class="salce_btn">
                                <img src="../../../assets/fd.png" alt="" class="fd" @click="big()">
                                <img src="../../../assets/sx.png" alt="" class="sx" @click="small()">
                                <img src="../../../assets/cb.png" alt="" @click="close()" class="close">
                            </div>
                            <div class="salceimg_box" :style="{width:resetwidth+'px',height:resetheight+'px'}">
                                <div class="left" @click="left()">
                                    <i class="el-icon-arrow-left"></i>
                                </div>
                                <div class="right" @click="right()">
                                    <i class="el-icon-arrow-right"></i>
                                </div>
                                <div class="imgbox">
                                    <img :src="detailslist[index].detailsimg" alt="" class="salceimg" ref="boxsize">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="detailscontent_r">
                        <div class="shopoptions">
                            <div class="shopoptions_top">
                                <span class="weight">
                                    (Made in UK) 900g
                                </span>
                                <p>Aptamil Profutura Stage 3 PremiumToddler Nutritional</p>
                                <p>Supplement From 1Year 900g</p>
                                <div class="xx">
                                    <el-rate v-model="rateValue" show-text text-color="#848ea1" :texts="texts" disabled>
                                    </el-rate>
                                </div>
                                <div class="null"></div>
                                <p class="detailmoney">$ 24</p>
                                <div class="inputnumber">
                                    <div class="number">
                                        <span @click="reducenumber()"><i class="el-icon-minus"></i></span>
                                        <span>
                                            <input type="number" v-model="inputnumber"
                                                oninput="if(value.length>2)value=value.slice(0,2)" />
                                        </span>
                                        <span @click="addnumber()"><i class="el-icon-plus"></i></span>
                                    </div>
                                    <div class="addtocar">
                                        Add To Cart
                                    </div>
                                    <div class="wish_xin">
                                        <img src="../../../assets/xin.png" alt="" @click="qiehuan(even)">
                                    </div>

                                </div>
                            </div>
                            <div class="shopoptions_bottom">
                                <div class="online">
                                    <p class="p1">Shop Online</p>
                                    <p class="p2"><span>Pick up</span><span>Select store</span></p>
                                    <div class="dlogistics1">
                                        <img src="../../../assets/cr.png" alt="" class="cr">
                                        <span class="p3">Reception</span>
                                    </div>
                                    <div class="dlogistics1">
                                        <img src="../../../assets/cg.png" alt="" class="cr">
                                        <span class="p3">Logistics fee</span>
                                    </div>
                                    <div class="dlogistics1">
                                        <img src="../../../assets/db.png" alt="" class="cr">
                                        <span class="p3">Standard delivery</span>
                                    </div>

                                </div>
                                <div class="store">
                                    <p class="p1 sp1">Shop Online</p>
                                    <p class="p2 sp2">
                                        <img src="../../../assets/caro.png" alt="">
                                        <span>In store</span><span>Select store</span>
                                    </p>
                                    <div class="dlogistics1" style="margin-top:25px ;">
                                        <img src="../../../assets/cr.png" alt="" class="cr">
                                        <span class="p3 ">No stock</span>
                                    </div>
                                    <div class="dlogistics1">
                                        <span class="p3 sp3">Shop name and </br>telephone number</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="wuliu">
                            <div class="wl">
                                <div class="wl_y">
                                    <img src="../../../assets/car.png" alt="">
                                </div>
                                <div class="wl_w">
                                    <span>free 2 day</span></br><span>shipping</span>
                                </div>
                            </div>
                            <div class="wl">
                                <div class="wl_y">
                                    <img src="../../../assets/money.png" alt="">
                                </div>
                                <div class="wl_w">
                                    <span>money back</span></br><span>guarantee</span>
                                </div>
                            </div>
                            <div class="wl">
                                <div class="wl_y">
                                    <img src="../../../assets/tuihuo.png" alt="">
                                </div>
                                <div class="wl_w">
                                    <span>free return up</span></br><span>to 30 days</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style="width:91.6%;margin:auto">
            <div class="introduction">
                <div class="title_box">
                    <div class="title_box_l">
                        <span>Product Details</span>
                    </div>
                    <div class="title_box_l">
                        <span>Specification</span>
                    </div>
                    <div class="title_box_l">
                        <span>Delivery Returns</span>
                    </div>
                </div>
                <div class="introduction_content">
                    <p>Aptamil Profutura Toddler From 1 Year is a premium toddler nutritional supplement.Aptamil
                        Profutura is scientifically researched to help build strong foundation for your baby`s future.
                    </p>
                    <p>Product Features:</p>
                    <p>Uniquely developed in combination with a patented synbioic blend</p>
                    <p>Contains a unique probiotic Bifiobacterium breve</p>
                    <p>Milk fat sourced from New Zealand</p>
                    <p>Increased Omega 3 DHA level*</p>
                    <p>Zinc,necessary for normal immune system function</p>
                    <p>lodine,iron and zinc to contribute to normal cognitive function</p>
                    <p>Magnesium to contribute to normal energy metabolism when consumed as part of a healthy varied
                        diet and prepared as directed</p>
                    <p>*Compared to previous formulation.</p>
                </div>
            </div>
            <div class="considered">
                <p class="considered_title">Customers also considered</p>
                <div class="considered_list">

                    <div class="list_box list_box1" v-for="(listitem,index) in shopList" :key="index">
                        <div class="list_img">
                            <span>Sale</span>
                            <img :src="listitem.shopimg" alt />
                        </div>
                        <div class="list_text">
                            <p>{{listitem.shopname1}}</p>
                            <p> {{listitem.shopname3}}</p>
                            <p>$ {{listitem.money}}</p>
                            <p>*****</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style="margin-top:170px">
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
</template>

<script>
    import brandimg from "../../home/brandimg";
    import logistics from "../../home/logistics";
    import follow from "../../home/follow";
    import email from "../../home/email";
    import breadcrumb from "../../../components/breadcrumb";
    export default {
        name: "milkdetails",
        data() {
            return {
                index: 0,
                inputnumber: 1,
                number: "",
                rateValue: 5.0,
                resetwidth: 400,
                resetheight: 350,
                boxshow: false,
                autoplay: false,
                wish_xin: false,
                texts: ['1.0', '2.0', '3.0', '4.0', '5.0'],
                shopList: [
                    {
                        id: 1,
                        shopname1: "Text introductiontext",
                        shopname2: "introductiontext",
                        shopname3: "Text",
                        money: "24",
                        shopimg: require("../../../assets/milk2.png"),
                        shopimg2: require("../../../assets/32.jpg"),
                        shopimg3: require("../../../assets/17.jpg"),
                    },
                    {
                        id: 2,
                        shopname1: "Text introductiontext",
                        shopname2: "introductiontext",
                        shopname3: "Text",
                        money: "24",
                        shopimg: require("../../../assets/milk2.png"),
                        shopimg2: require("../../../assets/32.jpg"),
                        shopimg3: require("../../../assets/18.jpg"),
                    },
                    {
                        id: 3,
                        shopname1: "Text introductiontext",
                        shopname2: "introductiontext",
                        shopname3: "Text",
                        money: "24",
                        shopimg: require("../../../assets/milk2.png"),
                        shopimg2: require("../../../assets/32.jpg"),

                        shopimg3: require("../../../assets/19.jpg"),
                    },
                    {
                        id: 4,
                        shopname1: "Text introductiontext",
                        shopname2: "introductiontext",
                        shopname3: "Text",
                        money: "24",
                        shopimg: require("../../../assets/milk2.png"),
                        shopimg2: require("../../../assets/32.jpg"),
                        shopimg3: require("../../../assets/20.jpg"),
                    },
                    {
                        id: 5,
                        shopname1: "Text introductiontext",
                        shopname2: "introductiontext",
                        shopname3: "Text",
                        money: "24",
                        shopimg: require("../../../assets/milk2.png"),
                        shopimg2: require("../../../assets/32.jpg"),

                        shopimg3: require("../../../assets/21.png"),
                    },
                    {
                        id: 6,
                        shopname1: "Text introductiontext",
                        shopname2: "introductiontext",
                        shopname3: "Text",
                        money: "24",
                        shopimg: require("../../../assets/milk2.png"),
                        shopimg2: require("../../../assets/32.jpg"),

                        shopimg3: require("../../../assets/17.jpg"),
                    },
                    {
                        id: 7,
                        shopname1: "Text introductiontext",
                        shopname2: "introductiontext",
                        shopname3: "Text",
                        money: "24",
                        shopimg: require("../../../assets/milk2.png"),
                        shopimg2: require("../../../assets/32.jpg"),

                        shopimg3: require("../../../assets/18.jpg"),
                    },
                    {
                        id: 8,
                        shopname1: "Text introductiontext",
                        shopname2: "introductiontext",
                        shopname3: "Text",
                        money: "24",
                        shopimg: require("../../../assets/milk2.png"),
                        shopimg2: require("../../../assets/32.jpg"),
                        shopimg3: require("../../../assets/19.jpg"),
                    },
                ],

                detailslist: [
                    { id: 1, detailsimg: require('../../../assets/detailsmilk.png') },
                    { id: 2, detailsimg: require('../../../assets/detailsmilk3.jpg') },
                    { id: 3, detailsimg: require('../../../assets/detailsmilk2.jpg') },
                ],
                ImgUrl: require('../../../assets/detailsmilk.png'),


            }
        },
        components: {
            breadcrumb,
            brandimg,
            logistics,
            follow,
            email
        },
        methods: {
            getIndex(imgUrl) {
                this.ImgUrl = imgUrl;
            },

            open() {
                this.boxshow = true;
            },
            close() {
                this.boxshow = false;
                this.resetwidth = 400;
                this.resetheight = 350;
            },

            left() {
                if (this.index <= 0) {
                    this.index = this.detailslist.length - 1
                } else if (this.index <= this.detailslist.length && this.index >= 0) {
                    this.index--;
                }
            },
            right() {
                if (this.index >= this.detailslist.length - 1) {
                    this.index = 0
                } else {
                    this.index++;
                }
            },
            small() {
                this.resetwidth = this.$refs.boxsize.width - 50;
                this.resetheight = this.$refs.boxsize.height - 100;
            },
            big() {
                this.resetwidth = this.$refs.boxsize.width + 100;
                this.resetheight = this.$refs.boxsize.height + 50;
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
            reducenumber() {
                this.number = this.inputnumber

                if (this.number = 1) {
                    this.inputnumber = 1
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

        },
        mounted() {

        }
    };
</script>

<style scoped>
    #milkdetails {
        width: 100%;
        height: auto;
        color: #091d44;
        background-color: #f4f5f5;
    }

    .Breadcrumb {
        width: 100%;
        height: 60px;
        border-bottom: 1px solid #b2b3b3;
        padding-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        letter-spacing: 0.5px;
    }

    .detailscontent {
        width: 100%;
        height: 870px;
        background-color: #fff;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }

    .detailscontent_l {
        width: 45%;
        height: 75%;
        display: flex;
        justify-content: space-between;
    }

    .detailimgbox {
        width: 90px;
        height: 530px;
    }

    .detailimglist {
        width: 100%;
        height: 90px;
        margin: 15px 0 15px 0;
    }

    .detailimglist img {
        width: 100%;
        height: 100%;
    }

    .bigimg img {
        width: 100%;
        height: 100%;

    }

    .bigimg {
        width: 650px;
        height: 650px;
        background-color: #f4f5f5;

    }


    .floatingbox {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(247, 247, 247, 0.6);
        z-index: 50;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .fd,
    .sx {
        width: 50px;
        height: 50px;
        position: absolute;
        left: 48%;
        margin-left: 20px;
        top: 3%
    }

    .sx {
        left: 43%;
    }

    .close {
        width: 30px;
        height: 30px;
        position: absolute;
        right: 8%;
        top: 7%;
    }

    .salceimg_box {

        background-color: #fff;
        overflow: hidden;
        max-width: 800px;
        max-height: 800px;
        min-width: 600px;
        min-height: 500px;
    }

    .imgbox {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }

    .salceimg {
        width: 90%;
        height: 100%;

    }

    .left {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #fff;
        position: absolute;
        left: 5%;
        top: 50%;
        font-size: 18px;
        color: #b8b8b8;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .right {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #fff;
        position: absolute;
        right: 5%;
        top: 50%;
        font-size: 18px;
        color: #b8b8b8;
        display: flex;
        justify-content: center;
        align-items: center;
    }



    .detailscontent_r {
        width: 55%;
        height: 90%;
    }

    .shopoptions {
        width: 850px;
        height: 650px;
        border: solid #b2b3b3 1px;
        float: right;
    }

    .shopoptions_top {
        width: 755px;
        height: 345px;
        margin: 10px auto auto 70px;
    }

    .weight {
        color: #9a9d9c;
        font-size: 18px;
        font-weight: 600;
    }

    .shopoptions_top p:nth-child(2) {
        font-size: 24px;
        font-weight: 600;
        margin-top: 40px;
    }

    .shopoptions_top p:nth-child(3) {
        font-size: 24px;
        font-weight: 600;
    }

    .xx {
        margin-top: 10px;
    }

    .null {
        width: 100%;
        height: 60px;
    }

    .detailmoney {
        font-size: 26px;
        font-weight: 600;
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    }

    .inputnumber {
        width: 250px;
        height: 35px;
        margin-top: 5px;
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
    }

    .wish_xin img {
        width: 100%;
        height: 100%;
    }

    .shopoptions_bottom {
        width: 790px;
        height: 266px;
        background-color: #fff;
        /* box-shadow: 5px 5px 3px 5px #e8e8e8 inset; */
        margin-left: 30px;
        display: flex;
        justify-content: space-around;
    }

    .online,
    .store {
        width: 200px;
        height: 230px;
        margin-top: 20px;
        margin-left: -100px;
    }

    .p1 {
        font-size: 14px;
        font-weight: 600;
        border-bottom: 2px #f39445 solid;
        width: 85px;
        text-align: center;
        padding-bottom: 3px;
    }

    .sp1 {
        border-bottom: none;
    }

    .sp2 img {
        width: 25px;
        height: 25px;
        margin-top: -5px;
        margin-left: -5px;
    }

    .p2 {
        margin-top: 30px;
        font-size: 14px;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        margin-left: 3px;
    }

    .dlogistics1 {
        width: auto;
        min-width: 120px;
        height: 20px;
        margin-top: 30px;
        font-size: 14px;
        font-weight: 600;
        margin-left: 3px;
    }

    .cr {
        width: 20px;
        height: 20px;
    }

    .p3 {
        border-bottom: 1px #000 solid;
        display: inline-block;
        margin-left: 30px;
        height: auto;
        position: relative;
        top: -7px;
        width: auto;
        min-width: 66px;
        padding-bottom: 2px;
    }

    .sp3 {
        margin-left: 55px;
    }

    .wuliu {
        width: 750px;
        height: 40px;
        float: right;
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        margin-right: 40px;
    }

    .wl {
        width: 150px;
        height: 40;
        display: flex;
        justify-content: space-around;
    }

    .wl_y {
        width: 40px;
        height: 40px;
        background-color: #f4f5f5;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .wl_y img {
        width: 80%;
        height: 80%;
    }

    .wl:nth-child(3) .wl_y img {
        width: 95%;
        height: 95%;
    }

    .wl_w {
        font-size: 12px;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 0.5px;
    }

    .introduction {
        width: 100%;
        height: 550px;
    }

    .title_box {
        width: 1200px;
        height: 60px;
        margin: auto;
        margin-top: -30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title_box_l {
        width: 185px;
        height: 56px;
        border: 1px solid #b2b3b3;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0.5px;
        background-color: #fff;

    }

    .introduction_content {
        font-size: 18px;
        font-weight: 400;
        line-height: 40px;
        margin-left: 60px;
    }

    .introduction_content p:nth-child(1),
    .introduction_content p:nth-child(2),
    .introduction_content p:nth-child(3) {
        margin-top: 30px;
    }

    .considered {
        width: 100%;
        height: 380px;
        margin-top: 90px;
    }

    .considered_title {
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 2px;
        color: #f39445;
        margin-left: 5px;
    }

    .considered_list {
        width: 200px;
        height: 300px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
    }

    .list_box {
        width: 200px;
        height: 100%;
        position: relative;
        background: #fff;
        margin-right: 1.25rem;
    }

    .list_img {
        width: 100%;
        height: 195px;
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
        width: 195px;
        padding-left: 15px;
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