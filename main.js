 window.tokgoodsname = [];
window.tokprice = [];
window.tokstock = [];
window.shopeegoodsname = [];
window.shopeeprice = [];
window.shopeecount = [];
const testnamabarang = [3, ["Mainan pintar untuk kucing piaraan",
null, 8] ];


chrome.tabs.query({currentWindow: true}, function(tabs) {
     

  for(x=0; x < tabs.length; x++) {
      if(tabs[x].url.match("https://seller.tokopedia.com/manage-product")){
  window.tabidtoped = tabs[x].id;  
  chrome.scripting.executeScript( {
    target: {tabId: tabs[x].id},
    files: ['monitor.js']
  });
}
       if(tabs[x].url.match("https://seller.shopee.co.id/portal/product/list/active*")) {
          chrome.scripting.executeScript({
      target: {tabId: tabs[x].id},
     files: ['monitorshopee.js']
});
}
   }




 });


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
if(sender.tab.url.match("https://seller.tokopedia.com/manage-product") &&
request.message[0] == 1){

    request.message.shift();
   window.tokgoodsname = request.message[0];
   window.tokprice = request.message[1];
   window.tokstock = request.message[2];

   for(x=0; x < window.tokgoodsname.length; x++){
    const p = document.createElement("p");
    const q = document.createElement("p");
    const r = document.createElement("p");
    const n = document.createTextNode(window.tokgoodsname[x]);
    const m = document.createTextNode(window.tokprice[x]);
    const o = document.createTextNode(window.tokstock[x]);
    p.appendChild(n);
    q.appendChild(m);
    r.appendChild(o);

 document.getElementById("namabarang").appendChild(p);
 document.getElementById("namabarang").appendChild(q);
 document.getElementById("namabarang").appendChild(r);

}



if(testnamabarang !== null){
chrome.tabs.sendMessage(window.tabidtoped, 
  { testnamabarang});

     };
}



if(sender.tab.url
.match("https://seller.shopee.co.id/portal/product/list/active*") &&
request.message[0] == 2){
    
 
  request.message.shift();
 window.shopeegoodsname = request.message[0];
 window.shopeeprice = request.message[1];
 window.shopeecount = request.message[2];

for(x=0; x < window.shopeegoodsname.length; x++) {
    const a = document.createElement("p");
    const b = document.createElement("p");
    const c = document.createElement("p");

   const k = document.createTextNode(window.shopeegoodsname[x]);
   const l = document.createTextNode(window.shopeeprice[x]);
   const m = document.createTextNode(window.shopeecount[x]);

a.appendChild(k);
b.appendChild(l);
c.appendChild(m);



document.getElementById("namabarangshopee").appendChild(a);
document.getElementById("namabarangshopee").appendChild(b);
document.getElementById("namabarangshopee").appendChild(c);

}
}


return true;

 });


