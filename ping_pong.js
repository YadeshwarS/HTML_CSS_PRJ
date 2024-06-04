   // Selecting the canvas

   let canvas = document.getElementById("table");
   let draw_ = canvas.getContext("2d");

   // Drawing shapes
   let color = "blue"; // Define color
   let x = 50, y = 50, w = 100, h = 50; // Rectangle parameters
   draw_.fillStyle = color;
   draw_.fillRect(x, y, w, h); // rectangle

   let r = 25; // Circle radius
   x = 200; y = 100; // Circle position
   draw_.fillStyle = "red";
   draw_.beginPath();
   draw_.arc(x, y, r, 0, Math.PI * 2, false);
   draw_.closePath();
   draw_.fill();

const ball ={
    x : canvas.width/2,
    y : canvas.height/2,
    radius : 10,
    vel_in_x_dir : 5,
    vel_in_y_dir : 5,
    speed : 7,
    color : "Green"
} 

const Separator = {
    x : (canvas.width - 2)/2,
    y : 0,
    height : 10,
    width : 2,
    color : "white"
}

const User_bar = {
    x :0,
    y : (canvas.height - 100)/2,
    width : 10,
    height : 100,
    score : 0,
    color : "white"
}

const CPU_Bar = {
    x : canvas.width - 10,
    y : (canvas.height - 100)/2,
    width : 10,
    height : 100,
    score : 0,
    color : "white"
}

