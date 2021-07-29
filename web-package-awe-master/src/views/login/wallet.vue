<template>
  <div id="wallet">
    <div class="banner">

    </div>
    <div class="balance">
      <p>Balance query</p><img src="../../assets/visual.png" alt="">
      <p> Balance <span>$10000</span></p>
    </div>
    <p class="please">Please Select Rechange Amount:</p>
    <div class="upgrade">
      <div class="money">
        <p>Upgrade Gold Members</p>
        <img src="../../assets/Select.png" alt=""><span>$300</span>
      </div>
      <div class="money">
        <p>Upgrade Platinum Membership</p>
        <img src="../../assets/Select.png" alt=""><span>$10000</span>
      </div>
    </div>
    <div class="inputbox">
      <p>Custom amount</p>
      <input type="text" class="addressinput">
    </div>
    <div class="changes">
      <span>Rechange</span>
    </div>
  </div>
</template>

<script>


  export default {
    name: "wallet",
    data() {
      return {};
    },
  };
</script>

<style scoped>
  #wallet {
    width: 100%;
    height: 100%;
    color: #000;
  }

  .banner {
    width: 100%;
    height: 300px;
    background-color: #fff;
  }

  .balance {
    width: 100%;
    height: 70px;
    margin-top: 50px;
  }

  .balance p:first-child {
    font-size: 14px;
    font-weight: 600;
    margin-top: 4px;
    float: left;
    letter-spacing: 1px;
  }

  .balance img {
    width: 25px;
    height: 25px;
    margin-left: 25px;

  }

  .balance p:last-child {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    margin-top: 20px;
  }

  .balance span {
    font-size: 18px;
    font-weight: 600;
    margin-left: 68px;
  }

  .please {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-top: 50px;
  }

  .upgrade {
    width: 850px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }

  .money {
    width: auto;
    height: 60px;
    position: relative;
  }

  .money p {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
  }

  .money img {
    width: 25px;
    height: 25px;
    margin-top: 25px;
  }

  .money span {
    font-size: 18px;
    font-weight: 600;
    margin-left: 20px;
    position: absolute;
    top: 40px;
  }

  .addressinput {
    width: 500px;
    height: 40px;
    border: 1px #707070 solid;
    margin-top: 23px;
  }

  .inputbox {
    width: 83%;
    height: 80px;
    margin-top: 40px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
  }

  .addressinput {
    width: 100%;
  }

  .changes {
    width: 190px;
    height: 60px;
    background-color: #f7931d;
    color: #fff;
    text-align: center;
    line-height: 60px;
    font-size: 22px;
    font-weight: 600;
    margin-top: 60px;
    border-radius: 5px;
    letter-spacing: 1px;

  }
</style>