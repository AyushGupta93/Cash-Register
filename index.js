const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const message = document.querySelector("#error-message");
const numberOfNotes = document.querySelectorAll(".numberofnotes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1]; //number of notes available

const checkButton = checkBtn.addEventListener("click", function validateAmount() {
    hideMessage();
    if (billAmount.value > 0) {
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            const returnAmount = cashGiven.value - billAmount.value;
            calculateAmount(returnAmount);
        } else {
            showMessage("Do you wanna wash plates?");
        }
    } else {
        showMessage("Invalid Amount")
    }
});


function calculateAmount(returnAmount) {
    for (let i = 0; i < availableNotes.length; i++) {
        const notesGiven = Math.trunc(returnAmount / availableNotes[i]);
        returnAmount = returnAmount % availableNotes[i];
        numberOfNotes[i].innerText = notesGiven;
    }
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}