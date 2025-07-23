const input = document.getElementById('input-el');
const saveBtn =  document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
let myLead = [];


saveBtn.addEventListener("click", function(){
    myLead.push(input.value);
    input.value = "";
    renderLeads();
})

function renderLeads(){
    let listItems = "";

    for(let i = 0; i < myLead.length; i++){
            listItems += `<li><a target='_blank' href='${myLead[i]}'>${myLead[i]}</a></li>`;
    }
    ulEl.innerHTML = listItems;
}
