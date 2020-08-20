// var promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("inside the promise.....")
//         // resolve({username:"a@mail.com"})
//         reject(new Error("invalid user credentials..."))
//     },2000)
// })
// promise.then(user=>{
//     console.log("user",user)
// }).catch(error=>{
//     // console.log(error)
//     console.log("after error","error occured")
// })

// console.log("start")
// setTimeout(()=>{
//   console.log("inside callback function...")

// },3000)
// console.log("end")

function LoginUser(email, pasword) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("inside time out : called")
      resolve({ useremail: email })
    }, 3000)
  })
}
function getuserInfo(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("inside second promise")
      resolve(["dob", "name", "adress"])
    }, 2000)

  })
}
LoginUser("a@gmail.com", "1234")
  .then(user =>
    getuserInfo(user.useremail)
  ).then(data =>

    console.log(data)
  )



