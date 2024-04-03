if (sessionStorage.getItem("groupList") != null) {

}
else {
    fetch('https://qr.phoenix-legacy.ru/api/groupList').then(res => {
        return res.json();
    }).then(data => {
        sessionStorage.setItem("groupList", JSON.stringify(data));
        console.log(data);
    });
}

