import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig = {
    databaseURL: "https://leads-note-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDb = ref(database, "leads");

const input = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');

//render the leads into lists
function renderLeads(leads){
    let listItems = "";

    for(let i = 0; i < leads.length; i++){
            listItems += `<li><a target='_blank' href='${leads[i]}'>${leads[i]}</a></li>`;
    }
    ulEl.innerHTML = listItems;
}

onValue(referenceInDb, function(snapshot){
    if(snapshot.exists()){
        const snapshotValues = snapshot.val();
        const leads = Object.values(snapshotValues);
        renderLeads(leads);
    }
})

//clears the array, local storage, and DOM
document.getElementById('clear-btn').addEventListener("click", function(){
    remove(referenceInDb);
    ulEl.innerHTML = "";
})

//fetch data from input field text and pushes to array and 
document.getElementById('input-btn').addEventListener("click", function(){
    push(referenceInDb, input.value);
    input.value = "";
})

