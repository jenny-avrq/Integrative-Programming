/*
Event Listener
	- based on the action of the user(s)
*/

let count = 0;
let item_total = [];

function addItems() {
    count++;

    let table_data = document.getElementById('table-items');
    let row_items = table_data.insertRow(1);

    let item_name = document.getElementById('item-name').value;
    let item_q = document.getElementById('item-q').value;
    let total = document.getElementById('total');

    let cell1 = row_items.insertCell(0);
    let cell2 = row_items.insertCell(1);
    let cell3 = row_items.insertCell(2);

    cell1.innerHTML = count;
    cell2.innerHTML = item_name;
    cell3.innerHTML = item_q;

    addTotal(parseFloat(item_q));

    /*
        REDUCED FUNCTION
            Accumulator
                - accumulated sum

            Current Value
                - current index
    */
    let sum =  item_total.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    total.innerHTML = sum;
}

function addTotal(quantity) {
    item_total.push(quantity);
}

function connect() {
    let body = document.getElementById('body-tag');
    body.style.backgroundColor = "Blue";
}

function change() {
    let h1 = document.getElementById('header-2');
    h1.innerHTML = "The mouse is hovering!";
}

function change2() {
    let h1 = document.getElementById('header-2');
    h1.innerHTML = "The mouse is out!";
}