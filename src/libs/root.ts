import type { Config } from "../presets/default";

function setRootCSS(settings: Config) {
  let response = "";
  if (settings.colors) {
    if (!settings.dark) {
      // no use darkmode
      response += ":root {\n";
      for (const [key, value] of Object.entries(settings.colors)) {
        if (typeof value === "string") {
          response += ` --color-${key}: ${value};\n`;
        }
      }
      response += "}\n\n";
    } else {
      // @media prefers-color-scheme light
      response += "@media (prefers-color-scheme: light) {\n";
      // light
      response += ":root {\n";
      response += "color-scheme: light;\n";
      for (const [key, value] of Object.entries(settings.colors)) {
        if (typeof value === "object" && value?.light) {
          response += ` --color-${key}: ${value.light};\n`;
        } else if (typeof value === "string") {
          response += ` --color-${key}: ${value};\n`;
        }
      }
      response += "}\n\n";
      // dark in light
      response += ".dark {\n";
      response += "color-scheme: light;\n";
      for (const [key, value] of Object.entries(settings.colors)) {
        if (typeof value === "object" && value?.dark) {
          response += ` --color-${key}: ${value.dark};\n`;
        } else if (typeof value === "string") {
          response += ` --color-${key}: ${value};\n`;
        }
      }
      response += "}\n\n";
      response += "}\n\n";
      // END @media prefers-color-scheme light

      // @media prefers-color-scheme dark
      response += "@media (prefers-color-scheme: dark) {\n";
      // dark
      response += ":root {\n";
      response += "color-scheme: dark;\n";
      for (const [key, value] of Object.entries(settings.colors)) {
        if (typeof value === "object" && value?.dark) {
          response += ` --color-${key}: ${value.dark};\n`;
        } else if (typeof value === "string") {
          response += ` --color-${key}: ${value};\n`;
        }
      }
      response += "}\n\n";
      // light in dark
      response += ".light {\n";
      response += "color-scheme: dark;\n";
      for (const [key, value] of Object.entries(settings.colors)) {
        if (typeof value === "object" && value?.light) {
          response += ` --color-${key}: ${value.light};\n`;
        } else if (typeof value === "string") {
          response += ` --color-${key}: ${value};\n`;
        }
      }
      response += "}\n\n";
      response += "}\n\n";
      // END @media prefers-color-scheme dark
    }
  }
  return response;
}

export default setRootCSS;
