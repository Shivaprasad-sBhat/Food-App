import navbar from "./navbar.js"
document.getElementById("navbar").innerHTML=navbar();




let signup_data=JSON.parse(localStorage.getItem("signup_data")) || [];


let login =() =>{
   
    let obj={
         email:document.getElementById("email").value,
         password:document.getElementById("password").value,
       }

    if(checkUser(obj.email,obj.password)===true){
        alert("login sucessfull");
        console.log("dfdsf")
        localStorage.setItem("login",JSON.stringify(obj));
        let login_data=JSON.parse(localStorage.getItem("login"))
        
        console.log(login_data)
        window.location.href="./index.html"
    }
    else{
        alert("Wrong credentials")
    }

}


let btn=document.getElementById("log_in");
btn.addEventListener("click",login);

let checkUser= ((email,password) =>{
    let filtered=signup_data.filter((el)=>{
        return (email===el.email && password===el.password)
    });

    if(filtered.length ===0){
        return false;
    }
    else{
        return true;
    }
});






