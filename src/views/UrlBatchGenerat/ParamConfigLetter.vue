<template>
  <div>
    <el-form :model="value" label-position="left">
      <el-form-item>
        <el-checkbox v-model="value.lowercase">
          小写
        </el-checkbox>
        从
        <el-select
          v-model="value.lowercaseStart"
          style="width: 150px;"
          :disabled="!value.lowercase"
        >
          <el-option
            v-for="item in lowercaseLetters"
            :key="item.charCodeAt(0)"
            :value="item.charCodeAt(0)"
            :label="item"
          ></el-option>
        </el-select>
        到
        <el-select
          v-model="value.lowercaseEnd"
          style="width: 150px;"
          :disabled="!value.lowercase"
        >
          <el-option
            v-for="item in lowercaseLetters"
            :key="item.charCodeAt(0)"
            :value="item.charCodeAt(0)"
            :label="item"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item style="margin-top:22px;">
        <el-checkbox v-model="value.uppercase">
          大写
        </el-checkbox>
        从
        <el-select
          v-model="value.uppercaseStart"
          style="width: 150px;"
          :disabled="!value.uppercase"
        >
          <el-option
            v-for="item in uppercaseLetters"
            :key="item.charCodeAt(0)"
            :value="item.charCodeAt(0)"
            :label="item"
          ></el-option>
        </el-select>
        到
        <el-select
          v-model="value.uppercaseEnd"
          style="width: 150px;"
          :disabled="!value.uppercase"
        >
          <el-option
            v-for="item in uppercaseLetters"
            :key="item.charCodeAt(0)"
            :value="item.charCodeAt(0)"
            :label="item"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import util from "../../commonJS/util.js";
export default {
  props: {
    value: Object
  },

  data() {
    return {
      lowercaseLetters: util.getLowercaseLetters(),
      uppercaseLetters: util.getUppercaseLetters()
    };
  }
};
</script>
