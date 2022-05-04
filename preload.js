const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
    testFunction: () => "test",
});
