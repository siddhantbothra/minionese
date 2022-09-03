let inputText = document.querySelector("#input-text");
let ansewerText = document.querySelector("#answer-text");
let btn = document.querySelector("#translate");

let serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! try again after some time");
}

function clickHandler() {
  let input = inputText.value; // taking input

  // calling server for processing
  fetch(getTranslationURL(input))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      ansewerText.innerText = translatedText; // output
    })
    .catch(errorHandler);
}

btn.addEventListener("click", clickHandler);
