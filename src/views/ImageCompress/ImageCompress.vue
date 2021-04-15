<template>
  <div>
    <el-row :gutter="20">
      <!-- 图片列表 -->
      <el-col :span="15">
        <el-card class="box-card" shadow="never" body-style="padding: 0px;">
          <div slot="header">
            <span>图片列表</span>

            <el-popover
              placement="right"
              v-model="deleteCheckDoubleVisible"
              trigger="manual"
            >
              <div style="text-align: center;">
                <el-button
                  plain
                  type="danger"
                  @click="onDeleteCheckDoubleClick"
                >
                  <i class="fas fa-check-double"></i>&nbsp;确认删除
                </el-button>
              </div>
              <el-button
                :type="isGoldDelete ? 'warning' : ''"
                :plain="!isGoldDelete"
                style="margin-left: 20px;"
                slot="reference"
                @click="onDeleteClick"
                @blur.native="onDeleteBlur"
                ><i class="far fa-trash-alt"></i>&nbsp;删除</el-button
              >
            </el-popover>

            <el-button plain style="margin-left: 20px;"
              ><i class="far fa-images"></i>&nbsp;开始压缩</el-button
            >

            <el-popover
              placement="bottom"
              width="360"
              trigger="click"
              v-model="uploadVisible"
            >
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
          <el-table
            stripe
            height="655"
            :data="fileList"
            @selection-change="onSelectionChange"
          >
            <el-table-column
              type="selection"
              width="55"
              align="center"
            ></el-table-column>
            <el-table-column
              label="图片名称"
              prop="name"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column label="大小" prop="size"></el-table-column>
            <el-table-column label="类型" prop="raw[type]"></el-table-column>
            <el-table-column label="状态">
              <template>
                待压缩
              </template>
            </el-table-column>
          </el-table>
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
import easterEggs from "../../commonJS/easterEggs.js";

export default {
  components: {
    ImageCompressOptions
  },

  data() {
    return {
      options: {},
      fileList: [],
      selectionRows: [],
      deleteCheckDoubleVisible: false,
      uploadVisible: false,
      isGoldDelete: false
    };
  },

  mounted() {
    if (localStorage.getItem("goldDelete") === "1") {
      this.isGoldDelete = true;
    }
  },

  methods: {
    onChange(file, fileList) {
      this.fileList = fileList;
      this.uploadVisible = false;
      console.log(fileList);
    },

    onDeleteBlur() {
      this.deleteCheckDoubleVisible = false;
    },

    onDeleteClick() {
      if (this.fileList.length === 0) {
        this.deleteCheckDoubleVisible = false;
        if (easterEggs.getDeleteMessage()) {
          this.isGoldDelete = true;
        }
      } else if (this.selectionRows.length <= 0) {
        this.deleteCheckDoubleVisible = false;
        this.$message.closeAll();
        if (this.isGoldDelete) {
          this.$message.warning("请选择需要删除的图片");
        } else {
          this.$message.info("请选择需要删除的图片");
        }
      } else {
        this.deleteCheckDoubleVisible = true;
      }
    },

    onDeleteCheckDoubleClick() {
      this.selectionRows.forEach(item => {
        this.fileList.splice(
          this.fileList.findIndex(file => file.uid === item.uid),
          1
        );
      });
      this.deleteCheckDoubleVisible = false;
    },

    onSelectionChange(selection) {
      this.selectionRows = selection;
    },

    onCompressAllClick() {}
  }
};
</script>
