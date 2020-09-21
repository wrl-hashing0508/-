<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style>
*{
  margin:0;
  padding:0;
  list-style: none;
}
#app{
  display: flex;
}
#app .content{
  width:cale(100%-256px);
}
</style>