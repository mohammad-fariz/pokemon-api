// var btnFind = document.querySelector("#btn-find");
var btnFind = document.getElementById("btn-find");
var txtInput = document.getElementById("txt-input");
console.log(txtInput);

btnFind.addEventListener("click", clickHandler);

function clickHandler() {
	console.log("clicked!");
	console.log("input", txtInput.value);
}
