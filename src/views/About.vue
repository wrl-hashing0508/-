<template>
    <div class="box">
        <header>
          <h1>欢迎来到富婆俱乐部</h1>
        </header>
        <main>
            <router-view />
        </main>
        <footer>
            <router-link to="/about/first" tag="b">首页</router-link>
            <router-link to="/about/home" tag="b">商场</router-link>
            <router-link to="/about/cart" tag="b">购物车</router-link>
            <router-link to="/about/my" tag="b">我的</router-link>
        </footer>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
export default {    
    created(){
      this.getList();
    },
    computed:{
      ...mapState(['list']),
    },
    methods:{
      ...mapActions(['getList'])
    }
}
</script>

<style>
*{
    margin:0;
    padding:0;
    list-style: none;
}
html,body,#app,.box{
    width: 100%;
    height: 100%;
}
.box{
    display: flex;
    flex-direction: column;
    background:snow;
}
.box main{
    flex:1;
}
.box header{
    height: 50px;
    text-align: center;
    line-height: 50px;
    background:silver;
}
.box>footer{
    height: 50px;
    display: flex;
    background:seashell;
    align-items: center;
    justify-content: space-around;
}
.router-link-exact-active,.router-link-active{
    color:slategray;
}
</style>