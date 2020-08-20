
// console.log("start")
// setTimeout(()=>{
//   console.log("inside callback function...")

// },3000)
// console.log("end")

function LoginUser(email,pasword,callback){
  
setTimeout(()=>{
  console.log("inside time out : called")
  callback( {useremail:email})
},1500)

}
function getuserInfo(email,callback){
  setTimeout(()=>{
    callback( ["dob","name","adress"])
  },1000)

}
LoginUser("a@gmail.com","1234",username=>{
  console.log(username)
  getuserInfo(username,(data)=>{
    console.log(data)
  })
 })
console.log("end....")