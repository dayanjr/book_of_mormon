var ul = document.getElementById("f")
var input = document.getElementById("item")
var button = document.getElementById("b")
button.addEventListener('click', n_function);
function n_function(){
    var i = input
    i.value = "";
    var li = document.createElement('li')
    var span = document.createElement('span')
    var but = document.createElement('button')
    span.textContent = i
    span.textContent = "delete"
    i.append(but)
    i.append(span)
    i.appendChild(li)
}