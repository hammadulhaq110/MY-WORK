console.log("helloworld"); //simple program
//variables
var sunny = "coding";
console.log(sunny); //ye run krne pr answer CODING dega 
console.log(sunny); //ye run krne pr answer CODING dega 
var myName = "hammad";
myName = "usama"; //this can be reassign
console.log(myName);
var myCar = "honda";
myCar = "dhoom"; //this can be reassign
console.log(myCar);
var myFriend = "hasnain";
//myFriend ="jameel";   //this can not be reassign
console.log(myFriend);
//data types
var myEmailId = "hammadulhaq96@gmail.com"; //explicit
var myContactNumber = +923442535981;
var iAmStudent = false;
console.log(myEmailId, myContactNumber, iAmStudent);
var myCart = 0;
var mangoRs = 500; //ye hum ne buy kiya 
var peachRs = 200; //ye bhi hum ne buy kiya
console.log(mangoRs + peachRs); //Dono ko add krenge tou tou 700 value dega 
//jab shop ke andar enter hue tou us waqt ki Rs
var myRs = 0;
var appleRs = 400;
var bnananaRs = 400;
console.log(appleRs - bnananaRs); //dono ko jab subtract krenge tou 0 value dega 
var onePuriRs = 10;
var ninePuriRs = 9;
console.log(onePuriRs * ninePuriRs); //ye dono ko multiply krne pr 90 value mile gi
var cars = 10;
var carHome = 9;
console.log(cars / carHome); //ye dono ko divide krne pr 1.1111111111111112 value milegi
var wedClass = 7;
var tuesClass = 8;
console.log(wedClass == tuesClass); //is ko run krenge tou FALSE dega 
console.log(wedClass === tuesClass); //or is ko run krenge tou bhi FALSE dega 
var dressColor = "black";
var pentColorOne = "white";
var pentColorTwo = "black";
console.log(dressColor != pentColorOne); //is ko run krenge tou TRUE dega 
console.log(dressColor != pentColorTwo); //or is ko run krenge tou bhi FALSE dega 
var firstName = "hammad";
var lastName = " ul haq";
console.log(firstName + lastName + ' wolf'); //ye dono name ko add krde ga kuch is trha HAMMAD UL HAQ or baad me jo mene wolf add kiya ha tou usko add krne ke baad HAMMAD UL HAQ WOLF dega !!! but ye small alphabets me dega kuke mene variable mene small letter me diya ha ! aap jesa input doge wesa hi output dega 
var myGoal = "programar"; //yha pe mene programar small letter me likha ha 
console.log(myGoal.toUpperCase()); //yha mene uppercase kiya ha tou PROGRAMAR hujae ga 
console.log(myGoal.toLowerCase());
console.log(myGoal.toLocaleUpperCase());
//  0         1        2
var freinds = ["hammad", "hasnain", "inaam"];
freinds.push("fawad"); //no error
console.log(freinds);
//friends.push(39);  //error because it is a number 
var myFriends = [
    "hasnain",
    "usama",
    "fawad"
];
myFriends.push("maaz"); //this element is add in array
myFriends.push("wasif"); //this element is add in array
myFriends.pop(); //this element is remove in array
console.log(myFriends);
var friend = [];
friend.push("hasham"); //this element can be add in array
console.log("friend");
friend.pop(); //this element can be remove in array
console.log("freind");
var myWifes = ["Wife1", "Wife2"];
//myWifes.push("wife3"); //gives error  ye is liye error dega kuke humne readonly use kiya ha tou hum is me jese bhi kuch add krenge error hi dega   
//myWife[3] = "wife3"; //gives error  ye is liye error dega kuke humne readonly use kiya ha tou hum is me jese bhi kuch add krenge error hi dega 
console.log(myWifes);
var ourTuple = ["hammad", 6, true];
//their is not safety other element are add or remove
ourTuple.push("inaam");
ourTuple.push(2);
ourTuple.push(false);
console.log(ourTuple);
var classDay = "wednesday";
if (classDay == "wednesday") {
    console.log("Go to class");
}
else {
    console.log("we are sleep and has a nice day");
}
var homeFood = "daal chawal";
var moneyIHave = 100; // change this value to 300 for biryani or 350 or higher for zinger
var zingerPrice = 350;
if (homeFood == "daal chawal" && moneyIHave == 300) { // this code will execute if both conditions are true
    console.log("go out and buy biryani");
}
else if (moneyIHave >= 350) { // this code will execute if  above condition is false
    console.log("buy zinger");
}
else { // this code will execute if both conditions are false
    console.log("daal chawal");
}
var WeekDayNumber = 5;
switch (WeekDayNumber) {
    case 1:
        console.log("Monday"); // this code will execute if weekDayNumber is 1
        break;
    case 2:
        console.log("Tuesday"); // this code will execute if weekDayNumber is 2
        break;
    case 3:
        console.log("Wednesday"); // this code will execute if weekDayNumber is 3
        break;
    case 4:
        console.log("Thursday"); // this code will execute if weekDayNumber is 4
        break;
    case 5:
        console.log("Friday"); // this code will execute if weekDayNumber is 5
        break;
    case 6:
        console.log("Saturday"); // this code will execute if weekDayNumber is 6
        break;
    case 7:
        console.log("Sunday"); // this code will execute if weekDayNumber is 7
        break;
    default:
        console.log("Invalidday"); // this code will execute if weekDayNumber is not between 1 to 7
        break;
}
var foodItem = 'Pizza';
switch (foodItem) {
    case 'Biryani':
        console.log('I love beef biryani'); // this code will execute if foodItem is Biryani
        break;
    case 'Pizza':
        console.log("I don't like Pizza"); // this code will execute if foodItem is Pizza
        break;
    case 'DaalChawal':
        console.log('I love DaalChawal'); // this code will execute if foodItem is DaalChawal
        break;
    case 'Zinger':
        console.log('I love zinger'); // this code will execute if foodItem is Zinger
        break;
}
var isMyBirthday = true;
var amIHappy = true;
if (isMyBirthday && amIHappy) {
    console.log("Happy Birthday");
}
if (isMyBirthday || amIHappy) {
    console.log("Happy Birthday And I Am Happy");
}
var freindNames = ["fawad", "hasnain", "umar", "eshan", "inaam"];
var datalength = freindNames.length;
for (var i_1 = 0; i_1 < datalength; i_1++) {
    console.log("datalength", datalength);
    console.log("My friend is", freindNames[i_1]);
}
for (var i_2 = 1; i_2 <= 10; i_2++) {
    var tableNumber = 5;
    console.log(tableNumber, "x", i_2, "=", tableNumber * i_2);
}
for (var i_3 = 1; i_3 <= 100; i_3++) {
    console.log([i_3]);
}
for (var i_4 = 1; i_4 <= 100; i_4++) {
    console.log("i am not late in every classes");
}
var myCars = ["fortuner", "porshe", "farari", "civic", "corolla"];
var dataLength = myCars.length;
for (var i_5 = 0; i_5 < dataLength; i_5++) {
    console.log("dataLength", dataLength);
    console.log("My car is", myCars[i_5]);
}
var Freinds = ["fawad", "hasnain", "umar", "eshan", "inaam"];
var index = 1;
for (var _i = 0, Freinds_1 = Freinds; _i < Freinds_1.length; _i++) {
    var Freind = Freinds_1[_i];
    console.log("my ".concat(index, " friend is ").concat(Freind));
    index++;
}
var boys = ["hammad", "wasif", "maaz", "taha", "asrar", "hunain"];
var indexes = 1;
for (var _a = 0, boys_1 = boys; _a < boys_1.length; _a++) {
    var boy = boys_1[_a];
    console.log("boy ".concat(indexes, " is ").concat(boy));
    indexes++;
}
var girls = ["mariya", "haiqa", "hafsa", "iqra", "zainab"];
var indexs = 1;
for (var _b = 0, girls_1 = girls; _b < girls_1.length; _b++) {
    var girl = girls_1[_b];
    console.log("girl ".concat(index, " is ").concat(girl));
    index++;
}
var i = 1;
while (i <= 10) {
    console.log(6, "x", i, "=", 6 * i);
    i++;
}
var j = 11;
do {
    console.log(7, "x", j, "=", 7 * j, "this is 11 line");
    j++;
} while (j <= 10);
function admitCard(name, // parameter
rollNumber, // parameter
courseName, // parameter with default value
phone // optional parameter
) {
    if (courseName === void 0) { courseName = "Typescript"; }
    // function body
    console.log('#------------------------#');
    console.log("Name: " + name); // concatenation
    console.log("Roll Number:  + ".concat(rollNumber)); // template literal (ES6)
    console.log("Course Name: " + courseName);
    // check if phone is not undefined
    if (phone) {
        console.log("Phone Number: " + phone);
    }
    console.log('#------------------------#');
}
// invoke function
admitCard("sunny", 3537, "Next.js", 1234567890); // argument
admitCard("erum", 422422, undefined, 1090078601); // argument with default value 
// student list array object
var studentsList = [
    {
        name: "Farhan",
        rollNumber: 3537,
        courseName: "Next.js",
        phone: 12346777567890
    },
    {
        name: "sammy",
        rollNumber: 422422,
        courseName: "Typescript",
        phone: 1090078601
    },
    {
        name: "Laiba",
        rollNumber: 35787,
        courseName: "Python"
    },
    {
        name: "hammad",
        rollNumber: 47809,
        courseName: "certified cloud aplied generative AI",
        phone: 923442535981,
    },
    {
        name: "gaffar",
        rollNumber: 12349,
        courseName: "undefined",
        phone: 111111111111,
    }
];
// loop through array of object
for (var _c = 0, studentsList_1 = studentsList; _c < studentsList_1.length; _c++) {
    var student = studentsList_1[_c];
    // invoke function with object value as argument
    admitCard(student.name, student.rollNumber, student.courseName, student.phone);
}
function myInfo() {
    console.log("my name is hammad");
    console.log("i am pakistani");
    console.log("i am a student");
    console.log('#--------------------------#');
}
myInfo();
myInfo();
myInfo();
var user = "hammad";
var email = "hammadulhaq@gmail.com";
var passward = 123;
console.log(user === "hammad"
    && email === "hammadulhaq@gmail.com"
    && passward === 123);
