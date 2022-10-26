const inputs = document.querySelectorAll("input");
const btnAdd = document.querySelector("button");
const tbody = document.querySelector("tbody.list");

let studentList = [];

const addStudent = () => {
  const student = {
    학번: inputs[0].value,
    이름: inputs[1].value,
    학과: inputs[2].value,
    학년: inputs[3].value,
    주소: inputs[4].value,
    전화번호: inputs[5].value,
  };
  //   studentList = Array.from(studentList);
  studentList.push(student);
};

const saveStudent = () => {
  if (studentList) {
    localStorage.setItem("StudentInfo", JSON.stringify(studentList));
  }
};

const printStudent = () => {
  if (!studentList) {
    return false;
  }

  tbody.textContent = "";

  for (let i = 0; i < studentList.length; i++) {
    const tr = document.createElement("TR");
    let td = document.createElement("TD");
    td.textContent = studentList[i].학번;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = studentList[i].이름;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = studentList[i].학과;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = studentList[i].학년;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = studentList[i].주소;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = studentList[i].전화번호;
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
};

const loadStudent = () => {
  const localInfo = localStorage.getItem("StudentInfo");
  const arrayInfo = JSON.parse(localInfo);
  studentList = arrayInfo;
};

loadStudent();
printStudent();

btnAdd.addEventListener("click", () => {
  addStudent();
  saveStudent();
  printStudent();
});
