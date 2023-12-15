import { generateClass } from "../../presets/default";
import { css, mediaQueries } from "../../utils";

function setClassFlexAlignContent({ screen, data }: generateClass) {
  let response = "";
  for (const [key, value] of Object.entries(data)) {
    // flexAlignContent
    if (screen) {
      response += `.${mediaQueries(screen)}align-content-${key} {\n`;
      response += css({
        key: "align-content",
        value: `${value}`,
        important: true,
      });
      response += "}\n";
    } else {
      response += `.align-content-${key} {\n`;
      response += css({
        key: "align-content",
        value: `${value}`,
        important: true,
      });
      response += "}\n";
    }
  }
  return response;
}

export default setClassFlexAlignContent;
