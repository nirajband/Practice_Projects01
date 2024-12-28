const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === '') {
        alert("You must add your tasks!");
    }
    else {
        let li = document.createElement("li");
        // To write in inputBox
        li.innerHTML = inputBox.value;
        // To display task in container lists
        listContainer.appendChild(li);
        // For cross icon 
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // Remove the tasks from input box after adding task.
    inputBox.value = "";

    //
    saveData();
}
// for checked and removal of tasks
listContainer.addEventListener("click", function(e){
    // if clicked on tasks/li it will make it checked.
    // console.log(e.target);    ---> Used to control all the elements  in list container.
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
        
    }
    //If we want to remove task then click on cross
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

// For store data 
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// for displaying data
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();