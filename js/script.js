console.log("Hey Im Nasir");

var btnDel = document.getElementById("btnDel");

var ent = document.getElementById("entry");
var table = document.getElementById("display");
table.style.display = "none";

var step = 1;
var allData = [];
var allDataS = [];
var allCookies = [];
// console.log(allCookies);

let editEyer = [];
function editData() {
  console.log(this.id.split(","));
  const listOfIds = this.id.split(",")[0].split("|");
  console.log(listOfIds);

  var sel = document.querySelector("select").selectedOptions;

  if (listOfIds[0] === "local") {
    const localC = JSON.parse(window.localStorage.getItem("data"));
    document.getElementById("name").value =
      localC[Number(listOfIds[2])]["Name"];
    document.getElementById("roll").value =
      localC[Number(listOfIds[2])]["roll"];
    document.getElementById("subj").value =
      localC[Number(listOfIds[2])]["subject"];

    sel[0].innerHTML = "Local Storage";
    editEyer.push(Number(listOfIds[2]));
    localC.splice(Number(listOfIds[2]), 1);
    window.localStorage.setItem("data", JSON.stringify(localC));
  } else if (listOfIds[0] === "session") {
    const sessionC = JSON.parse(window.sessionStorage.getItem("data"));

    document.getElementById("name").value =
      sessionC[Number(listOfIds[2])]["Name"];
    document.getElementById("roll").value =
      sessionC[Number(listOfIds[2])]["roll"];
    document.getElementById("subj").value =
      sessionC[Number(listOfIds[2])]["subject"];

    sel[0].innerHTML = "Session Storage";
    editEyer.push(Number(listOfIds[2]));
    sessionC.splice(Number(listOfIds[2]), 1);
    window.sessionStorage.setItem("data", JSON.stringify(sessionC));
  } else {
    const cookieC = JSON.parse(document.cookie.split("=")[1]);

    document.getElementById("name").value =
      cookieC[Number(listOfIds[2])]["Name"];
    document.getElementById("roll").value =
      cookieC[Number(listOfIds[2])]["roll"];
    document.getElementById("subj").value =
      cookieC[Number(listOfIds[2])]["subject"];

    sel[0].innerHTML = "Cookie Storage";
    editEyer.push(Number(listOfIds[2]));
    cookieC.splice(Number(listOfIds[2]), 1);
    document.cookie = "data" + "=" + JSON.stringify(cookieC);
    if (cookieC.length === 0) {
      location.reload();
      document.cookie.clear();
    }
  }
}

function delData(e) {
  console.log(this.id.split(","));
  const listOfIds = this.id.split(",")[0].split("|");
  if (listOfIds[0] === "local") {
    const localC = JSON.parse(window.localStorage.getItem("data"));
    localC.splice(Number(listOfIds[2]), 1);
    window.localStorage.setItem("data", JSON.stringify(localC));
    if (localC.length === 0) {
      window.localStorage.clear();
    }
  } else if (listOfIds[0] === "session") {
    const sessionC = JSON.parse(window.sessionStorage.getItem("data"));
    sessionC.splice(Number(listOfIds[2]), 1);
    window.sessionStorage.setItem("data", JSON.stringify(sessionC));
    if (sessionC.length === 0) {
      window.sessionStorage.clear();
    }
  } else {
    const cookieC = JSON.parse(document.cookie.split("=")[1]);
    cookieC.splice(Number(listOfIds[2]), 1);
    document.cookie = "data" + "=" + JSON.stringify(cookieC);
    if (cookieC.length === 0) {
      location.reload();
      document.cookie.clear();
    }
  }
  location.reload();
}

let count2;
console.log(window.localStorage.length);
if (window.localStorage.length > 0) {
  count2 = 0;
  table.style.display = "block";
  for (let i of JSON.parse(window.localStorage.getItem("data"))) {
    const eiditTag = document.createElement("button");
    eiditTag.innerHTML = "edit";
    eiditTag.setAttribute("id", `local|${i["count"]}|${count2}`);
    eiditTag.setAttribute("class", "btn");

    const deleTag = document.createElement("button");
    deleTag.innerHTML = "delete";
    deleTag.setAttribute("id", `local|${i["count"]}|${count2}`);
    deleTag.setAttribute("class", "btn");

    var newRow = display.insertRow(step);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);

    cell1.innerHTML = i["Name"];
    cell2.innerHTML = i["roll"];
    cell3.innerHTML = i["subject"];
    cell4.innerHTML = i["Storage"];
    cell5.append(deleTag);
    cell6.append(eiditTag);
    deleTag.addEventListener("click", delData);
    eiditTag.addEventListener("click", editData);
    count2++;
    step++;
  }
}

if (window.sessionStorage.length > 1) {
  count2 = 0;
  table.style.display = "block";
  for (let i of JSON.parse(window.sessionStorage.getItem("data"))) {
    const eiditTag = document.createElement("button");
    eiditTag.innerHTML = "edit";
    eiditTag.setAttribute("id", `session|${i["count"]}|${count2}`);
    eiditTag.setAttribute("class", "btn");

    const deleTag = document.createElement("button");
    deleTag.innerHTML = "delete";
    deleTag.setAttribute("id", `session|${i["count"]}|${count2}`);
    deleTag.setAttribute("class", "btn");

    var newRow = display.insertRow(step);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);

    cell1.innerHTML = i["Name"];
    cell2.innerHTML = i["roll"];
    cell3.innerHTML = i["subject"];
    cell4.innerHTML = i["Storage"];
    cell5.append(deleTag);
    cell6.append(eiditTag);
    deleTag.addEventListener("click", delData);
    eiditTag.addEventListener("click", editData);
    count2++;
    step++;
  }
}

