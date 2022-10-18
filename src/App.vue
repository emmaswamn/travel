<template>
    <div>
        <h4>hello world</h4>
        <h4>It's serve side open</h4>
    </div>
    <router-view></router-view>
</template>

<script setup>
    const testFunction = () => {
      console.log('newline');
    }

    const turnon = () => {
        console.log('turn on');
    }
</script>

<style scoped>
  h4{
    color: yellowgreen;
  }
</style>