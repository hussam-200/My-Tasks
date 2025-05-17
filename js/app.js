
"use strict";
const NameT=document.getElementById("name");
const button=document.getElementById("addbutton");
button.addEventListener("click",addtask)
const listInfo=document.getElementById("list");
let task=[];
function addtask(){
const Name=NameT.value.trim();
task.push({name:Name , status:false});
NameT.value="";
if(Name === ""){
    alert("please inter your task");
    return ;
}

updateListDisplay();
}
function updateListDisplay(){
    listInfo.innerHTML="";

    task.forEach((option , index)=>{
        const li=document.createElement("li");

        li.innerHTML=`
        <span>${option.name}</span>
        <button onclick="switchStatus(${index})">${option.status ? 'complete':'uncomplete'}</button>
        <button onclick="deleteItem(${index})">delete</button>
        `;
        listInfo.appendChild(li);
    })

}
function deleteItem(index){
task.splice(index,1);
updateListDisplay();
}
function switchStatus(index){
    task[index].status = !task[index].status
updateListDisplay();

}



