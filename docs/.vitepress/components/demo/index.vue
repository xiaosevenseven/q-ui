<template>
    <div class="examples-container">
        <!-- 描述 -->
        <div class="description"><slot name="description" /></div>
        <!-- 演示主体 -->
        <div class="examples-body">
            <!-- 组件渲染 -->
            <div class="examples-inner"><component :is="demo" /></div>
            <!-- 控制元素 -->
            <ul class="examples-control">
                <li @click="copy" @mouseleave="isCopySuccess = ''"><i class="iconfont" :class="iconCopy"></i></li>
                <li @click="toggleSource"><i class="iconfont icon-daima"></i></li>
            </ul>
            <!-- 组件源码 -->
            <div v-if="source" class="source-inner"><slot name="source" /></div>
        </div>
    </div>
    </template>
    <script setup>
    import { computed, onMounted, ref, useSlots, nextTick } from "vue"
    import modules from "../../components"
    import Clipboard from 'clipboard'
    import prism from 'prismjs'
    import "prismjs/themes/prism-tomorrow.min.css"
    const slots = useSlots()
    const props = defineProps({
        path: {
            type: String,
            default: ''
        }
    })
    
    const source = ref(false)
    const isCopySuccess = ref('')
    
    const demo = computed(() => {
        const key = `examples/${props.path}.vue`
        return modules[key];
    });
    
    const iconCopy = computed(() => {
        if(isCopySuccess.value === true) { return 'icon-chenggong1' }
        if(isCopySuccess.value === false) { return 'icon-chahao' }
        return 'icon-fuzhi_line'
    })
    
    const copy = async (event) => {
        const clipboard = new Clipboard(event.target, {
            text: () => slots.source()[0]?.children[0]?.children
        })
        clipboard.on('success', () => {
            isCopySuccess.value = true
            clipboard.destroy()
        })
        clipboard.on('error', () => {
            isCopySuccess.value = false
            clipboard.destroy()
        })
        clipboard.onClick(event)
    }
    
    const toggleSource = () => {
        source.value = !source.value
        source.value && nextTick(() => prism.highlightAll())
    }
    
    onMounted(() => {
        
    })
    </script>

    <style lang="scss" scoped>
    .examples-body {
        border: 1px solid #f0f0f0;
        border-radius: 12px;
    }
    .examples-inner {
        padding: 24px;
    }
    .examples-control {
        text-align: center;
        height: 43px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1px dashed #f0f0f0;
        margin: 0;
        li {
            list-style: none;
            width: 35px;
            text-align: center;
            margin-top: 0
        }
        i {
            opacity: .5;
            cursor: pointer;
            transition: all .1s ease 0s;
            font-size: 16px;
            &:hover {
                opacity: 1;
                font-size: 17px;
            }
        }
    }
    </style>
