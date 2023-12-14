const preset: Config = {
  dark: false,
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
  dark?: boolean;
  colors?: {
    [key: string]: string | undefined | { light?: string; dark?: string };
  };
  fontFamily?: {};
  screens?: {};
  borderRadius?: {};
}
