<template>
  <div id="password">
    <div class="namebox">
      <div class="firstname">
        <p>First name *</p>
        <input type="text" class="firstnameinput">
      </div>
      <div class="lastname">
        <p>Last name *</p>
        <input type="text" class="lastnameinput">
      </div>
    </div>
    <div class="inputbox">
      <p>Email address *</p>
      <input type="text" class="addressinput">
    </div>
    <p class="pass">PASSWORD CHANGE</p>
    <div class="inputbox">
      <p>Current password (leave blank to leave unchanged)</p>
      <input type="text" class="passinput">
    </div>
    <div class="inputbox">
      <p>New password (leave blank to leave unchanged)</p>
      <input type="text" class="addressinput">
    </div>
    <div class="inputbox">
      <p>Confirm new password</p>
      <input type="text" class="addressinput">
    </div>
    <div class="changes">
      <span>SAVE CHANGES</span>
    </div>
  </div>
</template>

<script>


  export default {
    name: "password",
    data() {
      return {};
    },
  };
</script>

<style scoped>
  #password {
    color: #091d44;
    width: 100%;
    height: auto;
  }

  .namebox {
    width: 83%;
    height: 80px;
    display: flex;
    justify-content: space-between;
  }

  .firstname,
  .lastname {
    width: 42%;
    height: 100%;
    font-size: 14px;
    font-weight: 400;

  }

  .firstnameinput,
  .lastnameinput,
  .passinput,
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
  }

  .addressinput {
    width: 100%;
  }

  .pass {
    font-size: 16px;
    font-weight: 500;
    margin-top: 45px;
  }

  .passinput {
    width: 100%;
    border: none;
    background-color: #dbdee2;
  }

  .changes {
    width: 240px;
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