<template>
  <div class="echart-content">
    <div class="echart-header">
      <h2>柱状图</h2>
      <p>使用mockJs模拟数据，超过设定值(500)修改对应颜色</p>
    </div>
    <div id="echart-lyout"/>
  </div>
</template>
<script setup lang="ts">
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import {BarChart} from 'echarts/charts';
import mockjs from 'mockjs'
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
// 标签自动布局、全局过渡动画等特性
import {LabelLayout, UniversalTransition} from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import {CanvasRenderer} from 'echarts/renderers';
// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

import {ref, onMounted, defineProps, onUpdated} from 'vue'

const el = ref()
const props = defineProps(['formItem'])
const {option} = props.formItem
console.log(props.formItem)

onMounted(() => {
  const chartDom = document.getElementById('echart-lyout');
  el.value = echarts.init(chartDom);
  el.value.setOption(option)
})

onUpdated(() => {
  console.log(props.formItem)
  el.value.setOption(props.formItem.option)
})

</script>
<style scoped lang="less">
#echart-lyout {
  width: 1000px;
  height: 400px;
  border: 1px solid #ddd;
}

.echart-header {
  margin-bottom: 10px;
}
</style>
