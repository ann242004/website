console.log("Hello World!");

function showname(){
    console.log("Hi ann");
    document.getElementsByClassName("gang-of-three")[0].style.color = "green";
    const a=document.getElementById("image")
    a.src = "https://www.w3schools.com/images/w3schools_green.jpg";

//if(document.getElementById("bt1").style.backgroundColor === "yellow"){
    //document.getElementById("bt1").style.backgroundColor = "green";
//}
//else if(document.getElementById("bt1").style.backgroundColor === "green"){
   // document.getElementById("bt1").style.backgroundColor = "yellow";
//}
//
let btn;
btn= document.getElementById("bt1").style.backgroundColor;

if(btn== "yellow"){
    document.getElementById("bt1").style.backgroundColor = "green";
}
else if(btn== "green"){
   document.getElementById("bt1").style.backgroundColor = "yellow";
}
}




//()=>{}

(()=>{
    console.log("arrow function")
})();

function getName(e){
    console.log(e.target.value);
    const clr= e.target.value;
    document.getElementById("box").style.backgroundColor = clr;
}
