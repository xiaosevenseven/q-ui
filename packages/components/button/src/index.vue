<template>
    <button :class="[
        ns.b(),
        ns.m(type),
        ns.is('round', round),
        ns.is('disabled', disabled),
        ns.is('text', text),
        ns.is('link', link),
        ns.is('border', border),
        ns.is('dashed', dashed)
    ]" :disabled="disabled">
        <span>
            <slot v-if="$slots.default"></slot>
        </span>
    </button>
</template>

<script setup>
import { useNamespace } from '@q-ui/hooks'
defineOptions({
    name: 'q-button'
})
const ns = useNamespace('button')
const props = defineProps({
    type: {
        type: String,
        default: 'default',
    },
    round: Boolean,
    disabled: Boolean,
    text: Boolean,
    link: Boolean,
    border: Boolean,
    dashed: Boolean
})
</script>

<style scoped></style>