<template>
  <el-dialog title="参数编辑" :visible.sync="_visible" width="45%" @open="onDialogOpen" :close-on-click-modal="false">
    <el-form ref="form" :model="paramData_" label-width="100px">
      <el-form-item label="参数名称">
        <el-input v-model="paramData_.name" placeholder="请输入参数名称"></el-input>
      </el-form-item>
      <el-form-item label="参数类型">
        <el-radio-group v-model="paramData_.type">
          <el-radio-button label="ParamConfigNumber">数字</el-radio-button>
          <el-radio-button label="ParamConfigLetter">字母</el-radio-button>
          <el-radio-button label="ParamConfigTime">时间</el-radio-button>
          <el-radio-button label="ParamConfigCustomize">自定义</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="参数配置">
        <components :is="paramData_.type" :paramConfig.sync="paramData_.paramConfig" @change="onParamConfigChange">
        </components>
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="$emit('cancel')">取 消</el-button>
      <el-button type="primary" @click="$emit('confirm',paramData_)">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import ParamConfigNumber from './ParamConfigNumber.vue'
  import ParamConfigLetter from './ParamConfigLetter.vue'
  import ParamConfigTime from './ParamConfigTime.vue'
  import ParamConfigCustomize from './ParamConfigCustomize.vue'
  import baseDialogModule from '@/mixins/baseDialogModule.js'
  export default {
    mixins: [baseDialogModule],

    props: {
      paramData: Object,
      type: String // add新建、edit编辑
    },

    data() {
      return {
        paramData_: {
          name: '参数1',
          type: 'ParamConfigNumber',
          paramConfig: {
            start: 1,
            isZeroPadding: false,
            action: 'up',
            actionRange: 1,
            count: 1,
            end: 1
          }
        }
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
        this.paramData_ = this.paramData ? JSON.parse(JSON.stringify(this.paramData)) : this.paramData_
      },

      onParamConfigChange(val) {
        this.paramData_.paramConfig = val
      }
    }
  }
</script>

<style scoped>
  .el-form-item {
    width: 95%;
  }
</style>
