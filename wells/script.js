const wlc = document.querySelector(".welcome-text")

const info = document.querySelector(".info")

const msg = document.querySelector(".msg")

const id = document.querySelector("#id")

const password = document.querySelector("#password")



const submit = document.querySelector("#submit")
submit.addEventListener("submit",checkFields)

function checkFields(e){
    e.preventDefault()
    let text = ""
    if(password.value == "" && id.value != ""){
        text = "The password field is empty"
        msg.textContent = text;
        info.style.display = "block"
        console.log("password empty")
    }
    if(id.value == "" && password.value != ""){
        text = "The username/email field is empty"
        msg.textContent = text;
        info.style.display = "block"
        console.log("username empty")
    }

    if(id.value == "" && password.value == ""){
        text= "both fields are empty"
        msg.textContent = text;

        info.style.display = "block"
        console.log("both empty")
    }
    else if (id.value != "" && password.value != ""){
        info.style.display = "none"
        console.log("none empty")
        
    }
}

setTimeout(() => {
    wlc.classList.add("slide")
}, 300);