<script setup>
import Icon from "./icon.vue";
import Input from "./input.vue";
</script>

<template>
    <q-button>默认</q-button>
    <q-button type="primary">主要</q-button>
    <q-button type="success">成功</q-button>
    <q-button type="warning">警告</q-button>
    <q-button type="error">危险</q-button>

    <div>圆角</div>

    <q-button round>默认</q-button>
    <q-button type="primary" round>主要</q-button>
    <q-button type="success" round>成功</q-button>
    <q-button type="warning" round>警告</q-button>
    <q-button type="error" round>危险</q-button>


    <div>禁用</div>

    <q-button disabled>默认</q-button>
    <q-button disabled type="primary">主要</q-button>
    <q-button disabled type="success">成功</q-button>
    <q-button disabled type="warning">警告</q-button>
    <q-button disabled type="error">危险</q-button>

    <div>文本</div>

    <q-button text>默认</q-button>
    <q-button text type="primary">主要</q-button>
    <q-button text type="success">成功</q-button>
    <q-button text type="warning">警告</q-button>
    <q-button text type="error">危险</q-button>

    <div>链接</div>

    <q-button link>默认</q-button>
    <q-button link type="primary">主要</q-button>
    <q-button link type="success">成功</q-button>
    <q-button link type="warning">警告</q-button>
    <q-button link type="error">危险</q-button>

    <div>边框</div>
    <q-button border>默认</q-button>
    <q-button border dashed type="primary">主要</q-button>
    <q-button border type="success">成功</q-button>
    <q-button border type="warning">警告</q-button>
    <q-button border type="error">危险</q-button>


    <div>块级按钮</div>
    <q-button block>默认</q-button>
    <q-button block type="primary">主要</q-button>
    <q-button block type="success">成功</q-button>
    <q-button block type="warning">警告</q-button>
    <q-button block type="error">危险</q-button>

    <div>尺寸</div>
    <q-button size="small">默认</q-button>
    <q-button size="small" type="primary">主要</q-button>
    <q-button size="small" type="success">成功</q-button>
    <q-button size="small" type="warning">警告</q-button>
    <q-button size="small" type="error">危险</q-button>

    <q-button size="default">默认</q-button>
    <q-button size="default" type="primary">主要</q-button>
    <q-button size="default" type="success">成功</q-button>
    <q-button size="default" type="warning">警告</q-button>
    <q-button size="default" type="error">危险</q-button>

    <q-button size="large">默认</q-button>
    <q-button size="large" type="primary">主要</q-button>
    <q-button size="large" type="success">成功</q-button>
    <q-button size="large" type="warning">警告</q-button>
    <q-button size="large" type="error">危险</q-button>

    <div>圆形按钮</div>
    <q-button circle size="small">默认</q-button>
    <q-button circle size="default">默认</q-button>
    <q-button circle size="large">默认</q-button>

    <div>按钮组</div>
    <q-button-group>
        <q-button>默认</q-button>
        <q-button type="primary">主要</q-button>
        <q-button type="success">成功</q-button>
        <q-button type="warning">警告</q-button>
        <q-button type="error">危险</q-button>
    </q-button-group>

    <q-button-group size="large"> 
        <q-button>默认</q-button>
        <q-button type="primary">主要</q-button>
        <q-button type="success">成功</q-button>
        <q-button type="warning">警告</q-button>
        <q-button type="error">危险</q-button>
    </q-button-group>


    <Icon></Icon>
    <Input></Input>
</template>

<style scoped></style>
