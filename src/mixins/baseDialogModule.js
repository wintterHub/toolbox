/* eslint-disable */
// 该混入模块包含最基础的对话框操作参数
export default {
  data () {
    return {
      confirmLoading: false, // 确定按钮等待效果
      formRef: 'form', // 表单ref
      formData: {} // 表单数据
    }
  },

  props: {
    // 对话框是否显示
    visible: {
      type: Boolean,
      default: false,
      required: false
    }
  },

  computed: {
    // 对话框是否显示。组件内部使用computed显式的处理visible值,保证父子组件数据的单向流动
    _visible: {
      get () {
        return this.visible
      },
      set (val) {
        if (!val) {
          this.$emit('close')
          this.$refs[this.formRef] && this.$refs[this.formRef].resetFields()
          Object.keys(this.formData).forEach(
            key => (this.formData[key] = '')
          )
        }
      }
    }
  }
}
