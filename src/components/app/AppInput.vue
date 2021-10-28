<template>
  <div class="app-input">
    <input v-bind="$attrs" :type="type" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'AppInput',

  props: {
    type: {
      type: String as PropType<string>,
      default: 'text'
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.app-input {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 4px;
  margin-top: 4px;
  border-radius: 4px;
  height: 36px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
}
input {
  width: 98%;
  border: none;
  outline: none;
}
</style>
