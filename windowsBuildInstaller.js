var electronInstaller = require('electron-winstaller');
let resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './release-builds/Calendario_Eventos_Meru-win32-x64',
    outputDirectory: './release-builds/installers/windows',
    authors: 'Victor Valencia',
    exe: 'Calendario_Eventos_Meru.exe',
    noMsi: true,
    'loadingGif': './assets/images/ripple.gif',
    title: 'CalendarioEventosMeru',
    name: 'CalendarioEventosMeru',
    setupIcon: './dist/images/favicon.ico'
  });
 
resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));