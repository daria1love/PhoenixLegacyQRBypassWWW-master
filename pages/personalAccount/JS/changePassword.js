const newPasswordSave = document.querySelector('button');
const password = document.querySelector('.password');
const newPassword = document.querySelector('.newPassword');
const newPasswordRepeat = document.querySelector('.newPasswordRepeat');

const messageError = document.querySelector('span');
const inputs = document.querySelectorAll('input');

// let websocket = new WebSocket('wss://qr.phoenix-legacy.ru/api/sendQR?group_id');

const validate_password = () => {

    if (newPassword.value != newPasswordRepeat.value) {
        messageError.style.display = 'block';
        messageError.style.color = 'red';
        messageError.innerHTML = '☒ Use same password';
        document.querySelector('.saveButton').disabled = true;
        document.querySelector('.saveButton').style.opacity = (0.4);
    }
    else {
        messageError.style.display = 'block';
        messageError.style.color = 'green';
        messageError.innerHTML =
            '🗹 Password Matched';
        document.querySelector('.saveButton').disabled = false;
        document.querySelector('.saveButton').style.opacity = (1);
    }
}

newPasswordSave.addEventListener('submit', (event) => {
    console.log(event);
    // websocket.send(event);
})