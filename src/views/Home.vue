<template>
  <el-container class="wrapper">
    <el-header class="header"></el-header>
    <el-container>
      <el-aside width="250px">
        <el-menu
          router
          :default-openeds="['1']"
          style="height: calc(100vh - 60px);"
        >
          <el-menu-item index="/urlBatchGenerat">
            <i class="el-icon-menu"></i>
            <span slot="title">链接批量生成</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {},

  mounted() {}
};
</script>

<style scoped>
.header {
  z-index: 9;
  position: relative;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  background-size: 100% auto;
  background-image: url("../assets/wallpaper/PIC_20141231_154137_1C8.jpg");
}

.main {
  padding-top: 30px;
}
</style>
