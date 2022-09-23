//chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//if(request.message[0] == 3){
//console.log(request.message);



window.k = [];

function fillin(){
window.parentftok = document.querySelectorAll("input");
console.log(window.parentftok);
for(i = 0; i < window.parentftok.length; i++){
window.k.push(window.parentftok[i]);
console.log(window.k);
}
};

function next(){
for(z=0; z < window.parentftok.length; z++){
  

 if(window.parentftok[z].getAttribute("placeholder") ===
        "Masukkan Jumlah Stok"){

          window.parentftok[z].setAttribute("value", 4);
        


   }
}
};
/*
let l = [];
let counter = 0;

for(m=0; m < 50; m++){
setTimeout(function(){fillin()}, 12000);
    console.log(window.k);
  if (l.length == 0 || (l.length != window.k.length)){
l = window.k;
 }
else {
   if(l.length == window.k.length){
    console.log(l.length);
    console.log(window.k.length);
     counter = counter + 1;
    if(counter == 5){
    break;
}
}
 

}
}

*/

//}
//})
