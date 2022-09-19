

let navbar =() =>{
return `  <div id="home"><a href="index.html"><img src="https://tse3.mm.bing.net/th?id=OIP.yrqeWjuYTkDUpCBCslD5ugHaEV&pid=Api&P=0&w=280&h=164" id="logo"></a></div>
<div><input type="text" placeholder=" Search" id="search"></div>
<div id="menu">
    <div><a href="byName.html"  class="active">Receipe by name</a></div>
    <div><a href="ofDay.html"  class="active">Receipe of the day</a></div>
    <div><a href="random.html"  class="active">Random receipes.</a></div>
    <div id="login"><a href="login.html"  class="active" >Login</a></div>
    <div ><a href="signup.html"  class="active" id="signup" >Signup</a></div>

</div>`
};



export default navbar;