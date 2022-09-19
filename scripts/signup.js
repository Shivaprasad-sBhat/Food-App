import navbar from "./navbar.js";
document.getElementById("navbar").innerHTML=navbar();




let signup_data=JSON.parse(localStorage.getItem("signup_data")) || [];

let signup = () =>{
   
    let obj={
         name:document.getElementById("name").value ,
         email:document.getElementById("email").value,
         password:document.getElementById("password").value,

    }

    if(checkMail(obj.email)===true){
        console.log(obj);
        signup_data.push(obj);
        localStorage.setItem("signup_data",JSON.stringify(signup_data));
        alert("Signup sucessfull");
        window.location.href="./login.html"
    }
    else{
        alert("User already exists! Please login")
    }

}


let btn=document.getElementById("signup");
btn.addEventListener("click",signup);

let checkMail = ((email) =>{
    let filtered=signup_data.filter((el)=>{
        return email==el.email
    });

    if(filtered.length ===0){
        return true;
    }
    else{
        return false;
    }
});

