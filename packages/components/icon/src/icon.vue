

<template>
 <i :class="ns.b()" :style="style">
   <slot></slot>
 </i>
</template>

<script setup lang="ts">
import {iconProps} from "./icon";
import {createNamespace} from "@q-ui/utils";
import {computed} from "vue";

defineOptions({
  name: 'q-icon'
})

const ns = createNamespace('icon')
const props = defineProps(iconProps)
const style = computed(() => {
  if (!props.size && !props.color) {
    return {};
  }
  return {
    ...(props.size ? { fontSize: props.size + 'px' } : {}),
    ...(props.color? { color: props.color } : {}),
  };
})
</script>
<style scoped>

</style>