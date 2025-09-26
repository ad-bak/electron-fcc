/* eslint-disable @typescript-eslint/no-explicit-any */

import * as electron from "electron";

electron.contextBridge.exposeInMainWorld("electron", {
  subscribeStatistics: (callback) => {
    electron.ipcRenderer.on("statistics", (_, statistics) => {
      callback(statistics);
    });
  },
  getStaticData: () => electron.ipcRenderer.invoke("getStaticData"),
} satisfies Window["electron"]);
