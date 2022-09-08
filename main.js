let container = document.querySelector(".container");

let panel = document.createElement("div");

let rowNum = 2;




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



document.getElementById("submit").onclick = () => {
    rowNum = document.getElementById("value").value;
    buildGrid(rowNum)
}


buildGrid(rowNum);