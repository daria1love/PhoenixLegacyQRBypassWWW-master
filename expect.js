let group = JSON.parse(sessionStorage.getItem("group"));
let groupChoice = document.querySelector(".message");
let message = document.createElement('h1');
message.append(group.GroupName);
groupChoice.append(message);

websocket = new WebSocket('wss://qr.phoenix-legacy.ru/api/waitQR?group_id=' + group.Id);

websocket.onmessage = (e) => {
    document.location.href = e.data;
}