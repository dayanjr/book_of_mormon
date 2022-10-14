const buttonElement = document.getElementById("submit");

function copyInput() {
  var inputElement = document.getElementById("favchap").value;
  var outputElement = document.getElementById("list");
  //outputElement.innerHTML = inputElement.textContent;
  console.log(outputElement)
  const li = document.createElement('li')
  li.innerText = inputElement
  outputElement.append(li)
  const but = document.createElement('button')
  li.append(but)
  but.addEventListener('click', myFunction);
  but.setAttribute("class", "color"); 
  but.textContent="x";
}
buttonElement.addEventListener("click", copyInput);
function myFunction() {
    const element = document.getElementById('list')
    element.removeChild(element.firstElementChild);
}
