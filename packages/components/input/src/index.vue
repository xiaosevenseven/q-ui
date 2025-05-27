<template>
  <div :class="[ns.b(), ns.is('disabled', disabled)]">
    <div :class="[ns.e('wrapper')]">
      <input :disabled="disabled"  :class="[ns.e('inner')]" placeholder="请输入" />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "q-input",
});
import { useNamespace } from "@q-ui/hooks";
const ns = useNamespace("input");

/** props */
const props = defineProps({
  disabled: Boolean, // 禁用按钮
});

</script>
