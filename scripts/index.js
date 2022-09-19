import navbar from "./navbar.js";
document.getElementById("navbar").innerHTML=navbar();


import {getdata,displayData,search,debouncies} from "./fetch_append.js"

let container=document.getElementById("container");


let URL="https://www.themealdb.com/api/json/v1/1/search.php?f=c"
getdata(URL).then((res)=>{

    displayData(res.meals,container)
})

//Serch bar 
let searchs=document.getElementById("search")

searchs.addEventListener("input",()=>{
    
  let query=document.getElementById("search").value;
   
    console.log(query,"abcd")
   let url=search(query);
   getdata(url).then((res)=>{
        displayData(res.meals,container)
})

 }) ;

 //Debouncies

// let url=debouncies(search)
   
 //to show username on navbar
import { checkLogin ,logout} from "./username.js";

let login_data=JSON.parse(localStorage.getItem("login"));

if(login_data!==null){
 checkLogin(login_data.email) 
}

let val = document.querySelector("#current_user");
 val.addEventListener("change",logout)


if (val.value=== "logout") {
   logout()
 }



