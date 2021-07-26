class Pressed{
    constructor(){}
display(){
    var title = createElement("h2")
    title.html("HELLO")
    title.position(425,325)

    input  = createInput("ENTER YOUR NAME")
    input.position(400,400)
    
  button = createButton("PLAY")
  button.position(450,450)
 
  button.mousePressed(function()
  {
  input.hide();
  button.hide();
  title.hide();
  name = input.value();
  changeName(name);
  var Greeting = createElement("h2");
  Greeting.html("HELLO  "+name)
 Greeting.position(300,425)
  })

}

}