if (document.cookie) {
  count2 = 0;
  table.style.display = "block";
  for (let i of JSON.parse(document.cookie.split("=")[1])) {
    const eiditTag = document.createElement("button");
    eiditTag.innerHTML = "edit";
    eiditTag.setAttribute("id", `cookie|${i["count"]}|${count2}`);
    eiditTag.setAttribute("class", "btn");

    const deleTag = document.createElement("button");
    deleTag.innerHTML = "delete";
    deleTag.setAttribute("id", `cookie|${i["count"]}|${count2}`);
    deleTag.setAttribute("class", "btn");

    var newRow = display.insertRow(step);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);

    cell1.innerHTML = i["Name"];
    cell2.innerHTML = i["roll"];
    cell3.innerHTML = i["subject"];
    cell4.innerHTML = i["Storage"];
    cell5.append(deleTag);
    cell6.append(eiditTag);
    deleTag.addEventListener("click", delData);
    eiditTag.addEventListener("click", editData);
    count2++;
    step++;
  }
}

var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

function displayDetails(e) {
  e.preventDefault();

  var sel = document.querySelector("select").selectedOptions;
  console.log(sel[0].innerText);

  console.log("this one..");

  var Name = document.getElementById("name").value;
  var roll = document.getElementById("roll").value;
  var subject = document.getElementById("subj").value;

  var sign = true;
  let count = 0;
  function checker() {
    console.log("comng....");
    let totalS = [];

    if (window.localStorage.length > 0) {
      totalS = [...totalS, ...JSON.parse(localStorage.getItem("data"))];
    }
    if (window.sessionStorage.length > 1) {
      totalS = [...totalS, ...JSON.parse(sessionStorage.getItem("data"))];
    }
    if (document.cookie) {
      totalS = [...totalS, ...JSON.parse(document.cookie.split("=")[1])];
    }

    count = totalS.length;

    for (let k of totalS) {
      if (k["roll"] == roll) {
        console.log(sign, "sign");
        sign = false;
        console.log(sign);
        alert("Your Roll number already exits!!");
        location.reload();
        break;
      }
    }
    return sign;
  }

  if (sel[0].innerText == "Local Storage") {
    if (window.localStorage.length > 0) {
      allData = JSON.parse(localStorage.getItem("data"));
    }
    sign = checker();
    console.log(sign, "innner...");
    if (sign) {
      if (editEyer.length > 0) {
        allData.splice(editEyer[0], 0, {
          Name,
          roll,
          subject,
          Storage: "Local storage",
          count,
        });
      } else {
        console.log("1st cond");
        allData.push({
          Name,
          roll,
          subject,
          Storage: "Local storage",
          count,
        });
      }
      window.localStorage.setItem("data", JSON.stringify(allData));
      console.log(window.localStorage);
    }
  }

  // cookie storage
  if (sel[0].innerText == "Cookie Storage") {
    if (document.cookie) {
      allCookies = JSON.parse(document.cookie.split("=")[1]);
    }

    sign = checker();

    if (sign) {
      if (editEyer.length > 0) {
        allCookies.splice(editEyer[0], 0, {
          Name,
          roll,
          subject,
          Storage: "Cookie Storage",
          count,
        });
      } else {
        allCookies.push({
          Name,
          roll,
          subject,
          Storage: "Cookie Storage",
          count,
        });
      }

      document.cookie = "data" + "=" + JSON.stringify(allCookies);
    }
  }

  // all about sessionStorage
  if (sel[0].innerText == "Session Storage") {
    if (window.sessionStorage.length > 1) {
      allDataS = JSON.parse(sessionStorage.getItem("data"));
    }
    sign = checker();

    if (sign) {
      if (editEyer.length > 0) {
        allDataS.splice(editEyer[0], 0, {
          Name,
          roll,
          subject,
          btnDel,
          Storage: "Session Storage",
          count,
        });
      } else {
        allDataS.push({
          Name,
          roll,
          subject,
          btnDel,
          Storage: "Session Storage",
          count,
        });
      }
      window.sessionStorage.setItem("data", JSON.stringify(allDataS));
    }
  }

  if (!sign) {
    return;
  }
  //    cookies
  table.style.display = "block";
  var name = document.getElementById("name").value;
  var roll = document.getElementById("roll").value;
  var subj = document.getElementById("subj").value;
  const deleTag = document.createElement("button");
  deleTag.innerHTML = "delete";
  deleTag.setAttribute("id", `btnDel${count}`);
  deleTag.setAttribute("class", "btn");

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
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);

  cell1.innerHTML = name;
  cell2.innerHTML = roll;
  cell3.innerHTML = subj;
  cell4.innerHTML = sel;
  cell5.append(deleTag);

  step++;

  // if (sign) {
  //   location.reload();
  // }
  location.reload();
}
