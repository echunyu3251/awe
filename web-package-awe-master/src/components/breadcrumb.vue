<template>
  <div id="Breadcrumb">
    <div class="Breadcrumb_left">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item style="color: #091d44;" v-for="(item,index) in breadList" :key="index"
          :to="{ path: item.path }">{{item.name}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Breadcrumb',
    data() {
      return {
        // 路由集合
        routerlist: [],
      }
    },
    watch: {
      $route() {
        this.getBreadcrumb();
      }
    },
    methods: {
      isHome(route) {
        return route.name === "Home";
      },
      getBreadcrumb() {
        let matched = this.$route.matched;
        //如果不是首页
        if (!this.isHome(matched[0])) {
          matched = [{ path: "/home", meta: { title: "home" } }].concat(matched);
        }
        this.breadList = matched;
      },
    },
    created() {
      this.getBreadcrumb();
    },
  }
</script>

<style scoped>
  .Breadcrumb_left {
    width: auto;
    height: 100%;
    min-height: 60px;
    display: flex;
    
    align-items: center;
    font-weight: 400;
    font-size: 18px;
    margin-left: 20px;
  }

  .el-breadcrumb {
    font-size: 20px;
    font-weight: 400;
    color: #091d44;
  }

  .el-breadcrumb__item>>>.el-breadcrumb__separator {
    color: #091d44;
    font-weight: 400;

  }

  .el-breadcrumb>>>.el-breadcrumb__inner {
    font-size: 18px;
    font-weight: 400;
    color: #091d44;
  }
</style>