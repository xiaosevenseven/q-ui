// 默认命名前缀
export const defaultNamespace = 'q';

// 命名空间
export const useNamespace = (block) => {
  // 命名空间就是命名前缀
  const namespace = defaultNamespace;

  // 生成 block
  const b = (blockSuffix = "") => _bem(namespace, block, blockSuffix);
  // 生成 element
  const e = (element) => element ? _bem(namespace, block, '', element, '') : '';
  // 生成 modifier
  const m = (modifier, value) => modifier ? _bem(namespace, block, '', '', modifier, value) : '';
  // 状态设置
  const is = (name, state) => name && state ? `is-${name}` : '';
  return {
    namespace,
    b,
    e,
    m,
    is
  }
};


const _bem = (namespace, block, blockSuffix, element, modifier, modifierValue) => {
  // 默认 Block
  let className = namespace + '-' + block;
  // 如果存在子级块
  blockSuffix && (className += '-' + blockSuffix);
  // 如果存在元素
  element && (className += '__' + element);
  // 如果存在修饰符
  modifier && (className += '--' + modifier);
  // 如果存在修饰符的值
  modifierValue && (className += '_' + modifierValue);
  // 返回类名
  return className;
}