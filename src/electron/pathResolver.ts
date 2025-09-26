import { isDev } from "./utils.js";
import path from "path";
import { app } from "electron";

export function getPreloadPath() {
  const isDevPath = isDev() ? "." : "..";
  const preloadPath = path.join(app.getAppPath(), isDevPath, "/dist-electron/preload.cjs");

  return preloadPath;
}
