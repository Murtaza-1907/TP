var database,name;
var data,value,input,button;
var inputsketch;
function setup()
{
 database = firebase.database();
    createCanvas(500,500);
 database.ref("/pos").on("value",function(value){data = value.val();})
//  changeDatabase();
inputsketch = new Pressed();
// changeDatabase();
inputsketch.display();
}

function draw()
{
   
console.log(data)
    background("white");
}