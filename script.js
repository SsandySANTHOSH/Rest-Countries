let data = [];
function printData(data = []) {
  data.map((element, index) => console.log(element));
}
// WILL CREATE A STUDENT CARD AND RETURN THE CARD
function createStudentCard(data = []) {
  let card = document.createElement("div");
  card.setAttribute("id", "card");
  card.setAttribute("class", "student-card");
  let studentName = document.createElement("h2");
  let courseName = document.createElement("h3");
  let joiningDate = document.createElement("h3");
  let red = document.createElement("h4");
  let reg = document.createElement("h3");
  let code = document.createElement("h4");
  studentName.innerText = data.name.common;
  courseName.innerText =data.region; 
  joiningDate.innerText = data.capital;
  red.innerText = data.flag;
  reg.innerText = data.latlng;
  code.innerText = data.population;
  card.append(studentName, courseName, joiningDate ,red ,reg ,code );
 console.log(code);
  return card;
}

// WILL STORE ALL THE STUDENT CARDS AND RENDERS IN THE UI
function renderStudentsCard(data = []) {
  // WILL HAVE LIST OF CREATED CARDS
  let cards = [];
  data.forEach((element) => {
    cards.push(createStudentCard(element));
  });
  const container = document.getElementById("container");
  container.append(...cards);
}

async function getData() {
  const studentDataResponse = await fetch(
    "https://restcountries.com/v3.1/all"
  );
  data = await studentDataResponse.json();
  if (data.length > 0) {
    renderStudentsCard(data);
    console.log(data);
  }
}
getData();

