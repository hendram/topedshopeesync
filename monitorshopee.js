window.shopeegoodsname = [];
window.shopeeprice = [];
window.shopeecount = [];
window.resultshopee = [];


let parentshp = document.querySelectorAll(".product-item");
for(u = 0; u < parentshp.length; u++){
    if(parentshp[u].getElementsByClassName("product-name-wrap")){
  window.shopeegoodsname.push(
parentshp[u].getElementsByClassName("product-name-wrap")
.item(0).childNodes[0].innerHTML); 
}
 if(parentshp[u].getElementsByClassName("price-display")){
  window.shopeeprice.push(
parentshp[u].getElementsByClassName("price-display").item(0).innerHTML);
}


 if(parentshp[u].getElementsByClassName("product-stock-label")){
  window.shopeecount.push(
parentshp[u].getElementsByClassName("product-stock-label")
.item(0).nextElementSibling.innerHTML);
}

}

window.resultshopee.push(2);
window.resultshopee.push(window.shopeegoodsname);
window.resultshopee.push(window.shopeeprice);
window.resultshopee.push(window.shopeecount);



chrome.runtime.sendMessage(
 {message: window.resultshopee});


