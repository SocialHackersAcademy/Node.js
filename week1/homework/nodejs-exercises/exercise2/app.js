'use strict'

const leftpad = require('./andre.js'); 

let numbers = ["12", "846", "2", "1236"];

numbers.forEach(function(number){
    console.log(leftpad(number, 8 , "_"));
});

