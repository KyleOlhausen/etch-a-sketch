let container = document.querySelector(".container");

let panel = document.createElement("div");



for(let i = 0; i < 16; i++)
{
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for(let j = 0; j < 16; j++)
    {
        row.appendChild(document.createElement("div"));
    }
}