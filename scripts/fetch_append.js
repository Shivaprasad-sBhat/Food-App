

let search = (query) => {

     let url = ` https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
       
     return url;
    
}

let id;
let debouncies= (search) => {
if(id){
    setTimeout(id)
}
id= setTimeout(()=>{
    search(query)
},1000)

}


let getdata = async (url) => {
try{
    let res = await fetch(url);
    let data = await res.json();
    console.log("data", data)
    return data;
}
catch(error){
    let title = document.createElement("h2");
    title.innerText = "Not found"
}
  

}



let displayData = (data, container) => {

    container.innerHTML = ""
    data.forEach(({ strMealThumb, strMeal, strCategory, strInstructions, strYoutube }) => {


        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.addEventListener("click", () => {
            details(strMeal, strMealThumb, strInstructions, strYoutube, container);
        })

        let img = document.createElement("img");
        img.setAttribute("class", "img");
        img.src = strMealThumb;

        let title = document.createElement("h2");
        title.innerText = strMeal;
        title.setAttribute("class", "title");

        let category = document.createElement("h5");
        category.innerText = strCategory;
        category.setAttribute("class", "category");

        let orderdiv = document.createElement("div");
        orderdiv.setAttribute("class", "orderdiv");

        // let price = document.createElement("div");
        // price.setAttribute("class", "price");
        // price.innerText=Math.round(Math.random(5)*88+200);
        let order = document.createElement("div");
        order.innerText="Details"
        order.setAttribute("class", "order");
        orderdiv.append(order);

        card.append(img, title, category,orderdiv);

        container.append(card)



    });
}



let details = (strMeal, strMealThumb, strInstructions, strYoutube, container) => {

    container.innerHTML = ""

    let card = document.createElement("div");
    card.setAttribute("id", "details");


    let img = document.createElement("img");
    img.setAttribute("id", "image");
    img.src = strMealThumb;

    let title = document.createElement("h2");
    title.innerText = strMeal;
    title.id = "name";


    let vidUrl = strYoutube;
    let newVid = vidUrl.replace("watch?v=", "embed/")
    console.log(newVid, "abcd")
    let vid = document.createElement("iframe");
    vid.src = newVid;
    vid.id = "video";

    let instruction = document.createElement("p");
    instruction.innerText = `Instructions: ${strInstructions}`;
    instruction.id = "instruction"

    card.append(title,  vid, instruction)
    container.append(card);
}




export {getdata,displayData,search,debouncies};