<template>
  <div>
    <el-form ref="form" :model="formData" label-width="100px">
      <el-form-item label="网络地址">
        <el-input v-model="formData.url" placeholder="https://zhaochangjin.com/[参数1]?param=[参数2]" class="el-input-url"
          @click.native="onUrlClick">
          <el-button slot="append" @click="onAddClick">添加参数</el-button>
        </el-input>
      </el-form-item>
      <el-form-item label="参数列表" style="width: 50%;">
        <el-table stripe :border="true" :data="formData.paramDatas" size="mini"
          :header-cell-style="{background:'#FAFAFA',color:'#50646F','line-height':'21px'}">
          <el-table-column align="center" prop="name" label="参数名">
          </el-table-column>
          <el-table-column align="center" prop="type" label="参数类型">
          </el-table-column>
          <el-table-column align="center" prop="address" label="操作">
            <template slot-scope="scope">
              <el-button type="text" @click="onEditClick(scope.row,scope.$index)" style="padding: 0px; ">编辑</el-button>
              <el-button type="text" @click="onDeleteClick" style="padding: 0px; ">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="primary" @click="onGeneratClick" style="margin-top: 22px;">生成地址</el-button>
        <span style="margin-left: 22px; color:#606266;">{{generatText}}</span>
      </el-form-item>
      <el-form-item label="生成结果">
        <el-input readonly type="textarea" rows="10" v-model="formData.generatContent">
        </el-input>
      </el-form-item>
    </el-form>
    <param-form-dialog :visible="paramFormDialogVisible" :type="paramFormDialogType" :value="currentParamData"
      @close="paramFormDialogVisible = false" @confirm="onDialogConfirm">
    </param-form-dialog>
  </div>
</template>

<script>
  import ParamFormDialog from './ParamFormDialog.vue'
  export default {
    data() {
      return {
        formData: {
          paramDatas: [],
          generatContent: ''
        },
        generatText: '',
        paramFormDialogVisible: false,
        paramFormDialogType: 'add',
        currentParamData: {},
        currentParamIndex: 0,
        cursorStartPosition: 0,
        cursorEndPosition: 0
      }
    },

    components: {
      'param-form-dialog': ParamFormDialog
    },

    computed: {
      // 是否为添加参数（只读）
      isAdd() {
        return 'add' === this.paramFormDialogType ? true : false
      },

      // 是否为编辑参数（只读）
      isEdit() {
        return 'edit' === this.paramFormDialogType ? true : false
      }
    },

    methods: {
      onUrlClick() {
        // 获取光标起始位置
        this.cursorStartPosition = document.querySelector('.el-input-url .el-input__inner').selectionStart
        this.cursorEndPosition = document.querySelector('.el-input-url .el-input__inner').selectionEnd
      },

      onAddClick() {
        this.paramFormDialogType = 'add'
        this.paramFormDialogVisible = true
      },

      onEditClick(row, index) {
        this.paramFormDialogType = 'edit'
        this.paramFormDialogVisible = true
        this.currentParamData = row
        this.currentParamIndex = index
      },

      onDeleteClick() { },

      onGeneratClick() {
        let result = []
        for (let i = 0; i < this.formData.paramDatas.length; i++) {
          if (this.formData.paramDatas[i].type === 'ParamConfigNumber') {
            // 数字类型配置
            if (i === 0) {
              result = this._replaceParamConfigNumber([this.formData.url], this.formData.paramDatas[i])
            } else {
              result = this._replaceParamConfigNumber(result, this.formData.paramDatas[i])
            }
          }
        }
        this.formData.generatContent = result.join('\n')
      },

      // 替换Url中数字类型的变量
      _replaceParamConfigNumber(urlArr, paramData) {
        let name = `[${paramData.name}]`
        let start = paramData.paramConfig.start
        let end = paramData.paramConfig.end
        let action = paramData.paramConfig.action
        let actionRange = paramData.paramConfig.actionRange
        let result = []
        if (action === 'up') {
          for (let i = start; i < end; i += actionRange) {
            urlArr.forEach(url => {
              result.push(url.replace(name, i))
            })
          }
        } else if (action === 'down') {
          for (let i = start; i < end; i -= actionRange) {
            urlArr.forEach(url => {
              result.push(this.formData.url.replace(name, i))
            })
          }
        }
        return result
      },

      onDialogConfirm(val) {
        if (this.isAdd) {
          this.paramFormDialogVisible = false
          this.formData.paramDatas.push(val)
          // 拼接参数名
          let a = this.formData.url.substring(0, this.cursorStartPosition)
          let b = this.formData.url.substring(this.cursorEndPosition)
          this.formData.url = `${a}[${val.name}]${b}`
        } else if (this.isEdit) {
          this.paramFormDialogVisible = false
          this.formData.paramDatas.splice(this.currentParamIndex, 1, val)
        }
      }
    },

    mounted() { }

  }
</script>

<style scoped>
  .el-form-item {
    width: 95%;
  }
</style>
