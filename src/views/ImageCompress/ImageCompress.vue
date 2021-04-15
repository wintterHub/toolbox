<template>
  <div>
    <el-row :gutter="20">
      <!-- 图片列表 -->
      <el-col :span="15">
        <el-card class="box-card" shadow="never" body-style="padding: 0px;">
          <div slot="header">
            <span>图片列表</span>
            <el-button plain style="margin-left: 20px;"
              ><i class="far fa-trash-alt"></i>&nbsp;删除</el-button
            >

            <el-button plain style="margin-left: 20px;"
              ><i class="far fa-images"></i>&nbsp;开始压缩</el-button
            >

            <el-popover placement="bottom" width="360" trigger="click">
              <el-upload
                drag
                action=""
                multiple
                :show-file-list="false"
                :auto-upload="false"
                :on-change="onChange"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将图片拖到此处，或<em>点击这里</em>选择图片
                </div>
              </el-upload>
              <el-button plain slot="reference"
                ><i class="fas fa-upload"></i>&nbsp;上传图片</el-button
              >
            </el-popover>
          </div>
          <el-table stripe height="655"></el-table>
        </el-card>
      </el-col>

      <el-col :span="9">
        <image-compress-options v-model="options"></image-compress-options>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ImageCompressOptions from "./ImageCompressOptions.vue";

export default {
  components: {
    ImageCompressOptions
  },

  data() {
    return {
      options: {},
      fileList: []
    };
  },

  methods: {
    onChange(file, fileList) {
      this.fileList = fileList;
      console.log(fileList);
    }
  }
};
</script>
