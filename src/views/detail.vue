<template>
  <div class="detail">
      <h2>详情页</h2>
      <div class="detials">
          <p><img :src="detail_list.img" alt=""></p>
          <!-- <p>{{detail_list.color}}</p> -->
          <p :style="{color:detail_list.color}">{{detail_list.name}}</p>
          <p :style="{color:detail_list.color}">{{detail_list.tilte}}</p>
          <p :style="{color:detail_list.color}">{{detail_list.address}}</p>
          <p :style="{color:detail_list.color}">{{detail_list.age}}</p>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    computed:{
      ...mapState(['detail_list']),
    }
}
</script>

<style>

</style>