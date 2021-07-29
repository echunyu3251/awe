<template>
  <div class="logistics">
        <div class="logistics_l">
          <div class="logistics_car">
            <img src="../../assets/car.png" alt />
          </div>
          <div class="logistics_text">
            <p>Free 2 Day Shipping</p>
            <p>Text introductiontext Text introduction text</p>
          </div>
        </div>
        <div class="logistics_m">
          <div class="logistics_car logistics_money">
            <img src="../../assets/money.png" alt />
          </div>
          <div class="logistics_text">
            <p>Money Back Guarantee</p>
            <p>Text introductiontext Text introduction text</p>
          </div>
        </div>

        <div class="logistics_r">
          <div class="logistics_car">
            <img src="../../assets/tuihuo.png" alt />
          </div>
          <div class="logistics_text logistics_text2">
            <p>Free Return Up To 30 Days</p>
            <p>Text introductiontext Text introduction text</p>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  components: {

  },
};
</script>

<style scoped>

.logistics {
  width: 100%;
  height: 8.75rem;
  border-bottom-color: #b1b2b2;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  display: flex;
  justify-content: space-between;
  margin-top: 3.4375rem;
}
.logistics_l,
.logistics_m,
.logistics_r {
  width: 21.875rem;
  height: 6.25rem;
  display: flex;
}
.logistics_r {
  width: 21.875rem;
  height: 6.25rem;
  display: flex;
}
.logistics_car {
  width: 4.375rem;
  height: 4.375rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}
.logistics_car img {
  width: 90%;
  height: 90%;
  margin: auto;
}
.logistics_money img {
  width: 80%;
  height: 80%;
  margin: auto;
}
.logistics_text {
  width: 12.5rem;
  height: 100%;
  margin-left: 1.875rem;
  word-break: break-all;
}
.logistics_text p:nth-child(1) {
  width: 15.625rem;
  font-size: 20px;
  font-weight: 600;
  margin-top: 0.625rem;
}
.logistics_text p:nth-child(2) {
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 1px;
  margin-top: 1.25rem;
}
</style>