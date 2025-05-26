<template>
    <i :class="[ns.b()]" :style="[styleSize, styleColor]">
        <slot></slot>
    </i>
</template>

<script setup>
import { computed } from 'vue';
defineOptions({
  name: 'q-icon'
});
import { useNamespace, useStyle } from '@q-ui/hooks';
const ns = useNamespace('icon');

const uStyle = useStyle('icon');

const props = defineProps({
  size: {
    type: [String, Number],
    default: ''
  },
  color: {
    type: String,
    default: ''
  }
})
const styleSize = computed(() => {
  return uStyle.fontSize(props.size);
})
const styleColor = computed(() => {
  return uStyle.color(props.color);
})

</script>


