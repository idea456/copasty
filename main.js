// Modules to control application life and create native browser window
const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
// const fs = require("fs");

try {
    // eslint-disable-next-line global-require
    require("electron-reloader")(module);
    // eslint-disable-next-line no-empty
} catch (_) {}

require("@electron/remote/main").initialize();

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 400,
        height: 600,
        resizable: false,
        titleBarStyle: "hiddenInset",
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            enableRemoteModule: true,
        },
    });

    mainWindow.once("ready-to-show", () => {
        mainWindow.show();
    });

    // and load the index.html of the app.
    // mainWindow.loadURL('http://localhost:3000')
    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file:${path.join(__dirname, "app/public/index.html")}`
    );
    // Open the DevTools.
    mainWindow.webContents.openDevTools();
}

// const getFilesFromUser = async () => {
//     const files = await dialog.showOpenDialog({
//         properties: ["openFile"],
//     });
//     console.log(files);
// };

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

// contextBridge.exposeInMainWorld("electron", {
//     testFunction: () => {
//         console.log("test successful!");
//         return "test";
//     },
// });
