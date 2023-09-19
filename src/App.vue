<script setup lang="ts">
import {ref} from 'vue'
</script>

<template>
  <div class="container">
    <div class="header-lyout">
      <Menu mode="horizontal" theme="dark" active-name="1">
        <MenuItem name="1" v-for="item in useMenu" @click="changeRouter(item)">
          <Icon :type="item.icon"/>
          {{ item.title }}
        </MenuItem>
      </Menu>
    </div>
    <div class="content-lyout">
      <router-view v-slot="{ Component }">
        <transition name="fate">
          <component :is="Component" />
        </transition>
      </router-view>

    </div>
  </div>
</template>

<script lang="ts">
import router from './router'

export default {
  data() {

    return {
      RouterStatus: false,
      useMenu: [
        {title: '图表样例', id: "0-1", router: '/echart', icon: 'ios-stats'},
        {title: '地图样例', id: "0-2", router: '/map', icon: 'md-navigate'},
        {title: '流程图样例', id: "0-3", router: '/logicFlow', icon: 'md-share'},
        {title: '列表样例', id: "0-4", router: 'list', icon: 'md-reorder'},
      ]
    }
  },
  methods: {
    changeRouter: (item) => {
      router.push(item.router)
    }
  },
  computed: {},
}
</script>

<style scoped>
.ivu-menu-dark {
  background: black!important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.container {
  display: flex;
  flex-direction: column;


}

.header-lyout {
  height: 60px;
}

.content-lyout {
  flex: 1;
  padding: 20px;
}
</style>
