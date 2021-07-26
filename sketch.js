var database,name;
var data,value,input,button;
var inputsketch;
var img1,img2,img3,img4,anime,monkey;
function preload()
{
anime = loadAnimation("img/1.png","img/2.png","img/3.png","img/4.png","img/6.png","img/7.png")
}
function setup()
{
 database = firebase.database();
    createCanvas(500,500);
 database.ref("/pos").on("value",function(value){data = value.val();})
//  changeDatabase();
inputsketch = new Pressed();
// changeDatabase();
inputsketch.display();
monkey = createSprite(259,150,50,50)
monkey.addAnimation("hello",anime)
}

function draw()
{
   
console.log(data)
    background("white");
    drawSprites();
  
}
