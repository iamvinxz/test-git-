let myLeads = [] ;

const input = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');

const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"));

//checks if local storage is empty, then if not render the leads even if the tab is closed
if(leadsFromStorage){
    myLeads = leadsFromStorage;
   renderLeads(myLeads);
}

//render the leads into lists
function renderLeads(leads){
    let listItems = "";

    for(let i = 0; i < leads.length; i++){
            listItems += `<li><a target='_blank' href='${leads[i]}'>${leads[i]}</a></li>`;
    }
    ulEl.innerHTML = listItems;
}

//clears the array, local storage, and DOM
document.getElementById('clear-btn').addEventListener("click", function(){
    localStorage.clear();
    myLeads = [];
    renderLeads(myLeads);
})

document.getElementById('save-btn').addEventListener("click", function(){
    chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads(myLeads);
    })
})

//fetch data from input field text and pushes to array and 
document.getElementById('input-btn').addEventListener("click", function(){
    myLeads.push(input.value);
    input.value = "";

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads(myLeads);
})

