<template>
  <input type="button" @click="toggle" value="toggle outer" />
  <div v-if="visible">
    <div v-for="n in 100" :key="n">
      <div v-once>
        <HeavyComponent/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HeavyComponent from './components/HeavyComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    HeavyComponent
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    toggle () {
      this.visible = !this.visible
    }
  }
})
</script>
