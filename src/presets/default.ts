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
    flex: {
      flex: "flex",
      "inline-flex": "inline-flex",
    },
    alignContent: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      "space-between": "space-evenly",
      "space-around": "space-around",
      "space-evenly": "space-evenly",
      stretch: "space-evenly",
    },
    flexShorthand: {
      fill: "1 1 auto",
      "1-1": "1 1 auto",
      "1-0": "1 0 auto",
      "0-1": "0 1 auto",
      "0-0": "0 0 auto",
      "1-1-100": "1 1 100%",
      "1-0-100": "1 0 100%",
      "0-1-100": "0 1 100%",
      "0-0-100": "0 0 100%",
    },
    flexDirection: {
      row: "row",
      column: "column",
      "row-reverse": "row-reverse",
      "column-reverse": "column-reverse",
    },
    flexJustify: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      "space-between": "space-between",
      "space-around": "space-around",
      "space-evenly": "space-evenly",
    },
    flexAlign: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      baseline: "baseline",
      stretch: "stretch",
    },
    flexAlignSelf: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      baseline: "baseline",
      stretch: "stretch",
      auto: "auto",
    },
    flexWrap: {
      nowrap: "nowrap",
      wrap: "wrap",
      "wrap-reverse": "wrap-reverse",
    },
    flexGrowShrink: {
      "grow-0": 0,
      "grow-1": 1,
      "shrink-0": 0,
      "shrink-1": 1,
    },
    float: {
      start: "inline-start",
      end: "inline-end",
      right: "right",
      left: "left",
      none: "none",
    },
    order: {
      first: "-1",
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6,
      "7": 7,
      "8": 8,
      "9": 9,
      "10": 10,
      "11": 11,
      "12": 12,
      last: 13,
    },
    height: {
      auto: "auto",
      screen: "100dvh",
      "0": 0,
      "25": "25%",
      "50": "50%",
      "75": "75%",
      "100": "100%",
    },
    width: {
      auto: "auto",
      "0": 0,
      "25": "25%",
      "50": "50%",
      "75": "75%",
      "100": "100%",
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
    shadow: {
      [key: string]: Array<string>;
    };
    grids: number;
    margin: Array<string | number>;
    padding: Array<number>;
    flex: { [key: string]: string | undefined };
    alignContent: { [key: string]: string | undefined };
    flexShorthand: { [key: string]: string | undefined };
    flexDirection: { [key: string]: string | undefined };
    flexJustify: { [key: string]: string | undefined };
    flexAlign: { [key: string]: string | undefined };
    flexAlignSelf: { [key: string]: string | undefined };
    flexWrap: { [key: string]: string | undefined };
    flexGrowShrink: { [key: string]: string | number | undefined };
    float: { [key: string]: string | undefined };
    order: { [key: string]: string | number };
    height: { [key: string]: string | number };
    width: { [key: string]: string | number };
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
        [key: string | number]:
          | string
          | number
          | Array<string | number>
          | undefined;
      };
  value?: number;
}
