//  =>       let year = new Date().getFullYear();

//

let yearNow = new Date().getFullYear();

//

let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");

let calculete = document.getElementById("calculete");

let output = document.querySelector(".output");

//  form

calculete.onclick = function calc() {
  if (year.value === "" || month.value === "" || day.value === "") {
    let error = document.querySelector(".error");
    error.style.transform = "translateY(0)";
  } else {
    output.style.transform = "translateY(0)";
  }

  let ages = yearNow - year.value;
  // age
  document.getElementById("sa1").innerText = ages + " سنة ";
  // inMonths
  document.getElementById("sm1").innerText = ages * 12 + month.value + " شهر";
  // inDays
  document.getElementById("sd1").innerText =
    ages * 365 + month.value * 30 + day.value + " يوم ";

  //  inHours
  let hoursDay = ages * 365 + month.value * 30 + day.value;
  document.getElementById('sh1').innerText = hoursDay * 24 + " ساعة ";

  // birthday
  document.getElementById("s1").innerText = year.value + " / ";
  document.getElementById("s2").innerText = month.value + " / ";
  document.getElementById("s3").innerText = day.value;
};



//  output

let birthday = document.getElementById("birthday");
let age = document.getElementById("age");
let inMonths = document.getElementById("inMonths");
let inDays = document.getElementById("inDays");
let inMinutes = document.getElementById("inMinutes");

//   

closeOut.onclick = function () {
  output.style.transform = "translateY(100%)";

  year.value = "";
  month.value = "";
  day.value = "";
};

// Error

let closeError = document.getElementById("closeError");
let error = document.querySelector(".error");

closeError.onclick = function () {
  error.style.transform = "translateY(100%)";
};

