<template>
  <button @click="handleClick" v-bind="$attrs">
    {{ realValue }}
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
export default defineComponent({
  name: 'AppBtn',

  props: {
    value: {
      type: Number as PropType<number>,
      default: 0
    }
  },

  setup(props) {
    const realValue = ref<number>(props.value)

    const handleClick = () => {
      realValue.value++
    }
    return { realValue, handleClick }
  }
})
</script>
