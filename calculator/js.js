var proplem ="";
function showtext (t){
    document.getElementById("result").innerText=t;
}
function gettext(x){
    proplem+=x;
    showtext(proplem);

}
function solve (){
    var n=eval(proplem);
    showtext(n);
}
function erase (){
    proplem="";
    showtext("---");
}