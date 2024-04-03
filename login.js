import * as fws from ws.js

ws = getInstanceOfWS();

const entry = document.querySelector('form');
entry.addEventListener('submit', () => {
    sessionStorage.setItem('lk', true);
    ws.close();
    ws = getInstanceOfWS();
})
