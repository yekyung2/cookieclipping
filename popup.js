// function sayHello(){
//     document.body.innerText = "Hello, World!";
// }
// window.onload = sayHello;

function getCurrentTabUrl(callback){
    var queryinfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryinfo, function(tabs){
        var tab = tabs[0];
        var url = tab.url;
        callback(url);
    });
}
