function handleEvent(){
    console.log("function called...")
    document.getElementById("p1").innerText="hellooooooo"
    document.getElementById("p2").style.color="red"
    document.getElementById("p2").style.fontSize="30px"
}

function getvalue(){
    let name=document.getElementById('txt1').value
    console.log(name)
    alert("hey   "+name)
}
function change(){
    document.getElementById("p3").innerHTML="The content changed...."
}
function getdata(){
    var Name=prompt("Enter your name")
    console.log(Name)
    var Age=prompt("Enter your age")
    console.log(Age)
    document.getElementById("name").value=Name
    document.getElementById("age").value=Age


}