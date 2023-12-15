import { generateClass } from "../../presets/default";
import { css, mediaQueries } from "../../utils";

function setClassAutoMargin({ screen }: generateClass) {
  let response = "";
  // auto margin
  if (screen) {
    response += `.${mediaQueries(screen)}ms-auto {\n`;
    response += css({
      key: "margin-inline-start",
      value: `auto`,
      important: true,
    });
    response += "}\n";
    response += `.${mediaQueries(screen)}me-auto {\n`;
    response += css({
      key: "margin-inline-end",
      value: `auto`,
      important: true,
    });
    response += "}\n";
  } else {
    response += `.ms-auto {\n`;
    response += css({
      key: "margin-inline-start",
      value: `auto`,
      important: true,
    });
    response += "}\n";
    response += `.me-auto {\n`;
    response += css({
      key: "margin-inline-end",
      value: `auto`,
      important: true,
    });
    response += "}\n";
  }

  return response;
}

export default setClassAutoMargin;
