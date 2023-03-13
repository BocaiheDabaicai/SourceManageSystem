<template>
  <div class="home">
    <div class="title">
      <van-image
          width="60"
          height="60"
          :src="icon"
      />
      <span class="titleName">资产管理System🐄</span>
    </div>
    <div class="body">
      <van-space
          direction="vertical"
          align="center"
          :size="32"
      >
        <van-button type="normal" color="linear-gradient(to right, #8CCEFF, #8BB3EF)" @click="changeRecord('record')"
                    :loading="record" :loading-size="40" :disabled="select">
          <text class="buttonText">数据录入</text>
        </van-button>
        <van-button type="normal" color="linear-gradient(to right, #8CCEFF, #8BB3EF)" @click="changeSelect('select')"
                    :loading="select" :loading-size="40" :disabled="record">
          <text class="buttonText">数据查询</text>
        </van-button>
      </van-space>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue"
import useSelfRouter from "../hook/useSelfRouter.js";
import getImageUrl from "../style/tool/getImageUrl.js";

const icon = getImageUrl('../../assets/icon.png')
const {statusRef:record, changeStatus:changeRecord} = useSelfRouter()
const {statusRef:select, changeStatus:changeSelect} = useSelfRouter()

// const b = useSelfRouter()
</script>

<style scoped>
.home {
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

.title {
  /*margin-top: 10%;*/
  transform: translateY(240%);
  /*position: relative;*/
  top: 10%;
  height: 20%;
  width: 100%;
  text-align: center;

}

.titleName {
  font-size: 32px;
  color: #ffffff;
  font-family: "有爱魔兽圆体 CN";
}

.body {
  position: relative;
  margin-top: 70%;
  height: 40%;
  width: 100%;
  text-align: center;
}

.buttonText {
  font-family: '有爱魔兽圆体 CN';
  font-size: 24px;
}
</style>