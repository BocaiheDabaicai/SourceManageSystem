<template>
  <div class="home">
    <button>1244</button>
    <text>1234</text>
    <qrcode-vue
      :value="data"
      :size="200"
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
import QrcodeVue from "qrcode.vue";
import {ref} from "vue"
let data  = ref("http://localhost:5173/select")
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