<template>
<div :class="[
    ns.b()
]">
    <slot></slot>
</div>
</template>

<script setup>
import { useNamespace } from '@q-ui/hooks'
defineOptions({
    name: 'q-button-group'
})
const props = defineProps({
    size: {
        type: String,
        default: ''
    }
})
const ns = useNamespace('button-group')

</script>