const preset: Config = {
  dark: false,
  colors: {
    primary: {
      light: "#fffff",
      dark: "#cccccc",
    },
    error: { light: "#B3261E", dark: "#F2B8B5" },
    warning: { light: "#fdb400", dark: "#fdb400" },
    success: { light: "#4caf50", dark: "#4caf50" },
    info: { light: "#2196f3", dark: "#2196f3" },
    background: {
      light: "#FFFBFE",
      dark: "#1C1B1F",
    },
  },
  fontFamily: {},
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
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
  variables: {
    display: {
      none: "none",
      inline: "inline",
      "inline-block": "inline-block",
      block: "block",
      table: "table",
      "table-cell": "table-cell",
      "table-row": "table-row",
      flex: "flex",
      "inline-flex": "inline-flex",
    },
  },
};

export default preset;

export interface Config {
  dark: boolean;
  colors: {
    [key: string]: string | undefined | { light?: string; dark?: string };
  };
  fontFamily: {};
  screens: {
    [key: string]: string | undefined;
  };
  borderRadius: {};
  variables: {
    display: {
      [key: string]: string | undefined;
    };
  };
}

export interface keyClassCSS {
  [key: string]: string | undefined;
}

export interface generateClass {
  screen?: string;
  data: {
    [key: string]: string | undefined;
  };
}
