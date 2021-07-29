<template>
  <div class="nav">
    <div class="nav_box">
      <ul>
        <li v-for="(item,index) in navlist" :key="index">
          <div class="navhover" @mouseover="mouseover(index)" @mousemove="mousemove(index)">
            <span @click="clicknav(index)" class="navtext">{{item.navname}}</span>
            <div v-show="index==idx" class="n_content_index_line_true"></div>
          </div>
          <div class="navlistbox" v-show="hide&&index==idx2">
            <div class="navlistcontent" ref="hidden_box">
              <div class="content">
                <span class="kingtitle">
                  <router-link :to="item.comlist">{{item.navname}}</router-link>
                </span>
                <!-- <span v-for="item2 in item.kind" :key="item2.id" class="kindtext">
                  <router-link :to="item.comlist">{{item2.kindname}}</router-link>
                </span> -->
                <div class="list">
                  <router-link :to="item.comlist">
                    <div class="shop" v-for="(item3,index) in shoplist" :key="index">
                      <img :src="item3.shopimg" alt="" class="shopimg">
                      <div class="shoptext">
                        Text introductiontext text
                        <img src="../assets/right2.png" alt="" class="r">
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navbar",
    data() {
      return {
        navlist: [
          { id: 1, navname: "ALLITEMS", comlist: "/home" },
          {
            id: 2, navname: "MILKFORMULA", comlist: "/milk",
            kind: [
              { id: 1, kindname: "one Paragraph", },
              { id: 2, kindname: "Two Paragraph", },
              { id: 3, kindname: "Treen Paragraph", },
              { id: 4, kindname: "Four Paragraph" }
            ]

          },
          {
            id: 3, navname: "BOOTS", comlist: "/boots",
            kind: [
              { id: 1, kindname: "D&K", },
              { id: 2, kindname: "Ever", },
              { id: 3, kindname: "OZLANA", },
              { id: 4, kindname: "EDGII" }
            ]
          },
          { id: 4, navname: "BABYCARE", comlist: "/baby" },
          { id: 5, navname: "VITAMINS&SPPLEMENTS", comlist: "/vitamins" },
          { id: 6, navname: "BEAUTY", comlist: "/beauty" },
          { id: 7, navname: "PERSONALCARE&HOUSEHOLD", comlist: "/personalcare" },
          { id: 8, navname: "CLOTHING&SHOES", comlist: "/clothing" },
          { id: 9, navname: "PANTRYFOOD", comlist: "/pantryfood" },
          { id: 10, navname: "KOREAN&JAPENESE", comlist: "/korean" },
          { id: 11, navname: "CHINAZONE", comlist: "/china" },
          { id: 12, navname: "POIPULARBRANDS", comlist: "/brand" },

        ],
        idx: "0",
        idx2: '',
        hide: "",
        shoplist: [
          { id: 1, shopimg: require("../assets/32.jpg") },
          { id: 2, shopimg: require("../assets/32.jpg") },
          { id: 3, shopimg: require("../assets/32.jpg") },
          { id: 4, shopimg: require("../assets/32.jpg") },
          { id: 5, shopimg: require("../assets/32.jpg") },
          { id: 6, shopimg: require("../assets/32.jpg") },
          { id: 7, shopimg: require("../assets/32.jpg") },
          { id: 8, shopimg: require("../assets/32.jpg") },
          { id: 9, shopimg: require("../assets/32.jpg") },
          { id: 10, shopimg: require("../assets/32.jpg") },
          { id: 11, shopimg: require("../assets/32.jpg") },
          { id: 12, shopimg: require("../assets/32.jpg") },
          { id: 13, shopimg: require("../assets/32.jpg") },


        ]
      };
    },
    methods: {
      mouseover(e) {
        var that = this
        that.idx = e;
      },
      mousemove(e) {

      },
      clicknav(e) {
        var that = this
        if (that.idx2 === e) {
          that.idx2 = ''
          that.hide = ''
        } else {
          that.idx2 = e
          that.hide = true
        }

      },

    },
    mounted() {
      document.addEventListener('click', (e) => {
        var ClassName = e.target.className
        if (ClassName != 'navlistcontent' && ClassName != "navtext" && ClassName != "content" && ClassName != "list") {
          // console.log(this.hide)
          this.hide = false
        }

      })
    },
  };
</script>

<style scoped>
  a {
    color: #091d44;
  }

  .nav {
    width: 100%;
    height: 2.5rem;
    background-color: #091d44;
    font-size: 1.125rem;
    font-weight: 400;
    position: relative;
  }

  .nav_box {
    width: 91.6%;
    height: 100%;
    margin: auto;
  }

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  ul li {
    float: left;
    height: 20px;
    font-size: 1.125rem;

  }

  ul li:first-child {
    margin-left: -0.3125rem;
  }

  .navhover {
    width: calc(100% + 10px);
    text-align: center;
  }

  .n_content_index_line_true {
    width: 100%;
    height: 3px;
    background-color: #f7931d;
    margin-top: 3px;
  }

  .navlistbox {
    position: absolute;
    z-index: 2;
    left: 0;
    top: 38px;
    width: 100%;
    height: 100vh;
    background-color: #000;
    background: rgba(0, 0, 0, 0.5);
  }

  .navlistcontent {
    opacity: 1;
    color: #000;
    width: 100%;
    height: 26.5625rem;
    margin: auto;
    text-align: start;
    background-color: #f4f5f5;
  }

  .content {
    width: 91.6%;
    height: 100%;
    margin: auto;
  }

  .kingtitle {
    width: auto;
    height: auto;
    display: inline-block;
    border-bottom-color: #091d44;
    border-bottom-width: 3px;
    border-bottom-style: solid;
    font-size: 18px;
    font-weight: 600;
    color: #091d44;
    margin: 35px 0 0 5px;
    padding: 5px;
  }

  .kindtext {
    display: inline-block;
    border-bottom-color: #091d44;
    border-bottom-width: 3px;
    border-bottom-style: solid;
    font-size: 14px;
    font-weight: 500;

    margin: 35px 0 0 15px;
    padding: 3px 3px 5px 3px;

  }

  .list {
    width: 100%;
    height: calc(100% - 80px);
  }

  .shop {
    width: 120px;
    height: 120px;
    background-color: #fff;
    margin-top: 20px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    float: left;
    flex-grow: 1;
    margin-right: 50px;
  }

  .shopimg {
    width: 100%;
    height: 100%;
  }

  .shoptext {
    width: 85px;
    height: 25px;
    background-color: #f39445;
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    color: #fff;
    line-height: 12px;

  }

  .r {
    width: 17px;
    height: 15px;
    position: absolute;
    bottom: 0;
    right: 5px;
  }
</style>