var but= document.getElementsByClassName("add");
for (let i=0; i<but.length; i++) {
    but[i].addEventListener("click",function()
    {
  (but[i].nextElementSibling.innerHTML++);
    somme()}
    )}

 var butm= document.getElementsByClassName("minus");
for (let i=0; i<butm.length; i++) {
    butm[i].addEventListener("click",function(){
  if (butm[i].previousElementSibling.innerHTML>0) {
    (bbutm[i].previousElementSibling.innerHTML--);
     somme()
  } 
  })} 


var buttTrash= Array.from(document.getElementsByClassName("fa-trash-alt"));
for (let i=0; i<buttTrash.length; i++) {
    buttTrash[i].addEventListener("click",function(){
  buttTrash[i].parentNode.remove();
     somme()
  })}

var butheart=document.getElementsByClassName("fa-heart");
for (let i=0; i<butheart.length; i++) {
    butheart[i].addEventListener ("click",function(){
  if (butheart[i].style.color=="grey") {
    butheart[i].style.color="red"
  }   else {butheart[i].style.color="grey"}
 })}

function somme() {
var total=0;
var quant=document.getElementsByClassName("qte");
var price=document.getElementsByClassName("price");
for (let i=0; i<quant.length; i++) {
  total += (quant[i].innerHTML * price[i].innerHTML)
}
return document.getElementById("totalp").innerHTML="totale : $"+total
}