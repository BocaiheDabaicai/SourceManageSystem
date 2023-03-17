<template>
  <div class="home">
    <div class="description">
      <text>在这里查询资产的相关信息</text>
    </div>
    <div class="detailBody">
      <input placeholder="请输入资产编码" />
      <button class="QRcode">Scan</button>
    </div>
    <div class="left">
      <div class="leftPicture"></div>
    </div>
    <div class="right">
      <div class="rightDetail">
        <h2>🐄资产信息如下</h2>
        <p>资产编码：xhajsk37</p>
        <p>资产类别：计算机</p>
        <p>资产类型：笔记本</p>
        <p>归属部门：计划物控部</p>
        <p>资产内容：i5-12790p 32g 1TB</p>
        <p>备注内容：备用电脑</p>
      </div>
    </div>

  </div>
</template>

<script setup>

</script>

<style scoped>
.home {
  -webkit-animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  font-family: "有爱魔兽圆体 CN Medium";
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
  transform: translate(12%,55%);
  width: 80%;
  text-align: center;
}
.description text{
  font-size: 36px;
  color: white;
}
.detailBody{
  width:90%;
  height: 50%;
  transform: translate(5%,170%);
  background: white;
  border-radius: 5px;
}
.detailBody input{
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ffffff;
  height: 50px;
  width: 70%;
  text-align: left;
}
.QRcode{
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #2a85f6;
  background: #2a85f6;
  height: 50px;
  width: 80px;
  margin-left: 5%;
  color: #ffffff;
}
.QRcode:active{
  background: aliceblue;
  color: #888888;
}
.leftPicture{
  width: 500px;
  height: 500px;
  background-image: url("../assets/selectPaste.jpg");
  background-size: cover;
  border-radius: 25%;
  transform: translate(-75%,35%);
  opacity: 0.9;
}
.left{
  -webkit-animation: fade-in-left 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: fade-in-left 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
@-webkit-keyframes fade-in-left {
  0% {
    -webkit-transform: translateX(-50px);
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fade-in-left {
  0% {
    -webkit-transform: translateX(-50px);
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

.right{
  -webkit-animation: fade-in-right 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: fade-in-right 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
@-webkit-keyframes fade-in-right {
  0% {
    -webkit-transform: translateX(50px);
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fade-in-right {
  0% {
    -webkit-transform: translateX(50px);
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
.rightDetail{
  transform: translate(43%,-100%);
  color: white;

}

</style>