/*  Module 7: Working with external libraries
    Lab Start */

/*  TODO Add the import statement. */
import * as LoanPayments from './module07_loan-programs.js';
/*  TODO Update the function calls. */
let interestOnlyPayment = LoanPayments.calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5});
let conventionalLoanPayment = LoanPayments.calculateConventionalLoanPayment({principle: 30000, interestRate: 5, months: 180});
console.log(interestOnlyPayment);         //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalLoanPayment);     //* Returns "The conventional loan payment is 237.24"
