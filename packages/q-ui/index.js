// 按需加载
export * from "./components";

// 全局注册
import components from "./components";
// 全局安装
export const install = app => {
    if (install.installed) return;
    components.forEach(component => {
        app.use(component);
    })
}
export default install;