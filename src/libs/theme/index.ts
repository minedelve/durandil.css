import { css } from "../../utils";
import { Config } from "../../presets/default";

function setClassTheme(settings: Config) {
  let response = "";

  if (settings.colors) {
    for (const [key] of Object.entries(settings.colors)) {
      response += `.bg\:${key} {\n`;
      response += css({
        key: "background-color",
        value: `var(--color-${key})`,
        important: true,
      });
      response += "}\n";

      response += `.text\:${key} {\n`;
      response += css({
        key: "color",
        value: `var(--color-${key})`,
        important: true,
      });
      response += "}\n";
    }
  }

  return response;
}

export default setClassTheme;
