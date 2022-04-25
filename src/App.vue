<template>
  <input type="button" @click="toggle" value="show" v-if="!visible" />
  <div v-if="visible">
    <DisappearComponent @toggle="toggle"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import DisappearComponent from './components/DisappearComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    DisappearComponent
  },
  data () {
    return {
      visible: true
    }
  },
  methods: {
    toggle () {
      this.visible = !this.visible
    }
  }
})
</script>
