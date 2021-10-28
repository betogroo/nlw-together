import { ref } from 'vue'
import { Error as ErrorType } from '../types/Error'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect
} from '@/plugins/firebase'
const provider = new GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
const auth = getAuth()

const error = ref<ErrorType>({ error: false })
const isPending = ref<boolean>(false)

const loginWithGoogle = async () => {
  error.value.error = false
  isPending.value = true
  await signInWithRedirect(auth, provider)
}

const useLogin = () => {
  return { error, isPending, loginWithGoogle }
}

export default useLogin
