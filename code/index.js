import {isAuthorization, validate} from "./functions.js"
import {login, password} from "./authorization.js"
import videos from "./BDVideo.js"

isAuthorization();

if(!localStorage.BDStore){
    localStorage.BDStore = JSON.stringify([])
}
if(!localStorage.BDVideo){
    localStorage.BDVideo = JSON.stringify(videos)
}
if(!localStorage.BDRestotation){
    localStorage.BDRestotation = JSON.stringify([])
}


try{
    const elLogin = document.querySelector("input[data-type='login']");
    const elPassword = document.querySelector("input[data-type='password']");
    const elBtn = document.querySelector("[data-type='btn-go']")

	console.log(login)
	console.log(password)

    
    
    elLogin.addEventListener("change", (e) => {
        if(validate(new RegExp("^"+login+"$"), e.target.value)){
            elLogin.classList.add("valid");
            elLogin.classList.remove("error");
        }else{
            elLogin.classList.add("error");
            elLogin.classList.remove("valid");
        }
    })
    
    elPassword.addEventListener("change", (e) => {
        if(validate(new RegExp("^"+password+"$"), e.target.value)){
            elPassword.classList.add("valid");
            elPassword.classList.remove("error");
        }else{
            elPassword.classList.add("error");
            elPassword.classList.remove("valid");
        }
    })
    
    elBtn.addEventListener("click", () => {
        if(validate(new RegExp("^"+login+"$"), elLogin.value) && validate(new RegExp("^"+password+"$"), elPassword.value)){
            localStorage.isAuthorization = true;
            document.location = "/"
        }else{
            elPassword.classList.add("error");
            elLogin.classList.add("error");
        }
    })
}catch(error) {
    console.error(error)
}

console.log("info")




