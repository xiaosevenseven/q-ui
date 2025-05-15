<template>
    <button :class="[
        ns.b(),
        ns.m(type),
        ns.m('size', isGroupSize),
        ns.is('round', round),
        ns.is('disabled', disabled),
        ns.is('text', text),
        ns.is('link', link),
        ns.is('border', border),
        ns.is('dashed', dashed),
        ns.is('block', block),
        ns.is('circle', circle),
        ns.is('button-group', isGroup),
    ]" :disabled="disabled">
        <span>
            <slot v-if="$slots.default"></slot>
        </span>
    </button>
</template>

<script setup>
import { defineProps } from 'vue'
import { useNamespace, useParent } from '@q-ui/hooks'
defineOptions({
    name: 'q-button'
})
const ns = useNamespace('button')
const parent = useParent('button-group')
const props = defineProps({
    type: {
        type: String,
        default: 'default',
    },
    size: {
        type: String,
        default: '',
    },
    round: Boolean,
    disabled: Boolean,
    text: Boolean,
    link: Boolean,
    border: Boolean,
    dashed: Boolean,
    block: Boolean,
    circle: Boolean,
})

const isGroup = parent.group()
const isGroupSize = props.size || parent.props('size')
</script>

<style scoped></style>