// Ex 1
 installation completed
// Ex 2
 let person_Name: string= "ERIC";
 console.log(`hello ${person_Name},would you like to learn some python today?`);

// // Ex 3
// //lower case
 let personName: string= "Zahoor"
console.log("lowercase:", personName.toLowerCase());

// // uppercase
 console.log("Uppercase:", personName.toUpperCase())

// // Title case
 console.log("titlecase:",personName.replace ( /\bw/g,c => c.toUpperCase()));

// // Ex 4
 let qoute: string= "A person who never made a mistake never tried anything new.";
 let author: string= " Albert Einstein"
console.log(`${author} once said,"${qoute}`);

// //Ex 5
 let quote: string="A person who never made a mistake never tried anything new";
 let famous_person="Allbert Einstein";

let message =`${famous_person} once said,${quote}`;
 console.log(message);

// // Ex 6
let PersonName: string = `\n\t ZAHOOR FATIMA \t\n`;
 console.log(PersonName);
 let stripped: string = personName.trim();
 console.log(stripped);

// // Ex 7 & 8
 console.log(5+3)
 console.log(11-3)
 console.log(4*2)
 console.log(16/2)

// // EX 9
 let favouriteNumber: number = 3;
 console.log(`My favourite number is ${favouriteNumber}`);

// // EX 10
// // my name is ZAHOOR FATIMA
// //Date: 17/02/2024
// // this program will run simple code just like (hello world)
 console.log('hello world ' );
// //ex:10 part 2
// // my name is ZAHOOR FATIMA
// //Date: 17/02/2024
// // this program will do multiplication
 console.log(4*2);

// // EX 11
let bestfriends:string[] = [`Qira`, `fakhra`, `husna`, `javeria`];
 for(let i=0; i<bestfriends.length; i++){
 console.log(bestfriends[i]);
 }


// // Ex 12
 let bestfriends:string[] = [`Qira`, `fakhra`, `husna`, `javeria`];
// let message:string = `You are invited for a farewell party on wednesday `;
for(let i=0; i<bestfriends.length; i++){
  console.log(message+bestfriends[i]);
 }

// // EX 13
 let transportation: string[] = [`car`,`bike` ,`bus`,`helicoptor`];
 for(let i=0; i<transportation.length; i++){
  console.log(`I would like to own a ` +  transportation[i]);
 }

// // Ex 14
 let guest_list: string[] = [`asifa`, `zahoor`,`Qira`,`asim`];
 for(let i=0; i<guest_list.length; i++){
  console.log(`Dear`+ guest_list[i] + `\n\n You are invited for a dinner tomorrow.\n\n Thankyou. `);
  }




// //Ex 15
 let not_coming:string = `asifa`;
let new_guest: string = `urooj`;
 guest_list[0] = new_guest;
for(let i=0; i<guest_list.length; i++){
console.log(`Dear`+ guest_list[i] + `\n\n You are invited for a dinner tomorrow.\n\n Thankyou. `);
 console.log(`Miss ${not_coming} is not coming for dinner tomorrow.`);
 }


 // Ex 16
 guest_list.unshift("amna");
 guest_list.splice(guest_list.length / 2, 2, "Noor");
 guest_list.push("hiba");
 for (var i = 0; i < guest_list.length; i++) {
 console.log("Dear" + guest_list[i] + "\n\n You are invited for a dinner tomorrow.\n\n Thankyou. ");
 }
console.log('we have found a bigger dinner table so we are inviting more guests');

// //Ex 17
 while(guest_list.length>2){
 const removedGuest = guest_list.pop();
 console.log( `sorry, ${removedGuest}, you're no longer invited to dinner.`);
 }
// // // printing invitation to the remaining two guests
 guest_list.forEach((guest) =>{
console.log( `Dear ${guest}, you're still invited to dinner.`);
});
// // //  // Removing the last two names form the list
 guest_list.pop();
 guest_list. pop();
//  printing the final list
console.log("final guest list:", guest_list);

// EX 18
let placeToVisit: string[] = ["Tokyo", "Pakistan","china","japan",];
console.log("originl order:", placeToVisit);
console.log("Alphabetical order:",[... placeToVisit].sort());
console.log("original order after sorting:",placeToVisit);
console.log("Reverse  alphabetical order:", [...placeToVisit].sort().reverse());
console.log("original order after reverse sorting:",placeToVisit);
// reverse the order
placeToVisit.reverse();
console.log("Reversed order:",placeToVisit);
// reverse the list to back original
placeToVisit.reverse();
console.log("Back to original order:",placeToVisit);
// sort the array in alphabetical order
placeToVisit.sort();
console.log("Sorted in alphabetical order:", placeToVisit);
// // sort the array in reverse alphabetical order
placeToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:",placeToVisit);

// // Ex 19
let invitations : string [] = ["amna", "urooj"]
let count_invitations : number = invitations.length
console.log(`${count_invitations} people will come to the dinner`)

