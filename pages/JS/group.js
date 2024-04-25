let actionPerson = sessionStorage.getItem("action");
if (actionPerson == null) {
    window.location.href = "./index.html";
}

const renderListGroups = listItem => {
    const listElement = document.querySelector('.group');
    const listItemElemets = listItem.map(({ GroupName, Id }) => {
        const listItemElemet = document.createElement('option');
        listItemElemet.value = Id;
        listItemElemet.append(GroupName);
        return listItemElemet;
    });

    listElement.append(...listItemElemets);

}
fetch('https://qr.phoenix-legacy.ru/api/groupList').then(res => {
    return res.json();
}).then(groupsName => {
    renderListGroups(groupsName);
});
