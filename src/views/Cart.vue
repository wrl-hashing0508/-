<template>
  <div class="car">
      <h2>购物车</h2>
      <ul class="cont">
        <li v-for="(item,index) in car_list" :key="index">
            <p></p>
            <img :src="item.img" alt="">
            <span>名称:{{item.name}}</span>
            <span>价格:{{item.price}}</span>
            <p v-show="item.carNum>=1">
                <button @click="CUT_CART(item)">-</button>
                <b>{{item.carNum}}</b>
            </p>
            <button @click="ADD_CART(item)">+</button>
            <span>介绍:{{item.title}}</span>
        </li>
      </ul>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
    created(){
      console.log(this.car_list);
    },
    computed:{
      ...mapState(['car_list']),
    },
    methods:{
      ...mapMutations(['ADD_CART','CUT_CART']),
    }
}
</script>

<style>
.cont li{
    display: flex;
    margin:5px;
    align-items: center;
}
.cont li span{
    margin:0 5px;
}
.cont li img{
    border-radius: 50%;
}
.cont li span:last-child{
    color:slategrey;
}
.cont li span:nth-child(3){
    color:tomato;
    font-size: 15px;
}
.cont li span:nth-child(4){
    color:sandybrown;
    font-weight: bolder;
}
</style>