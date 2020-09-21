<template>
  <div class="about">
      
      <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <!-- 点击收缩列表 -->
      <div class="ress" style="width: 100%">
        <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </a-button>
        <a-menu
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          mode="inline"
          theme="dark"
          :inline-collapsed="collapsed"
        >
          <a-sub-menu key="sub2">
              <span slot="title"><a-icon type="mail" /><span>讲师列表</span></span>
              <a-menu-item v-for="(item,index) in titles" :key="index">
                <router-link :to="item.urls" tag="b">{{item.name}}</router-link>
              </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
            <a-menu-item key="5">
              Option 5
            </a-menu-item>
            <a-menu-item key="6">
              Option 6
            </a-menu-item>
            <a-menu-item key="7">
              Option 7
            </a-menu-item>
            <a-menu-item key="8">
              Option 8
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </div>

    </a-layout-sider>

    

    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <!-- <div v-show="loading">
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
        </div> -->

        <div class="content">
            <router-view />
        </div>

      </a-layout-content>
    </a-layout>
  </a-layout>

      

      
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    data() {
      return {
        collapsed: false,
        titles:[{name:'讲师',urls:'/about/first'},{name:'老师',urls:'/about/center'},{name:'小老师',urls:'/about/footer'}],
      };
    },
    computed:{
      ...mapState(['loading'])
    },
    methods: {
      toggleCollapsed() {
        this.collapsed = !this.collapsed;
      },
    },
}
</script>

<style>
.about{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
.about .content{
  padding-top:30px;
}
.ress b{
  display: block;
  width: 100%;
  height: 100%;
}
</style>