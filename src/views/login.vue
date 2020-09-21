<template>
  <div class="login">
      <h2>登录一波</h2>
       <p>
           <span>账号:</span><input type="text" v-model="username">
       </p>
       <p>
           <span>密码:</span><input type="text" v-model="password">
       </p>
       <p>
           <button @click="logins">登录</button>
       </p>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
export default {
    computed:{
        ...mapState(['username',"password"])
    },
    methods:{
        ...mapActions(['verifyPass']),
        //登录时验证 密码 账号
        logins(){
            //promise   异步操作
            this.verifyPass().then(res=>{
                alert(res);
                //跳转 到 想去的页面

                this.$router.push("/about")
            }).catch(err=>{
                alert(err);
            })
        }
    }
}
</script>

<style>

</style>