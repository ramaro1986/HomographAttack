function changeIcon() {
    chrome.tabs.query({active: true}, function(tab){
	    var url=tab[0].url;
		var res = url.split("https://");
		if( url.indexOf('xn--') == 7 || url.indexOf('xn--') == 12){
	        chrome.browserAction.setIcon({path: 'risk.png'});
	    }else{
	        chrome.browserAction.setIcon({path: 'safe.png'});
	    }
    });
}


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    changeIcon();
});
