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
const rootDir = process.cwd();
export const configPath = path.resolve(rootDir, "durandil.config.js");

export function durandilConfig() {
  return {
    name: "durandil-css-vite",
    async configResolved() {
      console.log("@durandil/css run ! = configResolved");
      const file = await fs.readFile(configPath, "utf-8");
      const defaultExportMatch = file.match(/export\s+default\s+(\{[^]*?\});/);
      let defaultValue = null;

      if (defaultExportMatch && defaultExportMatch.length > 1) {
        const exportCode = `return ${defaultExportMatch[1]}`;
        const defaultExportFunction = new Function(exportCode);
        defaultValue = defaultExportFunction();
      }

      console.log("defaultValue", defaultValue, defaultValue.theme);
      let response = "";
      response += setRootCSS(preset);
      response += setClassTheme(preset);

      // console.log(response);

      fs.writeFile(pathCss, response);
      fs.writeFile(pathCssMin, minimifyCss(response));
    },
    async configureServer(server: any) {
      server.watcher.add("./");
      console.log("@durandil/css run ! = configureServer");
    },
  };
}
