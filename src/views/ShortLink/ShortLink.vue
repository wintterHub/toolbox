<template>
  <div>
    <el-card class="box-card" shadow="never" body-style="padding: 0px;">
      <div slot="header">
        <span>短链接列表</span>
        <el-button plain @click="onAddClick">
          <i class="fas fa-plus"></i>&nbsp;新建
        </el-button>
      </div>
      <el-table stripe :data="formData" height="calc(100vh - 152px)" empty-text="暂无数据（登录后可查看）">
        <el-table-column prop="shortLink" label="短链接" show-overflow-tooltip width="330">
          <template v-slot="scope">
            <el-button type="text" title="复制" style="padding: 0px" :data-clipboard-text="scope.row.shortLink"
                       class="copy-btn">
              <i class="fa fa-copy"></i>
            </el-button>
            {{ scope.row.shortLink }}
          </template>
        </el-table-column>
        <el-table-column prop="addTime" label="生成时间" show-overflow-tooltip width="220">
        </el-table-column>
        <el-table-column prop="status" label="状态" show-overflow-tooltip width="120">
        </el-table-column>
        <el-table-column prop="pv" label="访问次数" show-overflow-tooltip width="120">
          <template v-slot="scope">
            {{ scope.row.pv }} 次
          </template>
        </el-table-column>
        <el-table-column prop="link" label="原链接" show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import Clipboard from "clipboard";
import { Message } from "element-ui";

const clipboard = new Clipboard(".copy-btn");
clipboard.on("success", function(e) {
  Message.success("已复制到剪切板");
  e.clearSelection();
});
clipboard.on("error", function(e) {
  Message.error("复制失败");
});

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
