<template>
    <div>icon</div>

    <q-icon class="iconfont icon-eye"></q-icon>
    <q-icon size="30" color="red">
        <i class="iconfont icon-eye"></i>
    </q-icon>
    <q-icon size="30" color="red">
        <Eye />
    </q-icon>


    <q-button type="error" size="large">
        <q-icon>
            <Delete />
        </q-icon>
        删除
        <q-icon>
            <Delete />
        </q-icon>
    </q-button>
    <q-button type="error" size="large">
        <q-icon>
            <Delete />
        </q-icon>
        删除
        <q-icon>
            <Delete />
        </q-icon>
    </q-button>
</template>

<script>
// import { Eye, Delete } from "@q-ui/icons";
// console.log("Eye", Eye)
import Eye from "../../packages/icons/svg/Eye.vue";
import Delete from "../../packages/icons/svg/Eye.vue";
</script>

<style lang="css" scoped>
@import "./assets/iconfont/iconfont.css";
</style>