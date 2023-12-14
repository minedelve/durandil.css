import fs from "fs/promises";
import setRootCSS from "./libs/root";
import setClassTheme from "./libs/theme";

import preset from "./presets/default";
import { pathCssPackage, pathCssPackageMin } from "./constant";
import { minimifyCss } from "./style";
import setClassDisplay from "./libs/display";

export function buildCSSFile(config: any) {
  let response = "";

  // params
  const excludeCss = config?.exclude ? config?.exclude : [];
  const breakpoint = preset!.screens;

  // default
  response += setRootCSS(preset);

  // not use breakpoint
  if (!excludeCss.includes("theme")) response += setClassTheme(preset);
  if (!excludeCss.includes("display"))
    response += setClassDisplay({ data: preset.variables.display });

  for (const [key, value] of Object.entries(breakpoint!)) {
    response += `@media screen and (min-width: ${value}) {\n`;

    // with breakpoint
    if (!excludeCss.includes("display"))
      response += setClassDisplay({
        screen: key,
        data: preset.variables.display,
      });

    response += "}\n\n";
  }

  console.log("durandil/css", response);
  fs.writeFile(pathCssPackage, response);
  fs.writeFile(pathCssPackageMin, minimifyCss(response));
}
