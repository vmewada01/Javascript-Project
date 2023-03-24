document.querySelector("form").addEventListener("submit",signupdetails)
  

let signupdata=  JSON.parse(localStorage.getItem("signup_data")) ||[]

function signupdetails(){
    event.preventDefault()

    let name=document.querySelector("#name")
    let email=document.querySelector("#email")
    let mob=document.querySelector("#mobile")
    let pass=document.querySelector("#pass")

    let obj ={
        name : name.value ,
        email : email.value,
        mobile: mob.value ,
        password: pass.value,
    }
    signupdata.push(obj);
    // console.log(signupdata)
    localStorage.setItem("signup_data",JSON.stringify(signupdata))
   window.location.href="login.html"
  
  
}

document.querySelector("#login").addEventListener("click",refertologin)

function refertologin(){
    window.location.href="login.html"
}