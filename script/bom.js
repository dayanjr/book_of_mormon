const buttonElement = document.getElementById("submit");

function copyInput() {
  const inputElement = document.getElementById("favchap");
  const outputElement = document.getElementById("list");
  //outputElement.innerHTML = inputElement.value;
  const li = document.createElement('li')
  li.innerText = inputElement
  outputElement.append(li)
}
buttonElement.addEventListener("click", copyInput);
function myFunction() {
    const element = document.getElementById('list')
    element.removeChild(element.firstElementChild);
}
//function add()
//{
//    var n1 = parseInt(document.getElementById('addend1').value);
//    return n1
//}
//document.getElementById('addNumbers').addEventListener("click", add);