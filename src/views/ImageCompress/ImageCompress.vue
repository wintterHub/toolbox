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

            <el-button plain style="margin-left: 20px;" @click="onCompressClick"
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
                accept="image/*"
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
            ref="imageTable"
          >
            <el-table-column
              type="selection"
              width="55"
              align="center"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              label="图片名称"
              prop="name"
              min-width="200"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              label="类型"
              prop="raw[type]"
            ></el-table-column>
            <el-table-column show-overflow-tooltip label="状态">
              <template slot-scope="scope">
                <span v-if="!scope.row.compressStatus">待压缩</span>
                <span
                  v-if="scope.row.compressStatus === 1"
                  style="color: #E6A23C;"
                  >压缩中</span
                >
                <span
                  v-if="scope.row.compressStatus === 2"
                  style="color: #67C23A;"
                  >已完成</span
                >
                <span
                  v-if="scope.row.compressStatus === 3"
                  style="color: #F56C6C;"
                  >不支持</span
                >
              </template>
            </el-table-column>
            <el-table-column show-overflow-tooltip label="大小">
              <template slot-scope="scope">
                {{ util.formatSize(scope.row.size, "0 KB") }}
              </template>
            </el-table-column>
            <el-table-column show-overflow-tooltip label="压缩后大小">
              <template slot-scope="scope">
                {{ util.formatSize(scope.row.afterCompressSize, "-") }}
              </template>
            </el-table-column>
            <el-table-column show-overflow-tooltip label="压缩比例">
              <template slot-scope="scope">
                {{ getCompressionRatio(scope.row) }}
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
import compressImagefrom from "../../commonJS/compressImage.js";
import util from "../../commonJS/util.js";

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
      isGoldDelete: false,
      util: util
    };
  },

  mounted() {
    if (localStorage.getItem("goldDelete") === "1") {
      this.isGoldDelete = true;
    }
    /* 尝试从localStorage读取最近一次配置参数，并进行恢复 */
    let imageCompressOptions = localStorage.getItem("imageCompressOptions");
    if (imageCompressOptions) {
      this.options = JSON.parse(imageCompressOptions);
    }
  },

  methods: {
    onChange(file, fileList) {
      this.fileList = fileList;
      this.uploadVisible = false;
      // 选择图片后自动选中
      this.$nextTick(() => {
        if (this._checkImage(file.raw.type)) {
          this.$refs.imageTable.toggleRowSelection(file, true);
        } else {
          this._setTableCall(fileList, file.uid, "compressStatus", 3);
        }
      });
    },

    onDeleteBlur() {
      // 删除按钮失去焦点后隐藏二次确认框
      this.deleteCheckDoubleVisible = false;
    },

    onDeleteClick() {
      if (this.fileList.length === 0) {
        // 彩蛋
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
      // 将选中的图片从列表中删除
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

    onCompressClick() {
      this.$message.closeAll();
      if (this.fileList.length === 0) {
        this.$message.info("请先上传图片");
      } else if (this.selectionRows.length <= 0) {
        this.deleteCheckDoubleVisible = false;
        this.$message.info("请选择需要压缩的图片");
      } else if (this.options.fastCompress) {
        // 开启了快速压缩，异步执行压缩逻辑
        this._asyncCompress();
      } else {
        // 未开启快速压缩，同步执行压缩逻辑
        this._syncCompress();
      }
    },

    // 异步执行压缩逻辑
    _asyncCompress() {
      this.selectionRows.forEach(async row => {
        this._compress(this.fileList, row, this.options);
      });
    },

    // 同步执行压缩逻辑
    async _syncCompress() {
      for (const row of this.selectionRows) {
        await this._compress(this.fileList, row, this.options);
      }
    },

    // 图片文件类型检测
    _checkImage(type) {
      if (type.indexOf("image/") > -1) {
        return true;
      } else {
        return false;
      }
    },

    // 压缩逻辑块
    async _compress(tableList, row, options) {
      if (!this._checkImage(row.raw.type)) {
        this.$message.warning(`已跳过“${row.name}”，不支持该类型的文件`);
        return;
      }
      this._setTableCall(tableList, row.uid, "compressStatus", 1);
      let blob = await compressImagefrom.compress(row.raw, options);
      util.downloadFileByBlob(blob);
      this._setTableCall(tableList, row.uid, "compressStatus", 2);
      this._setTableCall(tableList, row.uid, "afterCompressSize", blob.size);
    },

    // 设置表格中某个单元的值
    _setTableCall(tableList, uid, column, value) {
      let rowIndex = tableList.findIndex(item => item.uid === uid);
      let oldRow = tableList.find(item => item.uid === uid);
      let newRow = Object.assign({}, oldRow, { [column]: value });
      tableList.splice(rowIndex, 1, newRow);
    },

    // 计算压缩率
    getCompressionRatio(row) {
      if (!row.afterCompressSize) {
        return "-";
      } else {
        return Math.round((row.afterCompressSize / row.size) * 100) + "%";
      }
    }
  }
};
</script>
