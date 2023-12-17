import { generateClass } from "../../presets/default";
import { css, mediaQueries } from "../../utils";

function setClassOrder({ screen, data }: generateClass) {
  let response = "";
  for (const [key, value] of Object.entries(data)) {
    // order
    if (screen) {
      response += `.${mediaQueries(screen)}order-${key} {\n`;
      response += css({
        key: "order",
        value: `${value}`,
        important: true,
      });
      response += "}\n";
    } else {
      response += `.order-${key} {\n`;
      response += css({
        key: "order",
        value: `${value}`,
        important: true,
      });
      response += "}\n";
    }
  }
  return response;
}

export default setClassOrder;
