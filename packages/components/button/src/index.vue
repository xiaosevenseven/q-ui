<script setup lang="ts">
import { ref } from 'vue';
import { ButtonProps } from '../types';

defineOptions({
    name: 'QButton'
})

const props = withDefaults(defineProps<ButtonProps>(), {
    tag: 'button',
    nativeType: 'button'
})

const slots = defineSlots()
const _ref = ref<HTMLButtonElement>()
</script>

<template>
   <component
        :is="props.tag"
        ref="_ref"
        class="q-button"
        :type="tag ==='button' ? nativeType : void 0"
        :disabled="disabled"
        :class="{
            [`q-button--${props.type}`]: type,
            [`q-button--${props.size}`]: size,
            'is-plain': plain,
            'is-round': round,
            'is-circle': circle,
            'is-disabled': disabled,
            'is-loading': loading
        }"
   >
        <slot></slot>
   </component>
</template>