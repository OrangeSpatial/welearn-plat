<template>
  <div class="common-layout">
    <el-container>
      <el-header>
          <el-menu
              :default-active="activeIndex"
              mode="horizontal"
              :ellipsis="false"
              @select="handleSelect"
          >
            <el-menu-item index="/index">
              <img class="logo" src="@/assets/img/DL_logo.png" alt="" />
            </el-menu-item>
            <div class="flex-grow" />
            <el-menu-item index="/dataset">数据集</el-menu-item>
            <el-menu-item index="/model">模型</el-menu-item>
            <el-menu-item index="/task">学习任务</el-menu-item>
            <el-menu-item index="/help">
              <div class="user-center">
                <el-avatar> 成 </el-avatar>
              </div>
            </el-menu-item>
          </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import {onBeforeMount, ref} from "vue";
import {useRouter} from "vue-router";
const router = useRouter()
// 菜单
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  router.push('/user'+key)
}

function init(){
}

onBeforeMount(() => {
})
</script>

<style lang="scss" scoped>
.common-layout{
  height: 100%;
  background: #eeeeee;
  .el-container{
    height: 100%;
    .el-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 20px;
      .el-menu {
        width: 100%;
        .flex-grow {
          flex-grow: 1;
        }
        img {
          height: 58px;
        }
        .user-center {
          height: 58px;
          display: flex;
          align-items: center;
          .el-avatar{
            --el-avatar-bg-color: #00c8cf;
          }
        }
      }
    }
    .el-main{
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
}
</style>