class Pressed{
    constructor(){}
display(){
    var title = createElement("h2")
    title.html("HELLO")
    title.position(425,325)

    input  = createInput("ENTER YOUR NAME")
    input.position(400,400)
    
  button = createButton("PLAY")
  button.position(425,450)
 
  button.mousePressed(function()
  {
  input.hide();
  button.hide();
  title.hide();
  name = input.value();
  changeName(name);
  var Greeting = createElement("h3");
  Greeting.html("Helo  "+name)
  Greeting.position("450,500")
  })
// if(keyDown="Enter")
// {
//     input.hide();
//     button.hide();
//     title.hide();
//     name = input.value();
//     changeName(name);
//     var Greeting = createElement("h3");
//     Greeting.html("Helo  "+name)
//     Greeting.position("450,500")

// }
}

}