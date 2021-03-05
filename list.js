function createList()
{
    var ul = document.createElement("ul");

    let stuff = [
        "Spela tekken 7",
        "inse att datorn klarar inte av det",
        "spela roblox och få en bluescreen",
    ];
    
    document.getElementById("list").appendChild(ul);
    stuff.forEach(createEach);

    function createEach(element, index, arr) {
        var li = document.createElement("li");
        
        ul.appendChild(li);

        t = document.createTextNode(element);

        li.innerHTML = li.innerHTML + element;
    }

    function addList() 
    {
        var text = document.getElementById("text");
        li.appendChild(document.createTextNode(text.value));
        ul.appendChild(li);
    }
}




createList();



