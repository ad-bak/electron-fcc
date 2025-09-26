import { app, BrowserWindow, ipcMain } from "electron";

import path from "path";
import { fileURLToPath } from "url";
import { ipcMainHandle, isDev } from "./utils.js";
import { getStaticData, pollResources } from "./resourceManager.js";
import { getPreloadPath } from "./pathResolver.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: getPreloadPath(),
    },
  });
  const dir = path.join(__dirname, "../dist-react/index.html");

  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(dir);
  }

  pollResources(mainWindow);

  ipcMainHandle("getStaticData", () => {
    return getStaticData();
  });
});
