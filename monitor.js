window.tokgoodsname = [];
window.tokprice = [];
window.tokstock = [];
window.result = [];
window.parent = [];
window.secondparent = [];
window.haschild = false;
window.finish = true;

window.parent = document.querySelectorAll("[data-testid]");
      for(x=0; x < window.parent.length; x++){
        if(window.parent[x].getAttribute("data-testid") ===
    "crdMPProductListCard"){
    window.tokgoodsname.push(window.parent[x]
.querySelector('.styPLCProductNameInfo')
.childNodes[0].childNodes[0].innerHTML);
}
       if(window.parent[x].getAttribute("data-testid") === "txtMPQuickPrice") {
       window.tokprice.push(window.parent[x].getAttribute("value"));
}
       if(window.parent[x].getAttribute("data-testid") === "txtMPQuickStock") {
       window.tokstock.push(window.parent[x].getAttribute("value"));

}

}
window.result.push(1);
window.result.push(window.tokgoodsname);
window.result.push(window.tokprice);
window.result.push(window.tokstock);

    chrome.runtime.sendMessage (
    {message: window.result});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
   if(request.testnamabarang[0] == 3){
       request.testnamabarang.shift();

   for(x=0; x < request.testnamabarang.length; x++){
     for(y=0; y< request.testnamabarang[x].length; y++){
  
    if(y == 0){
       window.namabarangtok = request.testnamabarang[x][y];
}
     if(y == 1) {
       window.pricetok = request.testnamabarang[x][y];
     }
    if(y == 2) {
      window.jumlahtok = request.testnamabarang[x][y];
    }}
     
if(window.pricetok != null){ }


if(window.jumlahtok !== null) {

  for(k=0; k < window.parent.length; k++){
    if(window.parent[k].getAttribute("data-testid") === "crdMPProductListCard"){
const tempresult =
window.parent[k].querySelector(".styPLCProductNameInfo")
.childNodes[0].childNodes[0].innerHTML

if(tempresult.match(window.namabarangtok)) 
  {

const targetNode = document.querySelector('body');

const config = { childList: true };

const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
        window.haschild = true;
        clickingnow();  

     }}};

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);
window.obs = observer;

window.parent[k].querySelector(".css-0").childNodes[0].click();
break;
}}}}
}}});


function clickingnow(){


   window.secondparent = document.querySelectorAll("div[data-testid]");
   for(t=0; t < window.secondparent.length; t++){
       if(window.secondparent[t].getAttribute("data-testid")
         === "lblMPDropdown-0"){
         console.log(window.secondparent);

         window.obs.disconnect();
     request.testnamabarang.splice(0, 0, 4);
console.log(window.haschild); 

        chrome.runtime.sendMessage(
{ message: request.testnamabarang }     
);

//console.log(window.secondparent[t]);
    window.secondparent[t].click();
}

break;
 } };
/*

const getData = async () => {
         try {
              await window.haschild == true;
           }
         catch(err) {
         console.log(err);
      }
}

getData().then(clickingnow());
*/

