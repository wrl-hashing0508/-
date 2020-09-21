import Vue from 'vue'
import Vuex from 'vuex'
import app from 'axios';       //引入axios文件

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    flag:false,
    car_list:[],
    Stype:"铁板烧系列",
    list_type:[],
    types:0,
    Num:0,
  },
  mutations: {
    //获取 后台数据方法
    GET_LIST(state,data){
      state.list=data;
      state.flag=true;
    },

    //减少购物车的东西
    CUT_CART(state,data){
      let index=state.car_list.findIndex(item=>item.id===data.id);
      data.carNum--;
      // console.log(index);
      //判断是否 数量 小于0  就从购物车移除
      if(data.carNum<=0){
        state.car_list.splice(index,1);
      }
    },
    //增加购物车的东西
    ADD_CART(state,data){
      //判断购物车是否有
      let indexs=state.car_list.findIndex(item=>item.id===data.id);
      data.carNum++;

        state.types++;
        // console.log(state.list_type);
        state.list_type.forEach(item=>{
          if(item.text===state.Stype){
            item.badge=this.state.types;
          }
        })
        // state.list_type[state.Stype].badge=state.types;
      // console.log(state.list[data.text])
      // state.list[data.text].forEach(item=>{
      //   if(item.id===data.id){
      //     item.carNum++;
      //   }
      // })
      // 有就进行++  没有就进行 添加
      if(indexs<0){
        state.car_list.push(data);
      }
    },
    //store类型
    SET_TYPE(state,data){
      state.Stype=data;
      state.types=0;
      console.log(state.Stype);
    },
    //store list的几个分类
    STORE_ITEMS(state,data){
      state.list_type=data;

      console.log(state.list_type)
    }
  },
  actions: {
    getList(context){
      app.get("/api/list").then(res=>{
        console.log(res);

        context.commit("GET_LIST",res.data);
      })
    }
  },
  getters:{
    //单页面总价
    totalPrice(state){
        let num=0;
        //在点击 那个循环中 计算总价
        state.list[state.Stype].forEach(item=>{
            num+=item.price*item.carNum;
        })
        console.log(num);
        return num;
    },
    //单页面数量
    total(state){
      let nums=0;
      //计算数量
      state.list[state.Stype].forEach(item=>{
          nums+=item.carNum;
      })
      console.log(nums);
      return nums;
    },
    //整个页面总数量
    Gross(state){
      let Num=0;
      state.list_type.forEach(item=>{
        // console.log(item.text)
          state.list[item.text].forEach(ite=>{
            Num+=ite.carNum;
          })
      })
      console.log(Num);
      return Num;
    },
    //整个页面总价
    SumNum(state){
      let SumPirce=0;
      state.list_type.forEach(item=>{
        // console.log(item.text)
          // state.list[item.text].forEach(ite=>{
          //   Num+=ite.carNum;
          // })
          SumPirce+=state.list[item.text].reduce((prev,next)=>{
            return prev+next.price*next.carNum;
          },0)
      })
      return SumPirce;
    }
  },
  modules: {
  }
})
