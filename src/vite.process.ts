import setRootCSS from "./libs/root"; // TEMP
import preset from "./presets/default";

export function durandilConfig() {
  return {
    name: "durandil-css-vite",
    async configResolved() {
      console.log("@durandil/css run ! = configResolved");

      let response = "";
      response += setRootCSS(preset);

      console.log(response);
    },
    async configureServer(server: any) {
      server.watcher.add("./");
      console.log("@durandil/css run ! = configureServer");
    },
  };
}
