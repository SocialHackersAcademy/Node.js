const Handlebars = require('handlebars');

const subjects = ["shark", "popcorn", "poison", "fork", "cherry", "toothbrush", "cannon"];
const punchlines = ["watch movie with", "spread some love", "put on cake", "clean toilets", "go to the moon", "achieve world piece", "help people learn programing"];

const data = {
  "subject" : subjects[Math.floor(Math.random()*7)],
  "puncline" : punchlines[Math.floor(Math.random()*7)]
}

const source = "<p> {{subject}} is great to {{puncline}}. </p>";
const template = Handlebars.compile(source);
const result = template(data);
console.log(result);