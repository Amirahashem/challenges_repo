// Header Section
let myHeader = document.createElement("header");
let myLogo = document.createElement("div");
let myLinks = document.createElement("ul");
let linkItemOne = document.createElement("li");
let linkItemTwo = document.createElement("li");
let linkItemThree = document.createElement("li");
let linkItemFour = document.createElement("li");



let logoText = document.createTextNode("Amira");
let itemOne = document.createTextNode("Home");
let itemTwo = document.createTextNode("About");
let itemThree = document.createTextNode("Service");
let itemFour = document.createTextNode("Contact");



//add text to logo
myLogo.appendChild(logoText);

//add list of links
linkItemOne.appendChild(itemOne);
linkItemTwo.appendChild(itemTwo);
linkItemThree.appendChild(itemThree);
linkItemFour.appendChild(itemFour);

//append lis to ul
myLinks.appendChild(linkItemOne);
myLinks.appendChild(linkItemTwo);
myLinks.appendChild(linkItemThree);
myLinks.appendChild(linkItemFour);


//append logo to header
myHeader.appendChild(myLogo);

//append links to header
myHeader.appendChild(myLinks);

//append header to body
document.body.appendChild(myHeader);

// console.log(myLogo)
console.log(myLinks);

// styling
myHeader.style.display = "flex";
myLinks.style.margin = "0";
myLinks.style.listStyle = "none";
myLinks.style.display = "flex";
myHeader.style.justifyContent = "space-between";

// console.log(document.getElementsByTagName("li")[0])
for(let i = 0; i < document.getElementsByTagName("li").length; i++) {
    document.getElementsByTagName("li")[i].style.marginRight = "10px";
}

myLogo.style.color = "green";
myLogo.style.fontWeight = "bold";
myLogo.style.fontSize = "20px";

// Content Section
let myContent = document.createElement("div");

for(let i = 1; i <= 15; i++) {
    let myCard = document.createElement("div");
    let myNumber = document.createElement("span");
    let myProduct = document.createElement("span");
    // let cardText = document.createTextNode(i);
    let numberText = document.createTextNode(i)
    let productText = document.createTextNode("Product");
    

    //add text to card
    // myCard.appendChild(cardText);
    
    //add text to span (Number)
    myNumber.appendChild(numberText);

    //add text to span (product)
    myProduct.appendChild(productText);

    //append number to card
    myCard.appendChild(myNumber);

    //append product to card
    myCard.appendChild(myProduct);

    //append card to  content
    myContent.appendChild(myCard);

    //styling
    myCard.style.backgroundColor = "white";
    myCard.style.padding = "10px";
    myCard.style.margin = "10px";
    myCard.style.width = "150px";
    myNumber.style.fontSize= "20px";
    myNumber.style.display = "block";
    myProduct.style.display = "block";
    myNumber.style.textAlign = "center";
    myProduct.style.textAlign = "center";
    myProduct.style.color = "gray";
    myProduct.style.fontSize = "12px";

}

//append content to body
document.body.appendChild(myContent);

console.log(myContent)

//styling
myContent.style.backgroundColor = "#eee";
myContent.style.padding = "10px";
myContent.style.display = "flex";
myContent.style.flexWrap = "wrap";


//Footer
let myFooter = document.createElement("footer");
let footText = document.createTextNode("Copyright 2025");


//add text to footer
myFooter.appendChild(footText);

//append footer to body
document.body.appendChild(myFooter);

//Styling
myFooter.style.cssText = "padding: 10px; background-color:green; color:white; font-weight:bold; text-align:center;"





