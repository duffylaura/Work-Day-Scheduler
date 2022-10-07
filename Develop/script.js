//const textAreaNode = document.createElement("textArea");
//const buttonNode = document.createElement("button");
//textAreaNode.appendChild(buttonNode);
//document.getElementById("9").appendChild(textAreaNode);

////var button = document.getElementById("button");

// button.addEventListener("click", function(userInput) {
//     var userInput = document.getElementById("9");
//     const displayInput = document.createElement("displayInput");
//     document.getElementById("displayInput").appendChild(displayInput);
//     displayInput.textContent=userInput;    
//     localStorage.setItem("server", userInput)
    
// });

const textAreaNode = document.createElement("textArea");
const buttonNode = document.createElement("button");
buttonNode.appendChild(textAreaNode);

var outputArea = document.getElementById("outputArea")

//var button = document.getElementById("button");

var userInput = document.getElementById("9");

buttonNode.addEventListener("click", function(userInput) {
    outputArea.textContent=userInput;    
    localStorage.setItem("server", userInput)  
});