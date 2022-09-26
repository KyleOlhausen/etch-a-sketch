let container = document.querySelector(".container");

let panel = document.createElement("div");

let rowNum = 16;
let reset = document.querySelector(".reset");
let erase = document.querySelector(".erase");



function buildGrid(rowNum)
{
    for(let i = 0; i < rowNum; i++)
    {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for(let j = 0; j < rowNum; j++)
        {
            let square = document.createElement("div");
            square.classList.add("default");
            row.appendChild(square);
        }
    }
}

function removeGrid()
{
    while(container.firstChild)
    {
        container.removeChild(container.lastChild);
    }
}


reset.addEventListener("click", () => {
   rowNum = prompt();
   if(rowNum < 2)
   {
        rowNum = 16;
   }
   removeGrid();
   buildGrid(rowNum);
  
})

erase.addEventListener("click", () => {
    removeGrid();
    buildGrid(rowNum);
 })


container.addEventListener("mouseover", function(e){
    if(e.target.matches(".default"))
    {
        e.target.classList.add("colored");
    }
})



buildGrid(rowNum);