<template>
  <AuthProvider>
    <div class="app">
      <router-view></router-view>
    </div>
  </AuthProvider>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AuthProvider from '@/context/AuthProvider'

export default defineComponent({
  components: {
    AuthProvider,
  },
})
</script>
