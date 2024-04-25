import * as fws from ws.js

let locationToRedirect = null;
const preparationBlock = document.querySelector('.preparationBlock');
const textPreparationBlock = preparationBlock.querySelector('h1');
const scanBlock = document.querySelector('.scanQR');
const scanContent = document.querySelector('.scanContent').querySelector('h1');
const textOnButton = document.getElementById('html5-qrcode-button-camera-permission');
const totalAmount = '';

textOnButton.textContent = 'Подключить камеру';

scanBlock.style.display = "none";
preparationBlock.style.display = "block";

ws = getInstanceOfWS();

ws.send({request: 'startScanning'}, (message) => 
{
    if (message.success === false) {
        scanBlock.style.display = "none";
        preparationBlock.style.display = "block";
        textPreparationBlock.textContent = "Ошибка сканирования"
    }; 
    totalAmount = message.total_amount;
});

window.onunload = () =>{
    ws.send({request: "stopScanning"});
}

ws.taskHandler = (message) =>
{
   if(message.task == "change_state"){
    switch(message.state)
    {
        case "preparing":
            scanBlock.style.display = "none";
            preparationBlock.style.display = "block";
            break;
        case "complete":
            location.href = './index.html';
            break;
        case "error":
            scanBlock.style.display = "none";
            preparationBlock.style.display = "block";
            textPreparationBlock.textContent = "Ошибка сканирования"
            break;
        case "scanning":
            scanBlock.style.display = "block";
            preparationBlock.style.display = "none";
            break;    
    }
   }
   if(message.task == "change_approved_amount"){
    scanContent.textContent = message.amount +"/"+totalAmount;
   }
};

let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: { width: 250, height: 250 } },
    /* verbose= */ false);

function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);
    ws.send({request: "shareScannedQR", data: decodedText})
    locationToRedirect = decodedText;
    }

function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    console.warn(`Code scan error = ${error}`);
}

html5QrcodeScanner.render(onScanSuccess, onScanFailure);

