import fs from "fs/promises";
import path from "path";

import setRootCSS from "./libs/root"; // TEMP
import setClassTheme from "./libs/theme";
import preset from "./presets/default";
import { minimifyCss } from "./style";

const pathCss = path.resolve(`node_modules/@durandil/css/build`, "style.css");
const pathCssMin = path.resolve(
  `node_modules/@durandil/css/build`,
  "style.min.css"
);

export function durandilConfig() {
  return {
    name: "durandil-css-vite",
    async configResolved() {
      console.log("@durandil/css run ! = configResolved");

      let response = "";
      response += setRootCSS(preset);
      response += setClassTheme(preset);

      console.log(response);

      fs.writeFile(pathCss, response);
      fs.writeFile(pathCssMin, minimifyCss(response));
    },
    async configureServer(server: any) {
      server.watcher.add("./");
      console.log("@durandil/css run ! = configureServer");
    },
  };
}
