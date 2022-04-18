/**
 * updateInputs function used to update each input.
 * Unfortunately does not work properly.
 */

function updateInputs() {
    const inputs = document.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', event => {
                input.textContent = "";
            })
    })
}

/**
 * addCurrentA function opens the Current Asset section for the
 * user to input values for cash, inventory, supplies, and
 * temporary investments. Once values are inputted, the total
 * is then calculated.
 * 
 * NOTE: each amount inputted is not reflected in totals, thus
 * defeating the entire purpose.
 */

function addCurrentA() {
    //hide the button after being clicked
    let caButton = document.getElementById("cAsset");
    caButton.style.display = 'none';
    
    //assign the container that will hold current assets
    const container = document.getElementById("cAssetButt");

    //create the div, set its class, and style properly
    let currentAsset = document.createElement("div");
    currentAsset.classList.add("cAssetButt");
    currentAsset.setAttribute('id', "currentAssets");
    currentAsset.style.display = 'grid';
    currentAsset.style.textAlign = 'left';
    currentAsset.style.gridColumnStart = 'col-start';
    currentAsset.style.gridColumnEnd = 'col1';
    currentAsset.style.justifyContent = 'start';
    
    //append to the container
    container.appendChild(currentAsset);

    //labels and text inputs created; each one appended
    let cashLabel = document.createElement("label");
    cashLabel.setAttribute("for", "cashLabel");
    cashLabel.innerHTML = "Cash: ";
    
    currentAsset.appendChild(cashLabel);
    
    let cashInput = document.createElement("input");
    cashInput.setAttribute('type', 'number');
    cashInput.setAttribute('id', 'cashInput');
    cashInput.setAttribute('class', 'currentAsset');

    currentAsset.appendChild(cashInput);

    let inventoryLabel = document.createElement("label");
    inventoryLabel.setAttribute("for", "inventoryLabel");
    inventoryLabel.innerHTML = "Inventory: ";
    
    currentAsset.appendChild(inventoryLabel);
    
    let inventoryInput = document.createElement("input");
    inventoryInput.setAttribute('type', 'number');
    inventoryInput.setAttribute('id', 'inventoryInput');
    inventoryInput.setAttribute('class', ' currentAsset');

    currentAsset.appendChild(inventoryInput);

    let suppliesLabel = document.createElement("label");
    suppliesLabel.setAttribute("for", "suppliesLabel");
    suppliesLabel.innerHTML = "Supplies: ";
    
    currentAsset.appendChild(suppliesLabel);
    
    let suppliesInput = document.createElement("input");
    suppliesInput.setAttribute('type', 'number');
    suppliesInput.setAttribute('id', 'suppliesInput');
    suppliesInput.setAttribute('class', 'currentAsset');

    currentAsset.appendChild(suppliesInput);

    let tempInvestLabel = document.createElement("label");
    tempInvestLabel.setAttribute("for", "tempInvestLabel");
    tempInvestLabel.innerHTML = "Temporary Investments: ";
    
    currentAsset.appendChild(tempInvestLabel);
    
    let tempInvestInput = document.createElement("input");
    tempInvestInput.setAttribute('type', 'number');
    tempInvestInput.setAttribute('id', 'tempInvestInput');
    tempInvestInput.setAttribute('class', 'currentAsset');

    currentAsset.appendChild(tempInvestInput);
    
    updateInputs();
    
    //create method for calculating total current assets & printing
    let totalCA = document.createElement("h5");
    totalCA.setAttribute('id', 'totalCA');
    
    

    var cash = document.getElementById("cashInput").value;
    var inventory = document.getElementById("inventoryInput").value;
    var supplies = document.getElementById("suppliesInput").value;
    var tempInvestments = document.getElementById("tempInvestInput").value;
    let currentAssetValues = cash + inventory + supplies + tempInvestments;
    
    
    totalCA.innerHTML = "Total Current Assets: $" + currentAssetValues;

    currentAsset.appendChild(totalCA);
    
}

/**
 * addInvestment function opens the Investment Property & Equipment
 * section for the user to input values for land, building & improvements,
 * equipment, and temporary investments. Once all values are inputted,
 * the total is then calculated.
 * 
 * NOTE: each amount inputted is not reflected in totals, thus
 * defeating the entire purpose.
 */

