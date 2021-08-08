import { useFetch } from '@vueuse/core'
import qs from 'qs'

const baseURL = process.env.VUE_APP_BASE_API

// 权限表单
export interface AuthForm {
  account: string
  password: string
  rememberMe: number
}
export const useLogin = (auth: AuthForm) => {
  const { isFetching, error, data } = useFetch(
    `${baseURL}/farbun/user/appSignin?${qs.stringify(auth)}`,
    { method: 'POST', mode: 'cors' }
  ).json()
  return { isFetching, error, data }
}
