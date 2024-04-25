let lk = sessionStorage.getItem('lk');
if (lk) {
    const head = document.querySelector('header');
    let lkHref = document.createElement('a');
    lkHref.classList.add('.lkHref');
    lkHref.href = './lk.html';
    let image = document.createElement('img');
    image.src = './images/person 1.png';
    lkHref.append(image);
    head.append(lkHref);
}