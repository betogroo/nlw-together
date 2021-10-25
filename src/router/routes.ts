import { routes as home } from '@/modules/core/home'
import { routes as auth } from '@/modules/core/auth'
import { routes as letmeask } from '@/modules/widgets/letmeask'

export default [...home, ...auth, ...letmeask]
