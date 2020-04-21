<template>
  <div>
    <el-form :model="value" label-width="70px" label-position="left">

      <el-form-item label="开始值">
        <el-input-number v-model="value.start" controls-position="right" style="width: 150px;">
        </el-input-number>
        <el-checkbox v-model="value.isZeroPadding" style="margin-left: 22px;">补零</el-checkbox>
        <el-popover placement="right" trigger="hover">
          <div>不补零格式：1、2、3 ... 1000</div>
          <div style="margin-top: 10px;">补零格式：0001、0002、0003 ... 1000</div>
          <i class="fa fa-question-circle-o" style="margin-left: 22px;" slot="reference"></i>
        </el-popover>
      </el-form-item>

      <el-form-item label="每次动作" style="margin-top:22px;">
        <el-select v-model="value.action" style="width: 150px;margin-right: 22px;">
          <el-option label="递增" value="up"></el-option>
          <el-option label="递减" value="down"></el-option>
        </el-select>
        <el-input-number v-model="value.actionRange" controls-position="right" style="width: 150px;">
        </el-input-number>
      </el-form-item>

      <el-form-item label="结束条件" style="margin-top:22px;">
        <el-form-item label="项数">
          <el-input-number v-model="value.count" controls-position="right" style="width: 150px;">
          </el-input-number>
        </el-form-item>
        <el-form-item label="结束值" style="margin-top:22px;">
          <el-input-number v-model="value.end" controls-position="right" style="width: 150px;">
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
      value: {
        handler(newVal) {
          this.$emit('change', newVal)
        },
        deep: true
      },
    },

    props: {
      value: Object,
      type: String // add新建、edit编辑
    },

    mounted() {
      // 设置默认值
      this.$emit('change', this.value)
    }
  }
</script>
