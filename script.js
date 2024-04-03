// const choiceAction = document.querySelectorAll('.buttons');

// for (let i = 0; i < choiceAction.length; i++) {
//     choiceAction[i].addEventListener('click', (event) => {
//         actionPerson = event.target.className;
//         actionPerson += '.html'
//         sessionStorage.setItem("action", actionPerson);
//         console.log(sessionStorage.getItem("action"));
//     })
// }

const actionButon = document.querySelector('.nextPage');
console.log(actionButon);
if (lk) {
    actionButon.append('Сканировать QR код')
    actionButon.addEventListener('click', () => {
        document.location.href = './scanQR.html';
    })
}
else {
    actionButon.append('Авторизоваться');
    actionButon.addEventListener('click', () => {
        document.location.href = './login.html';
    })
}

