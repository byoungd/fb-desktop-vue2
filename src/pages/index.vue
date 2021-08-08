<template>
  <div class="home">
    <MainHeader />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const user = ref({ name: 'han' })
    return { user }
  },
  components: {
    MainHeader: () => import('@/components/MainHeader/index.vue'),
  },
})
</script>
