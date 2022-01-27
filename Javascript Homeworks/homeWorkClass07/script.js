// HOMEWORK
// CREATE A DYNAMIC TABLE
// Write a Javascript function that will dynamiclly create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is (ex. Row-3 Column-1)
// Don't forget to use google! :)

let rows = document.getElementById('rows');
let cols = document.getElementById('cols');
let btn = document.getElementById('create')

let table = document.getElementById('tableNode');

btn.addEventListener('click',function(){
    table.innerHTML = ''
    let rowVal = rows.value
    let colsVal = cols.value
    let setTable = document.createElement(`table`);
    table.appendChild(setTable);
    for(let i = 0; i < rowVal; i++){
        let addRows = document.createElement(`tr`);
        setTable.appendChild(addRows);

        for(let j = 0; j < colsVal; j++){
            let addCols = document.createElement(`td`);
            addRows.appendChild(addCols)
            addCols.innerText = `Row ${i+1} Column ${j+1}`
        }
    }
    
})

//Nemam staveno validator na inputite poradi toa shto ne bara vo zadachata :D