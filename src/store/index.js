import Vue from 'vue'
import Vuex from 'vuex';
import app from '../utils/axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataSource:[],
    loading:false,
    username:"admin",
    password:"123",
    detail_list:{},
    submitFlag:false,
    flag:false,
    alert:{
      age:"",
      address:"",
      name:"",
    },
    newObj:{},
    tokens:localStorage.getItem("tokens")?localStorage.getItem("tokens"):"",
    userinfos:localStorage.getItem("userinfos")?JSON.parse(localStorage.getItem("userinfos")):{},
  },
  mutations: {
    //改变头部信息
    SET_LOADING(state,data){
      state.loading=data;
    },
    SET_LIST(state,data){
      state.dataSource=data;
      console.log(data);
    },
    //删除 一行数据
    DEL_LIST(state,data){
      state.dataSource=data;
    },
    //给 头部信息赋值
    SET_TOKENS(state,data){
      state.tokens=data;
      //本地存储
      localStorage.setItem("tokens",data);
    },
    //给 用户信息
    SET_USERINFO(state,data){
      state.userinfos=data;
      //存储到本地存储里面
      localStorage.setItem("userinfos",JSON.stringify(data));
    },
    //详情数据
    SET_DETAIL(state,data){
      state.detail_list=data;

      console.log(state.detail_list)
    },
    //改变弹框 的 类型
    SET_ALERTNAME(state,data){
      state.submitFlag=data;
    },
    //弹框显示
    SET_FLAG(state,data){
      state.flag=data.flag;
      if(state.submitFlag){
        state.newObj={};
      }else{
        //把id名给一个新数组
        state.newObj.key=data.key;
        //查找 id名相同的对象所有值
        state.dataSource.forEach(item=>{
          if(item.key===state.newObj.key){
              //键值一波
              let keys=Object.keys(item);
              console.log(keys);
              keys.forEach(ite=>{
                  //赋值一波
                  state.newObj[ite]=item[ite];
              })
          }
        })
      }

      console.log(state.newObj);
    },

    //修改一波数据
    COMPILE_LIST(state,data){
      //查询一波数组
      console.log(state.newObj.key);
      state.dataSource.forEach(item=>{
        if(item.key===state.newObj.key){
            //键值一波
            let keys=Object.keys(data);
            // console.log(keys);
            keys.forEach(ite=>{
                //赋值一波
                item[ite]=data[ite];
            })
        }
      })
    }
  },

  actions: {
    //获取数据
    getList(context){
      app.get("/api/list").then(res=>{
        console.log('/api/list',res);

        //改变仓库的list值
        context.commit("SET_LIST",res.data.list);
      })
    },

    //详情数据
    detailList(context,ids){
      console.log(ids);
      app.post("/api/detail/list",{
        ids:ids,
      }).then(res=>{
          console.log(res);

          context.commit("SET_DETAIL",res.data);
      })
    },

    //新增数据
    newAdd(context,data){
        app.post("/api/add",{ndata:data,}).then(res=>{
          console.log(res);

          //赋值给远数组
        context.commit("DEL_LIST",res.data);
        })
    },

    //删除数据
    delList(context,id){
      app.post("/api/del/list",{
        id,
      }).then(res=>{
        console.log(res);

        //赋值给远数组
        context.commit("DEL_LIST",res.data);
      })
    },
    //验证一波账号和密码
    verifyPass(context){
      return app.post("/api/verifyPass",{
        username:context.state.username,
        password:context.state.password
      }).then(res=>{
        console.log(res);

        //判断是否登录成功
        if(res.data.code==0){
          //存储头部信息
          context.commit("SET_TOKENS",res.data.token);
          context.commit("SET_USERINFO",res.data.userinfo);
          return Promise.resolve('登录成功');

        }else{
          return Promise.reject('登录失败');
        }

      })
    }
  },
  modules: {
  }
})
