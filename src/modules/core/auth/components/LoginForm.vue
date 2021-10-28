<template>
  <app-btn @click.prevent="handleClick" class="btn-google block"
    >Entrar com o Google</app-btn
  >
  <form @submit.prevent="handleSubmit">
    <AppInput placeholder="Email" type="email" v-model="formData.email" />
    <AppInput placeholder="Senha" type="password" v-model="formData.password" />
    <app-btn class="btn block" type="submit">Entrar</app-btn>
  </form>
  {{ isPending }}
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useLogin from '../composables/useLogin'
import { useRouter } from 'vue-router'
import AppInput from '@/components/app/AppInput.vue'
import AppBtn from '@/components/app/AppBtn.vue'
import Auth from '../types/Auth'

export default defineComponent({
  name: 'LoginForm',

  components: {
    AppInput,
    AppBtn
  },

  setup() {
    const router = useRouter()
    const { error, isPending, loginWithGoogle } = useLogin()
    const formData = ref<Auth>({
      email: '',
      password: ''
    })
    const handleSubmit = (): void => {
      console.log(formData.value)
    }

    const handleClick = async () => {
      await loginWithGoogle('pop')
      router.push({ name: 'Welcome' })
    }
    return { formData, handleSubmit, handleClick, error, isPending }
  }
})
</script>

<style scoped>
form {
  width: 100%;
}
.btn {
  background-color: blue;
}
.btn-google {
  background-color: red;
}
</style>
