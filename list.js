/*Får inte local storage att funka, vet ej varför.
const LOCAL_STORAGE_STUFF = "app.text";
*/

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


    function createEach(element)
    {
        var li = document.createElement("li");
        
        ul.appendChild(li);

        t = document.createTextNode(element);

        li.innerHTML = li.innerHTML + element;
    }

}

function addList() 
{
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var text = document.getElementById("text");
    li.appendChild(document.createTextNode(text.value));
    ul.appendChild(li);
    save();
}

/*som sagt ovan, funkar ej, ingen aning varför.
function save() {
    localStorage.setItem(LOCAL_STORAGE_STUFF, JSON.stringify(text));
}
*/

createList();