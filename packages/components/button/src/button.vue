<template>
    <button class="button">
        按钮
    </button>
</template>

<script setup lang="ts">
import { defineOptions, defineProps, defineEmits } from 'vue'
import { buttonEmits } from './button'
defineOptions({
  name: 'QButton',
})
const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)
</script>