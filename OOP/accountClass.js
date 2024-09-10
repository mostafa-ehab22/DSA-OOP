class Account {
  //! Private fields (properties) MUST be declared directly into class
  //! Not inside constructor/methods
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Congrats on creating your account, ${this.owner}!`);
    console.log(this);
  }

  // Public Interface (API)
  deposit(value) {
    //! Accessible inside class only
    this.#movements.push(value);
  }

  withdraw(value) {
    this.deposit(-value);
  }

  //! Private method => Can ONLY be accessed internally
  #approveLoan(value) {
    return value < 1_000_000 ? true : false;
  }

  requestLoan(value) {
    //! Accessible inside class only
    if (this.#approveLoan(value)) {
      this.deposit(value);

      console.log("\nLoan Approved 😁");
    }
  }

  //! Allows access only but not overriding
  //! Movements is ONLY accessible through getMovements method
  getMovements() {
    return this.#movements;
  }

  checkPin(inputPin) {
    if (this.#pin === inputPin) console.log("Correct Pin 👌🏼");
    else console.log("Incorrect PIN! Try Again...");
  }
}

const mostafa = new Account("Mostafa", "EUR", 2222);

mostafa.deposit(200);
console.log("\nDepositing\n", mostafa);

mostafa.withdraw(150);
console.log("\nWithdrawing\n", mostafa);

//! mostafa.approveLoan(500);   SYNTAX ERROR => Private method

mostafa.requestLoan(500);
console.log(mostafa);

console.log("\n⌛ Checking Pin ⌛");
mostafa.checkPin(2223);
