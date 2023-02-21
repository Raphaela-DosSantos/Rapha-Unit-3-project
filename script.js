/* Declare variables below to save the different sections (divs) of your story*/
let button1 = document.querySelector(".option-one");
console.log(button1);
let screen1= document.querySelector(".option-one-screen");
console.log(screen1);
let button2 = document.querySelector(".option-two");
 console.log(button2);
let screen2 = document.querySelector(".option-two-screen");
console.log(screen2);
let button3 = document.querySelector(".option-three");
console.log(button3); 
let button4 = document.querySelector(".option-four"); 
console.log(button4);
let end1 = document.querySelector(".option-one-end");
let end2 = document.querySelector(".option-two-end");

button1.onclick=function(){
 screen1.style.display="block";
};

button2.onclick=function(){
    screen2.style.display="block";
};

button3.onclick=function(){
    end1.style.display="block";
};

button4.onclick=function(){
    end2.style.display="block";
};




/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/


