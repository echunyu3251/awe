<template>
  <div class="topbar">
    <div class="topbar_box">
      <!--left -->
      <div class="box_l">
        <div class="address">
          <img src="../assets/car2.png" alt />
          <span class="set_address">Delivery to: Set your Delivery address</span>
          <span>Choose ></span>
        </div>
        <div class="address2">
          <img src="../assets/clock.png" alt />
          <span class="set_address">When suits Avaliable items may change</span>
          <span>Choose ></span>
        </div>
      </div>
      <!-- right -->
      <div class="box_r">
        <span>Welcome to AWESOME WAREHOUSE</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topbar",
  data() {
    return {};
  },
};
</script>

<style scoped>
.topbar {
  width: 100%;
  height: 2.5rem;
  background-color: #091d44;
  font-size: .875rem;
  font-weight: 400;
}
.topbar_box {
  width: 91.6%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.box_l {
  width: 53.75rem;
  height: 1.875rem;
  display: flex;
  margin-top: .4375rem;
}

.address,
.address2 {
  width: 24.375rem;
  height: 100%;
  display: flex;
  align-items: center;
  float: left;
  letter-spacing: 0.5px;
}
.address2 {
  width: 25.625rem;
  border-width: 2px;
  border-left-style: solid;
  border-color: #fff;
  padding-left: 1.875rem;
  margin-left: .3125rem;
}
.address img,
.address2 img {
  width: 1.875rem;
  height: 1.875rem;
}
.set_address {
  margin-left: .625rem;
}
.address span:last-child,
.address2 span:last-child {
  margin-left: 1.75rem;
}
.box_r {
  width: 16.5625rem;
  height: 1.875rem;
  margin-top: .4375rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: .9375rem;
  letter-spacing: 0.5px;

}
</style>
