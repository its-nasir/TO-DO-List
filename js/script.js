console.log("hey I am Nasir");
function nav(event){
    event.preventDefault();

    var Name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;
    var subject = document.getElementById("subj").value;

   localStorage.setItem("Name",Name)
   localStorage.setItem("Roll_number",roll)
   localStorage.setItem("subject",subject)
}
 
var row = 1
var entry = document.getElementById("entry")
entry.addEventListener("click",displayDetails);

function displayDetails(e){
    e.preventDefault()
    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;
    var subj = document.getElementById("subj").value;
    var sel = document.querySelector("select").selectedOptions
console.log(sel[0].innerText)
    if (!name || !roll || !subj){
        alert("please fill all the boxes");
        return;
    }
    var display = document.getElementById("display")
    var newRow = display.insertRow(row);

    var cell1 =  newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = roll;
    cell3.innerHTML = subj; 
    row++;
}





























 