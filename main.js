let container = document.querySelector(".container");

let panel = document.createElement("div");

let rowNum = 16;




function buildGrid(rowNum)
{
    for(let i = 0; i < rowNum; i++)
    {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for(let j = 0; j < rowNum; j++)
        {
            row.appendChild(document.createElement("div"));
        }
    }
}

let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
   rowNum = prompt();
   removeGrid();
   buildGrid(rowNum);
})


function removeGrid()
{
    while(container.firstChild)
    {
        container.removeChild(container.lastChild);
    }
}


buildGrid(rowNum);