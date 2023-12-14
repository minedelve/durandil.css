import path from "path";

const rootDir = process.cwd();

export const pathCssPackage = path.resolve(
  `node_modules/@durandil/css/build`,
  "style.css"
);
export const pathCssPackageMin = path.resolve(
  `node_modules/@durandil/css/build`,
  "style.min.css"
);
export const pathDefaultConfig = path.resolve(
  `node_modules/@durandil/css/build`,
  "durandil.config.js"
);
export const pathRootConfig = path.resolve(rootDir, "durandil.config.js");

// in project
export const configurationPathRoot = path.resolve(
  rootDir,
  "durandil.config.js"
);
