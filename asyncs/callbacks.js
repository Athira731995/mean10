const posts=[{
    "title":"My First Post",
    "content":"This is my first post"
},{ "title":"My Second Post",
"content":"This is my second post"
}]
function getPosts(){  
setTimeout(()=>{
    posts.forEach(post=>{
        console.log("inside getposts")
        console.log(post.title)
        console.log(post.content)
        console.log(new Date())
    })}
,1000)
}
function createPost(post,callback){
    console.log("Entry",new Date())
    setTimeout(()=>{
        console.log("inside create post",new Date())
        console.log(new Date())
        callback()
        console.log("inside create post after call back",new Date())
        posts.push(post)
        console.log(new Date())
        
    },2000)
}

// createPost({"title":"3rd post","content":"this is my 3rd post"},getPosts)
// function call(){
//     console.log("entry time",new Date())
//     setTimeout(()=>{
//         console.log("hello")

//     },2000)
//     console.log("Exit time",new Date())

// }


function getData(){

setTimeout(()=>{
    
    test()
    
        var data= fetch("https://jsonplaceholder.typicode.com/users")
        console.log("call backed...")
        // console.log("Result =",data.json())
},2000)



}
function test(){
    setTimeout(()=>{

        console.log("call back function called.....")
    },1000)
}
getData()