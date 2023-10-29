const { app, BrowserWindow, screen, Menu, ipcMain } = require("electron");
const path = require("path");
const { exec } = require("child_process");

const createWindow = () => {
  const mainScreen = screen.getPrimaryDisplay();
  const dimensions = mainScreen.size;

  const win = new BrowserWindow({
    minWidth: 1280,
    minHeight: 800,
    maxWidth: 1280,
    maxHeight: 800,
    x: (dimensions.width - 1280) / 2, // Center horizontally
    y: (dimensions.height - 800) / 2,
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "#2f3241",
      symbolColor: "#7289da",
      height: 30,
    },
    icon: path.join(__dirname, "build", "icon.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  const customMenu = Menu.buildFromTemplate([]);
  Menu.setApplicationMenu(customMenu);

  ipcMain.on("open-exe", (event, exePath) => {
    exec(`start ${exePath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error opening the .exe file: ${error.message}`);
        return;
      }
      console.log(`Opened the .exe file: ${exePath}`);
    });
  });

  win.loadFile(path.join(__dirname, "build", "index.html"));
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
