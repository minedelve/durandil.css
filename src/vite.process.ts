import setRootCSS from "./libs/root"; // TEMP
import setClassTheme from "./libs/theme";
import preset from "./presets/default";

export function durandilConfig() {
  return {
    name: "durandil-css-vite",
    async configResolved() {
      console.log("@durandil/css run ! = configResolved");

      let response = "";
      response += setRootCSS(preset);
      response += setClassTheme(preset);

      console.log(response);
    },
    async configureServer(server: any) {
      server.watcher.add("./");
      console.log("@durandil/css run ! = configureServer");
    },
  };
}
