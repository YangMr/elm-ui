<template>
  <m-table
    v-bind="$attrs"
    :data="tableData"
    :options="options"
    elementLoadingText="加载中..."
    elementLoadingBackground="rgba(0,0,0,.3)"
    elementLoadingSvgViewBox="-10, -10, 50, 50"
    :elementLoadingSvg="svg"
    @confirm="confirm"
    @cancel="cancel"
  >
    <template #date="{ scope }">
      <el-icon-timer></el-icon-timer>
      {{ scope.row.date }}
    </template>
    <template #name="{ scope }">
      <el-popover
        placement="top-start"
        title="Title"
        :width="200"
        trigger="hover"
        content="this is content, this is content, this is content"
      >
        <template #reference>
          <el-tag>{{ scope.row.name }}</el-tag>
        </template>
      </el-popover>
    </template>

    <!-- <template #cellEdit="{ scope }">
      <div
        style="
          display: flex;

          height: 100%;
          align-items: center;
        "
      >
        <el-button size="small" type="primary">确定</el-button>
        <el-button size="small" style="margin-left: 0">取消</el-button>
      </div>
    </template> -->

    <template #action="{ scope }">
      <el-button size="small" type="primary" @click="edit(scope)"
        >编辑</el-button
      >
      <el-button size="small" type="danger" @click="remove(scope)"
        >删除</el-button
      >
    </template>
  </m-table>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { TableOptions } from "../../components/table/src/types";

const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `;

// 表格数据的ts类型
interface TableData {
  date: string;
  name: string;
  address: string;
}
const tableData = ref<TableData[]>([
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
]);
// setTimeout(() => {
//   tableData.value = [
//     {
//       date: "2016-05-03",
//       name: "Tom",
//       address: "No. 189, Grove St, Los Angeles",
//     },
//     {
//       date: "2016-05-02",
//       name: "Tom",
//       address: "No. 189, Grove St, Los Angeles",
//     },
//     {
//       date: "2016-05-04",
//       name: "Tom",
//       address: "No. 189, Grove St, Los Angeles",
//     },
//     {
//       date: "2016-05-01",
//       name: "Tom",
//       address: "No. 189, Grove St, Los Angeles",
//     },
//   ];
// }, 3000);

// 表格配置项数据
const options: TableOptions[] = [
  {
    label: "日期",
    prop: "date",
    width: "280",
    align: "center",
    slot: "date",
    editable: true,
  },
  {
    label: "姓名",
    prop: "name",
    align: "center",
    slot: "name",
  },
  {
    label: "地址",
    prop: "address",
    align: "center",
    editable: true,
  },
  {
    label: "操作",
    align: "center",
    action: true,
  },
];

// 编辑
const edit = (scope: any) => {
  console.log("edit", scope);
};
// 删除
const remove = (scope: any) => {
  console.log("remove", scope);
};

// 监听勾的方法
const confirm = (scope: any) => {
  console.log("confrim", scope);
};
// 监听叉的方法
const cancel = (scope: any) => {
  console.log("cancel", scope);
};
</script>

<style scoped lang="scss"></style>
