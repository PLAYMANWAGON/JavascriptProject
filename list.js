function addList() 
{
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var text = document.getElementById("text");
    li.appendChild(document.createTextNode(text.value));
    ul.appendChild(li);
}
