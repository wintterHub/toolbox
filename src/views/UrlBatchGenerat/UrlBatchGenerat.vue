<template>
  <div>
    <el-form ref="form" :model="formData" label-width="100px">
      <el-form-item label="网络地址">
        <el-input
          v-model="formData.url"
          placeholder="https://zhaochangjin.com/[参数1]?param=[参数2]"
          class="el-input-url"
          @click.native="onUrlClick"
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
        :disabled="isRealTimeGenerat"
      >
        生成地址
      </el-button>
      <el-checkbox
        v-model="isRealTimeGenerat"
        style="margin-left: 22px;"
        @change="onRealTimeGeneratChange"
      >
        实时生成
      </el-checkbox>
      <el-row>
        <el-col :span="9">
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
                  <span v-if="scope.row.type === 'ParamConfigNumber'">
                    数字
                  </span>
                  <span v-if="scope.row.type === 'ParamConfigLetter'">
                    字母
                  </span>
                  <span v-if="scope.row.type === 'ParamConfigTime'">
                    时间
                  </span>
                  <span v-if="scope.row.type === 'ParamConfigCustomize'">
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
        <el-col :span="15">
          <div class="generat-content-title">
            <el-button type="info" style="padding: 3px; float: left;"
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
export default {
  data() {
    return {
      formData: {
        url: "",
        paramDatas: [],
        generatContent: ""
      },
      generatText: "",
      paramFormDialogVisible: false,
      paramFormDialogType: "add",
      currentParamData: {},
      currentParamIndex: 0,
      cursorStartPosition: 0,
      cursorEndPosition: 0,

      delPopoverVisible: [],
      isRealTimeGenerat: true
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
      this.isRealTimeGenerat && this.onGeneratClick();
    },

    onGeneratClick() {
      let result = [];
      for (let i = 0; i < this.formData.paramDatas.length; i++) {
        // 数字类型参数替换
        if (this.formData.paramDatas[i].type === "ParamConfigNumber") {
          if (i === 0) {
            // 如果是第一个参数
            result = this._replaceParamConfigNumber(
              [this.formData.url],
              this.formData.paramDatas[i]
            );
          } else {
            // 不是第一个参数，遍历result数组
            result = this._replaceParamConfigNumber(
              result,
              this.formData.paramDatas[i]
            );
          }
        }
      }
      this.formData.generatContent = result.join("\n");
      !this.isRealTimeGenerat && this.$message.success("执行完毕");
    },

    // 替换Url中数字类型的变量
    _replaceParamConfigNumber(urlArr, paramData) {
      // 获取基本参数
      let name = `[${paramData.name}]`;
      let start = paramData.paramConfig.start;
      let endCondition = paramData.paramConfig.endCondition;
      let endConditionValue = paramData.paramConfig.endConditionValue;
      let action = paramData.paramConfig.action;
      let actionRange = paramData.paramConfig.actionRange;

      // 根据结束条件，计算结束值
      let end = (() => {
        if (endCondition === "count") {
          return action === "up"
            ? start + endConditionValue * actionRange
            : start - endConditionValue * actionRange;
        } else {
          return action === "up"
            ? endConditionValue + 1
            : endConditionValue - 1;
        }
      })();

      // 遍历urlArr，替换参数占位符
      let result = [];
      for (
        let i = start;
        action === "up" ? i < end : i > end;
        i += action === "up" ? actionRange : -actionRange
      ) {
        urlArr.forEach(url => {
          result.push(url.replace(name, i));
        });
      }
      return result;
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
      this.isRealTimeGenerat && this.onGeneratClick();
    },

    onRealTimeGeneratChange(val) {
      if (val) {
        // 开启实时生成，立即执行一次生成逻辑
        this.onGeneratClick();
      }
    }
  },

  mounted() {}
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
