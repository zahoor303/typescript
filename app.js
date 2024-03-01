// Ex 1
//  installation completed
// Ex 2
var person_Name = "ERIC";
console.log("hello ".concat(person_Name, ",would you like to learn some python today?"));
// // Ex 3
// //lower case
var personName = "Zahoor";
console.log("lowercase:", personName.toLowerCase());
// // uppercase
console.log("Uppercase:", personName.toUpperCase());
// // Title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
// // Ex 4
var qoute = "A person who never made a mistake never tried anything new.";
var author = " Albert Einstein";
console.log("".concat(author, " once said,\"").concat(qoute));
// //Ex 5
var quote = "A person who never made a mistake never tried anything new";
var famous_person = "Allbert Einstein";
var message = "".concat(famous_person, " once said,").concat(quote);
console.log(message);
// // Ex 6
var PersonName = "\n\t ZAHOOR FATIMA \t\n";
console.log(PersonName);
var stripped = personName.trim();
console.log(stripped);
// // Ex 7 & 8
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
// // EX 9
var favouriteNumber = 3;
console.log("My favourite number is ".concat(favouriteNumber));
// // EX 10
// // my name is ZAHOOR FATIMA
// //Date: 17/02/2024
// // this program will run simple code just like (hello world)
console.log('hello world ');
// //ex:10 part 2
// // my name is ZAHOOR FATIMA
// //Date: 17/02/2024
// // this program will do multiplication
console.log(4 * 2);
// // EX 11
var bestfriends = ["Qira", "fakhra", "husna", "javeria"];
for (var i_1 = 0; i_1 < bestfriends.length; i_1++) {
    console.log(bestfriends[i_1]);
}
// // Ex 12
//  let bestfriends:string[] = [`Qira`, `fakhra`, `husna`, `javeria`];
// // let message:string = `You are invited for a farewell party on wednesday `;
// for(let i=0; i<bestfriends.length; i++){
//   console.log(message+bestfriends[i]);
//  }
// // EX 13
var transportation = ["car", "bike", "bus", "helicoptor"];
for (var i_2 = 0; i_2 < transportation.length; i_2++) {
    console.log("I would like to own a " + transportation[i_2]);
}
// // Ex 14
var guest_list = ["asifa", "zahoor", "Qira", "asim"];
for (var i_3 = 0; i_3 < guest_list.length; i_3++) {
    console.log("Dear" + guest_list[i_3] + "\n\n You are invited for a dinner tomorrow.\n\n Thankyou. ");
}
// //Ex 15
var not_coming = "asifa";
var new_guest = "urooj";
guest_list[0] = new_guest;
for (var i_4 = 0; i_4 < guest_list.length; i_4++) {
    console.log("Dear" + guest_list[i_4] + "\n\n You are invited for a dinner tomorrow.\n\n Thankyou. ");
    console.log("Miss ".concat(not_coming, " is not coming for dinner tomorrow."));
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
while (guest_list.length > 2) {
    var removedGuest = guest_list.pop();
    console.log("sorry, ".concat(removedGuest, ", you're no longer invited to dinner."));
}
// // // printing invitation to the remaining two guests
guest_list.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
// // //  // Removing the last two names form the list
guest_list.pop();
guest_list.pop();
//  printing the final list
console.log("final guest list:", guest_list);
// EX 18
var placeToVisit = ["Tokyo", "Pakistan", "china", "japan",];
console.log("originl order:", placeToVisit);
console.log("Alphabetical order:", __spreadArray([], placeToVisit, true).sort());
console.log("original order after sorting:", placeToVisit);
console.log("Reverse  alphabetical order:", __spreadArray([], placeToVisit, true).sort().reverse());
console.log("original order after reverse sorting:", placeToVisit);
// reverse the order
placeToVisit.reverse();
console.log("Reversed order:", placeToVisit);
// reverse the list to back original
placeToVisit.reverse();
console.log("Back to original order:", placeToVisit);
// sort the array in alphabetical order
placeToVisit.sort();
console.log("Sorted in alphabetical order:", placeToVisit);
// // sort the array in reverse alphabetical order
placeToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placeToVisit);
// // Ex 19
var invitations = ["amna", "urooj"];
var count_invitations = invitations.length;
console.log("".concat(count_invitations, " people will come to the dinner"));
// // Ex 20
// let country: string [] = ["pakistan", "Turkey","NewYork", " japan", ];
// console.log("list of country:");
// console.log(country);
// // Ex 21
var person = { name: "zahoor fatima", fname: "female", age: 16 };
console.log(person);
// Ex 22
var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// console.log(days{7})
console.log(days[6]);
// Ex 23
var car = "subaru";
console.log("is car == 'subaru'? predict true");
console.log(car == 'subaru');
console.log("is car !='honda city'? predict true");
console.log(car != 'honda city');
console.log("is car == 'Subaru'? predict false");
console.log(car == 'Subaru');
console.log("is car == 'SUBARA'? predict false");
console.log(car == 'SUBARU');
console.log("is car.length == 6? predict true");
console.log(car.length == 6);
console.log("is car.length == 10? predict true");
console.log(car.length == 10);
console.log("is 10 > 45 ? predict fasle");
console.log(10 > 45);
console.log("is 3 <= 2 ? predict fasle");
console.log(3 <= 2);
console.log("is 72 >= 83 ? predict fasle");
console.log(72 <= 83);
console.log("is 86 <= 98 ? predict fasle");
console.log(86 <= 98);
// Ex 24
var name_1 = " zahoor";
var name_2 = " zahoor fatima";
var name_3 = " Miss zahoor fatima";
if (name_1 == name_3) {
    console.log("name are equal");
}
else {
    console.log("name are not equal");
}
if (name_1 != name_2) {
    console.log("name are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 != name_3) {
    console.log("name are equal");
}
var age_1 = 18;
var age_2 = 20;
if (age_1 == 18) {
    console.log("eligible for vote");
}
if (age_1 == 20) {
    console.log("eligible for vote in older category");
}
if (age_1 <= age_2) { //less
    console.log("younger");
}
if (age_2 <= age_1) { //greater
    console.log("older");
}
if (age_1 == 18 && age_2 == 20) {
    console.log("person is eligible for vote");
}
if (age_1 == 18 || age_2 !== 20) {
    console.log("person is eligible for vote");
}
var country = ["pakistan", "canada", "korea", "china"];
// if ( country.includes("pakistan")){
// console.log("pakistan is in country list")
// }
if (!country.includes("america")) {
    console.log("america is not inculde in an array");
}
// Ex 25
//  let alien_color : string = "green"
//  if (alien_color == "green")
//  console.log( "you earn 5 points")
// let alien_color : string = "red"
//  if (alien_color == "red")
//  console.log( "no output")
// Ex 26
//  let alien_color : string = "green"
// if (alien_color == "green") {
// console.log( "player just earned 5 points for shooting the alien")
//   } else{
//   console.log("player just earned 10 points")
//  }
//   let alien_color : string = "red"
//   if (alien_color == "red") {
//   console.log( "player just earned 5 points for shooting the alien")
//   } else{
//   console.log("player just earned 10 points")
//   }
// Ex 27
var alien_color = "red";
if (alien_color == "green") {
    console.log("5 points");
}
else if (alien_color == "yellow") {
    console.log("10 points");
}
else {
    console.log("15 points");
}
// Ex 28  .................... 2,4,13,20,65,older
var age = 17;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a  adult");
}
else {
    console.log("you are older");
}
//  Ex 29 
var favourite_fruits = ["mango", "pineapple", "orange", "kivi", "apple"];
if (favourite_fruits.includes("mango")) {
    console.log("mango");
}
if (favourite_fruits.includes("kivi")) {
    console.log("You really like bananas");
}
if (favourite_fruits.includes("pineapple")) {
    console.log("pineapple");
}
if (favourite_fruits.includes("apple")) {
    console.log("You really like bananas");
}
if (favourite_fruits.includes("orange")) {
    console.log("orange");
}
// //Ex 30
// let users : string [] = ["admin", "eric", "Qira", "wajid", "imran khan"]
// for(let user of users ) {
//   if( user == "admin") {
//     console.log("Hello admin, would you like to see a status report?")
//   } else{
//     console.log(` Hello ${user}, thank you for logging in again`)
//   }
// }
// // Ex 31
var users = ["eric", "Qira", "wajid", "imran khan", "admin"];
// if(users.length === 0) {
//   console.log("We need to find some users!")
// } else {
//   for (let user of users) {
//     if (user === "admin"){
//       console.log("Hello admin, would you like to see a status report?")
//     } else{
//       console.log(`Hello ${user}, thank you for logging in again `)
//     }
//   }
// }
// users = []
// if (users.length === 0) {
//   console.log ("we need to find some users!")
// }
// // Ex 32
// let current_user : string [] = ["admin", "eric", "Qira", "wajid", "imran khan"]
// let new_users : string [] = ["admin", "eric" , "Asim", "Noor", "Zahoor"]
// let current_user_lower : string [] =current_user.map(user => user.toLowerCase())
// for(let new_user of new_users) {
//   if (current_user_lower.includes(new_user.toLowerCase())) {
//     console.log(`Sorry ${new_user}, that name is taken`)
//   } else {
//     console.log(`Yes ${new_user}, is still in avaliable list`)
//   }
// }
// // Ex 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    if (number === 1) {
        console.log("".concat(number, "st")); //1st
    }
    else if (number === 2) {
        console.log("".concat(number, "nd")); // 2nd
    }
    else if (number === 3) {
        console.log("".concat(number, "rd")); // 3rd
    }
    else {
        console.log("".concat(number, "th")); // 4th , 5th, 6th .....
    }
}
//  Ex 34
var favourite_pizza = ["chicken", "fajita", "creamy tikka"];
// for(let pizza of favourite_pizza) {
//   console.log(pizza)
// }
// console.log ("\n")
// for (let pizza of favourite_pizza){
//   console.log(`I really like ${pizza} pizza!`)
// }
// console.log("\n I really love pizza!")
// // Ex 35
// let animals : string [] = ["dog", "lion", "cheeta"]
// for (let animal of animals) {
//   console.log(animal)
// }
// console.log ("\n")
// for(let animal of animals) {
//   console.log (`A ${animal} has a tail`)
// }
// console.log("\n all of these are great animals but i love dogs more")
// // EX 36
// function makeShirt(size:string, text: string): void {
//   console.log(`you order a ${size} shirt that says ${text}`)
// }
// makeShirt('large','"i love typescript"')
// makeShirt('medium', '"i need a big shirt"')
// // Ex 37
function makeShirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'I love typescript'; }
    console.log("you have order a ".concat(size, ", shirt that says ").concat(text));
}
// makeShirt();
// makeShirt('medium')
//different message
makeShirt('small', 'I need a big shirt to wear');
// // Ex 38
// function describe_city(city: string, country: string = 'pakistan'): void {
//   console.log(`${city} is in ${country}`)
// }
// describe_city('Karachi') // default sentence
// describe_city(' france' , 'Newyork')
// describe_city('lahore', 'punjab')
// // Ex 39
function citycountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
var c1 = citycountry('lahore', 'pakistan');
var c2 = citycountry('tokyo', 'japan');
var c3 = citycountry('paris', 'france');
console.log(c1);
console.log(c2);
console.log(c3);
// // Ex 40
function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toLowerCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makeAlbum("ali", "light");
console.log(album);
album = makeAlbum("bilal", "red wave");
console.log(album);
album = makeAlbum("asim", "seenbreez");
console.log(album);
// // Ex 41
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
var magician = ["ali", "bilal", "asim",];
show_magicians(magician);
//  //Ex 42
function make_great(magicians) {
    for (var i_5 = 0; i_5 < magicians.length; i_5++) {
        magicians[i_5] = magicians[i_5] + ' the great';
    }
}
var magicians2 = ["Wajid", "Qira", "khan"];
make_great(magicians2);
show_magicians(magicians2);
// // Ex 43
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i_6 = 0; i_6 < magicians.length; i_6++) {
        greatMagicians.push(magicians[i_6] + ' the Great');
    }
    return greatMagicians;
}
var magicians3 = ["Wajid", "Qira", "khan"];
///////////////////////////////////////////////////////////////////////////////////////////
var greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
// // Ex 44
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich order:");
    for (var i_7 = 0; i_7 < items.length; i_7++) {
        console.log("- ".concat(items[i_7]));
    }
}
console.log("enjoy your sandwich Zahoor fatima");
sandwich('chicken', 'tomato', ' onion');
sandwich('cheese', 'ketchup', 'beef');
sandwich('smoked chicken', 'mayo', 'cheddar cheese');
function createcar(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var mycar = createcar("toyota", "corolla", { color: "balck", year: "2024" });
console.log(mycar);

// ///////////////////////////////////////////////////////////////////////////////////////
