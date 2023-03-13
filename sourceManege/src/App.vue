<script setup>
  import theme from "./style/theme.js";
</script>

<template>
  <van-config-provider :theme-vars="theme">
    <router-view></router-view>
  </van-config-provider>
</template>

<style scoped>

</style>
