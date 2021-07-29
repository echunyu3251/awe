<template>
  <div class="signUp">
        <input type="text" placeholder="E-mail" class="signup_input" />
        <button class="signup_btn">Sign up</button>
      </div>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {};
  },
  components: {

  },
};
</script>

<style scoped>

.signUp {
  width: 100%;
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.1875rem;
}
.signup_input {
  width: 26.875rem;
  height: 38px;
  background: #fff;
  border: none;
  border: 1px #000 solid;
}
.signup_input::placeholder {
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  color: #000;
  padding-left: 1.25rem;
  letter-spacing: 1px;
}
.signup_btn {
  width: 9.375rem;
  height: 2.5rem;
  background: #000;
  color: #fff;
  border: none;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
}
</style>