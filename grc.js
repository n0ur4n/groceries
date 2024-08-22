const prompt = require("prompt-sync")();
// const file = require ("fs-sync")();
let groceries=["coffee","tea","sugar"];
let item=prompt("Enter item ");
groceries.push(item);
console.log(groceries);