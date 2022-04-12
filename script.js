var arr = [];
var i = 0
function add() {
    document.getElementById("display").innerHTML = "Input : ";
    arr[i] = document.getElementById("input").value;
    i++;
    document.getElementById("input").value = "";
    document.getElementById("display").innerHTML += arr;
}
var len = arr.length;

function inputTable() {
    let len = arr.length;
    let maxArr = 0;
    for (let i = 0; i < len; i++) {
        maxArr = Math.max(maxArr, arr[i]);
    }
    for (let row = 0; row <= maxArr; row++) {
        let rows = document.getElementById("inputTable").insertRow(row);
        for (let col = 0; col < len; col++) {
            rows.insertCell(col);
        }
    }
    let table = document.getElementById("inputTable");
    for (let col = 0; col < len; col++) {
        for (let row = maxArr; row > maxArr - arr[col]; row--) {
            table.rows[row].cells[col].style.backgroundColor = "yellow";
        }
    }
}

function output() {
    let len = arr.length;
    let maxArr = 0;
    for (let i = 0; i < len; i++) {
        maxArr = Math.max(maxArr, arr[i]);
    }
    for (let row = 0; row <= maxArr; row++) {
        let rows = document.getElementById("outputTable").insertRow(row);
        for (let col = 0; col < len; col++) {
             rows.insertCell(col);
        }
    }
    
    let table = document.getElementById("outputTable");
    for (let col = 0; col < len; col++) {
        for (let row = maxArr; row > maxArr - arr[col]; row--) {
            table.rows[row].cells[col].style.backgroundColor = "yellow";
        }
    }

    let left = [];
    let right = [];
    left[0] = arr[0];
    for (let i = 1; i < len; i++) {
        left[i] = Math.max(left[i - 1], arr[i]);
    }
    right[len - 1] = arr[len - 1];
    for (let i = len - 2; i >= 0; i--) {
        right[i] = Math.max(right[i + 1], arr[i]);
    }
    let ans = 0;
    for (let col = 0; col < len; col++) {
        let count = 0;
        let row = Math.max(left[col], right[col]) - arr[col];
        while (count < Math.min(left[col], right[col]) - arr[col]) {
            table.rows[row].cells[col].style.backgroundColor = "skyblue";
            row--;
            count++;
        }
        ans += Math.min(left[col], right[col]) - arr[col]; 
    }
    console.log(ans);
    document.getElementById("ans").innerHTML += ans;
}
