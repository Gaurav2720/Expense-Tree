let balance = 24500;
let income = 40000;
let expense = 15500;

const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const transactionList = document.getElementById("transaction-list");
const addBtn = document.querySelector(".add-btn");

function updateUI() {
    balanceEl.textContent = `₹ ${balance}`;
    incomeEl.textContent = `₹ ${income}`;
    expenseEl.textContent = `₹ ${expense}`;
}

function addTransaction(name, amount, type) {
    const div = document.createElement("div");
    div.classList.add("transaction", type);

    div.innerHTML = `
        <span>${name}</span>
        <span>${type === "income" ? "+" : "-"} ₹${amount}</span>
    `;

    transactionList.prepend(div);
}

addBtn.addEventListener("click", () => {
    const name = prompt("Enter expense/income name:");
    const amount = Number(prompt("Enter amount:"));
    const type = prompt("Type income or expense?").toLowerCase();

    if (!name || !amount || (type !== "income" && type !== "expense")) {
        alert("Invalid input!");
        return;
    }

    if (type === "income") {
        income += amount;
        balance += amount;
    } else {
        expense += amount;
        balance -= amount;
    }

    addTransaction(name, amount, type);
    updateUI();
});

updateUI();
