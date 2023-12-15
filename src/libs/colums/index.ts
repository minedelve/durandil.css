import { generateClass } from "../../presets/default";
import { css, mediaQueries } from "../../utils";

function setClassColumns({ screen, value }: generateClass) {
  let response = "";

  if (!screen) {
    response += `.columns {\n`;
    response += css({
      key: "width",
      value: `100%`,
    });
    response += css({
      key: "padding",
      value: `12px`,
    });
    response += "}\n";
  }

  for (let item = 0; item < value!; item++) {
    if (screen) {
      response += `.${mediaQueries(screen)}column-${item + 1} {\n`;
      response += css({
        key: "flex",
        value: `0 0 calc((100% / ${value}) * ${item}) `,
      });
      response += css({
        key: "max-width",
        value: `calc((100% / ${value}) * ${item}) `,
      });
      response += "}\n";
    } else {
      response += `.column-${item + 1} {\n`;
      response += css({
        key: "flex",
        value: `0 0 calc((100% / ${value}) * ${item}) `,
      });
      response += css({
        key: "max-width",
        value: `calc((100% / ${value}) * ${item}) `,
      });
      response += "}\n";
    }
  }

  return response;
}

export default setClassColumns;
