// src/components/ProvideUserSettings.js

import {
  defineComponent,
  provide,
  reactive,
  readonly,
  toRefs,
} from '@vue/composition-api'

// 使用 symbols 制造独特标识
export const UserSettingsStateSymbol = Symbol(
  'User settings state provider identifier'
)
export const UserSettingsUpdateSymbol = Symbol(
  'User settings update provider identifier'
)

export default defineComponent({
  setup(props, { slots }) {
    const state = reactive({
      language: 'en',
      theme: 'light',
    })

    // 使用 `toRefs()` 确保其在消费者组件中广泛可用
    // 而 `readonly()` 预防了用户修改全局状态
    provide(UserSettingsStateSymbol, toRefs(readonly(state)))

    const update = (property: keyof typeof state, value: string) => {
      state[property] = value
    }
    provide(UserSettingsUpdateSymbol, update)

    return () => {
      if (slots.default) return slots.default()
    }
  },
})
