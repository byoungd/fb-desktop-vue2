<template>
  <div>
    <p>count: {{ count }}</p>
    <button @click="increase">+</button>
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const count = ref(0)
    const increase = () => {
      count.value += 1
    }

    return { count, increase }
  },
})
</script>
