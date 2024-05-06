const submitButton = document.getElementById("submit");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const homePage = document.getElementById("homePage");
const applyBtn = document.getElementById("apply");
const dropList = document.getElementById("dropList");
const result = document.getElementById("showResult");
const mainPage = document.getElementById("mainPage");
input1Value = [1, 2, 3, 4, 5];
input2Value = [6, 6, 8, 10, 10];

function toArray(string) {
  const strNumbers = string.slice(1, -1).split(",");

  // 2. Convert each string number to a real number
  const numbers = strNumbers.map(Number);

  return numbers;
}
function swapArrays(arr1, arr2) {
  let tempArr1 = [...arr1]; // Create a copy of arr1
  let tempArr2 = [...arr2]; // Create a copy of arr2

  const temp = tempArr1;
  tempArr1 = tempArr2;
  tempArr2 = temp;

  const e1 = document.createElement("h2");
  result.appendChild(e1);
  e1.textContent = `Array1: [${tempArr1.join(",")}]`;

  const e2 = document.createElement("h2");
  e2.textContent = `Array2: [${tempArr2.join(",")}]`;
  result.appendChild(e2);
}

function insertElement() {
  const insertArray = parseInt(document.getElementById("insertArray").value);
  const position = document.getElementById("position");
  const positionValue = position.value;
  const element = parseInt(document.getElementById("element").value);
  let newArray = [];
  let targetArray = [];
  if (insertArray === 1) {
    targetArray = input1Value;
  } else if (insertArray === 2) {
    targetArray = input2Value;
  } else {
    alert("Please enter 1 or 2");
  }

  if (input1Value.length < position) {
    alert("The position you entered is out of bounds");
    position.value = input1Value.length;
  }

  const before = document.createElement("h2");
  result.appendChild(before);
  before.textContent = `before: [${targetArray.join(",")}]`;
  result.appendChild(before);
  for (let i = 0; i < targetArray.length; i++) {
    if (i === parseInt(positionValue)) {
      newArray.push(element);
    }
    newArray.push(targetArray[i]);
  }

  const after = document.createElement("h2");
  result.appendChild(after);
  after.textContent = `after: [${newArray.join(",")}]`;
  result.appendChild(after);
}

function deleteElemtn() {
  const deleteArray = parseInt(document.getElementById("delArray").value);
  const position = document.getElementById("delPosition");
  const positionValue = position.value;

  let targetArray; // Declare a variable to hold the target array
  let newArray = [];
  if (deleteArray === 1) {
    targetArray = input1Value;
  } else if (deleteArray === 2) {
    targetArray = input2Value;
  } else {
    alert("Please enter 1 or 2");
  }

  const before = document.createElement("h2");
  result.appendChild(before);
  before.textContent = `before: [${targetArray.join(",")}]`;
  result.appendChild(before);
  for (let i = 0; i < targetArray.length; i++) {
    if (i !== parseInt(positionValue)) {
      newArray.push(targetArray[i]);
    }
  }

  const after = document.createElement("h2");
  result.appendChild(after);
  after.textContent = `after: [${newArray.join(",")}]`;
  result.appendChild(after);
}

function countOccurrence() {
  const countArray = parseInt(document.getElementById("countArray").value); // Get the value (1 or 2)
  let targetArray;
  let occurrenceMap = {}; // Use a map to store occurrences

  if (countArray === 1) {
    targetArray = input1Value;
  } else if (countArray === 2) {
    targetArray = input2Value;
  } else {
    alert("Please enter 1 or 2");
  }

  // Count occurrences and store in the map
  for (let i = 0; i < targetArray.length; i++) {
    const num = targetArray[i];
    occurrenceMap[num] = (occurrenceMap[num] || 0) + 1;
  }

  // Create and append elements based on the map
  for (const num in occurrenceMap) {
    const newElement = document.createElement("p");
    newElement.innerHTML = `${num}: ${occurrenceMap[num]} times`;
    result.appendChild(newElement);
  }
}

