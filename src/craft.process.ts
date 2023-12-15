import fs from "fs/promises";
import preset from "./presets/default";
import { pathCssPackage, pathCssPackageMin } from "./constant";
import { minimifyCss } from "./style";

import setRootCSS from "./libs/root";
import setClassTheme from "./libs/theme";
import setClassDisplay from "./libs/display";
import setClassShadow from "./libs/shadow";
import setClassColumns from "./libs/colums";
import setClassMargin from "./libs/margin";
import setClassPadding from "./libs/padding";
import setClassAutoMargin from "./libs/autoMargin";

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
  if (!excludeCss.includes("shadow"))
    response += setClassShadow({ data: preset.variables.shadow });
  if (!excludeCss.includes("grids")) {
    response += setClassColumns({ data: {}, value: preset.variables.grids });
  }
  if (!excludeCss.includes("spacings")) {
    response += setClassMargin({ data: preset.variables.margin });
    response += setClassPadding({ data: preset.variables.padding });
    response += setClassAutoMargin({ data: {} });
  }

  for (const [key, value] of Object.entries(breakpoint!)) {
    response += `@media screen and (min-width: ${value}) {\n`;

    // with breakpoint
    if (!excludeCss.includes("display"))
      response += setClassDisplay({
        screen: key,
        data: preset.variables.display,
      });

    if (!excludeCss.includes("grids")) {
      response += setClassColumns({
        screen: key,
        data: {},
        value: preset.variables.grids,
      });
    }

    if (!excludeCss.includes("spacings")) {
      response += setClassMargin({
        screen: key,
        data: preset.variables.margin,
      });
      response += setClassPadding({
        screen: key,
        data: preset.variables.padding,
      });
      response += setClassAutoMargin({ screen: key, data: {} });
    }
    response += "}\n\n";
  }

  //   console.log("durandil/css", response);
  fs.writeFile(pathCssPackage, response);
  fs.writeFile(pathCssPackageMin, minimifyCss(response));
}
