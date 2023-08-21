<template>
  <div class="short-link">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card" shadow="never" body-style="padding: 0px;">
          <div slot="header">
            <span>请输入想要缩短的网址</span>
          </div>
          <el-input
            v-model="link"
            placeholder="示例：https://zhaocj.cn/hello"
            class="el-input-url noborder"
            clearable
          >
          </el-input>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card" shadow="never" body-style="padding: 0px;">
          <div slot="header">
            <span>链接有效期</span>
          </div>
          <div style="display: flex">
            <el-radio-group v-model="timeLimit" @change="onTimeLimitChange">
              <el-radio-button label="1">1天</el-radio-button>
              <el-radio-button label="7">7天</el-radio-button>
              <el-radio-button label="30">30天</el-radio-button>
              <el-radio-button label="0">永久</el-radio-button>
              <el-radio-button label="-1">自定义:</el-radio-button>
            </el-radio-group>
            <el-input
              style="width: auto"
              v-model="customize"
              placeholder="自定义有效期（天）"
              class="el-input-url noborder"
              @focus="onCustomizeFocus"
              oninput="value=value.replace(/[^0-9]/g,'')"
            ></el-input>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <div style="display: flex">
      <el-button plain @click="onCreateClick" style="margin-top: 20px;">
        <i class="fas fa-check"></i>&nbsp;生成
      </el-button>
      <el-input style="margin-top: 20px;margin-left: 20px;"
                v-model="shortLink"
                placeholder="请点击左侧生成按钮生成短链接"
                class="el-input-url noborder"
                readonly
      >
      </el-input>

      <el-button plain @click="onCopyShortLinkClick" style="margin-top: 20px;margin-left: 20px;">
        <i class="far fa-copy"></i>&nbsp;复制
      </el-button>
    </div>

    <el-card class="box-card" shadow="never" body-style="padding: 0px;" style="margin-top: 20px;">
      <div slot="header">
        <span>历史记录</span>
      </div>
      <el-table stripe :data="formData" height="calc(100vh - 152px)" empty-text="暂无数据（登录后可查看）">
        <el-table-column prop="shortLink" label="短链接" show-overflow-tooltip width="330">
          <template v-slot="scope">
            <el-button type="text" title="复制" style="padding: 0" :data-clipboard-text="scope.row.shortLink"
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
      customize: null,
      timeLimit: "30",
      link: '',
      formData: [],
      shortLink: ''
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

    async onCreateClick() {
      let isLogged = localStorage.getItem('isLogged')
      if (isLogged !== '1') {
        this.$message.warning('请先登录')
        return
      }
      if (!this.link) {
        this.$message.warning('请输入想要缩短的网址')
        return
      }
      if (this.timeLimit === "-1" && !this.customize) {
        this.$message.warning('请设置链接有效期')
        return
      }
      let res
      try {
        let timeLimit = this.timeLimit === '-1' ? this.customize : this.timeLimit
        res = await this.$axios.get(`/api/shortLink/create?link=${window.encodeURIComponent(this.link)}&timeLimit=${timeLimit}`)
        if (res.data.success && res.data.code === 200) {
          this.shortLink = res.data.result
        } else {
          this.$message.error(res.data.message || '短链接生成失败')
        }
      } catch (e) {
        this.$message.error(e || '短链接生成失败')
      } finally {

      }
    },

    onCustomizeFocus() {
      this.timeLimit = '-1'
    },

    onTimeLimitChange() {
      this.customize = null
    },

    onCopyShortLinkClick() {
    }
  }
}
</script>

<style>
.short-link .el-radio-button:first-child .el-radio-button__inner {
  border-left: 0;
  border-radius: 0;
}

.short-link .el-radio-button__inner {
  border: 0;
  border-right: 1px solid #EBEEF5;
}

.short-link .el-radio-button:last-child .el-radio-button__inner {
  border-radius: 0;
}

.short-link .el-radio-button__inner {
  height: 40px;
}
</style>
