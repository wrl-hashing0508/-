<template>
  <div class="first">
      <van-tabs v-model="actives">
        <van-tab title="点餐">  
            <!-- 典藏组件 -->
            <Dish />
        </van-tab>
        <van-tab title="评价">

        </van-tab>
        <van-tab title="商家">

        </van-tab>
      </van-tabs>
  </div>
</template>

<script>
//引入组件
import Dish from '../components/Dish';

export default {
    components:{
      Dish,
    },
    data() {
      return {
        actives: 0,
      };
    },
    
}
</script>

<style>
</style>