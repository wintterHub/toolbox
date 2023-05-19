<template>
  <div>
    <el-card class="box-card" shadow="never" body-style="padding: 0px;">
      <div slot="header">
        <span>短链接列表</span>
        <el-button plain @click="onAddClick">
          <i class="fas fa-plus"></i>&nbsp;新建
        </el-button>
      </div>
      <el-table stripe :data="formData" height="calc(100vh - 152px)">
        <el-table-column align="center" prop="shortLink" label="短链接" show-overflow-tooltip>
        </el-table-column>
        <el-table-column align="center" prop="link" label="原链接" show-overflow-tooltip>
        </el-table-column>
        <el-table-column align="center" prop="uv" label="访问人数" width="100">
        </el-table-column>
        <el-table-column align="center" prop="pv" label="访问次数" width="100">
        </el-table-column>
        <el-table-column align="center" prop="timeLimit" label="有效期（天）" width="120">
        </el-table-column>
        <el-table-column align="center" prop="addTime" label="有效起始时间" show-overflow-tooltip>
        </el-table-column>
        <el-table-column align="center" prop="addTime" label="有效结束时间" show-overflow-tooltip>
        </el-table-column>
        <el-table-column align="center" label="操作">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ShortLink",

  data() {
    return {
      formData: []
    }
  },

  mounted() {
    this.initData()
  },

  methods: {
    async initData() {
      let res
      try {
        res = await this.$axios.get(`/api/shortLink/list`)
        if (res.data.success && res.data.code === 200) {
          this.formData = res.data.result
        } else {
          this.$message.error(res.data.message || '列表数据获取失败')
        }
      } catch (e) {
        this.$message.error(e || '列表数据获取失败')
      } finally {

      }
    },

    onAddClick() {
    }
  }
}
</script>

<style scoped>

</style>
