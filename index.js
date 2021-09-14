// console.log('Hola');
// const ipc = require('electron').ipcRenderer;
// // var ipc = require('electron');
// document.getElementById('close').addEventListener('click', () => {
//     console.log('asdasda');
//     ipc.send('window-close');
// });

var windowTopbar = document.createElement('div')
windowTopbar.style.width = '100%'
windowTopbar.style.height = '32px'
windowTopbar.style.backgroundColor = '#000'
windowTopbar.style.position = 'absolute'
windowTopbar.style.top = 0
windowTopbar.style.left = 0
windowTopbar.style.webkitAppRegion = 'drag'
document.body.appendChild(windowTopbar)