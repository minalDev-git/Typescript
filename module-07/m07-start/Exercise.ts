//Exercise 1
// In this exercise, you'll organize the code in a project using modules. The project contains three TypeScript files:

// module07_main.ts - Contains the main code of the application.

// module07_loans.ts - Contains two interfaces, Loan and ConventionalLoan.

// module07_loan-programs.ts - Contains three functions:

// calculateInterestOnlyLoanPayment, which calculates the payment for an interest only loan.
// calculateConventionalLoanPayment, which calculates the payment for a conventional loan.
// calculateInterestRate, a worker function that calculates the monthly interest rate of the loan.
// The calculateInterestOnlyLoanPayment and calculateConventionalLoanPayment functions accept principle and interestRate parameters. The difference between them is that the calculateConventionalLoanPayment function accepts a third property, months that the calculateInterestOnlyLoanPayment function does not.

//Open the file module07_loans.ts and add the export keyword on the interface declarations.
//Open the file module07_loan-programs.ts.
//At the top of the file, add an import statement that imports the Loan and ConventionalLoan interfaces from module07_loans.ts. Import both interfaces using one import statement and assign them to a variable called Loans.
//import * as Loans from './module07_loans.js';
//Locate TODO Update the calculateInterestOnlyLoanPayment function.
//Add the export keyword to the calculateInterestOnlyLoanPayment function declaration.
//Update the type of the function parameter loanTerms to the interface Loans.Loan.
// export function calculateInterestOnlyLoanPayment(loanTerms: Loans.Loan): string {
//     let payment: number;
//     payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
//     return 'The interest only loan payment is ' + payment.toFixed(2);
// }
// Locate TODO Update the calculateConventionalLoanPayment function.
// Add the export keyword to the calculateConventionalLoanPayment function declaration.
// Update the type of the function parameter loanTerms to the interface Loans.ConventionalLoan.
// export function calculateConventionalLoanPayment(loanTerms: Loans.ConventionalLoan): string {
//     let interest: number = calculateInterestRate(loanTerms.interestRate);
//     let payment: number;
//     payment = loanTerms.principle * interest / (1 - (Math.pow(1/(1 + interest), loanTerms.months)));
//     return 'The conventional loan payment is ' + payment.toFixed(2);
// }

//Open the file module07_main.ts.
// Locate TODO Add the import statement.
// Add an import statement that imports the interestOnlyLoan and conventionalLoan functions from module07_loan-programs.ts. Assign the functions to a variable called LoanPrograms.
//import * as LoanPrograms from './module07_loan-programs.js';
// Locate TODO Update the function calls.
// In the two variable declarations, update the function calls to reference the LoanPrograms variable from the import statement.

//Save the files.
//At the command prompt, run the tsc command using the --module commonjs option to compile module07_main.ts.
//tsc --module commonjs module07_main.ts
//Test your work in node by running the module07_main.js file.
//node module07_main.js