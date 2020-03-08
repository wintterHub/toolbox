<template>
  <div>
    <el-form ref="form" :model="formData" label-width="100px">
      <el-form-item label="网络地址">
        <el-input v-model="formData.url" placeholder="https://zhaochangjin.com/[参数1]?param=[参数2]">
          <el-button slot="append" @click="onAddClick">添加参数</el-button>
        </el-input>
      </el-form-item>
      <el-form-item label="参数列表" style="width: 50%;">
        <el-table stripe :border="true" :data="paramData" size="mini"
          :header-cell-style="{background:'#FAFAFA',color:'#50646F','line-height':'21px'}">
          <el-table-column align="center" prop="name" label="参数名">
          </el-table-column>
          <el-table-column align="center" prop="type" label="参数类型">
          </el-table-column>
          <el-table-column align="center" prop="address" label="操作">
            <template>
              <el-button type="text" @click="onEditClick" style="padding: 0px; ">编辑</el-button>
              <el-button type="text" @click="onDeleteClick" style="padding: 0px; ">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="primary" @click="onGeneratClick" style="margin-top: 22px;">生成地址</el-button>
        <span style="margin-left: 22px; color:#606266;">{{generatText}}</span>
      </el-form-item>
      <el-form-item label="生成结果">
        <el-input readonly type="textarea" rows="10" v-model="formData.generatContent"></el-input>
      </el-form-item>
    </el-form>
    <param-form-dialog :visible="paramFormDialogVisible" :type="paramFormDialogType"
      @cancel="paramFormDialogVisible = false" @confirm="onDialogConfirm">
    </param-form-dialog>
  </div>
</template>

<script>
  import ParamFormDialog from './ParamFormDialog.vue'
  export default {
    data() {
      return {
        formData: {},
        paramData: [],
        generatText: '',
        paramFormDialogVisible: false,
        paramFormDialogType: 'add'
      }
    },

    components: {
      'param-form-dialog': ParamFormDialog
    },

    methods: {
      onAddClick() {
        this.type = 'add'
        this.paramFormDialogVisible = true
      },

      onEditClick() {
        this.type = 'edit'
        this.paramFormDialogVisible = true
      },

      onDeleteClick() { },

      onGeneratClick() { },

      onDialogConfirm(val) {
        this.paramFormDialogVisible = false
        this.paramData.push(val)
        console.log(val)
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
