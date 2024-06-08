<script setup>
import { ref } from 'vue';
import {addNewCodes} from '@/api/codes'
import { ElMessage } from 'element-plus';
const code = ref('')
const addSubmit = async()=>{
  let str = code.value
  code.value = ''
  await addNewCodes(str)
  ElMessage.success('添加成功')
}
</script>
<template>
  <div class="add">
    <el-input v-model="code" style="width:90% " :autosize="{ minRows: 4, maxRows: 10 } " type="textarea"
      placeholder="请输入代码" />
    <el-button @click="addSubmit">添加代码</el-button>
  </div>
</template>


<style lang="scss" scoped>
.add{
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
}
</style>