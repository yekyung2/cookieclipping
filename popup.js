// function sayHello(){
//     document.body.innerText = "Hello, World!";
// }
// window.onload = sayHello;

function getCurrentTabUrl(callback){
    var queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, function(tabs){
        var tab = tabs[0];
        var url = tab.url;
        callback(url);
    });
}

function renderURL(statusText){
    document.getElementById('urls').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function(){
    //Wehn Click, get Current Page link
    var link = document.getElementById('getUrl');

    link.addEventListener('click', function(){
        getCurrentTabUrl(function(url){
            renderURL(url);
        });
    });
});
