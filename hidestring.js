// Find the text string on the page
var textToFind = "text string to find";
var allElements = document.getElementsByTagName('*');

for (var i = 0; i < allElements.length; i++) {
    if (allElements[i].textContent.indexOf(textToFind) !== -1) {
        // Create a new div to encapsulate the text
        var newDiv = document.createElement("div");
        newDiv.style.display = "none";
        newDiv.innerHTML = allElements[i].textContent;
        
        // Replace the original element with the new div
        allElements[i].parentNode.replaceChild(newDiv, allElements[i]);
    }
}
