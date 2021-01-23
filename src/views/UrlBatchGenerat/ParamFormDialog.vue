<template>
  <el-dialog
    :title="'参数' + typeName"
    :visible.sync="_visible"
    width="45%"
    @open="onDialogOpen"
    @closed="onDialogClosed"
    :close-on-click-modal="false"
  >
    <el-form ref="form" :model="value_" label-width="100px">
      <el-form-item label="参数名称">
        <el-input
          :disabled="true"
          v-model="value_.name"
          placeholder="请输入参数名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="参数类型">
        <el-radio-group v-model="value_.type">
          <el-radio-button label="paramConfigNumber">数字</el-radio-button>
          <el-radio-button label="paramConfigLetter">字母</el-radio-button>
          <el-radio-button disabled label="paramConfigTime"
            >时间</el-radio-button
          >
          <el-radio-button disabled label="paramConfigCustomize"
            >自定义</el-radio-button
          >
        </el-radio-group>
      </el-form-item>
      <el-form-item label="参数配置">
        <components
          :is="value_.type"
          :value="_getParamConfig()"
          @change="onParamConfigChange"
        >
        </components>
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="_visible = false" round>取 消</el-button>
      <el-button
        type="primary"
        @click="$emit('confirm', JSON.parse(JSON.stringify(value_)))"
        round
        >确 定</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
import paramConfigNumber from "./ParamConfigNumber.vue";
import paramConfigLetter from "./ParamConfigLetter.vue";
import paramConfigTime from "./ParamConfigTime.vue";
import paramConfigCustomize from "./ParamConfigCustomize.vue";
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
        name: "",
        type: "paramConfigNumber",
        paramConfigNumber: {
          // 数字类型参数
          start: 1,
          isZeroPadding: false,
          action: "up",
          actionRange: 1,
          endCondition: "endValue",
          endConditionValue: "1"
        },
        // 字母类型参数
        paramConfigLetter: {
          lowercase: true,
          lowercaseStart: "a",
          lowercaseEnd: "z",
          uppercase: true,
          uppercaseStart: "A",
          uppercaseEnd: "Z"
        },
        // 时间类型参数
        paramConfigTime: {},
        // 自定义类型参数
        paramConfigCustomize: {}
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
    },

    typeName() {
      if (this.isAdd) {
        return "添加";
      } else if (this.isEdit) {
        return "编辑";
      } else {
        return "";
      }
    }
  },

  components: {
    paramConfigNumber,
    paramConfigLetter,
    paramConfigTime,
    paramConfigCustomize
  },

  methods: {
    onDialogOpen() {
      if (this.isAdd) {
        this.value_ = Object.assign({}, this.value_, this.value);
      } else if (this.isEdit) {
        this.value_ = JSON.parse(JSON.stringify(this.value));
      }
    },

    onDialogClosed() {},

    onParamConfigChange(val) {
      if (this.isAdd) {
      } else if (this.isEdit) {
        this.value_[this.value_.type] = val;
      }
    },

    _getParamConfig() {
      return this.value_[this.value_.type];
    }
  }
};
</script>

<style scoped>
.el-form-item {
  width: 95%;
}
</style>
