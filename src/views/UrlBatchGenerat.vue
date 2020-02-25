<template>
  <div>
    <el-form ref="form" :model="formData" label-width="100px">
      <el-form-item label="网络地址">
        <el-input v-model="formData.url" placeholder="https://zhaochangjin.com/[参数1]?param=[参数2]">
          <el-button slot="append">添加参数</el-button>
        </el-input>
      </el-form-item>
      <el-form-item label="参数列表" style="width: 50%;">
        <el-table stripe :border="true" :data="tableData" size="mini"
          :header-cell-style="{background:'#FAFAFA',color:'#50646F','line-height':'21px'}">
          <el-table-column align="center" prop="date" label="参数名">
          </el-table-column>
          <el-table-column align="center" prop="name" label="参数类型">
          </el-table-column>
          <el-table-column align="center" prop="address" label="操作">
            <template slot-scope="scope">
              <el-button type="text" @click="editClickHandle" style="padding: 0px; ">编辑</el-button>
              <el-button type="text" @click="deleteClickHandle" style="padding: 0px; ">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="primary" @click="generatClickHandle" style="margin-top: 22px;">生成地址</el-button>
        <span style="margin-left: 22px; color:#606266;">{{generatText}}</span>
      </el-form-item>
      <el-form-item label="生成结果">
        <el-input readonly type="textarea" rows="10" v-model="formData.generatContent"></el-input>
      </el-form-item>
    </el-form>
    <param-edit-dialog :visible="paramEditDialogVisible" @close="paramEditDialogVisible = false">
    </param-edit-dialog>
  </div>
</template>

<script>
  import ParamEditDialog from './ParamEditDialog.vue'
  export default {
    data() {
      return {
        formData: {},
        tableData: [{
          date: '2016-05-02',
          name: '王小虎'
        }, {
          date: '2016-05-04',
          name: '王小虎'
        }, {
          date: '2016-05-01',
          name: '王小虎'
        }, {
          date: '2016-05-03',
          name: '王小虎'
        }],
        generatText: '共生成1个地址',
        paramEditDialogVisible: false
      }
    },

    components: {
      'param-edit-dialog': ParamEditDialog
    },

    methods: {
      editClickHandle() {
        this.paramEditDialogVisible = true
      },

      deleteClickHandle() { },

      generatClickHandle() { }
    },

    mounted() { }

  }
</script>

<style scoped>
  .el-form-item {
    width: 95%;
  }
</style>
