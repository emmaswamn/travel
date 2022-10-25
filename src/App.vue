<template>
  <router-view  v-slot="{Component}">
    <keep-alive exclude="DetailView">
      <component :is="Component" :key="$route.fullPath"/>
    </keep-alive>
  </router-view>
</template>

<script setup>
</script>

<style scoped>
</style>
