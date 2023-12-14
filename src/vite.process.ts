import { getProjectConfig, setProjectConfig } from "./config";
import { buildCSSFile } from "./craft.process";
import {
  configurationPathRoot,
  pathDefaultConfig,
  pathRootConfig,
} from "./constant";

export function durandilConfig() {
  return {
    name: "durandil-css-vite",
    async configResolved() {
      let configuration; // settings project

      try {
        configuration = await getProjectConfig({ path: configurationPathRoot });
      } catch (err) {
        await setProjectConfig({
          path: pathDefaultConfig,
          dest: pathRootConfig,
        });
      }

      buildCSSFile(configuration);
    },
    async configureServer(server: any) {
      server.watcher.add("./");
      server.watcher.on("change", async (filePath: string) => {
        if (String(filePath).includes("durandil.config.js")) {
          let configuration; // settings project

          try {
            configuration = await getProjectConfig({
              path: configurationPathRoot,
            });
          } catch (err) {
            await setProjectConfig({
              path: pathDefaultConfig,
              dest: pathRootConfig,
            });
          }

          buildCSSFile(configuration);
        }
      });
    },
  };
}
