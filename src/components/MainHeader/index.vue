<template>
  <div>
    <el-row type="flex" class="main-header">
      <el-col :span="2"><div class="logo">LOGO</div></el-col>
      <el-col :span="16"><div class="nav">MENU</div></el-col>
      <el-col :span="6"
        ><div class="actions">
          <el-button type="text">{{ theme }}</el-button>
          <el-button type="text" @click="switchTheme">切换主题</el-button>
          <el-button type="text" @click="openLogin">登录</el-button>
          <el-button type="text">注册</el-button>
        </div></el-col
      >
    </el-row>
    <loginDialog v-model="loginDialogVisible" />
  </div>
</template>

<script lang="ts">
import {
  UserSettingsStateSymbol,
  UserSettingsUpdateSymbol,
} from '@/context/AuthProvider'
import { defineComponent, ref, inject, unref } from '@vue/composition-api'

export default defineComponent({
  components: {
    LoginDialog: () => import('./LoginDialog.vue'),
  },
  setup() {
    const { theme } = inject(UserSettingsStateSymbol, { theme: '' })

    const loginDialogVisible = ref(false)

    const openLogin = () => {
      loginDialogVisible.value = true
    }

    const updateUserSettings = inject(UserSettingsUpdateSymbol)
    // @ts-ignore
    const updateTheme = (value) => updateUserSettings('theme', value)

    const switchTheme = () => {
      const newTheme = unref(theme) === 'light' ? 'dark' : 'light'
      updateTheme(newTheme)
    }

    return { theme, loginDialogVisible, openLogin, switchTheme }
  },
})
</script>

<style lang="stylus" scoped></style>
