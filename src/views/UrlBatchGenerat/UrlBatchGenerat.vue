<template>
  <div>
    <el-form ref="form" :model="formData" label-width="100px">
      <!-- 网络地址 -->
      <el-form-item label="网络地址">
        <el-input
          v-model="formData.url"
          placeholder="https://zhaochangjin.com/[参数1]?param=[参数2]"
          class="el-input-url"
          @click.native="onUrlClick"
          @change="onGeneratClick"
        >
        </el-input>
      </el-form-item>

      <el-button
        @click="onAddClick"
        type="primary"
        round
        style="margin-left: 100px; margin-bottom: 22px;"
      >
        添加参数
      </el-button>
      <el-button
        type="primary"
        @click="onGeneratClick"
        round
        :disabled="isAutoGenerat"
      >
        生成地址
      </el-button>
      <el-checkbox
        v-model="isAutoGenerat"
        style="margin-left: 22px;"
        @change="onRealTimeGeneratChange"
      >
        自动生成
      </el-checkbox>

      <el-row>
        <el-col :span="9">
          <!-- 参数列表 -->
          <el-form-item label="参数列表">
            <el-table
              stripe
              :border="true"
              :data="formData.paramDatas"
              size="mini"
              height="469"
              :header-cell-style="{
                background: '#FAFAFA',
                color: '#50646F',
                'line-height': '21px',
                'border-color': '#dcdfe6'
              }"
            >
              <el-table-column align="center" prop="name" label="参数名">
              </el-table-column>
              <el-table-column align="center" prop="type" label="参数类型">
                <template slot-scope="scope">
                  <span v-if="scope.row.type === 'paramConfigNumber'">
                    数字
                  </span>
                  <span v-if="scope.row.type === 'paramConfigLetter'">
                    字母
                  </span>
                  <span v-if="scope.row.type === 'paramConfigTime'">
                    时间
                  </span>
                  <span v-if="scope.row.type === 'paramConfigCustomize'">
                    自定义
                  </span>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="address" label="操作">
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    @click="onEditClick(scope.row, scope.$index)"
                    style="margin-right: 10px;padding: 0;"
                  >
                    编辑
                  </el-button>

                  <el-popover
                    placement="right"
                    v-model="delPopoverVisible[scope.$index]"
                  >
                    <div style="text-align: center;">
                      <el-button
                        type="danger"
                        round
                        size="mini"
                        @click="onDeleteClick(scope.row, scope.$index)"
                      >
                        点击确认删除
                      </el-button>
                    </div>
                    <el-button slot="reference" type="text" style="padding: 0;">
                      删除
                    </el-button>
                  </el-popover>
                </template>
              </el-table-column>
            </el-table>
          </el-form-item>
        </el-col>

        <!-- 生成结果 -->
        <el-col :span="15">
          <div class="generat-content-title">
            <el-button
              class="generat-content-copy-btn"
              type="info"
              style="padding: 3px; float: left;"
              :data-clipboard-text="formData.generatContent"
              >复制</el-button
            >
            <span>生成结果</span>
          </div>
          <el-input
            readonly
            type="textarea"
            rows="20"
            v-model="formData.generatContent"
            resize="none"
          >
          </el-input
        ></el-col>
      </el-row>

      <el-form-item label="结果处理">
        <el-button
          type="primary"
          @click="onBatchDownloadClick"
          round
          :disabled="!formData.generatContent"
        >
          迅雷批量下载
        </el-button>
      </el-form-item>
    </el-form>
    <param-form-dialog
      :visible="paramFormDialogVisible"
      :type="paramFormDialogType"
      :value="currentParamData"
      @close="paramFormDialogVisible = false"
      @confirm="onDialogConfirm"
    >
    </param-form-dialog>
  </div>
</template>

<script>
import ParamFormDialog from "./ParamFormDialog.vue";
import util from "../../commonJS/util.js";
import Clipboard from "clipboard";
import { Message } from "element-ui";
import store from "../../commonJS/urlBatchGenerat.js";

const clipboard = new Clipboard(".generat-content-copy-btn");
clipboard.on("success", function(e) {
  Message.success("已复制到剪切板");
  e.clearSelection();
});
clipboard.on("error", function(e) {
  Message.error("复制失败");
});

