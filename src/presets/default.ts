const preset: Config = {
  modules: {
    theme: true,
    screens: true,
    fontFamily: true,
    borderRadius: true,
  },
  dark: true,
  colors: {
    test: "ffeeff",
    primary: {
      light: "#fffff",
      dark: "#cccccc",
    },
    secondary: {
      dark: "#aaaaaa",
    },
    tertiary: {
      light: "#121212",
    },
  },
  fontFamily: {},
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  borderRadius: {
    none: "0px",
    sm: "",
    null: "",
    lg: "",
    xl: "",
    "2xl": "",
    full: "9999px",
    circle: "50%",
  },
};

export default preset;

export interface Config {
  modules?: {
    theme?: boolean;
    screens?: boolean;
    fontFamily?: boolean;
    borderRadius?: boolean;
  };
  dark?: boolean;
  colors?: {
    [key: string]: string | undefined | { light?: string; dark?: string };
  };
  fontFamily?: {};
  screens?: {};
  borderRadius?: {};
}
