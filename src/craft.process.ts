import fs from "fs/promises";
import type { Config } from "./presets/default";

import setRootCSS from "./libs/root";
import setClassTheme from "./libs/theme";

import preset from "./presets/default";
import { pathCssPackage, pathCssPackageMin } from "./constant";
import { minimifyCss } from "./style";

export function buildCSSFile(config: any) {
  let response = "";

  const excludeCss = config?.exclude;
  console.log("config", config, excludeCss);

  response += setRootCSS(preset);
  if (excludeCss && !excludeCss.includes("theme")) {
    response += setClassTheme(preset);
  }

  console.log("CSS", response);
  fs.writeFile(pathCssPackage, response);
  fs.writeFile(pathCssPackageMin, minimifyCss(response));
}
