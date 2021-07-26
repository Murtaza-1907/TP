function changeDatabase(entered){
    database.ref("/").update({pos:entered});
}
function changeName(name)
{
    database.ref("/").update({name:name})
}