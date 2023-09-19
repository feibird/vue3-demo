<template>
  <div>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
      <FormItem prop="用户数量">
        <Input type="number" v-model="formItem.num" placeholder="输入用户数量"/>
      </FormItem>
      <FormItem prop="password">
        <Input type="number" v-model="formItem.colorNum" placeholder="输入修改颜色的范围值"/>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">刷新</Button>
      </FormItem>
    </Form>
  </div>
  <EchartCompont :formItem="propItem"/>
</template>
<script setup lang="ts">
import {onMounted, ref} from 'vue'
import mockjs from 'mockjs'
import EchartCompont from '../components/EchartCompont.vue';

const formItem = ref({
  num: 30,
  colorNum: 500,
})

const mockData = (num, colorNum) => {
  let data = [];
  const length = num || mockjs.mock({
    "number|10-20": 100
  }).number

  for (let i = 0; i < length; i++) {
    const value = mockjs.mock({
      "value|100-1000": 100
    }).value;
    data.push({
      title: mockjs.mock('@cname'),
      num: {
        value,
        itemStyle: {
          color: mapStyle(value, colorNum)
        }
      },
    })
  }
  return data
}

const propItem = ref({
  option: {},
})

//修改颜色
const mapStyle = (num, colorItem = 500) => {
  if (num < colorItem) {
    return '#a90000'
  } else {
    return '#409EFF'
  }
}

const handleSubmit = () => {
  const {num, colorNum} = formItem.value
  const newData = mockData(num, colorNum)
  console.log(newData)
  propItem.value = {
    option: {
      tooltip: {
        show:true,
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      xAxis: {
        type: 'category',
        data: newData.map(res => res.title),
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: newData.map(res => res.num),
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          },
          type: 'bar'
        }
      ]
    }
  }
}

onMounted(() => {
  handleSubmit()
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




