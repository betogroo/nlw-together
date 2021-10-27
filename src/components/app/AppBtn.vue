<template>
  <button v-bind="$attrs">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
type BtnType = 'button' | 'submit'
export default defineComponent({
  name: 'AppBtn',

  props: {
    type: {
      type: String as PropType<BtnType>,
      default: 'button'
    }
  }
})
</script>

<style lang="scss" scoped>
button {
  padding: 8px;
  box-sizing: border-box;
  background-color: rgb(157, 157, 177);
  margin-top: 4px;
  margin-bottom: 4px;
  border: 1px solid black;
  border-radius: 4px;
  color: white;
  padding-top: 4px;
  padding-bottom: 4px;
  height: 36px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}
button:not(:disabled):hover {
  transform: scale(1.02);
}

button.block {
  width: 100%;
}
button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
</style>
