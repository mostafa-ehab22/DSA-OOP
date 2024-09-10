class Account {
  //TODO: Fields (properties) MUST be declared directly into class => Not inside constructor/methods
  //TODO: Available on instances => Not on the prototype itself

  //! Private fields
  #movements = [];
  #pin;

  /*
   //*    Public fields 
  ////?   locale = navigator.language;     (Navigator is only available in browser environment)
  */

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Congrats on creating your account, ${this.owner}!`);
    console.log("From Account Class:", this);
  }

  // Public Interface (API)
  deposit(value) {
    //! Accessible inside class only
    this.#movements.push(value);

    return this; //? Makes deposit method chainable
  }

  withdraw(value) {
    this.deposit(-value);

    return this;
  }

  //! Private method => Can ONLY be accessed internally
  #approveLoan(value) {
    return value < 1_000_000 ? true : false;
  }

  requestLoan(value) {
    //! Accessible inside class only
    if (this.#approveLoan(value)) {
      this.deposit(value);

      console.log("Loan Approved 😁");

      return this;
    }
  }

  //! Allows access only but not overriding
  //! Movements is ONLY accessible through getMovements method
  getMovements() {
    console.log(this.#movements);
  }

  checkPin(inputPin) {
    if (this.#pin === inputPin) console.log("Correct Pin 👌🏼");
    else console.log("Incorrect PIN! Try Again...");
  }

  //! On class ONLY (Utility functions)
  static goodDay() {
    console.log("\nHave a great day, Goodbye! 👋🏼");
  }
}

class SavingsAccount extends Account {
  #amount;

  constructor(owner, currency, pin, amount, interest) {
    super(owner, currency, pin);

    this.#amount = amount;
    this.interest = interest;

    console.log("From SavingsAccount Class:", this);
  }
  calcInterest() {
    const interest = this.#amount * this.interest;
    const formattedInterest = new Intl.NumberFormat().format(interest);

    console.log(`Expected Interest: ${formattedInterest} ${this.currency}`);
  }
}

const mostafa = new Account("Mostafa", "EUR", 2222);

mostafa.deposit(200);
console.log("\n=> Depositing");
mostafa.getMovements();

mostafa.withdraw(150);
console.log("\n=> Withdrawing");
mostafa.getMovements();

//! mostafa.#approveLoan(500);   SYNTAX ERROR => Private method
console.log("\n=> REQUESTING LOAN");
mostafa.requestLoan(500);
mostafa.getMovements();

console.log("\n=> Checking Pin");
mostafa.checkPin(2222);

//! mostafa.goodDay();    TypeError => Static functions not available on instances
Account.goodDay();

//! Chaining methods
console.log("\n=> CHAINING METHODS");
mostafa.deposit(500).deposit(500).withdraw(200).requestLoan(3000);
mostafa.getMovements();

//! Inheritance
console.log("\n=> INHERITANCE");
const savingsDaniel = new SavingsAccount("Daniel", "EUR", 2222, 1_000_000, 0.3);

savingsDaniel.calcInterest();
