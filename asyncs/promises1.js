// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(json => console.log(json))
// const promise1=Promise.resolve("hello world")
// const promise2=100
// const promise3=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("hey task completed...")
//         },5000)
// })
// const promise4=fetch('https://jsonplaceholder.typicode.com/albums').then(resp=>
//     resp.json()
// )
// Promise.all([promise1,promise2,promise3,promise4]).then((data)=>{
//     console.log(data)
// })
console.log("start")
async function fetchUsers(){

    const response=await fetch('https://jsonplaceholder.typicode.com/albums')
    const data=await response.json()
    console.log(data)


}
fetchUsers()
console.log("end")