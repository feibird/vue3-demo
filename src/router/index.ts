import {createRouter, createWebHistory} from 'vue-router'
import ListItem from '../page/ListItem.vue'
import EchartItem from '../page/EchartItem.vue'
import LogicFlowItem from '../page/LogicFlowItem.vue'
import MapItem from '../page/MapItem.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: '',
            component: ListItem
        },
        {
            path: '/list',
            name: 'ListItem',
            component: ListItem
        },
        {
            path: '/map',
            name: 'MapItem',
            component: MapItem
        },
        {
            path: '/echart',
            name: 'EchartItem',
            component: EchartItem
        },
        {
            path: '/logicFlow',
            name: 'LogicFlowItem',
            component: LogicFlowItem
        },
    ]
})

export default router
