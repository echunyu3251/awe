<template>
    <div id="accountDetails">
        <div class="accountDetailsTitle">
            <p>Hello 123456789@987.com</p>
            <p>From your account dashboard, you can view your recent orders,logistics information and edit your
                password, account details and wallet recharge.</p>
        </div>
        <div class="accountlist2">
            <div class="order">
<router-link to="/home/account/orders">
    <span>Order</span>
</router-link>
            </div>
            <div class="logistics">
                <router-link to="/home/account/orders">

                    <span>Logistics</span>
                </router-link>
            </div>
            <div class="password">
                <router-link to="/home/account/password">

                    <span>Password</span>
                </router-link>
            </div>
            <div class="wallet">
                <router-link to="/home/account/wallet">

                    <span>Wallet</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: "accountDetails",
        data() {
            return {};
        },
    };
</script>

<style scoped>
    #accountDetails {
        color: #091d44;
        width: 100%;
        height: auto;
    }
a{
    color: #091d44;

}
    .accountDetailsTitle {
        width: 100%;
        height: 50px;
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0.5px;
        margin-top: 60px;
    }

    .accountlist2 {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
    }

    .accountlist2 div {
        width: 250px;
        height: 58px;
        border: 1px solid #000;
        background-color: #fff;
        text-align: center;
        font-size: 22px;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 58px;
    }
</style>