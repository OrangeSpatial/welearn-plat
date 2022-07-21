<template>
  <el-card>
    <el-steps :active="active" align-center finish-status="finish">
      <el-step title="样本集选择" />
      <el-step title="模型选择" />
      <el-step title="任务创建" />
    </el-steps>
  </el-card>
  <el-card>
    <span>数据集创建</span>
    <el-form
        ref="CreatSetFormRef"
        :model="CreatSetFrom"
        :inline="true"
        :rules="setFormRules"
        label-width="120px"
    >
      <el-row>
        <el-col>
          <el-form-item label="影像集名称" prop="imageSetName">
            <el-input placeholder="请输入" v-model="CreatSetFrom.imageSetName" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="训练领域" prop="imageSetType">
            <el-select placeholder="请选择" v-model="CreatSetFrom.imageSetType">
              <el-option
                  v-for="(item, index) in fieldOptions"
                  :key="index"
                  :label="item"
                  :value="item"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="数据集来源链接" prop="dataSourceUrl">
            <el-input placeholder="开源数据集请输入开源url，其他选输入‘自建’"
                      v-model="CreatSetFrom.dataSourceUrl"></el-input>
          </el-form-item>
          <el-form-item label="数据年份" prop="year">
            <el-input placeholder="请输入年份" v-model="CreatSetFrom.year"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="影像分辨率" prop="resolution">
            <el-input placeholder="请输入分辨率，如：30m" v-model="CreatSetFrom.resolution"></el-input>
          </el-form-item>
          <el-form-item label="尺寸大小" prop="size">
            <el-input placeholder="请输入尺寸，如：25×25" v-model="CreatSetFrom.size"></el-input>
          </el-form-item>
          <el-form-item label="影像坐标系" prop="srs">
            <el-input placeholder="若有地理坐标系，请填写" v-model="CreatSetFrom.srs"></el-input>
          </el-form-item>
          <el-form-item label="影像传感器" prop="sensor">
            <el-input placeholder="请输入影像传感器" v-model="CreatSetFrom.sensor"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-form-item label="数据集介绍" prop="imageSetInfo">
          <el-input
              maxlength="200"
              placeholder="请简要介绍数据集, 不要超过200个汉字！"
              show-word-limit
              style="width: 400px"
              :rows="3"
              type="textarea"
              v-model="CreatSetFrom.imageSetInfo"
          />
        </el-form-item>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">立即创建</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts" setup>
import {onBeforeMount, reactive, ref} from "vue";
import {ImageSetModel} from "../../model/ImageSet.model";
import {saveImageSet} from "../../api/imageSet";
import {DLTypeModel} from "../../model/DLType.model";
import {findAll} from "../../api/dlType";
import {ElMessage} from "element-plus";

const CreatSetFormRef = ref()
const CreatSetFrom = reactive<ImageSetModel>(new ImageSetModel())
const setFormRules = {
  imageSetName: [
    {required: true, message: "请输入数据集名称", trigger: "blur"}
  ],
  imageSetType: [
    {required: true, message: "请选择训练领域", trigger: "blur"}
  ],
  imageSetInfo: [
    {
      required: true,
      message: "请简要介绍数据集, 不要超过200汉字！",
      trigger: "blur"
    }
  ]
}

const fieldOptions = ref<DLTypeModel[]>()

const active = ref<number>(1)
function toIndex() {
}

function submitForm() {
  CreatSetFormRef.value.validate((valid: boolean) => {
    if (valid) {
      saveImageSet(CreatSetFrom).then(res => {
        console.log(res);
        resetForm();
        return ElMessage.success("创建成功！");
      }).catch(err => {
        return ElMessage.error("创建失败！请联系管理员");
      });
    } else {
      // console.log('error submit!!')
      return false;
    }
  });
}

function resetForm(){
  CreatSetFormRef.value.resetFields();
}

function initData(){
  findAll().then(res => {
    fieldOptions.value = res.data
  })
}

onBeforeMount(() => {
  initData()
})
</script>

<style lang="scss" scoped>
</style>