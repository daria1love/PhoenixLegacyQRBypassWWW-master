import * as fws from ws.js

ws = getInstanceOfWS();

const renderListGroups = listItem => {
    const listElement = document.querySelector('select');
    const listItemElemets = listItem.map(({ GroupName, Id }) => {
        const listItemElemet = document.createElement('option');
        listItemElemet.id = Id;
        listItemElemet.value = GroupName;
        listItemElemet.append(GroupName.toUpperCase());

        return listItemElemet;
    });

    listElement.append(...listItemElemets);

}

ws.send({request: "group_list"}, (groupName) =>{
    renderListGroups(groupName);
})

let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    s = [];
    for (i = 0; i < form.elements.length; i++) {
        e = form.elements[i];
        x = {
            name: e.name,
            value: e.value,
        };
        s.push(x);
    }
    s = JSON.stringify(s);
    sessionStorage.setItem('form1', s);
})