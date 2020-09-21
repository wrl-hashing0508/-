import axios from 'axios';         //加引号
import store from '../store/index';   //引入vue仓库

// 添加请求拦截器
axios.interceptors.request.use(config=>{
    //设置头部请求信息  授权            //托运       是否运行
    config.headers['Authoriazation']='Bearer'+store.state.tokens;

    //改变当时loading为false
    store.commit("SET_LOADING",true);

    //返回拦截信息
    return config;
})

// 添加响应拦截器
axios.interceptors.response.use(config=>{
    //改变 当时loading的状态为true
    store.commit("SET_LOADING",false);

    //判断config.status
    // console.log(config.status)
    switch(config.status){
        case 200:
            return config;
        default:
            alert("网络错误!")
    }
})

export default axios;