const inputBar = document.getElementById("input-bar");
const taskList = document.getElementById("task-list");

function addTask() {
    if(inputBar.value === '') {
        alert("Please enter a task first!")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBar.value;
        li.classList.add("header__list-item");
        taskList.appendChild(li);
        let deleteIcon = document.createElement("span");
        deleteIcon.innerHTML = "\u00d7";
        deleteIcon.classList.add("delete")
        li.appendChild(deleteIcon);
    }
    inputBar.value ="";
    saveLocalData();

}

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveLocalData();
    }else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveLocalData();
    }
},false)

function saveLocalData() {
    localStorage.setItem("data", taskList.innerHTML)
}
function showTask() {
    taskList.innerHTML = localStorage.getItem("data")
}

showTask()