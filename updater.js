// Modules
const { autoUpdater } = require('electron-updater');

// Enable logging
autoUpdater.logger = require('electron-log');
autoUpdater.logger.transports.file.level = 'info';

// Check for updates
exports.check = () => {
    //console.log('Checking for updates');

    // Start update check
    autoUpdater.checkForUpdates();
    
}