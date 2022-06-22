<template>
  <div>
    <!-- 压缩质量 -->
    <el-card class="box-card" shadow="never" body-style="padding: 0px;">
      <div slot="header">
        <span>压缩质量</span>
        <el-popover placement="top" trigger="click">
          <div class="sunken">
            <span>输出图像的质量。注意，值为1时，输出图像可能比原来更大。</span>
            <span style="margin-top: 15px; display: block;">示例：</span>
            <el-table
              :data="tableData"
              :border="true"
              size="small"
              style="margin-top: 15px; width: 500px;"
              stripe
              :header-cell-style="{
                background: '#F7F7F7'
              }"
            >
              <el-table-column
                prop="quality"
                label="压缩质量"
              ></el-table-column>
              <el-table-column
                prop="inputSize"
                label="输入大小"
              ></el-table-column>
              <el-table-column
                prop="outputSize"
                label="输出大小"
              ></el-table-column>
              <el-table-column
                prop="compressionRatio"
                label="压缩比例"
              ></el-table-column>
              <el-table-column
                prop="description"
                label="说明"
              ></el-table-column>
            </el-table>
          </div>
          <i class="fa fa-question-circle-o" slot="reference"></i>
        </el-popover>
        <el-button plain @click="onResetQualityClick">
          <i class="fas fa-redo-alt"></i>
          &nbsp;恢复默认
        </el-button>
      </div>
      <el-slider
        :step="0.1"
        style="margin: 0 20px;"
        v-model="options.quality"
        :max="1"
      >
      </el-slider>
    </el-card>

    <!-- 高级选项 -->
    <el-card
      class="box-card"
      shadow="never"
      body-style="padding: 0px;"
      style="margin-top: 20px;"
    >
      <div slot="header">
        <span>
          高级选项
          <el-popover placement="top" trigger="click">
            <div class="sunken">
              <span>如不清楚选项的用途，保持默认值即可。</span>
            </div>
            <i class="fa fa-question-circle-o" slot="reference"></i>
          </el-popover>
        </span>
        <el-button plain @click="onResetOptionsClick">
          <i class="fas fa-redo-alt"></i>
          &nbsp;恢复默认
        </el-button>
      </div>
      <el-form
        style="height: calc(100vh - 300px); padding: 20px; overflow-y: auto;"
        label-width="97px"
        label-position="left"
      >
        <el-form-item label="严格模式"
          ><el-switch
            active-color="#13ce66"
            inactive-color="#ff4949"
            v-model="options.strict"
          >
          </el-switch>
          <el-popover placement="top" trigger="click">
            <div class="sunken">
              <span
                >表示在压缩图像的大小大于原始图像的大小时是否输出原始图像而不是压缩图像，但下列情况除外：</span
              >
              <ul style="margin: 12px 0 0;">
                <li>设置了“最小宽度”选项，且其值大于图像的原始宽度</li>
                <li>设置了“最小高度”选项，且其值大于图像的原始高度</li>
                <li>设置了“宽度”选项，且其值大于图像原始宽度</li>
                <li>设置了“高度”选项，且其值大于图像原始高度</li>
                <li>设置了“MIME类型”选项，且其值与图像的MIME类型不同</li>
              </ul>
            </div>
            <i class="fa fa-question-circle-o" slot="reference"> </i>
          </el-popover>
        </el-form-item>
        <el-form-item label="检查方向"
          ><el-switch
            active-color="#13ce66"
            inactive-color="#ff4949"
            v-model="options.checkOrientation"
          >
          </el-switch>
          <el-popover placement="top" trigger="click">
            <div class="sunken">
              <span
                >表示是否读取图像的Exif方向值（仅限JPEG图像），然后使用该值自动旋转或翻转图像。</span
              >
              <ul style="margin: 12px 0 0;">
                <li>
                  不要总是相信这一点，因为有些JPEG图像的方向值不正确（不是标准的）
                </li>
                <li>
                  如果目标映像的大小太大（例如，大于10
                  MB），则应禁用此选项以避免内存不足崩溃
                </li>
                <li>
                  压缩后图像的Exif信息将被删除，因此如果您需要Exif信息，可能还需要上载原始图像
                </li>
              </ul>
            </div>
            <i class="fa fa-question-circle-o" slot="reference">
            </i> </el-popover
        ></el-form-item>
        <el-form-item label="最大宽度">
          <el-input-number
            :min="1"
            v-model="options.maxWidth"
            placeholder="无限制"
            @change="onMaxWidthChange"
          ></el-input-number>
          像素
          <el-popover placement="top" trigger="click">
            <div class="sunken">
              <span>输出图像的最大宽度。该值应大于0。</span>
              <div style="margin-top: 15px;">
                为避免获得空白输出图像，可能需要将该值设置在一定的范围内，因为<a
                  href="https://stackoverflow.com/questions/6081483/maximum-size-of-a-canvas-element"
                  target="_blank"
                  >canvas元素的大小限制</a
                >，建议不超过4096。
              </div>
            </div>
            <i class="fa fa-question-circle-o" slot="reference"> </i>
          </el-popover>
        </el-form-item>
        <el-form-item label="最大高度">
          <el-input-number
            :min="1"
            v-model="options.maxHeight"
            placeholder="无限制"
            @change="onMaxHeightChange"
          ></el-input-number>
          像素
          <el-popover placement="top" trigger="click">
            <div class="sunken">
              <span>输出图像的最大高度。该值应大于0。</span>
              <div style="margin-top: 15px;">
                为避免获得空白输出图像，可能需要将该值设置在一定的范围内，因为<a
                  href="https://stackoverflow.com/questions/6081483/maximum-size-of-a-canvas-element"
                  target="_blank"
                  >canvas元素的大小限制</a
                >，建议不超过4096。
              </div>
            </div>
            <i class="fa fa-question-circle-o" slot="reference"> </i>
          </el-popover>
        </el-form-item>
        <el-form-item label="最小宽度">
          <el-input-number
            :min="1"
            :max="options.maxWidth"
            v-model="options.minWidth"
            placeholder="无限制"
          ></el-input-number>
          像素
          <el-popover placement="top" trigger="click">
            <div class="sunken">
              <span>输出图像的最小宽度。该值应大于0且不应大于“最大宽度”。</span>
            </div>
            <i class="fa fa-question-circle-o" slot="reference"> </i>
          </el-popover>
        </el-form-item>
        <el-form-item label="最小高度">
          <el-input-number
            :min="1"
            :max="options.minWidth"
            v-model="options.minHeight"
            placeholder="无限制"
          ></el-input-number>
          像素
          <el-popover placement="top" trigger="click">
            <div class="sunken">
              <span>输出图像的最小高度。该值应大于0且不应大于“最大高度”。</span>
            </div>
            <i class="fa fa-question-circle-o" slot="reference"> </i>
          </el-popover>
        </el-form-item>
        <el-form-item label="宽度">
          <el-input-number
            :min="1"
            v-model="options.width"
            placeholder="与源图相同"
          ></el-input-number>
          像素
          <el-popover placement="top" trigger="click">
            <div class="sunken">
              <span
                >输出图像的宽度。如果未指定，将使用原图宽度，或者如果设置了“高度”选项，则将根据自然纵横比自动计算宽度。</span
              >
            </div>
            <i class="fa fa-question-circle-o" slot="reference"> </i>
          </el-popover>
        </el-form-item>
        <el-form-item label="高度">
          <el-input-number
            :min="1"
            v-model="options.hidth"
            placeholder="与源图相同"
          ></el-input-number>
          像素
          <el-popover placement="top" trigger="click">
            <div class="sunken">
              <span
                >输出图像的高度。如果未指定，将使用原图高宽度，或者如果设置了“宽度”选项，则将根据自然纵横比自动计算高度。</span
              >
            </div>
            <i class="fa fa-question-circle-o" slot="reference"> </i>
          </el-popover>
        </el-form-item>
        <el-form-item label="MIME类型">
          <el-input
            placeholder="自动匹配"
            style="width:180px"
            v-model="options.mimeType"
          ></el-input>
          <el-popover placement="top" trigger="click">
            <div class="sunken">
              <span
                >输出图像的MIME类型。默认情况下，将使用源图像文件的原始MIME类型。</span
              >
            </div>
            <i class="fa fa-question-circle-o" slot="reference"> </i>
          </el-popover>
        </el-form-item>
        <el-form-item label="转换器大小">
          <el-input-number
            :min="0"
            v-model="options.convertSize"
            placeholder="5000000"
          ></el-input-number>
          字节
          <el-popover placement="top" trigger="click">
            <div class="sunken">
              <span>
                超过此值的PNG文件将转换为JPEG。
              </span>
              <span style="margin-top: 15px; display: block;">示例：</span>
              <el-table
                :data="tableData2"
                :border="true"
                size="small"
                style="margin-top: 15px; width: 600px;"
                stripe
                :header-cell-style="{ background: '#F7F7F7' }"
              >
                <el-table-column
                  prop="convertSize"
                  label="压缩质量"
                  width="80"
                ></el-table-column>
                <el-table-column
                  prop="inputSize"
                  label="输入大小（类型）"
                ></el-table-column>
                <el-table-column
                  prop="outputSize"
                  label="输出大小（类型）"
                ></el-table-column>
                <el-table-column
                  prop="compressionRatio"
                  label="压缩比例"
                  width="100"
                ></el-table-column>
              </el-table>
            </div>
            <i class="fa fa-question-circle-o" slot="reference"> </i>
          </el-popover>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
