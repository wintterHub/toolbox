<template>
  <el-container class="wrapper">
    <el-header class="header"></el-header>
    <el-container>
      <el-aside width="250px">
        <el-menu
          router
          :default-openeds="['1']"
          default-active="/urlBatchGenerat"
          style="height: calc(100vh - 60px);"
          background-color="#3B3E43"
          text-color="#A9A9AB"
          active-text-color="#ffffff"
        >
          <el-menu-item index="/urlBatchGenerat">
            <i class="el-icon-menu"></i>
            <span slot="title">链接批量生成</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main
        class="main"
        style="overflow-y: auto; height: calc(100vh - 60px);"
      >
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
  background: linear-gradient(90deg, #48a4f7, #bc42ab);
}

.main {
  padding-top: 30px;
}
</style>
