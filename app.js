//lower case
var personName = "Zahoor";
console.log("lowercase:", personName.toLowerCase());
// uppercase
console.log("Uppercase:", personName.toUpperCase());
// Title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
