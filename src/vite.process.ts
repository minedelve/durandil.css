import fs from "fs/promises";
import path from "path";

import setRootCSS from "./libs/root"; // TEMP
import setClassTheme from "./libs/theme";
import preset from "./presets/default";

const pathCss = path.resolve(`node_modules/@durandil/css/build`, "style.css");

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
    },
    async configureServer(server: any) {
      server.watcher.add("./");
      console.log("@durandil/css run ! = configureServer");
    },
  };
}
