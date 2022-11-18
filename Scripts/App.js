//Caden Crites
//7
//11/14/22

//This program creates a greeting card in an html document
//This creates the background of the greeting card
var background = document.getElementById("1");
background.style.width= "1280px";
background.style.height = "640px";
background.style.backgroundColor = "lightblue";
//This plays music on the greeting card
var audio = document.getElementById("music");
audio.style.position = "absolute";
audio.style.top = "600px";
audio.style.left = "10px";
//This creates the top circle of the snowman
var head = document.getElementById("2");
head.style.backgroundColor = "white";
head.style.borderRadius = "50%";
head.style.position ="absolute";
head.style.top = "70px";
head.style.left = "500px";
head.style.height = "200px";
head.style.width = "200px";
//This creates the middle circle of the snowman
var torso = document.getElementById("3");
torso.style.backgroundColor = "white";
torso.style.borderRadius = "50%";
torso.style.position ="absolute";
torso.style.top = "195px";
torso.style.left = "475px";
torso.style.height = "250px";
torso.style.width = "250px";
//This creates the bottom circle of the snowman
var bottom = document.getElementById("4");
bottom.style.backgroundColor = "white";
bottom.style.borderRadius = "50%";
bottom.style.position ="absolute";
bottom.style.top = "345px";
bottom.style.left = "450px";
bottom.style.height = "300px";
bottom.style.width = "300px";
//This creates a black circle for the mouth
var mouth = document.getElementById("5");
mouth.style.backgroundColor = "black";
mouth.style.borderRadius = "50%";
mouth.style.position ="absolute";
mouth.style.top = "110px";
mouth.style.left = "550px";
mouth.style.height = "100px";
mouth.style.width = "100px";
//These two cover part of the black circle to make it look like a smile
var mouth2 = document.getElementById("6");
mouth2.style.backgroundColor = "white";
mouth2.style.borderRadius = "50%";
mouth2.style.position ="absolute";
mouth2.style.top = "115px";
mouth2.style.left = "555px";
mouth2.style.height = "90px";
mouth2.style.width = "90px";
var mouth3 = document.getElementById("7");
mouth3.style.backgroundColor = "white";
mouth3.style.borderRadius = "0%";
mouth3.style.position ="absolute";
mouth3.style.top = "105px";
mouth3.style.left = "535px";
mouth3.style.height = "70px";
mouth3.style.width = "130px";
//These two make the eyes of the snowman
var lefteye = document.getElementById("8");
lefteye.style.backgroundColor = "black";
lefteye.style.borderRadius = "50%";
lefteye.style.position ="absolute";
lefteye.style.top = "125px";
lefteye.style.left = "560px";
lefteye.style.height = "10px";
lefteye.style.width = "10px";
var righteye = document.getElementById("9");
righteye.style.backgroundColor = "black";
righteye.style.borderRadius = "50%";
righteye.style.position ="absolute";
righteye.style.top = "125px";
righteye.style.left = "625px";
righteye.style.height = "10px";
righteye.style.width = "10px";
//These three make buttons on the snowman's body
var button1 = document.getElementById("10");
button1.style.backgroundColor = "red";
button1.style.borderRadius = "50%";
button1.style.position ="absolute";
button1.style.top = "275px";
button1.style.left = "590px";
button1.style.height = "20px";
button1.style.width = "20px";
var button2 = document.getElementById("11");
button2.style.backgroundColor = "red";
button2.style.borderRadius = "50%";
button2.style.position ="absolute";
button2.style.top = "350px";
button2.style.left = "587px";
button2.style.height = "25px";
button2.style.width = "25px";
var button3 = document.getElementById("12");
button3.style.backgroundColor = "red";
button3.style.borderRadius = "50%";
button3.style.position ="absolute";
button3.style.top = "425px";
button3.style.left = "584px";
button3.style.height = "30px";
button3.style.width = "30px";
//These make the arms of the snowman
var leftArm = document.getElementById("13");
leftArm.style.backgroundColor = "brown";
leftArm.style.borderRadius = "0%";
leftArm.style.position ="absolute";
leftArm.style.top = "250px";
leftArm.style.left = "300px";
leftArm.style.height = "20px";
leftArm.style.width = "200px";
leftArm.style.transform = "rotate(30deg)";
var rightArm = document.getElementById("14");
rightArm.style.backgroundColor = "brown";
rightArm.style.borderRadius = "0%";
rightArm.style.position ="absolute";
rightArm.style.top = "250px";
rightArm.style.left = "695px";
rightArm.style.height = "20px";
rightArm.style.width = "200px";
rightArm.style.transform = "rotate(330deg)";
var text = document.getElementById("15");
//This displays text above the snowman
text.innerHTML = "Merry Christmas :D";
text.style.color = "blue";
text.style.backgroundColor = "lightblue";
text.style.borderRadius = "0%";
text.style.position ="absolute";
text.style.top = "5px";
text.style.left = "425px";
text.style.height = "20px";
text.style.width = "500px";
text.style.fontStyle = "oblique";