import { ipcMain } from "electron/main";

export function isDev(): boolean {
  return process.env.NODE_ENV === "development";
}

export function ipcHandle<Key extends keyof EventPayloadMapping>(key: Key, handler: () => EventPayloadMapping[Key]) {
  ipcMain.handle(key, () => handler());
}
