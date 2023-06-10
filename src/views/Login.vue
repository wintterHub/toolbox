<template>
  <el-dialog
    title="登录"
    :visible.sync="propVisible"
    width="550px"
    @open="onDialogOpen"
    @close="onDialogClose"
    :close-on-click-modal="false"
  >

    <el-form ref="form" :model="formModel" label-width="125px">
      <el-form-item label="邮箱">
        <el-input
          prop="email"
          v-model="formModel.email"
          placeholder="请输入邮箱"
        ></el-input>
      </el-form-item>
      <el-form-item label="图形验证码">
        <el-input
          prop="captcha"
          ref="captcha"
          v-model="formModel.captcha"
          placeholder="请输入图形验证码"
        ><img slot="suffix" :src="captchaBase64" class="captcha" @click="getCaptcha"/>
        </el-input>
      </el-form-item>
      <el-form-item label="邮箱验证码">
        <el-input
          prop="emailCode"
          ref="emailCode"
          v-model="formModel.emailCode"
          placeholder="请输入邮箱验证码"
        >
          <el-button slot="suffix" type="text" style="margin-right:5px" @click="sendEmailCode"
                     :disabled="sendEmailCodeLoading">
            {{ sendEmailCodeText }}
          </el-button>
        </el-input>
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button plain @click="propVisible = false"
      ><i class="fas fa-times"></i>&nbsp;取 消</el-button
      >
      <el-button
        plain
        @click="onLoginSubmit" :loading="loginLoading"
      ><i class="fas fa-check" v-show="!loginLoading"></i>&nbsp;登 录</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
import baseDialogModule from "@/mixins/baseDialogModule.js";

export default {
  mixins: [baseDialogModule],

  name: "Login",

  props: {
    value: Object
  },

  data() {
    return {
      formModel: {},
      captchaBase64: '',
      sendEmailCodeText: '发送邮箱验证码',
      sendEmailCodeLoading: false,
      count: 30,
      timer: null,
      loginLoading: false
    }
  },

  methods: {
    onDialogOpen() {
      this.getCaptcha()
    },

    onDialogClose() {
      this.formModel = {}
      this.sendEmailCodeText = '发送邮箱验证码'
    },

    async getCaptcha() {
      let res = await this.$axios.get(`/api/member/captcha`)
      if (res.data.success && res.data.code === 200) {
        this.captchaBase64 = res.data.result.captchaBase64
        this.formModel.captchaUUID = res.data.result.uuid
      }
    },

    async onLoginSubmit() {
      let res
      try {
        this.loginLoading = true
        res = await this.$axios.get(`/api/member/emailLogin`, {
          params: {
            email: this.formModel.email,
            emailCode: this.formModel.emailCode
          }
        })
        if (res.data.success && res.data.code === 200) {
          this.propVisible = false
          this.$emit('logged')
        } else {
          this.$message.error(res.data.message || `登录失败`)
        }
      } catch (e) {
        this.$message.error(`登录失败`)
      } finally {
        if (res.data.code === 401 || res.data.code === 403) {
          await this.getCaptcha()
          this.$refs.captcha.clear()
          this.$refs.emailCode.clear()
        }
        this.loginLoading = false
      }
    },

    async sendEmailCode() {
      if (!this.formModel.email) {
        this.$message.warning(`请输入邮箱`)
        return
      }

      if (!this.formModel.captcha) {
        this.$message.warning(`请输入图形验证码`)
        return
      }

      let res
      try {
        this.sendEmailCodeLoading = true
        res = await this.$axios.get(`/api/member/sendEmailCode`, {
          params: {
            email: this.formModel.email,
            captcha: this.formModel.captcha,
            captchaUUID: this.formModel.captchaUUID
          }
        })
        if (res.data.success && res.data.code === 200) {
          this.$message.success(`邮箱验证码发送成功`)
        } else {
          this.$message.error(res.data.message || `邮箱验证码发送失败`)
        }
      } catch (e) {
        this.$message.error(`邮箱验证码发送失败`)
      } finally {
        if (res.data.code === 401 || res.data.code === 403) {
          await this.getCaptcha()
          this.$refs.captcha.clear()
          this.sendEmailCodeLoading = false
        } else {
          this.timer = setInterval(() => {
            if (this.count > 0) {
              this.sendEmailCodeText = `${this.count}秒后重新发送邮箱验证码`
              this.count--
            } else {
              this.sendEmailCodeText = `重新发送邮箱验证码`
              clearInterval(this.timer)
              this.timer = null
              this.sendEmailCodeLoading = false
            }
          }, 1000)
        }
      }
    }
  }
}
</script>

<style scoped>
.el-form-item {
  width: 95%;
}

.captcha {
  height: 38px;
  margin-top: 2px;
}
</style>
