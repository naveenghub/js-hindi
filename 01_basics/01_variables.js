const accountId = 144553
let accountEmail = "naveenbkammar@gmail.com"
var accountPassWord = "12345"
accoutCity = "Bangalore"
let accountState;

// accountId = 2 not aalowed to add different value to avariable when const is used (TypeError: Assignment to constant variable.)
accountEmail = "hc@hc.com"
accountPassWord = "54321"
accoutCity = "Navalgund"
console.log(accountId);

console.table([accountId, accountEmail, accountPassWord, accoutCity, accountState]) // this will print all variables in a table format.
/* 
> To run a .js file, in terminal type command as --> $ node fileName.js
> when the above command is run the variables declared second time are printed.
> Prefer not to use var because of issue in block scope and functional scope.
> when a variable value is not defined it prints as undefined
*/
