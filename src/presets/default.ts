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
    shadow: {
      sm: ["0 1px 2px 0"],
      null: ["0 1px 3px 0", "0 1px 2px -1px"],
      md: ["0 4px 6px -1px", "0 2px 4px -2px"],
      lg: ["0 10px 15px -3px", "0 4px 6px -4px"],
      xl: ["0 20px 25px -5px", "0 8px 10px -6px"],
      xxl: ["0 25px 50px -12px"],
      inner: ["inset 0 2px 4px 0"],
      none: ["0 0"],
    },
    grids: 12,
    margin: ["auto", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    padding: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
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
    shadow: {
      [key: string]: Array<string>;
    };
    grids: number;
    margin: Array<string | number>;
    padding: Array<number>;
  };
}

export interface keyClassCSS {
  [key: string]: string | undefined;
}

export interface generateClass {
  screen?: string;
  data:
    | (string | number)[]
    | {
        [key: string | number]: string | Array<string | number> | undefined;
      };
  value?: number;
}
