//different event listener for individual items
let div = document.querySelector("div");
let ul = document.querySelector("ul");
let list = document.querySelectorAll("li");

div.addEventListener("click",()=>{
    console.log("div was clicked");
})
ul.addEventListener("click",(event)=>{
    event.stopPropagation();
    console.log("ul was clicked");
})
for(li of list){
    li.addEventListener("click",(event)=>{
        event.stopPropagation();
        console.log("li was clicked");
    })
}
