

//chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//if(sender.tab.url.match("https://seller.tokopedia.com/manage-product") &&
//  request.message[0] == 4){

let tabUpdate = false;

function injectnow(tabnya) {
    chrome.tabs.onUpdated.removeListener;
   chrome.scripting.executeScript({
     target: {tabId: tabnya},
     files: ['fillintoped.js']
});

// chrome.runtime.sendMessage({ message: request.message});


}





chrome.tabs.onUpdated.addListener(function (tabID, changeInfo, tab) {
     if (changeInfo.status === 'complete' && tab.status === 'complete') {
             if(!tabUpdate){
                injectnow(tabID);
               tabUpdate = true; 
}
	 }
	});
//}

//return true;
//});
