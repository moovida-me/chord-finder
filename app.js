const e = require('electron');

e.app.disableHardwareAcceleration();
e.app.on('ready', () => {
	const win = new e.BrowserWindow({
		modal: true,
		width: 1100,
		height: 500,
		minWidth: 1100,
		minHeight: 500
	})
	
	e.globalShortcut.register('F5', () => {
		win.reload();
	});

	e.globalShortcut.register('Ctrl+R', () => {
		win.reload();
	});

	win.setMenu(null);
	win.loadFile('index.html')
	win.on('closed', e.app.quit);
});
