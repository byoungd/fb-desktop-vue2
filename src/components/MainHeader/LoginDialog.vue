<template>
  <el-dialog
    title="登录"
    :visible.sync="props.value"
    :before-close="emitClose"
    center
  >
    <el-form :model="authForm">
      <el-form-item label="用户名">
        <el-input v-model="authForm.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="authForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button @click="emitClose">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script lang="ts">
import { useLogin } from '@/api/service'
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const authForm = ref({
      account: '',
      password: '',
      rememberMe: 0,
    })

    const emitClose = () => {
      emit('input', false)
    }

    const onSubmit = () => {
      const { data } = useLogin(authForm.value)
      console.log(data)
    }
    return { props, authForm, emitClose, onSubmit }
  },
})
</script>
