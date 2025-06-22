console.log("Hello World!");

function showname(){
    console.log("Hi ann");
    document.getElementsByClassName("gang-of-three")[0].style.color = "green";
    const a=document.getElementById("image")
    a.src = "https://www.w3schools.com/images/w3schools_green.jpg";
/*
if(document.getElementById("bt1").style.backgroundColor === "yellow"){
    document.getElementById("bt1").style.backgroundColor = "green";
}
else if(document.getElementById("bt1").style.backgroundColor === "green"){
    document.getElementById("bt1").style.backgroundColor = "yellow";
}
*/
/*
let btn;
btn= document.getElementById("bt1").style.backgroundColor;

if(btn== "yellow"){
    document.getElementById("bt1").style.backgroundColor = "green";
}
else if(btn== "green"){
   document.getElementById("bt1").style.backgroundColor = "yellow";
}
*/


//console.log(`Random no is ${Math.floor(Math.random() *255)}`);
let r,g,b,color;
r = Math.floor(Math.random() * 255);
g = Math.floor(Math.random() * 255);
b = Math.floor(Math.random() * 255);
document.getElementById("box").style.backgroundColor = `rgb(${r},${g},${b})`;
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


/*
function sum(num1,num2,p){
    p(num1+num2);
}

function print(res){
    console.log(`The sum is ${res}`);
}
sum(1,2,print);
*/


let student4 = {
    age: 20,
    phone: 1234567890,
    name: "Ann",
    address: {
        home: {place: "Kochi"},
        college: {place: "Kottayam"}
  }
}

let students = [student4]
console.log(students[0].name);

function checkName(e){
    let name = e.target.value;
     console.log(name.length);
    if(name.length > 2 && name.length < 12){
        console.log("Name is valid");
        document.getElementById("nameError").innerHTML = "valid";
        document.getElementById("nameError").style.color = "green";
    }
    else{
        console.log("Name is not valid");
        document.getElementById("nameError").innerHTML = "Name should be between 3 and 12 characters";
        document.getElementById("nameError").style.color = "red";
        }
     
        
}
       function checkEmail(e){
    let email = e.target.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(emailRegex.test(email));

    if(emailRegex.test(email)){
        console.log("Valid email");
        document.getElementById("emailError").innerHTML = "valid";
        document.getElementById("emailError").style.color = "green";
    }
    else{
        console.log("Not valid");
        document.getElementById("emailError").innerHTML = "Email is not valid";
        document.getElementById("emailError").style.color = "red";
        }
       }

function checkPass(e){
    let pass = e.target.value;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    console.log(passRegex.test(pass));
    if(passRegex.test(pass)){
        console.log("Valid password");
        document.getElementById("passError").innerHTML = "valid";
        document.getElementById("passError").style.color = "green";
    }  
    else{
        console.log("Not valid");
        document.getElementById("passError").innerHTML = "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, and one number";
        document.getElementById("passError").style.color = "red";
    }

}


const slider = document.getElementById('multiSlider');
const totalSlides = slider.children.length;
let currentIndex = 0;

function moveSlider() {
  currentIndex++;
  if (currentIndex > totalSlides - 3) {
    currentIndex = 0; // loop back to start
  }
  slider.style.transform = `translateX(-${(100 / 3 + 6.06) * currentIndex}%)`; // adjust for gap
}

setInterval(moveSlider, 3000); // change slide every 3 seconds



