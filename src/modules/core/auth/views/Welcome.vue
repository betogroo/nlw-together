<template>
  <div class="box">
    <div class="form-box">
      <h1>Login</h1>
      <LoginForm v-if="mode === 'login'" />
      <SignupForm v-if="mode === 'signup'" />
      <ResetPasswordForm v-if="mode === 'reset'" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import LoginForm from '../components/LoginForm.vue'
import SignupForm from '../components/SignupForm.vue'
import ResetPasswordForm from '../components/ResetPasswordForm.vue'

export default defineComponent({
  name: 'Welcome',

  props: {
    mode: {
      type: String as PropType<string>,
      default: 'login'
    }
  },

  components: {
    LoginForm,
    SignupForm,
    ResetPasswordForm
  },

  setup() {
    return {}
  }
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
  height: 200px;
}
</style>
