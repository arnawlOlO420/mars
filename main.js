canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define the width & height of the rover image.

rover_height = 90;
rover_width = 100;


background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

//Create "add()" function
function add(){
	backimg = new Image();                                     //defining a variable with a new image
	backimg.onload = uploadBackground;                                     // setting a function, onloading this variable
	backimg.src = background_image;                                     // load image

    rov = new Image();                                     //defining a variable with a new image
	rov.onload = uploadrover;
    rov.src = rover_image;                                     // setting a function, onloading this variable
	                                     // load image
}
//Create "uploadBackground()" function.
function uploadBackground()  {  
    ctx.drawImage(backimg, 0, 0, canvas.width, canvas.height);                                     //Draw image of background
}
//Create "uploadrover()" function.
function uploadrover() {
    ctx.drawImage(rov, rover_x, rover_y, rover_width, rover_height);                                    //Draw image of rover
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Write code if keypressed is up. ASCII value of "up" arrow is 38.
	if(keyPressed == "38") {
        up();
        console.log("up");
    }
     //Write code if keypressed is down. ASCII value of "up" arrow is 40.
	if(keyPressed == "40") {
        down();
        console.log("down");
    }
    //Additional Activity
    //Write the code for left and right arrow pressed. 
    if(keyPressed == "37") {
        left();
        console.log("left");
    }
    if(keyPressed == "39") {
        right();
        console.log("right");
    }
}

function up(){

}
function down(){
	
}
function right(){
	
}
function left(){
	
}



