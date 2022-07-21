<template>
  <el-container>
    <el-header>
      <div>
        <img class="logo" src="@/assets/img/DL_logo.png" alt="" />
        <span>深度学习云平台</span>
      </div>
<!--      <div>-->
<!--        <el-link class="help" :underline="false" >帮助</el-link>-->
<!--      </div>-->
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="12">
          <img class="showImage" src="../assets/img/show.png" />
        </el-col>
        <el-col :span="12">
          <div class="login-card">
            <!-- 输入框 -->
            <div class="login_box">
              <img src="../assets/img/DL_logo.png" alt="logo" class="logo">
              <div class="welcome">欢迎登录</div>
              <el-form ref="loginFormRef" class="login_form" :model="loginForm" :rules="login_rules">
                <el-form-item prop="username">
                  <el-input placeholder="输入用户名" v-model="loginForm.username">
                    <template #suffix>
                      <el-icon><User /></el-icon>
                    </template>
                  </el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input type="password" placeholder="输入密码" v-model="loginForm.password">
                    <template #suffix>
                      <el-icon><Key /></el-icon>
                    </template>
                  </el-input>
                </el-form-item>
                <!--                  <el-form-item prop="rememberMe">-->
                <!--                    <el-radio v-model="loginForm.rememberMe" label="rememberMe">记住我</el-radio>-->
                <!--                  </el-form-item>-->
              </el-form>
              <!-- 按钮 -->
              <el-button @click="validateLoginForm()" type="primary">登录</el-button>
              <div class="registerBox">
                <a href="#">忘记密码？</a>
                <a href="#">免费注册</a>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      深度学习云平台 ©2020 WHU
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import {User, Key} from "@element-plus/icons-vue";
import {UserModel} from "../model/User.model";
import {login} from "../api/user";
import {useRouter} from "vue-router";

const loginForm = reactive<UserModel>(new UserModel())
const login_rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 11, message: '密码长度在 6 到 11 个字符', trigger: 'blur' }
  ]
}
const loginFormRef = ref()

function resetLoginForm () {
  loginFormRef.value.resetFields()
}

const router = useRouter()

function validateLoginForm () {
  ElMessage.error('登录失败！')
  loginFormRef.value.validate((valid: boolean) => {
    if (!valid) return
    login(loginForm).then(res => {
      ElMessage.success('登录成功！')
      // 存储token
      window.sessionStorage.setItem('Authorization', res.headers.authorization)
      window.sessionStorage.setItem('username', loginForm.username)
      router.push('/user')
    })
        .catch(function (error) {
          console.log(error)
          return ElMessage.error('登录失败！')
        })
  })
}
</script>


<style lang="scss" scoped>
.el-container{
  height: 100%;
.el-header{
  background-color: #00c8cf;
  box-shadow: 0px 1px 1px #888;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding-left: 0px;
  align-items: center;
  font-size: 20px;
div{
  display: flex;
  align-items: center;
img {
  cursor: pointer;
  width: 40%;
  border-radius: 50%;
}
span {
  font-size: 24px;
}
}
}
.el-main{
  .el-row{
    height: 100%;
    .el-col{
      display: flex;
      align-items: center;
      width: 100%;
      .showImage{
        display: block;
        width: 100%;
      }
      .login-card{
        width: 100%;
        border: none;
        background-color: transparent;
        display: flex;
        justify-content: center;
        .login_box{
          width:500px;
          height:400px;
          padding: 20px;
          background-color: #fff;
          box-shadow: 0px 0px 20px #a7a7a7;
          border-radius: 3px;
          z-index: 1;
          display: flex;
          flex-direction: column;
          .logo{
            width: 80%;
            padding: 10px;
            position: relative;
            left: 50%;
            transform: translate(-50%);
            background-color: #fff;
          }
          .welcome{
            text-align: center;
            color: #2288DD;
            font-size: 20px;
            font-weight: bold;
            padding: 10px 0;
          }
          .registerBox{
            display: flex;
            justify-content: space-between;
            padding-top: 20px;
          }
          .el-button{
            width: 100%;
          }
        }
      }
    }
  }
}

  .el-footer{
    background-color: #00c8cf;
    font-size: 14px;
    --el-footer-height: 40px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
