export const css = ({ key, value, important }: CssType) => {
  return `${key}: ${value} ${important ? "!important" : ""};\n`;
};

interface CssType {
  key: string;
  value: string | number;
  important?: boolean;
}
