<script setup lang="ts">
interface Props {
  text?: string
  type?: string
}
// eslint-disable-next-line no-undef
const props = withDefaults(defineProps<Props>(), {
  text: 'Click',
  type: 'button'
})
</script>

<template>
  <div>
    <button>{{ props.text }}</button>
  </div>
</template>

<style></style>
