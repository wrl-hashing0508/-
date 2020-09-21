<template>
  <div>
    <a-button class="editable-add-btn" @click="handleAdd">
      Add
    </a-button>
        <div v-if="loading">
          <a-spin tip="加载中...">
            <div class="spin-content">
              教师列表
              <template>
                <a-skeleton avatar :paragraph="{ rows: 4 }" />
                <a-skeleton avatar :paragraph="{ rows: 4 }" />
                <a-skeleton avatar :paragraph="{ rows: 4 }" />
                <a-skeleton avatar :paragraph="{ rows: 4 }" />
                <a-skeleton avatar :paragraph="{ rows: 4 }" />
              </template>
            </div>
          </a-spin>
        </div>

        <div v-if="!loading">
          <a-table bordered :data-source="dataSource" :columns="columns">
          <!-- <template slot="name" slot-scope="text, record">
            <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)" />
          </template> -->
          <template slot="operation" slot-scope="text, record">
            <a-popconfirm
              v-if="dataSource.length"
              title="Sure to delete?"
              @confirm="() => onDelete(record.key)"
            >
              <a href="javascript:;">删除</a>
              
            </a-popconfirm>
            <!-- 编辑 -->
            <a-popconfirm
              v-if="dataSource.length"
              title="Sure to compile?"
              @confirm="() => compile(record.key)"
            >
              <b class="compile">修改</b>
            </a-popconfirm>

            <!-- 详情 -->
            <a-popconfirm
              v-if="dataSource.length"
              title="Sure to detial?"
              @confirm="() => Detail(record.key)"
            >
              <b>详情</b>
            </a-popconfirm>
              
          </template>
        </a-table>
        </div>

      <template v-if="flag">
        <Alert />
      </template>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import Alert from '../components/alert';
export default {
  components:{
    Alert,
  },
  created(){
    this.getList();
  },
  computed:{
    ...mapState(['dataSource','loading','userinfos','flag']),
  },
  data() {
    return {
      count: 2,
      columns: [
        {
          title: 'name',
          dataIndex: 'name',
          width: '30%',
          scopedSlots: { customRender: 'name' },
        },
        {
          title: 'age',
          dataIndex: 'age',
        },
        {
          title: 'address',
          dataIndex: 'address',
        },
        {
          title: 'operation',
          dataIndex: 'operation',
          scopedSlots: { customRender: 'operation' },
        },
      ],
    };
  },
  methods: {
    ...mapActions(['getList','delList','detailList']),
    onDelete(key) {
        // this.$router.commit("DEL_LIST",key);
        //删除数据
        this.delList(key);
    },
    //新增按钮
    handleAdd() {
        //改变 弹框按钮名称 
        this.$store.commit("SET_ALERTNAME",true);

        this.$store.commit("SET_FLAG",{flag:true});
    },
    //修改按钮
    compile(key){
      console.log(key);
        this.$store.commit("SET_FLAG",{flag:true,key:key});
    },
    //详情按钮
    Detail(key){
        this.detailList(key);

        //跳转到详情页
        this.$router.push("/detail/"+key);
    }
  },
}
</script>

<style>
.compile{
  margin:0 10px;
  display: inline-block;
}
.alert{
  width: 350px;
  height: 300px;
  background:sandybrown;
  border-radius: 10px;
  text-align: center;
  padding-top:1px;
  position: fixed;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
}
.alert>p{
  height: 30px;
  margin:25px 0;
}
.alert>p input{
  height: 30px;
  border:0;
  border:0;
  outline: 0;
}
</style>

