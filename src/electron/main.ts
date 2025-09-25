import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";
import { isDev } from "./utils.js";
import { pollResources } from "./resourceManager.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.on("ready", () => {
  const mainWindow = new BrowserWindow({});
  const dir = path.join(__dirname, "../dist-react/index.html");

  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(dir);
  }

  pollResources();
});
