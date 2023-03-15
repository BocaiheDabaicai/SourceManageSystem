<template>
  <div class="total">
    <div class="description">
      <text>资产信息录入</text>
    </div>
    <div class="detaill">
      <input placeholder="编码自动生成" v-model="onlyId" readonly/>
      <select class="category" v-model="category">
        <option value="">--类别选择--</option>
        <option value="compute">计算机</option>
        <option value="network">网络设备</option>
        <option value="system">操作系统</option>
      </select>
      <select class="category" v-model="type">
        <option value="">--类型选择--</option>
        <option v-for="item in options_choose" :key="item.key" :value="item.value">{{ item.value }}</option>
      </select>
      <select class="category" v-model="apartment">
        <option value="">--归属部门--</option>
        <option v-for="(item,index) in apartments" :key="index" :value="item">{{ item }}</option>
      </select>
      <input :placeholder="textareaTips" :readonly="configRef" v-model="config"/>
      <input placeholder="备注" v-model="extraText"/>
      <div class="buttonGroup">
        <button @click="submit">提交</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, reactive, ref, watch} from "vue"

const onlyId = ref()
const category = ref('');
const type = ref('')
const apartment = ref('')
const extraText = ref()

const options = reactive({
  compute:[
    {key:0,value:"台式机"},
    {key:1,value:"笔记本"},
    {key:2,value:"服务器"},
  ],
  network:[
    {key:0,value:"交换机"},
    {key:1,value:"防火墙"},
    {key:2,value:"路由器"},
  ],
  system:[
    {key:0,value:"windows"},
    {key:1,value:"linux"},
  ]
})
const configRef = ref(true);
const config = ref("");
const apartments = ref(["市场部","计划物控部"])
const options_choose = computed(()=>{
  if(category.value!==''){
    configRef.value = false
    if (category.value === 'compute'){
      return options.compute
    }
    if (category.value === 'network'){
      return options.network
    }
    if (category.value === 'system'){
      return options.system
    }
  }
  configRef.value = true
  config.value = ""
  return []
})
const textareaTips = computed(()=>{
  if(category.value!==''){
    if (category.value === 'compute'){
      return "CPU 内存 硬盘 操作系统 显示器"
    }
    if (category.value === 'network'){
      return "型号"
    }
    if (category.value === 'system'){
      return "版本"
    }
  }
  return "请先选择类别"
})
watch(category,(newValue,oldValue)=>{
  console.log("newValue",newValue)
})

function guid2() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1) + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function submit(){
  if (category.value===''){
    alert("请正确填写资产信息")
  }else{
    onlyId.value = guid2()
    let list = []
    list.push(onlyId.value)
    list.push(category.value)
    list.push(type.value)
    list.push(apartment.value)
    list.push(config.value)
    list.push(extraText.value)
    console.log(list)
  }
}

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