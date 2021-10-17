canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

nasaimagearray=["nasa image 1.jfif","nasa image 2.jpg","nasa image 3.jpg","nasa image 4.jpg","nasa image 5.jpg"];

randomnumber=Math.floor(Math.random()*5);
console.log(randomnumber);

rwidth=100;
rheight=90;

bgimage=nasaimagearray[randomnumber];
console.log(bgimage);
roverimage="rover.png";

roverx=10;
rovery=10;

function add(){
    bgimagetag=new Image();
    bgimagetag.onload=uploadbg;
    bgimagetag.src=bgimage;

    roverimagetag=new Image();
    roverimagetag.onload=uploadrover;
    roverimagetag.src=roverimage;


}

function uploadbg(){
    ctx.drawImage(bgimagetag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(roverimagetag,roverx,rovery,rwidth,rheight);
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed='38'){
        up();
        console.log("up");
    }
    if(keyPressed='39'){
        right();
        console.log("right");
    }
    if(keyPressed='37'){
        left();
        console.log("left");
    }
    if(keyPressed='40'){
        down();
        console.log("down");
    }
}
function up(){
    if(rovery >= 0){
            rovery=rovery-10;
            console.log("when up arrow is pressed, x="+ roverx + " y= " + rovery);
            uploadbg();
            uploadrover();

    }
}

function right(){
    if(roverx <= 700){
        roverx=roverx+10;
        console.log("when right arrow is pressed, x="+ roverx + " y= " + rovery);
        uploadbg();
        uploadrover();

}
}

function down(){
    if(rovery <= 500){
        rovery=rovery+10;
        console.log("when down arrow is pressed, x="+ roverx + " y= " + rovery);
        uploadbg();
        uploadrover();

}
}

function left(){
    if(roverx >= 0){
        roverx=roverx-10;
        console.log("when left arrow is pressed, x="+ roverx + " y= " + rovery);
        uploadbg();
        uploadrover();

}
}