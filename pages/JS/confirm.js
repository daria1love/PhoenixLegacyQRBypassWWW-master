const actionButton = document.querySelector(".actionPerson");
actionButton.addEventListener('click', (event) => {
    if (sessionStorage.getItem("action")==null) window.location.href = "./index.html";
    else window.location.href = sessionStorage.getItem("action");
}
);
let group = JSON.parse(sessionStorage.getItem("group"));
let groupChoice = document.querySelector('.groupChoice');
groupChoice.append("Выбранная группа: " + group.GroupName);