// // Ex 20
let country: string [] = ["pakistan", "Turkey","NewYork", " japan", ];
console.log("list of country:");
console.log(country);

// // Ex 21
let person: {name: string, fname: string , age: number} = {name: "zahoor fatima", fname: "female" , age: 16};
console.log(person);

// Ex 22
const days : string [] = ["sunday","monday",  "tuesday" ,"wednesday"  ,"thursday"  , "friday" , "saturday"]
// console.log(days{7})
console.log(days[6])

// Ex 23
let car = "subaru";

console.log("is car == 'subaru'? predict true" )
console.log (car == 'subaru')

console.log("is car !='honda city'? predict true")
console.log(car != 'honda city')

console.log ("is car == 'Subaru'? predict false")
console.log(car == 'Subaru')

console .log("is car == 'SUBARA'? predict false")
console.log ( car == 'SUBARU')

console.log("is car.length == 6? predict true")
console.log(car.length == 6)

console.log("is car.length == 10? predict true")
console.log(car.length == 10)

console.log("is 10 > 45 ? predict fasle")
console.log(10 > 45)

console.log("is 3 <= 2 ? predict fasle")
console.log(3 <= 2)

console.log("is 72 >= 83 ? predict fasle")
console.log(72 <= 83)

console.log("is 86 <= 98 ? predict fasle")
console.log(86 <= 98)

// Ex 24
let name_1 : string = " zahoor"
let name_2 : string = " zahoor fatima"
let name_3 : string = " Miss zahoor fatima"

if ( name_1 == name_3){
  console.log("name are equal")
}else {
  console.log("name are not equal")
}

if (name_1 != name_2){
  console.log("name are equal")
}else {
  console.log("names are not equal")
}

if (name_1 != name_3){
  console.log("name are equal")
}

let age_1 : number = 18
let age_2 : number = 20

if(age_1 == 18) {
  console.log("eligible for vote")
}

if(age_1 == 20) {
  console.log("eligible for vote in older category")
}

if(age_1 <= age_2){ //less
  console.log("younger")
}

 if(age_2 <= age_1){ //greater
  console.log("older")
}

if (age_1 == 18 && age_2 == 20){
  console.log("person is eligible for vote")
}

if (age_1 == 18 ||  age_2 !== 20){
  console.log("person is eligible for vote")
}

let country : string [] = ["pakistan","canada","korea","china"]
// if ( country.includes("pakistan")){
// console.log("pakistan is in country list")
// }

if (!country. includes ("america")){
  console.log("america is not inculde in an array")
}

// Ex 25

 let alien_color : string = "green"

 if (alien_color == "green")
 console.log( "you earn 5 points")

let alien_color : string = "red"

 if (alien_color == "red")
 console.log( "no output")

// Ex 26
 let alien_color : string = "green"
if (alien_color == "green") {
console.log( "player just earned 5 points for shooting the alien")
  } else{
  console.log("player just earned 10 points")
 }
  
  let alien_color : string = "red"

  if (alien_color == "red") {
  console.log( "player just earned 5 points for shooting the alien")
  } else{
  console.log("player just earned 10 points")
  }

// Ex 27
let alien_color : string = "red"
 if (alien_color == "green") {
 console.log( "5 points")
  } else if(alien_color == "yellow"){ 
   console.log("10 points")
}else{
  console.log ("15 points")
}


// Ex 28  .................... 2,4,13,20,65,older
let age : number = 17

if ( age <2) {
  console.log("you are a baby")
} else if (age< 4){
  console.log("you are a toddler")
} else if (age< 13){
  console.log("you are a kid")
}else if (age< 20 ){
  console.log("you are a teenager")
}else if (age< 65 ){
  console.log("you are a  adult")
} else {
  console.log("you are older")
}

//  Ex 29 
let favourite_fruits : string [] = ["mango", "pineapple", "orange","kivi", "apple"]

if ( favourite_fruits.includes("mango")) {
  console.log("mango")
}

if ( favourite_fruits.includes("kivi")) {
  console.log("You really like bananas")
}

if ( favourite_fruits.includes("pineapple")) {
  console.log("pineapple")
}

if ( favourite_fruits.includes("apple")) {
  console.log("You really like bananas")
}

if ( favourite_fruits.includes("orange")) {
  console.log("orange")
}

// //Ex 30
let users : string [] = ["admin", "eric", "Qira", "wajid", "imran khan"]

for(let user of users ) {
  if( user == "admin") {
    console.log("Hello admin, would you like to see a status report?")
  } else{
    console.log(` Hello ${user}, thank you for logging in again`)
  }
}

// // Ex 31
let users : string [] = ["eric", "Qira", "wajid", "imran khan","admin"]

if(users.length === 0) {
  console.log("We need to find some users!")
} else {
  for (let user of users) {
    if (user === "admin"){
      console.log("Hello admin, would you like to see a status report?")
    } else{
      console.log(`Hello ${user}, thank you for logging in again `)
    }
  }
}

