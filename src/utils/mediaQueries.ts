export const mediaQueries = (screen?: string) => {
  return screen && screen !== "xs" ? screen + "-" : "";
};
