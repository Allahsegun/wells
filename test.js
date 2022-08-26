// const getBtn = document.getElementById("addBtn").addEventListener("click",)
// const addBtn = document.getElementById("getBtn")

function addUser(){
    console.log("add user button clicked")
//      fetch("http://localhost:5050/users",{  
//     method:"post",
//     header:"content-type:application/json",
//     body:{
//         "name":"bode",
//         "age":30,
//         "email":"bode@gmail.com"
//     }

// })
// .then((res)=>{res.json()})
// .then((res)=>{console.log("added ata:",res)})
// .catch(err=>{console.log(err)})

    const xhr = new XMLHttpRequest();
    xhr.open("POST","http://localhost:5050/users")

    xhr.onload = ()=>{
        console.log(JSON.parse(xhr.responseText))
    }

    xhr.setRequestHeader("content-type","application/json")

    xhr.send(JSON.stringify({name:"wale",age:30,email:"wale@gmail.com"}))


}
function getUsers(){
    // console.log("get user button clicked")
    // fetch("http://localhost:5050/users")
    // .then((res)=>{res.json()})
    // .then((res)=>{console.log("all data:",res)})
    // .catch(err=>{console.log(err)})
    const xhr = new XMLHttpRequest();
    xhr.open("GET","http://localhost:5050/users")

    xhr.onload = ()=>{
        console.log(JSON.parse(xhr.responseText))
    }

    xhr.send()
}