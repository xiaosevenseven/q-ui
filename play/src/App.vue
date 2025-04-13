<template>
  <q-icon color="blue" size="17">Loading</q-icon>
</template>

<script setup lang="ts">
import QIcon from "@q-ui/components/icon"
import "@q-ui/theme-chalk/index.scss"
import QTree from "@q-ui/components/tree"


function createData(level = 4, parentKey = '') {
  if (!level) return []
  const arr = new Array(6 - level).fill(0).map((_, index) => {
    const key = `${parentKey}-${index}`
    return {
      key,
      label: `第${level}层-${index}`,
      children: createData(level - 1, key)
    }
  })
  return arr
}

const data = createData()
console.log(data)

</script>


<style scoped>

</style>
