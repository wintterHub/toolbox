<template>
  <el-container class="wrapper" style="border-top: solid 1px #e6e6e6;">
    <el-container>
      <el-aside width="250px">
        <el-menu router :default-openeds="['1']" style="height: calc(100vh - 1px);">
          <el-menu-item index="/urlBatchGenerat">
            <i class="el-icon-menu"></i>
            <span slot="title">链接批量生成</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {}
    },

    methods: {},

    mounted() { }

  }
</script>

<style scoped>

</style>
