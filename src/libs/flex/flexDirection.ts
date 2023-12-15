import { generateClass } from "../../presets/default";
import { css, mediaQueries } from "../../utils";

function setClassFlexDirection({ screen, data }: generateClass) {
  let response = "";
  for (const [key, value] of Object.entries(data)) {
    // flexDirection
    if (screen) {
      response += `.${mediaQueries(screen)}flex-${key} {\n`;
      response += css({
        key: "flex-direction",
        value: `${value}`,
        important: true,
      });
      response += "}\n";
    } else {
      response += `.flex-${key} {\n`;
      response += css({
        key: "flex-direction",
        value: `${value}`,
        important: true,
      });
      response += "}\n";
    }
  }
  return response;
}

export default setClassFlexDirection;
