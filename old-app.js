//document.body.children[1].children[0].href = "https://google.com";

//console.dir(document);
//alert();
//window.alert();

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("p a");
anchorElement.href = "https://academind.com";

//add an element
//1.create the new element
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to Google";

//2.get access to thr parent element that should hold the new element

let firstParagraph = document.querySelector("p");

//3.insert the new element into the parent element content
firstParagraph.append(newAnchorElement);

let firstH1Element = document.querySelector("h1");

//firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element);

firstParagraph.parentElement.append(firstParagraph);

console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = 'Hi! this is <strong> important </strong>';