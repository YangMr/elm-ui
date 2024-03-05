<template>
  <el-form
    :validate-on-rule-change="false"
    v-if="model"
    v-model="model"
    :rules="rules"
    v-bind="$attrs"
  >
    <template v-for="(item, index) in options">
      <!-- 没有children情况下 -->
      <el-form-item
        v-if="!item.children || !item.children!.length"
        :label="item.label"
        :prop="item.prop"
        :key="index"
      >
        <component
          v-model="model[item.prop!]"
          v-bind="item.attrs"
          :is="`el-${item.type}`"
        ></component>
      </el-form-item>

      <!-- 有children的情况下 -->
      <el-form-item
        v-if="item.children && item.children.length"
        :label="item.label"
        :prop="item.prop"
        :key="index"
      >
        <component
          v-model="model[item.prop!]"
          v-bind="item.attrs"
          :is="`el-${item.type}`"
        >
          <component
            :label="child.label"
            :value="child.value"
            v-for="(child, i) in item.children"
            :key="i"
          ></component>
        </component>
      </el-form-item>
    </template>
  </el-form>
</template>

<script lang="ts" setup>
import { onMounted, ref, type PropType } from "vue";
import { FormOptions } from "./types/types";
import type { RuleItem } from "./types/rule";
// import cloneDeep from "lodash/cloneDeep";
import _ from "lodash";
let props = defineProps({
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
});

// 保存表单的数据
let model = ref<any>(null);
// 表单的校验规则
let rules = ref<RuleItem[]>([]);

onMounted(() => {
  let m: any = {};
  let r: any = {};

  props.options.forEach((item) => {
    m[item.prop!] = item.value;
    r[item.prop!] = item.rules;
  });

  // 深拷贝表单的数据
  model.value = _.cloneDeep(m);
  // 深拷贝表单的校验规则
  rules.value = _.cloneDeep(r);
});
</script>

<style scoped lang="scss"></style>