export default {
  data() {
    return {
      formData: {
        url: "",
        paramDatas: [],
        generatContent: "",
        generatContentArr: []
      },
      generatText: "",
      paramFormDialogVisible: false,
      paramFormDialogType: "add",
      currentParamData: {},
      currentParamIndex: 0,
      cursorStartPosition: 0,
      cursorEndPosition: 0,

      delPopoverVisible: [],
      isAutoGenerat: true
    };
  },

  components: {
    "param-form-dialog": ParamFormDialog
  },

  computed: {
    // 是否为添加参数（只读）
    isAdd() {
      return "add" === this.paramFormDialogType ? true : false;
    },

    // 是否为编辑参数（只读）
    isEdit() {
      return "edit" === this.paramFormDialogType ? true : false;
    }
  },

  methods: {
    onUrlClick() {
      // 获取光标起始位置
      this.cursorStartPosition = document.querySelector(
        ".el-input-url .el-input__inner"
      ).selectionStart;
      this.cursorEndPosition = document.querySelector(
        ".el-input-url .el-input__inner"
      ).selectionEnd;
    },

    onAddClick() {
      this.paramFormDialogType = "add";
      this.paramFormDialogVisible = true;
      // 递增生成参数名
      let newName = `参数${this.formData.paramDatas.length + 1}`;
      this.currentParamData = { name: newName };
    },

    onEditClick(row, index) {
      this.paramFormDialogType = "edit";
      this.paramFormDialogVisible = true;
      this.currentParamData = row;
      this.currentParamIndex = index;
    },

    onDeleteClick(row, index) {
      this.formData.paramDatas.splice(index, 1);
      this.formData.url = this.formData.url.replaceAll(`[${row.name}]`, "");
      this.delPopoverVisible[index] = false; // 手动关闭Popover
      this.isAutoGenerat && this.onGeneratClick();
    },

    onGeneratClick() {
      // 初始化result为用户输入的url
      let result = [this.formData.url];

      for (let i = 0; i < this.formData.paramDatas.length; i++) {
        /* 类型名称转大写驼峰后拼接成方法名 */
        let upperCamelCaseType = util.toUpperCamelCase(
          this.formData.paramDatas[i].type
        );
        let funcName = `replace${upperCamelCaseType}`;

        result = store[funcName](result, this.formData.paramDatas[i]);
      }

      this.formData.generatList = result;
      this.formData.generatContent = result.join("\n");
      !this.isAutoGenerat && this.$message.success("执行完毕");
    },

    onDialogConfirm(val) {
      if (this.isAdd) {
        this.paramFormDialogVisible = false;
        this.formData.paramDatas.push(val);
        // 拼接参数名
        if (this.formData.url) {
          let a = this.formData.url.substring(0, this.cursorStartPosition);
          let b = this.formData.url.substring(this.cursorEndPosition);
          this.formData.url = `${a}[${val.name}]${b}`;
        } else {
          this.formData.url = `[${val.name}]`;
        }
      } else if (this.isEdit) {
        this.paramFormDialogVisible = false;
        this.formData.paramDatas.splice(this.currentParamIndex, 1, val);
      }
      this.isAutoGenerat && this.onGeneratClick();
    },

    onRealTimeGeneratChange(val) {
      if (val) {
        // 开启自动生成，立即执行一次生成逻辑
        this.onGeneratClick();
      }
    },

    onBatchDownloadClick() {
      let tasks = [];
      this.formData.generatList.forEach((item, index) => {
        tasks.push({
          url: item
        });
      });

      util.loadJs(
        window.location.origin +
          window.location.pathname +
          "/static/thunder-link.js",
        function() {
          // 通过参数创建批量任务
          thunderLink.newTask({
            downloadDir: "", // 指定当前任务的下载目录
            taskGroupName: "分组1", // 指定任务组名称
            tasks: tasks
          });
        }
      );
    }
  }
};
</script>

<style scoped>
.el-form-item {
  width: 95%;
}

.el-table {
  border-color: #dcdfe6;
  border-radius: 4px;
}

.generat-content-title {
  border: 1px solid #dde0e7;
  background-color: #fafafa;
  border-radius: 4px 4px 0 0;
  color: #50646f;
  line-height: 23px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  padding: 6px;
}

.el-row {
  width: 95%;
}
</style>
