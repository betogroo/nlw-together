import { ref } from 'vue'
import { Error as ErrorType } from '../types/Error'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  signInWithPopup
} from '@/plugins/firebase'
const provider = new GoogleAuthProvider()
const auth = getAuth()

const error = ref<ErrorType>({ error: false })
const isPending = ref<boolean>(false)

const loginWithGoogle = async (mode = 'redirect') => {
  error.value.error = false
  isPending.value = true
  if (mode === 'redirect') {
    await signInWithRedirect(auth, provider)
  } else {
    signInWithPopup(auth, provider)
      .then((result: any) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential: any = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        isPending.value = false
        // ...
      })
      .catch((err: any) => {
        // Handle Errors here.
        error.value.error = true
        error.value.msg = err.code
        isPending.value = false
        // ...
      })
  }
}

const useLogin = () => {
  return { error, isPending, loginWithGoogle }
}

export default useLogin
