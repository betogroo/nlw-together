<template>
  <div id="nav">
    <router-link to="/welcome">Welcome</router-link> |
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/letmeask">Let Me Ask</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './assets/tailwind.css'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>
