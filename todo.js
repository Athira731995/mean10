let todo = []
function addtask() {
    let data = document.getElementById("task").value
    if (data != "") {
        todo.push(data)
    }
    console.log(todo)
    document.getElementById("task").value = ""
    showtasks()
}
function showtasks(){
    for (let task of todo){
        
        var li= document.createElement("li")
        li.innerHTML=task+`<br><button onclick=remove(${todo.indexOf(task)})>-</button>`

    }
    document.getElementById("mytasks").appendChild(li)
}
function remove(i){
todo.splice(i,1)
console.log(todo)
}
