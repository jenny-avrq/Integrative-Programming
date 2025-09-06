let count = 0;
let num_course = [];

function addItems() {
    let course = document.getElementById('code').value;
    let description = document.getElementById('description').value;
    let grade = document.getElementById('grade').value;
    let gwa = document.getElementById('gwa');

    if(!course.trim() || !description.trim() || isNaN(grade) || grade.trim() === '') {
        alert('Please fill all fields');
        return;
    } 

    count++;
    let table_data = document.getElementById('table-items');
    let row_items = table_data.insertRow(1);
    
    let cell1 = row_items.insertCell(0);
    let cell2 = row_items.insertCell(1);
    let cell3 = row_items.insertCell(2);

    cell1.innerHTML = course;
    cell2.innerHTML = description;
    cell3.innerHTML = grade;

    // Clear input fields
    document.getElementById('code').value = ''; 
    document.getElementById('description').value = '';
    document.getElementById('grade').value = '';

    // Calculate the average
    addTotal(parseFloat(grade));
    let sum =  num_course.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let average = (sum/count).toFixed(2);
    gwa.innerHTML = average;
}

function addTotal(ave) {
    num_course.push(ave);
}

function change() {
    let h1 = document.getElementById('header');
    h1.innerHTML = "Calculate Your GWA";
}

function change2() {
    let h1 = document.getElementById('header');
    h1.innerHTML = "COURSE MANAGEMENT";
}