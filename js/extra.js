console.log("Hey Im Nasir");

var touch1 = document.getElementById("touch1");
var touch2 = document.getElementById("touch2");
var touch3 = document.getElementById("touch3");
var storage1 = document.getElementById("storage1");

var Name = document.getElementById("name").value;
var roll = document.getElementById("roll").value;
var subject = document.getElementById("subj").value;

var ent = document.getElementById("entry");
var table = document.getElementById("display");
var frm = (table.style.display = "none");

ent.addEventListener("click", () => {
  if ((table.style.display = "none")) {
    table.style.display = "block";
  }
});

var step = 1;
var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

function displayDetails(e) {
  e.preventDefault();
  // all about localStorage
  // console.log(storage1.value)
  var sel = document.querySelector("select").selectedOptions;
  console.log(sel[0].innerText);

  var Name = document.getElementById("name").value;
  var roll = document.getElementById("roll").value;
  var subject = document.getElementById("subj").value;

  if (sel[0].innerText == "Local stroage") {
    window.localStorage.setItem("Name", Name);
    window.localStorage.setItem("Roll_number", roll);
    window.localStorage.setItem("subject", subject);
  }

  // cookie storage
  if (sel[0].innerText == "Cookie Storage") {
    document.cookie = `Name=${Name}`;
    document.cookie = `Roll_number=${roll}`;
    document.cookie = `Subject=${subject}`;
    // window.localStorage.setItem("select").selectedOptions
  }

  // all about sessionStorage
  if (sel[0].innerText == "Session Storage") {
    window.sessionStorage.setItem("Name", Name);
    window.sessionStorage.setItem("Roll_number", roll);
    window.sessionStorage.setItem("subject", subject);
  }
  //    cookies

  var name = document.getElementById("name").value;
  var roll = document.getElementById("roll").value;
  var subj = document.getElementById("subj").value;
  var sel = document.querySelector("select").selectedOptions;
  var sel = sel[0].innerText;

  if (!name || !roll || !subj || !sel) {
    alert("⚠ Please fill all the boxes");
    return;
  }
  var display = document.getElementById("display");
  var newRow = display.insertRow(step);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);

  cell1.innerHTML = name;
  cell2.innerHTML = roll;
  cell3.innerHTML = subj;
  cell4.innerHTML = sel;
  step++;
}
