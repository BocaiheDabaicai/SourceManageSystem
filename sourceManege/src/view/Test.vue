<template>
  <div class="home">
    <button>1244</button>
    <text>1234</text>
    <qrcode-vue
      :value="data"
      :size="75"
      :margin="1"
      level="H"
      background="#FFFFFFFF"
      foreground="#356FF2FF"
      class="iconQrc"
    />
    <text>123455</text>
  </div>
</template>

<script setup>
// import QrcodeVue from "qrcode.vue";
// import {ref} from "vue"
// let data  = ref("http://localhost:5173/select")

// import {autoConnect, disAutoConnect, hiprint, defaultElementTypeProvider} from 'vue-plugin-hiprint'
// // autoConnect(); // 默认 自动连接直接打印客户端
// disAutoConnect(); // 取消自动连接直接打印客户端
//
// // 引入后使用示例
// hiprint.init();
// // 下列方法都是没有拖拽设计页面的, 相当于代码模式, 使用代码设计页面
// // 想要实现拖拽设计页面,请往下看 '自定义设计'
// var hiprintTemplate = new hiprint.PrintTemplate();
// var panel = hiprintTemplate.addPrintPanel({ width: 100, height: 130, paperFooter: 340, paperHeader: 10 });
// //文本
// panel.addPrintText({ options: { width: 140, height: 15, top: 20, left: 20, title: 'hiprint插件手动添加text', textAlign: 'center' } });
// //条形码
// panel.addPrintText({ options: { width: 140, height: 35, top: 40, left: 20, title: '123456', textType: 'barcode' } });
// //二维码
// panel.addPrintText({ options: { width: 35, height: 35, top: 40, left: 165, title: '123456', textType: 'qrcode' } });
// //长文本
// panel.addPrintLongText({ options: { width: 180, height: 35, top: 90, left: 20, title: '长文本：hiprint是一个很好的webjs打印,浏览器在的地方他都可以运行' } });
// //打印
// hiprintTemplate.print({});


</script>

<style scoped>
 .home{
   position: relative;
   height: 200px;
   text-align: center;
   top:200px;
 }
 .iconQrc{
   background: rgb(53, 111, 242);
 }
</style>