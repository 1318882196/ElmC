<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
} 
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    font-size: 0.3rem;
		text-decoration: none;
		list-style: none;
  }
  #app{
    width: 100%;
    height: 100%;
  }
</style>
