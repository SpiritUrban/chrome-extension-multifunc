document.addEventListener('DOMContentLoaded', function() {
    
    var checkPageButton = document.getElementById('checkPage');
    
    
    checkPageButton.addEventListener('click', function() {
        
        
        
        chrome.tabs.getSelected(null, function(tab) {
            d = document;
            
            alert(JSON.stringify(d))
 
            var f = d.createElement('form');
            f.action = 'http://gtmetrix.com/analyze.html?bm';
            f.method = 'post';
            var i = d.createElement('input');
            i.type = 'hidden';
            i.name = 'url';
            i.value = tab.url;
            f.appendChild(i);
            d.body.appendChild(f);
            f.submit();
        });
    }, false);
}, false);



document.addEventListener('DOMContentLoaded', function() {
    
    var check2 = document.getElementById('check2');
      
    check2.addEventListener('click', function() {
        

        chrome.tabs.getSelected(null, function(tab) {
            
            d = document;
            
            var extensionLink;
                extensionLink = document.createElement("link"),
                extensionLink.href = chrome.extension.getURL("/styles/styles_on.css"),
                extensionLink.id = "extension",
                extensionLink.type = "text/css",
                extensionLink.rel = "stylesheet",
                document.getElementsByTagName("head")[0].appendChild(extensionLink)
            
                alert( JSON.stringify(tab) )
            
               // chrome.storage.sync.set({'year': year});

  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });               
            
        });        
        


        
        
    }, false);
}, false);





// Просто так запихнуть JS на страницу нельзя. И такая же проблема имеется не только со скриптами. 
// Поэтому нам нужно воспользоваться специальной инъекцией executeScript.


// Сначала нужно добавить обработчик события клика на иконку расширения:
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id, {
    code: "(" + toggleComments.toString() + ")();"
  });
});
// Где toggleComments — это функция, которая и будет производить инъекцию нашего CSS файла на страницу:


var toggleComments = function() {
  var extensionLink;

  (document.getElementById("extension") == null) ?
    (
      extensionLink = document.createElement("link"),
      extensionLink.href = chrome.extension.getURL("/styles/styles_on.css"),
      extensionLink.id = "extension",
      extensionLink.type = "text/css",
      extensionLink.rel = "stylesheet",
      document.getElementsByTagName("head")[0].appendChild(extensionLink)
    )
  : (document.getElementsByTagName("head")[0].removeChild(document.getElementById("extension")))
};