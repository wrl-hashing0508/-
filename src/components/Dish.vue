<template>
    <div class="dish">
        <van-tree-select height="90vw" :items="items" :main-active-index.sync="active" @click-nav="clickIndex(active)">
        <template #content>
            <div v-if="flag">
                    <p class="actives">
                        <b>{{items[active].text}}</b>
                        数量:<b>{{total}}</b>
                        总价:<b>{{totalPrice}}</b>
                    </p>
                <ul v-for="(item,index) in list_items" :key="index" class="content">
                    
                    <li>
                        <p></p>
                        <img :src="item.img" alt="" @click="detail(item.id,items[active].text)">
                        <span>名称:{{item.name}}</span>
                        <span>价格:{{item.price}}</span>
                        <p v-show="item.carNum>=1">
                            <button @click="CUT_CART(item)">-</button>
                            <b>{{item.carNum}}</b>
                        </p>
                        <button @click="ADD_CART(item)">+</button>
                        <span>介绍:{{item.title}}</span>
                        <span>总价:{{item.price*item.carNum}}</span>
                    </li>
                </ul>
            </div>
        </template>
        </van-tree-select>

        <div class="shoping">
            <p>总价:<b>{{SumNum}}</b></p>
            <p>总量:<b>{{Gross}}</b></p>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations, mapState} from 'vuex';
export default {
    created(){
        this.init();
    },
    computed:{
        ...mapState(['list','flag']),
        ...mapGetters(['totalPrice','total','SumNum','Gross']),
    },
    data() {
        return {
            active: 0,
            items: [],
            list_items:[],
        };
    },
    watch:{       //监听渲染是否执行
        flag(){
            this.init();
        }
    },
    methods:{
        ...mapMutations(['ADD_CART','CUT_CART']),
        // add(item){
        //     this.$store.commit('Add_CART',item)
        // },
        init(){
           //获取 左边的选项卡
           //获取键值
           console.log("卧槽")
            Object.keys(this.list).forEach(key=>{
                this.items.push({text:key,badge:''})
            })
            //往 store数据 存储一次
            this.$store.commit("STORE_ITEMS",this.items);

            //给 tab选项设置默认值
            this.list_items=this.list[Object.keys(this.list)[0]];
        },
        clickIndex(index){
            //点击事件一波
            // console.log(index);

            this.list_items=this.list[this.items[index].text];
            //给 store 赋一波值
            this.$store.commit("SET_TYPE",this.items[index].text);
        },
        detail(id,data){
            // console.log(data);
            this.$router.push({
                path:"/detail/"+id,
                query:{
                    data:data,
                }
            });


            // this.$router.push("/detail/"+id);
        }
    }
}
</script>

<style>
.content li{
    display: flex;
    margin:5px;
    align-items: center;
}
.content li span{
    margin:0 5px;
}
.content li img{
    border-radius: 50%;
}
.content li span:nth-child(7){
    color:slategrey;
}
.content li span:nth-child(3){
    color:tomato;
    font-size: 15px;
}
.content li span:nth-child(4){
    color:sandybrown;
    font-weight: bolder;
}
.content li span:last-child{
    color:silver;
}
.actives{
    color:seagreen;
    text-align: center;
    font-size: 17px;
    font-weight: bolder;
}
.actives b:first-child{
    color:orangered;
}
.actives b{
    color:tomato
}
</style>