// console.log('Hola');
const ipc = require('electron').ipcRenderer;
// // var ipc = require('electron');
// document.getElementById('close').addEventListener('click', () => {
//     console.log('asdasda');
//     ipc.send('window-close');
// });


document.getElementById('close').addEventListener('click', () => {
    console.log('cerrando app');
    ipc.send('window-close');
});