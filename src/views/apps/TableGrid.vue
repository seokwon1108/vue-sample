<template>
  <div>
    <el-table :data="dataList" style="width: 100%; height: 100%">
      <el-table-column
        v-for="column in displayColumns"
        :key="column"
        :prop="column.key"
        :label="column.label"
        :width="column.minWidth"
      />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useSampleStore } from "../../store";
import { TableColumnList, TodoList } from "../../types";

const sampleStore = useSampleStore();

const displayColumns = ref<TableColumnList>([]);
const dataList = ref<TodoList>([]);

onMounted(() => {
  initTableColumn();
  searchData();
});

const searchData = async () => {
  const result = await sampleStore.getTodoList();

  dataList.value = result;
  console.log(dataList.value);
};

const initTableColumn = () => {
  displayColumns.value.push({ key: "id", label: "Id", minWidth: 0 });
  displayColumns.value.push({ key: "title", label: "할 일", minWidth: 250 });
  displayColumns.value.push({
    key: "completed",
    label: "완료여부",
    minWidth: 0,
  });
};
</script>

<style lang="scss" scoped></style>
