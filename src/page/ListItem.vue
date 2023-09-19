<template>
  <Menu mode="horizontal" :theme="theme" active-name="1" class="btn-group">
    <MenuItem name="1">
      <Icon type="ios-paper"/>
      新增数据
    </MenuItem>
    <MenuItem name="2">
      <Icon type="ios-people"/>
      修改数据
    </MenuItem>
    <Submenu name="3">
      <template #title>
        <Icon type="ios-stats"/>
        批量操作
      </template>
      <MenuItem name="3-4">导入</MenuItem>
      <MenuItem name="3-5">导出</MenuItem>
    </Submenu>
    <MenuItem name="4">
      <Icon type="ios-construct"/>
      删除数据
    </MenuItem>
  </Menu>
  <Table
      :columns="columns"
      :data="dataSource"
      stripe="true"
      size="small"
      border
      height="400"
  />
</template>
<script setup lang="ts">
import Mock from 'mockjs'

const columns = [
  {title: '名称', key: 'name', width: 80},
  {title: '年龄', key: 'age', width: 100, sortable: true},
  {title: '地区', key: 'area', width: 200},
  {title: '性别', key: 'sex', width: 70},
  {title: '会员等级', key: 'vip', width: 200, sortable: true},
  {title: '备注', key: 'remake'},
]

let dataSource = []

for (let i = 0; i < 50; i++) {
  dataSource.push({
    name: Mock.mock('@cname'),
    sex: Mock.mock('@boolean'),
    age: Mock.mock('@natural(10, 60)'),
    area: Mock.mock('@city'),
    vip: Mock.mock({
      "string|1-5": "★"
    }).string,
    remake: Mock.mock('@cparagraph')
  })
}

</script>
<style lang="less">
.btn-group {
  margin-bottom: 10px;

}
</style>