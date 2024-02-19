//lower case
let personName: string= "Zahoor"
console.log("lowercase:", personName.toLowerCase());

// uppercase
console.log("Uppercase:", personName.toUpperCase())

// Title case
console.log("titlecase:",personName.replace ( /\bw/g,c => c.toUpperCase()));