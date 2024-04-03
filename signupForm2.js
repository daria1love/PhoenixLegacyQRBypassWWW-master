let form1 = JSON.parse(sessionStorage.getItem('form1'));

const formElement = document.querySelector('form');
for (let i = 0; i < form1.length; i++) {
    if (form1[i].name == '') continue;
    let hiddenElement = document.createElement('input');
    hiddenElement.name = form1[i].name + '_firstpage';
    hiddenElement.value = form1[i].value;
    hiddenElement.style.display = 'None';
    formElement.prepend(hiddenElement);
}

formElement.addEventListener('submit', (event) => {
    sessionStorage.setItem('lk', true);
})