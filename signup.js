document.querySelector("#form").addEventListener("submit",signupdetails)

function signupdetails(){
    let signupdata= JSON.parse(localStorage.getItem("signup_data")) || []
    
    let obj ={
        name : document.querySelector("#name").value,
        email : document.querySelector("#email").value,
        mobile: document.querySelector("#mobile").value,
        password: document.querySelector("#password").value,
    }
    signupdata.push(obj);
    console.log(signupdata)
    localStorage.setItem("signup_data",JSON.stringify(signupdata))

}