import fs from "fs/promises";
import setRootCSS from "./libs/root";
import setClassTheme from "./libs/theme";

import preset from "./presets/default";
import { pathCssPackage, pathCssPackageMin } from "./constant";
import { minimifyCss } from "./style";

export function buildCSSFile(config: any) {
  let response = "";

  // params
  const excludeCss = config?.exclude;

  // default
  response += setRootCSS(preset);

  if (excludeCss && !excludeCss.includes("theme")) {
    response += setClassTheme(preset);
  }

  console.log("CSS", response);
  fs.writeFile(pathCssPackage, response);
  fs.writeFile(pathCssPackageMin, minimifyCss(response));
}
