<template>
  <div class="topbar2" >
    <div class="topbar2_box">
      <div class="awesome">
        <img src="../assets/logo.png" alt class="logo" />
        <div class="wangzhi">
          <img src="../assets/haiwai.png" alt class="haiwai" />
          <span>awesome.com</span>
        </div>
        <div class="chinese">
          <img src="../assets/Chinese.png" alt class="chinese_img" />
          <span>中文网站</span>
        </div>
      </div>
      <div class="search">
        <input type="text" placeholder="search for a product,supplier,etc..." />
        <img src="../assets/search.png" alt class="search_img" />
      </div>
      <div class="login_cart">
        <div class="login">
          <img src="../assets/login.png" alt class="_img" />
          <router-link to="/home/login">
            <span>Login</span>/<span>Register</span>
          </router-link>
        </div>
        <div class="want">
          <img src="../assets/xin.png" alt class="_img w_img" />
          <span>Wish</span>
          <span>List</span>
        </div>
        <div class="cart">
          <router-link to="/home/bulk">
            <img src="../assets/cailanzi.png" alt class="clz_img" />
          </router-link>
          <router-link to="/home/car">
            <span>View Cart</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topbar2",
  data() {
    return {};
  },
};
</script>

<style scoped>
   
.topbar2 {
  width: 100%;
  height: 2.625rem;
  background-color: #091d44;
  font-size: 14px;
  font-weight: 400;
}
.topbar2_box {
  width: 91.6%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.awesome {
  width: 420px;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 400;
  letter-spacing: 0.8px;
}
.logo {
  width: 105px;
  height: 25px;
}
.wangzhi {
  width: 150px;
  height: 27px;
  border-bottom-style: solid;
  border-color: #f7931d;
  border-width: 3px;
  border-radius: 2px;
  margin-left: 40px;
  display: flex;
  align-items: center;
  font-size: 16px;
}
.haiwai {
  width: 25px;
  height: 25px;
  margin-left: 2px;
}
.wangzhi span {
  margin-left: 8px;
  margin-top: -2px;
}
.chinese {
  width: 6.25rem;
  height: 1.875rem;
  margin-left: 20px;
  display: flex;
  align-items: center;
}
.chinese_img {
  width: 20px;
  height: 20px;
}
.chinese span {
  margin-left: 10px;
  letter-spacing: 1.5px;
  margin-top: -1px;
}
.search {
  width: 445px;
  height: 2.3125rem;
  position: relative;
}
.search input {
  width: 370px;
  height: 100%;
  background: #fff;
  border-radius: 20px;
  border: none;
  padding-left: 25px;
  font-size: 17px;
  letter-spacing: 0.5px;
  font-weight: 500;
  border-right-style: solid;
  border-width: 50px;
  border-color: #c39a6b;
  margin-top: 3px;
}
.search input::-webkit-input-placeholder {
  color: #848ea1;
}
.search_img {
  width: 27px;
  height: 27px;
  position: absolute;
  z-index: 3;
  right: 15px;
  top: 8px;
}
.login_cart {
  width: 500px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
}
.login,
.want,
.cart {
  width: 170px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
._img {
  width: 20px;
  height: 20px;
}
.want {
  width: 110px;
}
.w_img {
  margin-top: 5px;
}
.cart {
  width: 160px;
}
.clz_img {
  width: 30px;
  height: 30px;
}
.cart span {
  display: flex;
  width: 110px;
  height: 30px;
  background: #f7931d;
  justify-content: space-around;
  align-items: center;
}
</style>
