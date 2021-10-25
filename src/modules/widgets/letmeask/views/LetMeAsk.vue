<template>
  <div class="letmeask">
    <h1>Let me Ask</h1>
    <app-btn :value="0"></app-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppBtn from '@/components/app/AppBtn.vue'
export default defineComponent({
  name: 'LetMeAsk',

  components: {
    AppBtn
  }
})
</script>
