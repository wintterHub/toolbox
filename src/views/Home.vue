<template>
  <el-container class="wrapper">
    <el-header class="header">
      <el-button class="userInfo" type="text" v-show="isLogged"><i class="far fa-user"></i>&nbsp;&nbsp;
        {{ currentEmail }}
      </el-button>
      <span class="zhaoChangJin" v-show="isLogged">&nbsp;|&nbsp;</span>
      <el-button class="logoutBtn" type="text" v-show="isLogged" @click="onLogout">退出</el-button>
      <el-button class="loginBtn" type="text" @click="onLogin" v-show="!isLogged"><i class="far fa-user"></i>&nbsp;&nbsp;登录
      </el-button>
      <a href="#" class="title" @click="goHome"></a>
    </el-header>
    <el-container>
      <el-aside width="250px">
        <el-menu
          router
          :default-active="defaultActive"
          style="height: calc(100vh - 60px - 56px);"
          background-color="#F7F7F7"
          text-color="#50646F"
          active-text-color="#409EFF"
        >
          <el-menu-item index="/UrlBatchGenerat">
            <i class="fas fa-link"></i>&nbsp;
            <span slot="title">链接批量生成</span>
          </el-menu-item>
          <el-menu-item index="/ImageCompress">
            <i class="far fa-images"></i>&nbsp;
            <span slot="title">图片压缩</span>
          </el-menu-item>
          <el-menu-item index="/ShortLink">
            <i class="far fa-hand-lizard-o"></i>&nbsp;
            <span slot="title">短链接生成</span>
          </el-menu-item>
          <!--          <el-menu-item index="/YouGetScriptGenerat" disabled>-->
          <!--            <i class="far fa-file-video-o"></i>&nbsp;-->
          <!--            <span slot="title">You-Get脚本生成</span>-->
          <!--          </el-menu-item>-->
          <!--          <el-menu-item index="/WebPDecode" disabled>-->
          <!--            <i class="far fa-picture-o"></i>&nbsp;-->
          <!--            <span slot="title">WebP转码</span>-->
          <!--          </el-menu-item>-->
          <!--          <el-menu-item index="/WebPDecode" disabled>-->
          <!--            <i class="far fa-picture-o"></i>&nbsp;-->
          <!--            <span slot="title">电子木鱼</span>-->
          <!--          </el-menu-item>-->
        </el-menu>

        <div class="github">
          <a href="https://github.com/wintterHub/toolbox" target="_black"
          >👉&nbsp;Give me star</a
          >
        </div>
      </el-aside>
      <el-main
        class="main"
        style="overflow-y: auto; height: calc(100vh - 60px);"
      >
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>

      <login :visible="loginDialogVisible"
             @close="loginDialogVisible = false"
             @logged="getUserInfo"></login>
    </el-container>
  </el-container>
</template>

<script>
import login from './Login.vue'

export default {
  components: {
    login
  },

  data() {
    return {
      defaultActive: "",
      loginDialogVisible: false,
      isLogged: false,
      currentEmail: ''
    };
  },

  created() {
    this.getUserInfo()
  },

  methods: {
    goHome() {
      this.$router.push("/");
    },

    onLogin() {
      this.loginDialogVisible = true
    },

    async getUserInfo() {
      try {
        let res = await this.$axios.get(`/api/member/info`)
        if (res.data.success && res.data.code === 200) {
          this.currentEmail = res.data.result.email
          this.isLogged = true
        } else if (res.data.code === 403) {
          this.isLogged = false
        } else {
          this.isLogged = false

        }
      } catch (e) {

      } finally {

      }
    },

    onLogout() {
      this.$confirm('确定要退出吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        try {
          let res = await this.$axios.get(`/api/member/logout`)
          if (res.data.success && res.data.code === 200) {
            this.currentEmail = null
            this.isLogged = false
          } else {
            this.$message.error(res.data.message || `退出失败`)
          }
        } catch (e) {
          this.$message.error(`退出失败`)
        } finally {

        }
      }).catch(() => {

      });
    }
  },

  mounted() {
    this.defaultActive = this.$route.path;
  }
};
</script>

<style scoped>
.header {
  z-index: 9;
  position: relative;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  background: linear-gradient(90deg, #48a4f7, #bc42ab);
  text-align: right;
}

.header .title {
  letter-spacing: -0.5px;
  color: #fff;
  font-family: Gotham SSm A, Gotham SSm B, system-ui, -apple-system,
  BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans,
  Helvetica Neue, Arial, sans-serif;
  font-size: 95px;
  font-weight: 900;
  line-height: 60px;
  text-decoration: none;
}

.header .loginBtn,
.header .userInfo,
.header .logoutBtn {
  float: left;
  margin-top: 10px;
  color: #ffffff;
  font-family: Microsoft YaHei
}

.header .zhaoChangJin {
  float: left;
  margin-top: 10px;
  color: #ffffff;
  font-family: Microsoft YaHei;
  line-height: 38px;
}

.github {
  letter-spacing: 0px;
  height: 56px;
  width: 249px;
  background: linear-gradient(90deg, #48a4f7, #bc42ab);
}

.github a {
  color: #fff;
  font-size: 16px;
  line-height: 56px;
  margin-left: 53px;
  text-decoration: none;
}
</style>
