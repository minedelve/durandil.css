import { generateClass } from "../../presets/default";
import { css } from "../../utils";

function setClassShadow({ data }: generateClass) {
  let response = "";
  for (const [key, value] of Object.entries(data)) {
    // elevation
    response += `.shadow-${key} {\n`;
    if (value?.length === 1) {
      response += css({
        key: "box-shadow",
        value: `${value[0]} rgba(0, 0, 0, 0.2)`,
        important: true,
      });
    }
    if (value?.length === 2) {
      response += css({
        key: "box-shadow",
        value: `${value[0]} rgba(0, 0, 0, 0.2), ${value[1]} rgba(0, 0, 0, 0.14)`,
        important: true,
      });
    }

    response += "}\n";
  }
  return response;
}

export default setClassShadow;
