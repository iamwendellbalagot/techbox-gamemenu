const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  openExe: (path) => ipcRenderer.send("open-exe", path),
});
