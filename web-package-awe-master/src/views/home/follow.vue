<template>
  <div class="follow">
        <div class="follow_logo">
          <img src="../../assets/logo2.png" alt />
        </div>
        <div class="follow_us">
          <span>Follow Us</span>
          <img src="../../assets/facebook.png" alt />
          <img src="../../assets/bird.png" alt />
          <img src="../../assets/weixin.png" alt />
        </div>
      </div>
</template>

<script>
export default {
  name: "follow",
  data() {
    return {};
  },
  components: {

  },
};
</script>

<style scoped>

.follow {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
}
.follow_logo {
  width: 15.4375rem;
  height: 3.75rem;
}
.follow_logo img {
  width: 100%;
  height: 100%;
}
.follow_us {
  width: 18.75rem;
  height: 3.75rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.follow_us span {
  font-size: 18px;
  font-weight: 600;
  margin-right: 3.75rem;
}
.follow_us img {
  width: 1.875rem;
  height: 1.875rem;
  margin-right: 1.25rem;
}
.follow_us img:last-child {
  margin-right: 1.25rem;
}

</style>