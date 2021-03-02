document.getElementById("add").onclick  = function() {

    var node = document.createElement("list");

    var text = document.getElementById("addlist").value; 

    var textnode = document.createTextNode(text);

    node.appendChild(textnode);

    document.getElementById("list_item").appendChild(node);

}