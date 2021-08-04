const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    img1 = loadImage("sunrise1.png");
    img2 = loadImage("sunrise2.png");
    img3 = loadImage("sunrise3.png");
    img4 = loadImage("sunrise4.png");
    img5 = loadImage("sunrise5.png");
    img6 = loadImage("sunrise6.png");
    img7 = loadImage("sunset7.png");
    img8 = loadImage("sunset8.png");
    img9 = loadImage("sunset9.png");
    img10 = loadImage("sunset10.png");
    img11= loadImage("sunset11.png");
    img12= loadImage("sunset12.png");
    getBackgroundImg()
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg){
    background(backgroundImg);
    }

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responejson = await response.json();
    var datetime = responejson.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour)
    if(hour>= 04 && hour<= 06){
        bg = "sunrise1.png";
    }else if(hour>= 06 && hour<= 08){
        bg = "sunrise2.png";

    }else if(hour>= 23 && hour<= 0){
        bg = "sunset10.png";

    }else if(hour>= 0 && hour<= 03){
        bg = "sunset11.png";

    }else{
        bg = "sunset12.png";
    }
    backgroundImg = loadImage(bg);


}
