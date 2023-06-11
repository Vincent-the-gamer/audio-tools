const { app, BrowserWindow, shell, Menu} = require('electron')

require('./app.js')

function start() {
  // Hide Menu
  Menu.setApplicationMenu(null)
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences:{ 
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true, 
    },
  });

  mainWindow.on('close', () => {
    mainWindow = null
  })
  mainWindow.loadURL(`http://127.0.0.1:8080/`);
};

// make <a href> open your browser instead of a new electron window


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

app.on('ready', start)

