import { generateClass } from "../../presets/default";
import { css, mediaQueries } from "../../utils";

function setClassFlexWrap({ screen, data }: generateClass) {
  let response = "";
  for (const [key, value] of Object.entries(data)) {
    // flexWrap
    if (screen) {
      response += `.${mediaQueries(screen)}flex-${key} {\n`;
      response += css({
        key: "flex-wrap",
        value: `${value}`,
        important: true,
      });
      response += "}\n";
    } else {
      response += `.flex-${key} {\n`;
      response += css({
        key: "flex-wrap",
        value: `${value}`,
        important: true,
      });
      response += "}\n";
    }
  }
  return response;
}

export default setClassFlexWrap;