const initOptions = {
  quality: 0.8, // 压缩质量
  strict: true, // 严格模式
  checkOrientation: true, // 检查方向
  maxWidth: undefined, // 最大宽度
  maxHeight: undefined, // 最大高度
  minWidth: undefined, // 最小宽度
  minHeight: undefined, // 最小高度
  width: undefined, // 宽度
  height: undefined, // 高度
  mimeType: undefined, // MIME类型
  convertSize: 0 // 转换器大小
};

export default {
  model: {
    prop: "value",
    event: "change"
  },

  props: {
    value: {
      type: Object
    }
  },

  computed: {
    options: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("change", val);
      }
    }
  },

  watch: {
    options: {
      handler(val) {
        localStorage.setItem("imageCompressOptions", JSON.stringify(val));
      },
      deep: true
    }
  },

  mounted() {
    this.options = JSON.parse(JSON.stringify(initOptions));
  },

  data() {
    return {
      tableData: [
        {
          quality: "0",
          inputSize: "2.12 MB",
          outputSize: "114.61 KB",
          compressionRatio: "94.72%",
          description: "-"
        },
        {
          quality: "0.2",
          inputSize: "2.12 MB",
          outputSize: "349.57 KB",
          compressionRatio: "83.90%",
          description: "-"
        },
        {
          quality: "0.4",
          inputSize: "2.12 MB",
          outputSize: "517.10 KB",
          compressionRatio: "76.18%",
          description: "-"
        },
        {
          quality: "0.6",
          inputSize: "2.12 MB",
          outputSize: "694.99 KB",
          compressionRatio: "67.99%",
          description: "推荐"
        },
        {
          quality: "0.8",
          inputSize: "2.12 MB",
          outputSize: "1.14 MB",
          compressionRatio: "46.41%",
          description: "推荐"
        },
        {
          quality: "1",
          inputSize: "2.12 MB",
          outputSize: "2.12 MB",
          compressionRatio: "0%",
          description: "不推荐"
        }
      ],

      tableData2: [
        {
          convertSize: "5 MB",
          inputSize: "1.87 MB (PNG)",
          outputSize: "1.87 MB (PNG)",
          compressionRatio: "0%"
        },
        {
          convertSize: "5 MB",
          inputSize: "5.66 MB (PNG)",
          outputSize: "450.24 KB (JPEG)",
          compressionRatio: "92.23%"
        },
        {
          convertSize: "5 MB",
          inputSize: "9.74 MB (PNG)",
          outputSize: "883.89 KB (JPEG)",
          compressionRatio: "91.14%"
        }
      ]
    };
  },

  methods: {
    onMaxWidthChange(val, oldValue) {
      // 最小宽度不能大于最大宽度
      if (val < this.options.minWidth) {
        this.options.minWidth = val;
      }
    },

    onMaxHeightChange(val, oldValue) {
      // 最小高度不能大于最大高度
      if (val < this.options.minHeight) {
        this.options.minHeight = val;
      }
    },

    onResetQualityClick() {
      this.options.quality = initOptions.quality;
    },

    onResetOptionsClick() {
      this.options = Object.assign({}, initOptions, {
        quality: this.options.quality
      });
    }
  }
};
</script>
