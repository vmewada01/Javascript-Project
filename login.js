document.querySelector("form").addEventListener("submit",checkdetails)

function checkdetails(){
    event.preventDefault()
   let data= JSON.parse(localStorage.getItem("signup_data"))
  console.log(data)
  let email =document.querySelector("#email").value
  let pass= document.querySelector("#pass").value 

   for(let i=0; i<data.length; i++){
    if(email==data[i].email && pass==data[i].password){
      alert("Login Successfull")
      window.location.href="index.html"
     break;
    }
    else{
      console.log("login Failed")
        
    }
   }
  
}