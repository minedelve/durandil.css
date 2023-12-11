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
  screens: {},
  borderRadius: {},
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
