// var btnFind = document.querySelector("#btn-find");
var btnFind = document.getElementById("btn-find");
var txtInput = document.getElementById("txt-input");
var outputDiv = document.querySelector("#output");

var GifURL =
	"https://api.giphy.com/v1/gifs/search?api_key=UJnLF4NzKsfUWxAlb7iXFktL7IRXCcvN&q=";
function getGifImagesSearchURL(giphy) {
	return GifURL + giphy;
}
console.log(txtInput);

btnFind.addEventListener("click", clickHandler);

function clickHandler() {
	console.log("clicked!");
	console.log("input", txtInput.value);
	var search = txtInput.value;
	var url = getGifImagesSearchURL(search);
	console.log("url", url);
	fetch(url)
		.then((response) => response.json())
		.then((json) => {
			console.log(json.data[0].images.original.url);
			console.log(json.data[0]);
			document.getElementById("output").innerHTML = "";
			for (let i = 0; i < json.data.length; i++) {
				let img = document.createElement("img");
				img.src = json.data[i].images.original.url;

				document.getElementById("output").appendChild(img);
			}
		});
}