function addInvestment() {
    //hide the button after being clicked
    let investButton = document.getElementById("invest");
    investButton.style.display = 'none';
    
    //assign the container that will hold investments
    const container = document.getElementById("investButt");
    
    //create the div, set its class, and style properly
    let investments = document.createElement("div");
    investments.classList.add("investButt");
    investments.setAttribute('id', "investments");
    investments.style.display = 'grid';
    investments.style.textAlign = 'left';
    investments.style.gridColumnStart = 'col-start';
    investments.style.gridColumnEnd = 'col1';
    investments.style.justifyContent = 'start';
    
    //append to the container
    container.appendChild(investments);

    //labels and text inputs created; each one appended
    let landLabel = document.createElement("label");
    landLabel.setAttribute("for", "landLabel");
    landLabel.innerHTML = "Land: ";
    
    investments.appendChild(landLabel);
    
    let landInput = document.createElement("input");
    landInput.setAttribute('type', 'number');
    landInput.setAttribute('id', 'landInput');

    investments.appendChild(landInput);

    let buildingLabel = document.createElement("label");
    buildingLabel.setAttribute("for", "buildingLabel");
    buildingLabel.innerHTML = "Building & Improvements: ";
    
    investments.appendChild(buildingLabel);
    
    let buildingInput = document.createElement("input");
    buildingInput.setAttribute('type', 'number');
    buildingInput.setAttribute('id', 'buildingInput');

    investments.appendChild(buildingInput);

    let equipmentLabel = document.createElement("label");
    equipmentLabel.setAttribute("for", "equipmentLabel");
    equipmentLabel.innerHTML = "Equipment: ";
    
    investments.appendChild(equipmentLabel);
    
    let equipmentInput = document.createElement("input");
    equipmentInput.setAttribute('type', 'number');
    equipmentInput.setAttribute('id', 'equipmentInput');

    investments.appendChild(equipmentInput);

    let tempInvestLabel = document.createElement("label");
    tempInvestLabel.setAttribute("for", "tempInvestLabel");
    tempInvestLabel.innerHTML = "Temporary Investments: ";
    
    investments.appendChild(tempInvestLabel);
    
    let tempInvestInput = document.createElement("input");
    tempInvestInput.setAttribute('type', 'number');
    tempInvestInput.setAttribute('id', 'tempInvestInput');

    investments.appendChild(tempInvestInput);
    
    updateInputs();

    //create method for calculating total investments & printing
    let totalInvestments = document.createElement("h5");
    totalInvestments.setAttribute('id', 'totalInvestments');

    var land = document.getElementById("landInput").value;
    var building = document.getElementById("buildingInput").value;
    var equipment = document.getElementById("equipmentInput").value;
    var tempInvestments = document.getElementById("tempInvestInput").value;
    let investmentValues = land + building + equipment + tempInvestments;

    totalInvestments.innerHTML = "Total Investment Property & Equipment: $" + investmentValues;

    investments.appendChild(totalInvestments);
}

/**
 * addIntangibles function opens the Intangibles section for the user
 * to input values for trade names and goodwill. Once values are
 * inputted, the total is then calculated.
 * 
 * NOTE: each amount inputted is not reflected in totals, thus
 * defeating the entire purpose.
 */

function addIntangibles() {
    //hide the button after being clicked
    let intangiblesButton = document.getElementById("intangible");
    intangiblesButton.style.display = 'none';
    
    //assign the container that will hold intangibles
    const container = document.getElementById("intangibleButt");

    //create the div, set its class, and style properly
    let intangibles = document.createElement("div");
    intangibles.classList.add("intangibleButt");
    intangibles.setAttribute('id', "intangibles");
    intangibles.style.display = 'grid';
    intangibles.style.textAlign = 'left';
    intangibles.style.gridColumnStart = 'col-start';
    intangibles.style.gridColumnEnd = 'col1';
    intangibles.style.justifyContent = 'start';

    //append to the container
    container.appendChild(intangibles);
    
    //labels and text inputs created; each one appended
    let nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "nameLabel");
    nameLabel.innerHTML = "Trade Names: ";
    
    intangibles.appendChild(nameLabel);
    
    let nameInput = document.createElement("input");
    nameInput.setAttribute('type', 'number');
    nameInput.setAttribute('id', 'nameInput');

    intangibles.appendChild(nameInput);

    let goodwillLabel = document.createElement("label");
    goodwillLabel.setAttribute("for", "goodwillLabel");
    goodwillLabel.innerHTML = "Goodwill: ";
    
    intangibles.appendChild(goodwillLabel);
    
    let goodwillInput = document.createElement("input");
    goodwillInput.setAttribute('type', 'number');
    goodwillInput.setAttribute('id', 'goodwillInput');

    intangibles.appendChild(goodwillInput);
    
    updateInputs();
    
    //create method for calculating total intangibles & printing
    let totalIntangibles = document.createElement("h5");
    totalIntangibles.setAttribute('id', 'totalIntangibles');

    var tradeNames = document.getElementById("nameInput").value;
    var goodwill =  document.getElementById("goodwillInput").value;
    let intangibleValues = tradeNames + goodwill;

    totalIntangibles.innerHTML = "Total Intangibles: $" + intangibleValues;

    intangibles.appendChild(totalIntangibles);
}

