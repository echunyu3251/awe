<template>
  <div id="login_box">
    <div class="login">
        <breadcrumb style="border-right-style: 0px;;font-size: 14px;"></breadcrumb>
      <div class="titlebox">
        <span>Login / Register</span>
      </div>
      <div class="dz_content">
        <div class="content_l">
          <p class="content_l_new">New Customer</p>
          <p class="content_l_register">Register Account</p>
          <div class="content_l_register_text">
            <p>
              You`ll be able to check out faster, view previous orders, save favourites lists, modify and track existing
              orders.</br></br>
              Also be eligible for special offers and promotions including5% off the first order for all new customers
              who sign up and agree to receive special offersand the latest updates from Asian Grocer Online. The
              discount will automatically be applied.
            </p>
          </div>
          <router-link to="/home/sign">
          <div class="content_l_register_create">
            <span>CREATE ACCOUNT</span>
          </div>
        </router-link>
          <div class="ontent_l_guestcheckout">
            <p class="content_l_guest">Guest Checkout</p>
          </div>
          <div class="content_l_checkout">
            <span>CHECKOUT AS GUEST</span>
          </div>
        </div>
        <div class="content_r">
          <p class="content_l_new">Returning Customer</p>
          <p class="content_l_register">I am a returning customer</p>
          <div class="content_r_input">
            <div class="content_r_input_address">
              <span class="content_r_input_address_text">Email Address</span>
              <input type="text" class="content_r_input_address_frame">
            </div>
            <div class="content_r_input_password">
              <span class="content_r_input_password_text">Password</span>
              <input type="text" class="content_r_input_password_frame">
            </div>
          </div>
          <div class="content_r_remenmber">
            <input type="checkbox" name="" value="1" class="content_r_remenmber_k">
            <span style="margin-left: 10px;"> Remember me on this computer</span>
          </div>
          <p class="content_r_forgot">Forgot your password?</p>
          <router-link to="/home/account">
            <div class="content_r_loginbtn">
              <span>LOGIN</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div style="background-color: #f4f5f5;">
      <div style="width:91.6%;margin:auto;">
        <div>
          <brandimg style="padding-top: 10px;"></brandimg>
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
    name: 'login',
    data() {
      return {
    
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

    },
    created() {
    },
  }
</script>

<style scoped>
  #login_box {
    color: #091d44;
    background-color: #fff;
    width: 100%;
    height: auto;
  }

  .login {
    width: 91.6%;
    height: 100%;
    margin: auto;
  }

  .titlebox {
    width: 100%;
    height: 110px;
    font-size: 18px;
    font-weight: 600;
    margin-left: 8px;
    margin-top: 10px;
  }

  .dz_content {
    width: 100%;
    height: 750px;
    display: flex;
    justify-content: space-between;
  }

  .content_l,
  .content_r {
    width: 44%;
    height: 100%;
  }

  .content_l_new {
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: #000;
  }

  .content_l_register,
  .content_l_guest {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.5px;
    margin-top: 35px;
    padding-bottom: 10px;
    border-bottom: 1px #f7931d solid;
    width: 530px;
  }

  .content_l_register_text {
    width: 100%;
    height: 160px;
    font-size: 18px;
    font-weight: 400;
    margin-top: 50px;
    letter-spacing: 1px;
    line-height: 25px;
  }

  .content_l_register_create,
  .content_l_checkout {
    width: 280px;
    height: 60px;
    border-radius: 5px;
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    line-height: 60px;
    color: #fff;
    background-color: #f7931d;
    margin-top: 70px;
    letter-spacing: 1px;
  }

  .content_l_guest {
    margin-top: 90px;
    font-size: 24px;
    font-weight: 600;
    color: #091d44;
  }

  .content_r_input {
    width: 100%;
    height: 200px;

  }

  .content_r_input_address,
  .content_r_input_password {
    width: 100%;
    height: 65px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .content_r_input_address_text,
  .content_r_input_password_text {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.5px;
  }

  .content_r_input_address_frame,
  .content_r_input_password_frame {
    width: 600px;
    height: 60px;
    border: 1px solid #dadada;
    border-radius: 5px;

  }

  .content_r_remenmber {
    width: auto;
    height: 20px;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 1px;
    margin-top: 40px;
  }

  .content_r_remenmber_k {
    width: 20px;
    height: 20px;

  }

  .content_r_forgot {
    font-size: 18px;
    color: #f7931d;
    margin-top: 40px;
    font-weight: 400;
  }

  .content_r_loginbtn {
    width: 180px;
    height: 60px;
    border-radius: 5px;
    text-align: center;
    line-height: 60px;
    color: #fff;
    letter-spacing: 1px;
    background-color: #f7931d;
    float: right;
    font-size: 22px;
    font-weight: 600;
    margin: 60px 30px 0 0;
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