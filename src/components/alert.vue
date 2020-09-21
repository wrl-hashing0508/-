<template>
  <div class="alert">
      <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit" layout="vertical" >
        <a-form-item label="Name">
        <a-input
            v-decorator="['name', { rules: [{ required: true, message:'请输入名字' }],initialValue: newObj.name}]"
        />
        </a-form-item>
        <a-form-item label="Age">
        <a-input
            v-decorator="['age', { rules: [{ required: true, message: 'Please input your age!' }],initialValue:newObj.age }]"
        />
        </a-form-item>
        <a-form-item label="Address">
        <a-select
            v-decorator="[
            'address',
            { rules: [{ required: true, message: 'Please select your gender!' }],initialValue:newObj.address },
            ]"
            placeholder="Select a option and change input text above"
            @change="handleSelectChange"
        >
            <a-select-option :value="item.address" v-for="(item,index) in dataSource" :key="index">
                {{item.address}}
            </a-select-option>

        </a-select>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
            <a-button type="primary" html-type="submit">
                {{submitFlag?"新增一波":"修改一波"}}
            </a-button>
        </a-form-item>
    </a-form>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
export default {
     data() {
        return {
        formLayout: 'horizontal',
        form: this.$form.createForm(this, { name: 'coordinated' }),
        };
    },
    methods: {
        ...mapActions(['newAdd']),
        handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                
                if(this.submitFlag){
                    this.newAdd(values);
                }else{
                    this.$store.commit("COMPILE_LIST",values);
                }
                this.$store.commit("SET_FLAG",false);
            }
            
        });
        },
        handleSelectChange(value) {
        // console.log(value);
                    //更改默认值
        // this.form.setFieldsValue({
        //     note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        // });
        },
    },
    computed:{
        ...mapState(['alert','dataSource','newObj','submitFlag']),
    }
}
</script>

<style>
.alert{
    position: fixed;
    left:50%;
    top:50%;
    transform: translateX(-50%) translateY(-50%);
}
</style>