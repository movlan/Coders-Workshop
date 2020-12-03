#!/usr/bin/env node

const disemvowel = (str) => str.toLowerCase().replace(/[aeiou]/g, "");

console.log(disemvowel('CodeSmith')); // 'CdSmth'
console.log(disemvowel('BANANA')); // 'BNN'
console.log(disemvowel('hello world')); // 'hll wrld'
