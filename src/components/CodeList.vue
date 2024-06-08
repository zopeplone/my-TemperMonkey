<script setup>
import { onMounted, ref } from 'vue';
import {getCodesFromLocal} from '@/api/codes'
const list = ref([])
onMounted(async() => {
  let res = await getCodesFromLocal()
  list.value = res
})
</script>
<template>
  <div class="list">
    <el-scrollbar>
      <div class="list-item" v-for="item in list" :key="item">{{ item }}</div>
    </el-scrollbar>
  </div>
</template>


<style lang="scss" scoped>
.list{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &-item{
    width: 350px;
    height: 60px;
    background-color: #fff;
    border-radius: 3px;
    margin-bottom: 20px
  }
}
</style>