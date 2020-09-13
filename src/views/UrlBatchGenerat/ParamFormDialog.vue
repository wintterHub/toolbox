<template>
  <el-dialog
    title="参数编辑"
    :visible.sync="_visible"
    width="45%"
    @open="onDialogOpen"
    @closed="onDialogClosed"
    :close-on-click-modal="false"
  >
    <el-form ref="form" :model="value_" label-width="100px">
      <el-form-item label="参数名称">
        <el-input
          :disabled="isEdit"
          v-model="value_.name"
          placeholder="请输入参数名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="参数类型">
        <el-radio-group v-model="value_.type">
          <el-radio-button label="ParamConfigNumber">数字</el-radio-button>
          <el-radio-button disabled label="ParamConfigLetter"
            >字母</el-radio-button
          >
          <el-radio-button disabled label="ParamConfigTime"
            >时间</el-radio-button
          >
          <el-radio-button disabled label="ParamConfigCustomize"
            >自定义</el-radio-button
          >
        </el-radio-group>
      </el-form-item>
      <el-form-item label="参数配置">
        <components
          :is="value_.type"
          :value="value_.paramConfig"
          @change="onParamConfigChange"
        >
        </components>
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="_visible = false">取 消</el-button>
      <el-button
        type="primary"
        @click="$emit('confirm', JSON.parse(JSON.stringify(value_)))"
        >确 定</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
import ParamConfigNumber from "./ParamConfigNumber.vue";
import ParamConfigLetter from "./ParamConfigLetter.vue";
import ParamConfigTime from "./ParamConfigTime.vue";
import ParamConfigCustomize from "./ParamConfigCustomize.vue";
import baseDialogModule from "@/mixins/baseDialogModule.js";
export default {
  mixins: [baseDialogModule],

  props: {
    value: Object,
    type: String // add新建、edit编辑
  },

  data() {
    return {
      value_: {
        name: "参数1",
        type: "ParamConfigNumber",
        paramConfig: {
          start: 0,
          isZeroPadding: false,
          action: "up",
          actionRange: 1,
          count: 1,
          end: 1
        }
      }
    };
  },

  computed: {
    // 是否为添加（该参数只读）
    isAdd() {
      return "add" === this.type ? true : false;
    },

    // 是否为编辑（该参数只读）
    isEdit() {
      return "edit" === this.type ? true : false;
    }
  },

  components: {
    ParamConfigNumber,
    ParamConfigLetter,
    ParamConfigTime,
    ParamConfigCustomize
  },

  methods: {
    onDialogOpen() {
      if (this.isAdd) {
      } else if (this.isEdit) {
        this.value_ = JSON.parse(JSON.stringify(this.value));
      }
    },

    onDialogClosed() {
      //   this.value_ = {
      //     name: '参数1',
      //     type: 'ParamConfigNumber',
      //     paramConfig: {
      //       start: 0,
      //       isZeroPadding: false,
      //       action: 'up',
      //       actionRange: 1,
      //       count: 1,
      //       end: 1
      //     }
      //   }
      // debugger
      // this.$refs.form.resetFields()
    },

    onParamConfigChange(val) {
      if (this.isAdd) {
      } else if (this.isEdit) {
        this.value_.paramConfig = val;
      }
    }
  }
};
</script>

<style scoped>
.el-form-item {
  width: 95%;
}
</style>
