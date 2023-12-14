import fs from "fs/promises";

export async function setProjectConfig({ path, dest }: SetProjectConfigType) {
  await fs.copyFile(path, dest);
}

interface SetProjectConfigType {
  path: string;
  dest: string;
}
