// 默认命名前缀
export const defaultNamespace = 'q';

// 命名空间
export const useNamespace = (block) => {
  // 命名空间就是命名前缀
  const namespace = defaultNamespace;
  return {
    namespace
  }
};