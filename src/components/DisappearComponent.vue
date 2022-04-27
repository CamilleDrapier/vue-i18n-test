<template>
  <input type="button" @click="toggle" value="Hide and display translation" />
</template>

<script lang="ts">
import { i18n } from '@/main'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DisappearComponent',
  emits: ['toggle'],
  methods: {
    async toggle () {
      await new Promise((resolve) => {
        this.$emit('toggle')
        setTimeout(resolve)
      })
      alert(i18n.global.t('ALERT'))
    }
  }
})
</script>
