var database,name;
var data,value,input,button;
var inputsketch;
var img1,img2,img3,img4,anime,monkey;
function preload()
{
anime = loadAnimation("1.png","2.png","3.png","4.png","6.png","7.png")
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
