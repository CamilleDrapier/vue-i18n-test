import { createApp } from 'vue'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createI18n } from 'vue-i18n'

import App from './App.vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const i18n = createI18n({
  locale: 'en'
})

const app = createApp(App)

app.use(i18n)

app.mount('#app')