function randomArray() {
  const min = document.getElementById("minValue").value;
  const max = document.getElementById("maxValue").value;
  if (min === "" || max === "") {
    alert("Please enter the min and max values");
  }

  if (min > max) {
    alert("The min value must be less than the max value");
  }

  const randomArray = [];
  for (let i = 0; i < 5; i++) {
    randomArray.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  const newElement = document.createElement("h2");
  newElement.innerHTML = `Randomized Array: [${randomArray.join(",")}]`;
  result.appendChild(newElement);
}

function splitArray() {
  const oddArray = [];
  const evenArray = [];
  const splitArray = parseInt(document.getElementById("splitValue").value);
  let targetArray;
  if (splitArray == 1) {
    targetArray = input1Value;
  } else if (splitArray == 2) {
    targetArray = input2Value;
  } else {
    alert("Please enter 1 or 2");
  }

  for (let i = 0; i < 5; i++) {
    if (targetArray[i] % 2 === 0) {
      evenArray.push(targetArray[i]);
    } else {
      oddArray.push(targetArray[i]);
    }
  }

  const newElement = document.createElement("h2");
  newElement.innerHTML = `Odd Array: [${oddArray.join(",")}]`;
  result.appendChild(newElement);

  const newElement2 = document.createElement("h2");
  newElement2.innerHTML = `Even Array: [${evenArray.join(",")}]`;
  result.appendChild(newElement2);
}

function concatenateArrays() {
  let length = input1Value.length;
  let newArray = [];

  for (let i = 0; i < length; i++) {
    newArray.push(input1Value[i]);
  }
  newArray.push(" ");

  for (let i = 0; i < length; i++) {
    newArray.push(input2Value[i]);
  }

  const newElement = document.createElement("h2");
  newElement.innerHTML = `Concatenated Array: <br> [${newArray.join(",")}]`;
  result.appendChild(newElement);
}

function copyArray() {
  const selectValue = parseInt(document.getElementById("arrCopy").value);
  let targetArray = [];
  if (selectValue == 1) {
    targetArray = input1Value;
  } else if (selectValue == 2) {
    targetArray = input2Value;
  }

  let newArray = [];
  for (let i = 0; i < targetArray.length; i++) {
    newArray.push(targetArray[i]);
  }

  const newElement = document.createElement("h2");
  newElement.innerHTML = `Original Array: [${targetArray}]`;
  result.appendChild(newElement);

  const newElement2 = document.createElement("h2");

  newElement2.innerHTML = `Copied Array: [${newArray}]`;
  result.appendChild(newElement2);
}

function invertArray() {
  const whichArray = parseInt(document.getElementById("invertArrayval").value);
  let targetArray = [];
  if (whichArray == 1) {
    targetArray = input1Value;
  } else if (whichArray == 2) {
    targetArray = input2Value;
  } else {
    alert("Please enter 1 or 2");
  }
  const invertedArray = [];
  for (let i = targetArray.length - 1; i >= 0; i--) {
    invertedArray.push(targetArray[i]);
  }

  const newElement = document.createElement("h2");
  newElement.innerHTML = `Inverted Array: [${invertedArray.join(",")}]`;
  result.appendChild(newElement);
}

function inputAndPrint2DArray() {
  const array2D = [];

  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      let input = prompt(`Enter element at position [${i}][${j}]:`);

      row.push(Number(input));
    }
    array2D.push(row);
  }

  const newElement = document.createElement("h2");
  newElement.innerHTML = `2D Array: [${array2D
    .map((row) => `[${row.join(", ")}]`)
    .join(", ")}]`;
  result.appendChild(newElement);
}

submitButton.addEventListener("click", () => {
  const value1 = input1.value;
  const value2 = input2.value;

  if (value1 === "" || value2 === "") {
    alert("Please enter two values");
  }

  input1Value = toArray(value1);
  input2Value = toArray(value2);

  if (input1Value.length !== input2Value.length) {
    input1.value = "";
    input2.value = "";
    alert("Please enter two arrays of the same length");
  }

  homePage.classList.add("d-none");
  mainPage.classList.remove("d-none");
  displayArr1.innerHTML = `Array1: [${input1Value.join(", ")}]`;
  displayArr2.innerHTML = `Array2: [${input2Value.join(", ")}]`;
});

applyBtn.addEventListener("click", () => {
  result.innerText = "";
  const dropListValue = dropList.value;
  if (dropListValue === "swap") {
    swapArrays(input1Value, input2Value);
  }
  if (dropListValue === "insert") {
    insertElement();
  }
  if (dropListValue === "delete") {
    deleteElemtn();
  }

  if (dropListValue === "countOccurrence") {
    countOccurrence();
  }

  if (dropListValue === "randomize") {
    randomArray();
  }

  if (dropListValue === "split") {
    splitArray();
  }

  if (dropListValue === "concatenate") {
    concatenateArrays();
  }

  if (dropListValue === "copyArray") {
    copyArray();
  }

  if (dropListValue === "invertArray") {
    invertArray();
  }

  if (dropListValue === "twoDArray") {
    inputAndPrint2DArray();
  }
});

dropList.addEventListener("change", () => {
  showResult.innerHTML = "";
  const selectedOption = dropList.value;
  const divsToHide = document.querySelectorAll(".Operations");

  divsToHide.forEach((div) => {
    if (div.id !== selectedOption) {
      div.classList.add("d-none");
    } else {
      div.classList.remove("d-none");
    }
  });
});
