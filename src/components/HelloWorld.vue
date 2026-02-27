<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  msg: {
    type: String,
    default: 'Hello World!'
  }
})
</script>

<style scoped>
.hello {
  padding: 20px;
}
</style>