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
import setClassFlex from "./libs/flex/flex";
import setClassFlexAlign from "./libs/flex/flexAlign";
import setClassFlexAlignContent from "./libs/flex/flexAlignContent";
import setClassFlexAlignSelf from "./libs/flex/flexAlignSelf";
import setClassFlexDirection from "./libs/flex/flexDirection";
import setClassFlexGrowShrink from "./libs/flex/flexGrowShrink";
import setClassFlexJustify from "./libs/flex/flexJustify";
import setClassFlexShortland from "./libs/flex/flexShortland";
import setClassFlexWrap from "./libs/flex/flexWrap";
import setClassFloat from "./libs/float";
import setNormalizeCss from "./libs/normalize";
import setClassOrder from "./libs/order";
import setClassRounded from "./libs/rounded";

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
    response += setClassOrder({
      data: preset.variables.order,
    });
  }
  if (!excludeCss.includes("spacings")) {
    response += setClassMargin({ data: preset.variables.margin });
    response += setClassPadding({ data: preset.variables.padding });
    response += setClassAutoMargin({ data: {} });
  }

  if (!excludeCss.includes("flex")) {
    response += setClassFlex({ data: preset.variables.flex });
    response += setClassFlexAlign({ data: preset.variables.flexAlign });
    response += setClassFlexAlignContent({
      data: preset.variables.alignContent,
    });
    response += setClassFlexAlignSelf({ data: preset.variables.flexAlignSelf });
    response += setClassFlexDirection({ data: preset.variables.flexDirection });
    response += setClassFlexGrowShrink({
      data: preset.variables.flexGrowShrink,
    });
    response += setClassFlexJustify({ data: preset.variables.flexJustify });
    response += setClassFlexShortland({ data: preset.variables.flexShorthand });
    response += setClassFlexWrap({ data: preset.variables.flexWrap });
  }

  if (!excludeCss.includes("float")) {
    response += setClassFloat({ data: preset.variables.float });
  }

  if (!excludeCss.includes("normalize")) {
    setNormalizeCss();
  }

  if (!excludeCss.includes("rounded")) {
    response += setClassRounded({ data: preset.borderRadius });
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

      response += setClassOrder({
        screen: key,
        data: preset.variables.order,
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

    if (!excludeCss.includes("flex")) {
      response += setClassFlex({ screen: key, data: preset.variables.flex });
      response += setClassFlexAlign({
        screen: key,
        data: preset.variables.flexAlign,
      });
      response += setClassFlexAlignContent({
        screen: key,
        data: preset.variables.alignContent,
      });
      response += setClassFlexAlignSelf({
        screen: key,
        data: preset.variables.flexAlignSelf,
      });
      response += setClassFlexDirection({
        screen: key,
        data: preset.variables.flexDirection,
      });
      response += setClassFlexGrowShrink({
        screen: key,
        data: preset.variables.flexGrowShrink,
      });
      response += setClassFlexJustify({
        screen: key,
        data: preset.variables.flexJustify,
      });
      response += setClassFlexShortland({
        screen: key,
        data: preset.variables.flexShorthand,
      });
      response += setClassFlexWrap({
        screen: key,
        data: preset.variables.flexWrap,
      });
    }

    if (!excludeCss.includes("float")) {
      response += setClassFloat({ screen: key, data: preset.variables.float });
    }

    if (!excludeCss.includes("rounded")) {
      response += setClassRounded({ screen: key, data: preset.borderRadius });
    }

    response += "}\n\n";
  }

  //   console.log("durandil/css", response);
  fs.writeFile(pathCssPackage, response);
  fs.writeFile(pathCssPackageMin, minimifyCss(response));
}
