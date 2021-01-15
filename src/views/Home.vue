<template>
  <el-container class="wrapper">
    <el-header class="header">
      <a href="#" class="title" @click="goHome">ToolBox</a>
    </el-header>
    <el-container>
      <el-aside width="250px">
        <el-menu
          router
          :default-openeds="['1']"
          default-active="/urlBatchGenerat"
          style="height: calc(100vh - 60px - 56px);"
          background-color="#3B3E43"
          text-color="#A9A9AB"
          active-text-color="#ffffff"
        >
          <el-menu-item index="/urlBatchGenerat">
            <i class="el-icon-menu"></i>
            <span slot="title">链接批量生成</span>
          </el-menu-item>
        </el-menu>

        <div class="github">
          <span>点击支持👉 </span>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=wintterHub&repo=toolbox&type=star&count=true"
            frameborder="0"
            scrolling="0"
            width="100"
            height="20"
            title="GitHub"
          ></iframe>
        </div>
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

  methods: {
    goHome() {
      this.$router.push("/");
    }
  },

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
  text-align: center;
}

.header .title {
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  line-height: 55px;
  text-decoration: none;
}

.github {
  letter-spacing: 0px;
  border-top: 1px solid #a9a9ab;
  height: 56px;
  width: 249px;
  background-color: #3b3e43;
  text-align: center;
}

.github span {
  color: #a9a9ab;
  font-size: 14px;
}

.github iframe {
  margin-top: 15px;
  vertical-align: bottom;
}

.main {
  padding-top: 30px;
}
</style>