users = []
if (users.length === 0) {
  console.log ("we need to find some users!")
}


// // Ex 32
let current_user : string [] = ["admin", "eric", "Qira", "wajid", "imran khan"]
let new_users : string [] = ["admin", "eric" , "Asim", "Noor", "Zahoor"]

let current_user_lower : string [] =current_user.map(user => user.toLowerCase())


for(let new_user of new_users) {
  if (current_user_lower.includes(new_user.toLowerCase())) {
    console.log(`Sorry ${new_user}, that name is taken`)
  } else {
    console.log(`Yes ${new_user}, is still in avaliable list`)
  }
}


// // Ex 33
let numbers : number [] =[1,2,3,4,5,6,7,8,9]

for(let number of numbers) {

  if (number === 1) {
  console.log (`${number}st`) //1st
  } else if (number === 2){
    console.log (`${number}nd`) // 2nd

  }else if (number === 3) {
    console.log (`${number}rd`) // 3rd

  } else{
    console.log (`${number}th`) // 4th , 5th, 6th .....
  }
}


//  Ex 34
let favourite_pizza : string [] = ["chicken", "fajita", "creamy tikka"]

for(let pizza of favourite_pizza) {
  console.log(pizza)
}

console.log ("\n")

for (let pizza of favourite_pizza){
  console.log(`I really like ${pizza} pizza!`)
}

console.log("\n I really love pizza!")

// // Ex 35
let animals : string [] = ["dog", "lion", "cheeta"]

for (let animal of animals) {
  console.log(animal)
}
console.log ("\n")

for(let animal of animals) {
  console.log (`A ${animal} has a tail`)
}

console.log("\n all of these are great animals but i love dogs more")

// // EX 36

function makeShirt(size:string, text: string): void {
  console.log(`you order a ${size} shirt that says ${text}`)
}

makeShirt('large','"i love typescript"')
makeShirt('medium', '"i need a big shirt"')

// // Ex 37

function makeShirt(size: string = 'large', text: string = 'I love typescript'): void {
  console.log (`you have order a ${size}, shirt that says ${text}`)
}

// makeShirt();
// makeShirt('medium')

//different message
makeShirt('small', 'I need a big shirt to wear')

// // Ex 38
function describe_city(city: string, country: string = 'pakistan'): void {
  console.log(`${city} is in ${country}`)
}


describe_city('Karachi') // default sentence
describe_city(' france' , 'Newyork')
describe_city('lahore', 'punjab')

// // Ex 39

function citycountry(city: string, country: string): string {
 return `${city}, ${country}`
}

let c1 = citycountry('lahore' , 'pakistan')
let c2 = citycountry('tokyo' , 'japan')
let c3 = citycountry('paris', 'france')

console.log(c1)
console.log(c2)
console.log(c3)

// // Ex 40

function makeAlbum (artist: string, title: string): { artist: string; title: string} {
  const dictionaries ={
    artist: artist.charAt(0).toUpperCase() + artist.slice(1),
    title: title.charAt(0).toLowerCase()+ title.slice(1)
  };
  return dictionaries;
}

let album = makeAlbum("ali", "light")
console.log(album)

album = makeAlbum("bilal", "red wave")
console.log(album)

album = makeAlbum("asim", "seenbreez")
console.log(album)

// // Ex 41

function show_magicians(magicians: string[]): void {

  for (const magician of magicians) {
     console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
  }
}

const magician: string[] = ["ali", "bilal", "asim",];
show_magicians(magician)

//  //Ex 42

function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
     magicians[i] = magicians[i] + ' the great'

  }
}

const magicians2: string[] = ["Wajid", "Qira", "khan"];
make_great(magicians2)
show_magicians(magicians2)


// // Ex 43

function make_great2(magicians: string[]): string[] {
  const greatMagicians: string[] = [];
  for (let i = 0; i < magicians.length; i++) {
     greatMagicians.push(magicians[i] + ' the Great');
  }
  return greatMagicians;
}

const magicians3: string[] = ["Wajid", "Qira", "khan"];

///////////////////////////////////////////////////////////////////////////////////////////

const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);


// // Ex 44

function sandwich(...items: string[]): void {
  console.log("Sandwich order:")

  for (let i = 0; i < items.length; i++) {
      console.log(`- ${items[i]}`)
  }
}

console.log("enjoy your sandwich Zahoor fatima")


sandwich('chicken', 'tomato', ' onion')
sandwich('cheese','ketchup','beef')
sandwich('smoked chicken', 'mayo', 'cheddar cheese')


// //  Ex 45

type car = {
  manufacture: string
  model: string
  [key: string]: any;
}

function createcar(manufacture: string, model: string, optional: Record<string, any>): car { 
  return{
    manufacture,
    model,
    ...optional
  }
}

const mycar: car = createcar("toyota", "corolla", {color: "balck" , year :"2024"})
console.log(mycar)

// ///////////////////////////////////////////////////////////////////////////////////////////////////