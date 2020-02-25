<template>
  <el-dialog title="参数编辑" :visible.sync="_visible">
    <el-form ref="form" :model="formData" label-width="100px">
      <el-form-item label="参数名称">
        <el-input v-model="formData.name" placeholder="请输入参数名称"></el-input>
      </el-form-item>
      <el-form-item label="参数类型">
        <el-radio-group v-model="radioData">
          <el-radio-button :label="1">数字</el-radio-button>
          <el-radio-button :label="2">字母</el-radio-button>
          <el-radio-button :label="3">时间</el-radio-button>
          <el-radio-button :label="4">自定义</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="参数配置">

      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="_visible = false">取 消</el-button>
      <el-button type="primary" @click="_visible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import baseDialogModule from '@/mixins/baseDialogModule.js'
  export default {
    mixins: [baseDialogModule],

    data() {
      return {
        radioData: 1
      }
    },
  }
</script>

<style scoped>
  .el-form-item {
    width: 95%;
  }
</style>
