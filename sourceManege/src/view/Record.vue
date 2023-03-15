<template>
  <div class="total">
    <div class="description">
      <text>资产信息录入</text>
    </div>
    <div class="detaill">
      <input placeholder="编码自动生成" readonly/>
      <select class="category" v-model="category">
        <option value="">--类别选择--</option>
        <option value="计算机">计算机</option>
        <option value="网络设备">网络设备</option>
        <option value="操作系统">操作系统</option>
      </select>
      <select class="category">
        <option value="">--类型选择--</option>
        <option value="计算机">计算机</option>
        <option value="网络设备">网络设备</option>
        <option value="操作系统">操作系统</option>
      </select>
      <select class="category">
        <option value="">--归属部门--</option>
        <option value="计算机">计算机</option>
        <option value="网络设备">网络设备</option>
        <option value="操作系统">操作系统</option>
      </select>
      <input placeholder="配置 型号 版本" />
      <input placeholder="备注" />
      <div class="buttonGroup">
        <button>提交</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref, watch} from "vue"

const category = ref('');
const options = reactive({
  cumpute:{

  }
})
watch(category,(newValue,oldValue)=>{
  console.log("newValue",newValue)
})
</script>

<style scoped>
.total {
  -webkit-animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
@-webkit-keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
.description{
  transform: translate(25%,55%);
  width: 40%;
  text-align: center;
}
.description text{
  font-size: 48px;
  color: white;
}
.detaill{
  width:90%;
  height: 60%;
  transform: translate(5%,15%);
  text-align: center;
}
.detaill input{
  font-size: 24px;
  border-radius: 5px;
  border: 1px solid #8BB3EF;
  margin-top: 30px;
  height: 50px;
}
.detaill .category{
  width:85%;
  font-size: 24px;
  height: 50px;
  margin-top: 30px;
  border-radius: 5px;
  border: 1px solid #8BB3EF;
}
.buttonGroup{
  margin-top: 10%;
}
.buttonGroup button{
  font-size: 24px;
  height: 50px;
  width: 85%;
  border-radius: 5px;
  background: #8BB3EF;
  border: 1px solid #8BB3EF;
  color: white;
}
.buttonGroup button:active{
  background: aliceblue;
  color: #888888;
}
</style>