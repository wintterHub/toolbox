<template>
  <div>
    <el-form :model="paramConfig" label-width="70px" label-position="left">

      <el-form-item label="开始值">
        <el-input-number v-model="paramConfig.start" controls-position="right" style="width: 150px;">
        </el-input-number>
        <el-checkbox v-model="paramConfig.isZeroPadding" style="margin-left: 22px;">补零</el-checkbox>
        <el-popover placement="right" trigger="hover">
          <div>不补零格式：1、2、3...1000</div>
          <div style="margin-top: 10px;">补零格式：0001、0002、0003...1000</div>
          <i class="fa fa-question-circle-o" style="margin-left: 22px;" slot="reference"></i>
        </el-popover>
      </el-form-item>

      <el-form-item label="每次动作" style="margin-top:22px;">
        <el-select v-model="paramConfig.action" style="width: 150px;margin-right: 22px;">
          <el-option label="递增" value="up"></el-option>
          <el-option label="递减" value="down"></el-option>
        </el-select>
        <el-input-number v-model="paramConfig.actionRange" controls-position="right" style="width: 150px;">
        </el-input-number>
      </el-form-item>

      <el-form-item label="结束条件" style="margin-top:22px;">
        <el-form-item label="项数">
          <el-input-number v-model="paramConfig.count" controls-position="right" style="width: 150px;">
          </el-input-number>
        </el-form-item>
        <el-form-item label="结束值" style="margin-top:22px;">
          <el-input-number v-model="paramConfig.end" controls-position="right" style="width: 150px;">
          </el-input-number>
        </el-form-item>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },

    watch: {
      paramConfig: {
        handler(newVal) {
          this.$emit('change', newVal)
        },
        deep: true
      },
    },

    props: {
      paramConfig: Object,
      type: String // add新建、edit编辑
    },

    mounted() {
      // 设置默认值
      this.$emit('change', this.paramConfig)
    }
  }
</script>
