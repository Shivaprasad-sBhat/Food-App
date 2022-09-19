
import navbar from "./navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let signup_data=JSON.parse(localStorage.getItem("signup_data"));
let login_data=JSON.parse(localStorage.getItem("login"));


let checkLogin=((email) =>{
 
   let users;
   signup_data.forEach((el) => {
     console.log(el.email)
       if(email===el.email){
           users= el.name;
           return;
       }

   });
   console.log(users)
  let signup1=document.getElementById("signup");
  signup1.innerHTML="";
   let log=document.getElementById("login");
   log.innerHTML=""
   log.innerHTML=
   `<select id="current_user" value="Login">
   <option id="userName"  value="">${users}</option>
   <option id="logout" value="logout">Logout</option>
   </select>`
 
});

let logout =()=> {
  localStorage.removeItem("login");
   window.location.reload();
}

export {checkLogin,logout};