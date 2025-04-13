<template>
  <div class="tree">
    <div class="tree__item">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'q-tree',
})

</script>
<style scoped></style>