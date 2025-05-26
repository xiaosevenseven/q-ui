import { getCurrentInstance } from "vue";
// 默认命名前缀
const defaultPrefix = "q";

/**
 * 
 * @param {*} parentName 接收父组件定义的名称 
 * @returns 
 */
export const useParent = (parentName) => {
    const  parent = getCurrentInstance().parent;
    // 获取父级组件
    const group = () => {
        return parent.proxy.$options.name  === `${defaultPrefix}-${parentName}`;
    }
    // 获取父级属性
    const props = (attr) => {
        return parent.props?.[attr] || false
    }
    return {
        group,
        props
    }
};