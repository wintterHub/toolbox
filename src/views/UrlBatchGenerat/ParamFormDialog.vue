<template>
  <el-dialog
    :title="'参数' + typeName"
    :visible.sync="propVisible"
    width="45%"
    @open="onDialogOpen"
    :close-on-click-modal="false"
  >
    <el-form ref="form" :model="returnValue" label-width="100px">
      <el-form-item label="参数名称">
        <el-input
          :disabled="true"
          v-model="returnValue.name"
          placeholder="请输入参数名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="参数类型">
        <el-radio-group v-model="returnValue.type">
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
          :is="returnValue.type"
          v-model="returnValue[returnValue.type]"
        >
        </components>
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="propVisible = false" round
        ><i class="fas fa-times"></i>&nbsp;取 消</el-button
      >
      <el-button
        type="primary"
        @click="$emit('confirm', JSON.parse(JSON.stringify(returnValue)))"
        round
        ><i class="fas fa-check"></i>&nbsp;确 定</el-button
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

// 初始值
const initValue = {
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
    lowercaseStart: "a".charCodeAt(0),
    lowercaseEnd: "z".charCodeAt(0),
    uppercase: true,
    uppercaseStart: "A".charCodeAt(0),
    uppercaseEnd: "Z".charCodeAt(0)
  },
  // 时间类型参数
  paramConfigTime: {},
  // 自定义类型参数
  paramConfigCustomize: {}
};

export default {
  mixins: [baseDialogModule],

  props: {
    value: Object,
    type: String // add新建、edit编辑
  },

  data() {
    return {
      // 弹窗确认时的返回值
      returnValue: {}
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
        // 使用深拷贝合并对象，重新打开弹窗时才不会保留上次的输入值
        this.returnValue = Object.assign(
          {},
          JSON.parse(JSON.stringify(initValue)),
          JSON.parse(JSON.stringify(this.value))
        );
      } else if (this.isEdit) {
        this.returnValue = JSON.parse(JSON.stringify(this.value));
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
