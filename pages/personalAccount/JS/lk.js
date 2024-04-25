import * as fws from ws.js

ws = getInstanceOfWS();

const renderListGroups = listItem => {
    const listElement = document.querySelector('.dropdown-menu');
    const listItemElemets = listItem.map(({ GroupName, Id }) => {
        const listItemElemet = document.createElement('li');
        listItemElemet.classList.add('groupItem')
        const linkElement = document.createElement('a');
        linkElement.classList.add('dropdown-item');
        linkElement.id = Id;
        linkElement.append(GroupName);
        listItemElemet.append(linkElement);

        return listItemElemet;
    });

    listElement.append(...listItemElemets);

}

const checkbox = document.getElementById('autoSelfApprove');
const buttonSave = document.querySelector('.buttonSave');
const groupNumber = document.querySelector('.btn');
const emailItem = document.querySelector('.emailItem');

ws.send({request:"getSettings"}, (message) =>{
    emailItem.textContent = message.email;
    groupNumber.textContent = message.group;
    checkbox.checked = message.autoSelfApprove;

})

ws.send({request: "group_list"}, (groupName) =>{
    renderListGroups(groupName);
})


let groups = document.querySelectorAll(".groupItem");
let groupsName = groups.querySelectorAll("a");

for (let i = 0; i < groups.length; i++) {
        groups[i].addEventListener('click', () => {
            groupNumber.textContent = groupsName[i].textContent;
            groupNumber.id = groupsName[i].id;
            const ob1 = { GroupName: groupsName[i].textContent, Id: groupsName[i].id };
            buttonSave.style.display = 'block';
        })
}

buttonSave.addEventListener('click', () => {
    ws.send({request:"updateSettings", group: groupNumber.id})
    buttonSave.style.display = 'none';
})

checkbox.checked = true;
checkbox.addEventListener('change', () => {
    ws.send({request:"updateSettings", autoSelfApprove: checkbox.checked})
})

// const stateCheckbox = checkItem => {
// }

// const mailing = document.getElementById('mailing');
// const mailingVisits = document.getElementById('mailingVisits');
// const mailingpProblem = document.getElementById('mailingpProblem');

// mailing.addEventListener('change', () => {
//     if (!mailing.checked) {
//         mailingVisits.disabled = true;
//         mailingpProblem.disabled = true;
//     }
//     else {
//         mailingVisits.disabled = false;
//         mailingpProblem.disabled = false;
//     }
//     stateCheckbox(this);
// })

// mailingVisits.addEventListener('change', stateCheckbox());
// mailingpProblem.addEventListener('change', stateCheckbox());


