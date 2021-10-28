<template>
  <let-me-ask-template>
    <h1>Login</h1>
    <LoginForm v-if="mode === 'login'" />
    <SignupForm v-if="mode === 'signup'" />
    <ResetPasswordForm v-if="mode === 'reset'" />
  </let-me-ask-template>
  <hr />
  <div>
    {{ user }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import LetMeAskTemplate from '@/components/layout/LetMeAskTemplate.vue'
import LoginForm from '../components/LoginForm.vue'
import SignupForm from '../components/SignupForm.vue'
import ResetPasswordForm from '../components/ResetPasswordForm.vue'
import { getAuth, getRedirectResult, GoogleAuthProvider } from 'firebase/auth'

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
    ResetPasswordForm,
    LetMeAskTemplate
  },

  setup() {
    const auth = getAuth()
    const token = ref('')
    const error = ref('')
    const user = ref({})
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          // This gives you a Google Access Token. You can use it to access Google APIs.
          const credential: any =
            GoogleAuthProvider.credentialFromResult(result)
          token.value = credential.accessToken

          // The signed-in user info.
          user.value = result.user
        } else {
          throw new Error('Seu erro na parada')
        }
      })
      .catch((err) => {
        // Handle Errors here.
        error.value = err.code
        //const errorMessage = error.message
        // The email of the user's account used.
        //const email = error.email
        // The AuthCredential type that was used.
        //const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })

    return { token, user, error }
  }
})
</script>
