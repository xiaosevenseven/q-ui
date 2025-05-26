export const useStyle = () => {
  const fontSize = (value) => {
    return value ? { fontSize: value + "px" } : {};
  };
  const color = (value) => {
    return value ? { color: value } : {};
  };
  return {
    fontSize,
    color,
  };
};
