<template>
  <div>
    <!-- 图片上传 -->
    <el-card class="box-card" shadow="never" body-style="padding: 0px;">
      <div slot="header">
        <span>图片上传</span>
      </div>
      <div class="upload">
        <el-upload drag action="" multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将图片拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </div>
    </el-card>

    <el-row style="margin-top: 20px;" :gutter="20">
      <!-- 图片列表 -->
      <el-col :span="15">
        <el-card class="box-card" shadow="never" body-style="padding: 0px;">
          <div slot="header">
            <span>图片列表</span>
            <el-button plain style="margin-left: 20px;"
              ><i class="far fa-trash-alt"></i>&nbsp;删除</el-button
            >
            <el-button plain
              ><i class="far fa-images"></i>&nbsp;开始压缩</el-button
            >
          </div>
          <el-table stripe :data="formData.paramDatas" height="511"> </el-table>
        </el-card>
      </el-col>

      <!-- 选项 -->
      <el-col :span="9">
        <el-card class="box-card" shadow="never" body-style="padding: 0px;">
          <div slot="header">
            <span>选项</span>
            <el-button plain
              ><i class="fas fa-redo-alt"></i>&nbsp;恢复默认</el-button
            >
          </div>
          <el-form style="height: 400px;"> </el-form>
        </el-card>

        <!-- 保存路径 -->
        <el-card
          class="box-card"
          shadow="never"
          body-style="padding: 0px;"
          style="margin-top: 20px;"
        >
          <div slot="header">
            <span>保存路径</span>
            <el-button plain><i class="fas fa-mouse-pointer"></i>&nbsp;选择</el-button>
          </div>
          <el-input
            v-model="formData.url"
            placeholder="请选择压缩完成的文件保存路径"
            class="el-input-url"
            @click.native="onUrlClick"
            @change="onGeneratClick"
            clearable
          >
          </el-input>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        paramDatas: []
      }
    };
  }
};
</script>

<style scoped>
.upload {
  text-align: center;
}
</style>
