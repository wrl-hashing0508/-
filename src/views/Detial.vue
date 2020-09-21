<template>
  <div class="detail">
      <h2>详情页</h2>
      <p><img :src="res.img" alt=""></p>
      <p>{{res.id}}</p>
      <p>{{res.name}}</p>
      <p>{{res.price}}</p>
      <p>{{res.title}}</p>
      <p>{{res.carNum}}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    data(){
        return {
            res:{},
            flag:false,
        }
    },
    computed:{
        ...mapState(['list']),
    },
    methods:{
        setList(){
            let id=this.$route.params.id;
            let {data}=this.$route.query;
            //循环判断一波 值
            
            this.list[data].forEach(item=>{
                if(item.id===id){
                    this.res=item;
                }
            })
            this.flag=true;
            console.log(this.res);
        }
    },
    created(){
        this.setList();
    }
}
</script>

<style>

</style>