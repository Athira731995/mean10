import * as rxjs from 'rxjs';



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
            // resolve(["dob", "name", "adress"])
            reject("something went wronggg.....")
        }, 2000)

    })
}
console.log("start")
async function displayUser() {
    try {
        const user = await LoginUser("a@mail.com", "2123")
        const info = await getuserInfo(user.useremail)
        console.log(info)
    } catch (error) {
        console.log("error", error)

    }



}
displayUser()
console.log("finished.......")

// document.addEventListener("click",()=>{
//     console.log("clicked")
// })

rxjs.fromEvent(document,"click").subscribe(()=>{
    console.log("clicked......")
})