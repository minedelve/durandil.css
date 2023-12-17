import { generateClass } from "../../presets/default";
import { css, mediaQueries } from "../../utils";

function setClassHeight({ screen, data }: generateClass) {
  let response = "";
  for (const [key, value] of Object.entries(data)) {
    // height
    if (screen) {
      response += `.${mediaQueries(screen)}h-${key} {\n`;
      response += css({
        key: "height",
        value: `${value}`,
        important: true,
      });
      response += "}\n";
    } else {
      response += `.h-${key} {\n`;
      response += css({
        key: "height",
        value: `${value}`,
        important: true,
      });
      response += "}\n";
    }
  }
  return response;
}

export default setClassHeight;
