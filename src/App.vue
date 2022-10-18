<template>
  <div>
    <h4>hello world</h4>
    <h4>It's serve side open</h4>
  </div>
  <router-view></router-view>
</template>

<script setup>
  const test = () => {
    console.log('mae');
  }
</script>

<style scoped>
h4 {
  color: yellowgreen;
}
</style>
