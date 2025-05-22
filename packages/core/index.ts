import { makeInstaller } from '@q-ui/utils'
import components from './components'
import '@q-ui/theme/index.css'

// 作为插件全局引入
const installer = makeInstaller(components)
export default installer;

// 按需引入
export * from "@q-ui/components"