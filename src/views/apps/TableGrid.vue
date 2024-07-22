<template>
  <div class="flex flex-col gap-5 h-full">
    <el-table :data="dataList" style="width: 100%" max-height="500">
      <el-table-column
        v-for="column in displayColumns"
        :key="column"
        :prop="column.key"
        :label="column.label"
        :width="column.minWidth"
      />
    </el-table>
    <el-form
      class="flex items-center justify-center gap-2"
      ref="todoCreateFormRef"
      :model="todoCreateForm"
      :rules="todoCreateFormRules"
    >
      <el-form-item prop="title">
        <el-input v-model="todoCreateForm.title" class="w-48" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(todoCreateFormRef)">
          등록
        </el-button>
        <el-button type="warning" @click="resetForm(todoCreateFormRef)">
          초기화
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { useSampleStore } from "../../store";
import { TableColumnList, TodoItem, TodoList } from "../../types";
import { ElNotification, FormInstance, FormRules } from "element-plus";

const todoCreateFormRef = ref<FormInstance>();
const todoCreateForm = reactive<Omit<TodoItem, "id">>({
  userId: 1,
  title: "",
  completed: false,
});
const todoCreateFormRules = reactive<FormRules<Omit<TodoItem, "id">>>({
  title: [
    { required: true, message: "필수 입력항목입니다.", trigger: "blur" },
    { min: 3, message: "3글자 이상 입력해주세요", trigger: "blur" },
  ],
});

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
};

const initTableColumn = () => {
  displayColumns.value.push({ key: "id", label: "Id", minWidth: 70 });
  displayColumns.value.push({ key: "title", label: "할 일", minWidth: 0 });
  displayColumns.value.push({
    key: "completed",
    label: "완료여부",
    minWidth: 100,
  });
};

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      console.log("submit!");

      await sampleStore.creatTodo(todoCreateForm);
      ElNotification({
        type: "success",
        title: "Success",
        message: "등록에 성공했습니다",
      });
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style lang="scss" scoped></style>
