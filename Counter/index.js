console.log(`Hello`);
console.log(`World`)

//Counter Program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
    console.log("Increase Btn was pressed!");
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
    console.log("Decrease Btn was pressed!");
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
    console.log("Reset Btn was pressed!");
}