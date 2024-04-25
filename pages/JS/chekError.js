const errorPromise = fetch('https://qr.phoenix-legacy.ru/');

if (errorPromise.ok) {
    let messageError = await errorPromise.text();
    if (messageError) {
        const errorMessageBlock = document.createElement('div');
        errorMessageBlock.classList.add(errorMess);
        errorMessageBlock.append("messageError");
        const header = document.querySelector('header');
        header.after(errorMessageBlock);
    }
}