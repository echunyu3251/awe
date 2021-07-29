<template>
  <div id="sign_box">
    <div class="sign">
      <div>
        <breadcrumb style="border-right-style: 0px;font-size: 14px;"></breadcrumb>
      </div>
      <div class="titlebox">
        <span>Login / Register</span>
      </div>
      <div class="sign_content">
        <p class="content_details"> Please fill out your delivery details below</p>
        <p class="content_delivery">Delivery Address Details</p>
        <div class="content_input">
          <div class="content_input_box">
            <span class="content_input_box_text">*First Name</span>
            <input type="text" class="content_input_box_frame">
          </div>
          <div class="content_input_box">
            <span class="content_input_box_text">*Last Name</span>
            <input type="text" class="content_input_box_frame">
          </div>
          <div class="content_input_box">
            <span class="content_input_box_text">Company Name</span>
            <input type="text" class="content_input_box_frame">
          </div>
          <div class="content_input_box">
            <span class="content_input_box_text">*Phone</span>
            <input type="text" class="content_input_box_frame">
          </div>
          <div class="content_input_box">
            <span class="content_input_box_text">*Street Address</span>
            <input type="text" class="content_input_box_frame">
          </div>
          <div class="content_input_box">
            <span class="content_input_box_text">*Suburb</span>
            <input type="text" class="content_input_box_frame">
          </div>
          <div class="content_input_box">
            <span class="content_input_box_text">*State</span>
            <input type="text" class="content_input_box_frame">
          </div>
          <div class="content_input_box">
            <span class="content_input_box_text">Post Code</span>
            <input type="text" class="content_input_box_frame">
          </div>
          <div class="content_input_box">
            <span class="content_input_box_text">*Country</span>
            <input type="text" class="content_input_box_frame">
          </div>
          <div class="content_input_box">
            <span class="content_input_box_text">*Email</span>
            <input type="text" class="content_input_box_frame">
          </div>
          <div class="content_input_box">
            <span class="content_input_box_text">*Confirm Email</span>
            <input type="text" class="content_input_box_frame">
          </div>
          <div class="content_input_box">
            <span class="content_input_box_text">*Password</span>
            <input type="text" class="content_input_box_frame">
          </div>
          <div class="content_input_box">
            <span class="content_input_box_text">*Confirm Password</span>
            <input type="text" class="content_input_box_frame">
          </div>
        </div>
        <div class="content_remenmber">
          <input type="checkbox" name="" value="1" class="content_remenmber_k">
          <span style="margin-left: 10px;"> I would like to receive special offers and the latest updates from Asian
            Grocer Online</span>
        </div>
        <div class="content_remenmber">
          <input type="checkbox" name="" value="1" class="content_remenmber_k">
          <span style="margin-left: 10px;">Billing Address same as Delivery Address</span>
        </div>
      </div>
      <div class="content_btn">
        <router-link to="/home/login">
          <div class="back"><span>BACK</span></div>
        </router-link>
          <div class="signup"><span>SIGN UP</span></div>
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
    name: "sign",
    data() {
      return {};
    },
    components: {
      breadcrumb,
      brandimg,
      logistics,
      follow,
      email

    },
  };
</script>

<style scoped>
  #sign_box {
    color: #091d44;
    background-color: #fff;
    width: 100%;
    height: auto;

  }

  .sign {
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

  .sign_content {
    width: 100%;
    height:auto;
  }

  .content_details {
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: #000;
  }

  .content_delivery {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.5px;
    margin-top: 35px;
    padding-bottom: 10px;
    border-bottom: 1px #f7931d solid;
    width: 530px;
  }


  .content_input {
    width: 85%;
    height: auto;
    padding-bottom: 15px;
  }

  .content_input_box {
    width: 100%;
    height: 45px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .content_input_box_text {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.5px;
  }

  .content_input_box_frame {
    width: 78%;
    height: 43px;
    border: 1px solid #dadada;
    border-radius: 5px;
  }


  .content_remenmber {
    width: auto;
    height: 20px;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 1px;
    margin-top: 40px;
  }

  .content_remenmber_k {
    width: 20px;
    height: 20px;

  }

  .content_btn {
    width: 100%;
    height: 60px;
    margin-top: 60px;
    display: flex;
    justify-content: space-between;

  }
.back,.signup{
  width: 180px;
  height: 60px;
  background-color: #f7931d;
  color: #fff;
  border-radius: 5px;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  line-height: 60px;
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