/**
 * addCurrentL function opens the Current Liabilities section
 * for the user to input values for accounts payable, notes payable,
 * interest payable, wages payable, and accrued expenses. Once 
 * values are inputted, the total is then calculated.
 * 
 * NOTE: each amount inputted is not reflected in totals, thus
 * defeating the entire purpose.
 */

function addCurrentL() {
    //hide the button after being clicked
    let cLButton = document.getElementById("cLiability");
    cLButton.style.display = 'none';
    
    //assign the container that will hold current liabilities
    const container = document.getElementById("cLiabilityButt");

    //create the div, set its class, and style properly
    let currentLiability = document.createElement("div");
    currentLiability.classList.add("cLiabilityButt");
    currentLiability.setAttribute('id', "currentLiabilities");
    currentLiability.style.display = 'grid';
    currentLiability.style.textAlign = 'right';
    currentLiability.style.gridColumnStart = 'col3';
    currentLiability.style.gridColumnEnd = 'col-end';
    currentLiability.style.justifyContent = 'end';

    //append to the container
    container.appendChild(currentLiability);

    //labels and text inputs created; each one appended
    let accPayLabel = document.createElement("label");
    accPayLabel.setAttribute("for", "accPayLabel");
    accPayLabel.innerHTML = "Accounts Payable: ";
    
    currentLiability.appendChild(accPayLabel);
    
    let accPayInput = document.createElement("input");
    accPayInput.setAttribute('type', 'number');
    accPayInput.setAttribute('id', 'accPayInput');

    currentLiability.appendChild(accPayInput);

    let notesPayLabel = document.createElement("label");
    notesPayLabel.setAttribute("for", "notesPayLabel");
    notesPayLabel.innerHTML = "Notes Payable: ";
    
    currentLiability.appendChild(notesPayLabel);
    
    let notesPayInput = document.createElement("input");
    notesPayInput.setAttribute('type', 'number');
    notesPayInput.setAttribute('id', 'notesPayInput');

    currentLiability.appendChild(notesPayInput);

    let interestPayLabel = document.createElement("label");
    interestPayLabel.setAttribute("for", "interestPayLabel");
    interestPayLabel.innerHTML = "Interest Payable: ";
    
    currentLiability.appendChild(interestPayLabel);
    
    let interestPayInput = document.createElement("input");
    interestPayInput.setAttribute('type', 'number');
    interestPayInput.setAttribute('id', 'interestPayInput');

    currentLiability.appendChild(interestPayInput);

    let wagesPayLabel = document.createElement("label");
    wagesPayLabel.setAttribute("for", "wagesPayLabel");
    wagesPayLabel.innerHTML = "Wages Payable: ";
    
    currentLiability.appendChild(wagesPayLabel);
    
    let wagesPayInput = document.createElement("input");
    wagesPayInput.setAttribute('type', 'number');
    wagesPayInput.setAttribute('id', 'wagesPayInput');

    currentLiability.appendChild(wagesPayInput);

    let accruedLabel = document.createElement("label");
    accruedLabel.setAttribute("for", "accruedLabel");
    accruedLabel.innerHTML = "Accrued Expenses: ";
    
    currentLiability.appendChild(accruedLabel);
    
    let accruedInput = document.createElement("input");
    accruedInput.setAttribute('type', 'number');
    accruedInput.setAttribute('id', 'accruedInput');

    currentLiability.appendChild(accruedInput);
    
    updateInputs();

    //create method for calculating total current liabilities & printing
    let totalCL = document.createElement("h5");

    var accountsPay = document.getElementById("accPayInput").value;
    var notesPay = document.getElementById("notesPayInput").value;
    var interestPay = document.getElementById("interestPayInput").value;
    var wagesPay = document.getElementById("wagesPayInput").value;
    var accruedEx = document.getElementById("accruedInput").value;
    let currentLiabilityValues = accountsPay + notesPay + interestPay + wagesPay + accruedEx;
    
    totalCL.innerHTML = "Total Current Liabilities: $" + currentLiabilityValues;

    currentLiability.appendChild(totalCL);
}

