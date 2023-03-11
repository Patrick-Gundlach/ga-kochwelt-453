//Table
function createTable(amountsArray, unitArray, ingredientsArry) {
    let tbody = document.createElement('tbody'); 
    let ingredientsTable  = document.getElementById('ingredientList');
    ingredientsTable .innerHTML = '';

    for (let i = 0; i < ingredientsArry.length; i++) {
      let amount = amountsArray[i];
      let unit = unitArray[i];
      let ingredient = ingredientsArry[i];
      tbody.innerHTML += `
      <tr>
        <td class="ingredientAmounts" id="ingredientAmount">${amount}</td>
        <td> ${unit}</td>
        <td> ${ingredient}</td>
      </tr>
      `;
    }

    ingredientsTable.appendChild(tbody);
}
createTable(amountsArray, unitArray, ingredientsArry);

//Calculator
function calculatorIngredients(amount, unit, ingredient) {
  let portionsAmount = +document.getElementById('portionsAmount').value;
  let tbody = document.createElement('tbody');
  let ingredientsTable = document.getElementById('ingredientList');
  ingredientsTable.innerHTML = '';

  for (let i = 0; i < ingredientsArry.length; i++) {

    // Hi zusammen ich habe mal die Funktion leicht angepasst.
    // erst erstelle ich eine leere variable "amount" und danach prüfe 
    // ich mit einer if schleife und befühlle das amount nur wenn auch 
    // ein wert zurück kommt. Das gleiche habe ich mit unitArray gemacht 
    // da hier ja auch nichts zurück kommt. Das müsste man in dem moment 
    // nicht dringend machen, ist aber sauberer vom gefühl.
    let amount = '';
    if (amountsArray[i]) {
      amount = (amountsArray[i] / 4) * portionsAmount;
    }
    let unit = ''; // 
    if (unitArray[i]) {
      unit = unitArray[i];
    }
    let ingredient = ingredientsArry[i];
    tbody.innerHTML += `
      <tr>
        <td class="ingredientAmounts" id="ingredientAmount">${amount}</td>
        <td> ${unit}</td>
        <td> ${ingredient}</td>
      </tr>
    `;
  }
  ingredientsTable.appendChild(tbody);
  
}

//Symbols not allowed function
function restrictInput(event) {
  if (event.key === '+' || event.key === '-' || event.keyCode === 69) {
    event.preventDefault();
  }
}

// 0 = 1
function replaceZeroWithOne() {
  let numInput = document.getElementById('portionsAmount');
  if (numInput.value == 0) {
    numInput.value = 1;
  }
}


