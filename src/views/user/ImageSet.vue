<template>
  <el-card header="你创建的数据集" shadow="never">
    <div class="dataset">
      <el-card shadow="never" v-for="i in 4" :key="i">
        <el-image class="image" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" fit="fill" />
      </el-card>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import {onBeforeMount} from "vue";

function initData(){
}

onBeforeMount(() => {
})
</script>

<style lang="scss" scoped>
.dataset{
  background-color: #e4eee9;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  .el-card {
    width: 450px;
    .image {
      height: 200px;
      width: 200px;
    }
  }
}
</style>