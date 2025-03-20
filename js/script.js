const firstName = "Cynthia";  
const lastName = "Montalvo";  
const delay = 150; 

let firstNameIndex = 0;
let lastNameIndex = 0;

function animateText() {
  document.getElementById("first-name").textContent = firstName.substring(0, firstNameIndex);
  firstNameIndex++;

  if (firstNameIndex > firstName.length) {
    document.getElementById("last-name").textContent = lastName.substring(0, lastNameIndex);
    lastNameIndex++;
  }

  if (lastNameIndex > lastName.length) {
    clearInterval(interval);
  }
}

const interval = setInterval(animateText, delay);
