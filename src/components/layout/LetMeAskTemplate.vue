<template>
  <div class="box">
    <div class="form-box">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LetMeAskTemplate'
})
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 84vh;
}
.form-box {
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  padding: 4px;
  width: 70vw;
  max-width: 320px;
  height: 280px;
}
</style>
