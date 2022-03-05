const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  notificationApi: {
    sendNotification(title, message) {
      ipcRenderer.send("notify", { title, message });
    },
  },
  batteryApi: {},
  fileApi: {
    createFile(initialContent = null) {
      ipcRenderer.send("createFile", initialContent);
    },
    open(type) {
      ipcRenderer.send("open", type);
    },
    addFile(path, title) {
      ipcRenderer.send("addFile", { path, title });
    },
    readFile(path, filename) {
      ipcRenderer.send("readFile", { path, filename });
    },
    subscribe({ openFile, openFolder, updateFolder, readFile }) {
      ipcRenderer.on("openFile", (e, data) => {
        openFile(data);
      });
      ipcRenderer.on("openFolder", (e, data) => {
        openFolder(data);
      });
      ipcRenderer.on("updateFolder", (e, data) => {
        updateFolder(data);
      });
      ipcRenderer.on("readFile", (e, data) => {
        readFile(data);
      });
    },
  },
});
