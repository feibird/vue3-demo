<template>
  <div id="container"></div>
</template>
<script setup lang="ts">
import AMapLoader from "@amap/amap-jsapi-loader"
import {reactive, ref, toRefs, onMounted, nextTick, defineProps} from 'vue';
import {shallowRef} from '@vue/reactivity'
import {Message, Notice} from 'view-ui-plus'
import Mock from 'mockjs'

window._AMapSecurityConfig = {
  securityJsCode: '5238cf02fc456029a1689f0ebb5d39ab',
}


//解析定位结果
const onComplete = (data) => {
  Notice.open({
    duration: 5,
    title: '获取当前定位成功',
    desc: `<div class="message-content">定位结果：${data.position}<br/>定位类别：${data.location_type}<br/>精度：${data.accuracy}米<br/>是否经过偏移：${(data.isConverted ? '是' : '否')}</div>`
  });
}

onMounted(() => {
  AMapLoader.load({
    key: 'e109fec163ef0028833d3d47a96bc9c2',
    version: '2.0'
  }).then(Amap => {
    Amap.plugin(['AMap.Geolocation', 'AMap.ControlBar', 'AMap.ToolBar', 'AMap.MapType'], () => {
      const controlBar = new Amap.ControlBar()
      const ToolBar = new Amap.ToolBar()
      const mapType = new Amap.MapType()
      const geo = new Amap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true,        //显示定位按钮，默认：true
        buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
        showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
        panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy: true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      })
      const map = new Amap.Map('container', {
        zoom: 10,
        viewMode: '3D'  //设置地图模式
      })
      map.addControl(controlBar)
      map.addControl(geo);
      map.addControl(ToolBar);
      map.addControl(mapType);
      geo.getCurrentPosition((status, result) => {
        onComplete(result)
      });
    })
  })
})

</script>
<style lang="less">
#container {
  width: 100%;
  height: 800px;
  border: 1px solid;
}

.message-content {
  text-align: left;
}
</style>
