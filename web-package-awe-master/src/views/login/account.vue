<template>
    <div id="account_box">
        <div class="account">
            <div style="border-bottom: #000 1px solid;">
                <breadcrumb style="border-right-style: 0px;"></breadcrumb>
            </div>
            <div class="accountDetails_box">
                <div class="accountDetails">
                    <div class="accountTitle">
                        <router-link to="/home/account/accountdetails" exact> <span class="accountjj">Account Information</span></router-link>
                        <div class="accountDetails_headbox">
                            <div class="head">
                                <img src="../../assets/headportrait.png" alt="">
                            </div>
                            <div class="name">
                                <span>Mail</span></br></span>
                                <span>123456789@789.com</span>
                            </div>
                        </div>
                    </div>
                    <div class="accountlist">
                        <p><router-link to="/home/account/orders"> Order</router-link></p>
                        <!-- <p><router-link to="/home/account/logis">Logistics</router-link></p> -->
                        <p><router-link to="/home/account/password">Password</router-link></p>
                        <p><router-link to="/home/account/wallet">Wallet</router-link></p>
                    </div>
                </div>
                <div class="accountDetailsView">
                    <router-view></router-view>
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
        name: "account",
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
    .router-link-active {
        color: #a79683;

    }

    #account_box {
        color: #091d44;
        width: 100%;
        height: auto;
    }

    a {
        color: #091d44;

    }

    .account {
        width: 91.6%;
        height: 100%;
        margin: auto;
    }

    .accountDetails_box {
        width: 100%;
        height:auto;
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
    }

    .accountDetails {
        width: 16%;
        height: 100%;
    }
    .accountTitle {
        width: 100%;
        height: 130px;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 1px;
    }
    .accountjj{
        margin-left:10px;
    }
    .accountDetailsView {
        width: 82%;
        height: auto;

    } 

    .accountDetails_headbox {
        width: 100%;
        height: 85px;
        position: relative;
        margin-top: 20px;

    }

    .head {
        width: 80px;
        height: 80px;
        border: #000 solid 1px;
        border-radius: 50%;
        float: left;

    }

    .head img {
        width: 100%;
        height: 100%;
    }

    .name {
        float: left;
        position: absolute;
        bottom: 5px;
        left: 95px;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 1px;
    }

    .accountlist {
        width: 100%;
        height: 200px;
        margin-top: 30px;
        font-size: 18px;
        font-weight: 500;
        line-height: 40px;
        margin-left: 15px;
        letter-spacing: 1px;
        
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