/**
 * addLongL function opens the Long-Term Liability section to
 * reveal notes payable and bonds payable, which are then added
 * together to find the total for long-term liabilities
 * 
 * NOTE: each amount inputted is not reflected in totals, thus
 * defeating the entire purpose.
 */

function addLongL() {
    //hide the button after being clicked
    let longLiabilityButton = document.getElementById("lLiability");
    longLiabilityButton.style.display = 'none';
    
    //assign the container that will hold long-term liabilities
    const container = document.getElementById("lLiabilityButt");

    //create the div, set its class, and style properly
    let longLiability = document.createElement("div");
    longLiability.classList.add("lLiabilityButt");
    longLiability.setAttribute('id', "longLiabilities");
    longLiability.style.display = 'grid';
    longLiability.style.textAlign = 'right';
    longLiability.style.gridColumnStart = 'col3';
    longLiability.style.gridColumnEnd = 'col-end';
    longLiability.style.justifyContent = 'end';

    //append to the container
    container.appendChild(longLiability);

    //labels and text inputs created; each one appended
    let notesPayLabel = document.createElement("label");
    notesPayLabel.setAttribute("for", "notesPayLabel");
    notesPayLabel.innerHTML = "Notes Payable: ";
    
    longLiability.appendChild(notesPayLabel);
    
    let notesPayInput = document.createElement("input");
    notesPayInput.setAttribute('type', 'number');
    notesPayInput.setAttribute('id', 'notesPayInput');

    longLiability.appendChild(notesPayInput);

    let bondsPayLabel = document.createElement("label");
    bondsPayLabel.setAttribute("for", "bondsPayLabel");
    bondsPayLabel.innerHTML = "Bonds Payable: ";
    
    longLiability.appendChild(bondsPayLabel);
    
    let bondsPayInput = document.createElement("input");
    bondsPayInput.setAttribute('type', 'number');
    bondsPayInput.setAttribute('id', 'bondsPayInput');

    longLiability.appendChild(bondsPayInput);
    
    updateInputs();

    //create method for calculating total long-term liabilities & printing
    let totalLongLiability = document.createElement("h5");

    var notesPay = document.getElementById("notesPayInput").value;
    var bondsPay = document.getElementById("bondsPayInput").value;

    let longTermValues = notesPay + bondsPay;
    totalLongLiability.innerHTML = "Total Long-Term Liabilities: $" + longTermValues;

    longLiability.appendChild(totalLongLiability);
}

/**
 * calculatePosition function is used to calculate and print the total position
 * which is Assets-Liabilities.
 * 
 * NOTE: current clicks cause error due to some variables being defined
 * in different functions.
 */

function calculatePosition() {
    let totalCA = 0;
    let totalInvestments = 0;
    let totalIntangibles = 0;
    let totalCL = 0;
    let totalLongLiability = 0;

    const container = document.getElementById("Positions");

    let position = document.createElement("div");
    position.classList.add("positionButt");
    position.setAttribute('id', "position");
    position.style.display = 'grid';
    position.style.textAlign = 'left';
    position.style.gridColumnStart = 'col2';
    position.style.gridColumnEnd = 'col3';
    position.style.justifyContent = 'start';

    container.appendChild(position);

    const totalA = document.getElementById('totalAsset');
     
    let totalAssets = document.createElement("h4");
    totalAssets.setAttribute('id', 'totalAssets');
    totalAssets.innerHTML = totalCA + totalInvestments + totalIntangibles;

    totalA.appendChild(totalAssets);
    

    const totalL = document.getElementById('totalLiability');

    let totalLiability = document.createElement("h4");
    totalLiability.setAttribute('id', 'totalLiabilities');
    totalLiability.innerHTML = totalCL + totalLongLiability;

    totalL.appendChild(totalLiability);

    const finalTotal = document.getElementById('grandTotal');

    let totalPosition = document.createElement("h4")
    totalPosition.setAttribute('id', 'totalPosition'); 
    totalPosition.innerHTML = totalAssets - totalLiability;

    finalTotal.appendChild(totalPosition);

    position.appendChild(totalA);
    position.appendChild(totalL);
    position.appendChild(totalPosition);
}
