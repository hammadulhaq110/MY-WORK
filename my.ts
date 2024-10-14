console.log("helloworld"); //simple program

//variables
let sunny ="coding";
console.log(sunny);  //ye run krne pr answer CODING dega 
console.log(sunny);  //ye run krne pr answer CODING dega 

let myName ="hammad";
myName ="usama";  //this can be reassign
console.log(myName);

var myCar ="honda";
myCar ="dhoom";  //this can be reassign
console.log(myCar);

const myFriend ="hasnain";
//myFriend ="jameel";   //this can not be reassign
console.log(myFriend);

//data types
let myEmailId : string ="hammadulhaq96@gmail.com"; //explicit
let myContactNumber : number = +923442535981 ;
let iAmStudent : boolean = false;
console.log(myEmailId,myContactNumber,iAmStudent);

let myCart =0;
let mangoRs =500;  //ye hum ne buy kiya 
let peachRs =200;  //ye bhi hum ne buy kiya
console.log(mangoRs+peachRs);  //Dono ko add krenge tou tou 700 value dega 

//jab shop ke andar enter hue tou us waqt ki Rs
let myRs=0;
let appleRs =400;  
let bnananaRs =400; 
console.log(appleRs-bnananaRs);  //dono ko jab subtract krenge tou 0 value dega 

let onePuriRs = 10;
let ninePuriRs =9;
console.log(onePuriRs*ninePuriRs);  //ye dono ko multiply krne pr 90 value mile gi

let cars = 10;
let carHome =9;
console.log(cars/carHome);  //ye dono ko divide krne pr 1.1111111111111112 value milegi

let wedClass : number =7;
let tuesClass : number = 8;
console.log(wedClass == tuesClass);  //is ko run krenge tou FALSE dega 
console.log(wedClass === tuesClass);  //or is ko run krenge tou bhi FALSE dega 

let dressColor : string ="black";
let pentColorOne :string ="white";
let pentColorTwo :string ="black";
console.log(dressColor != pentColorOne);  //is ko run krenge tou TRUE dega 
console.log(dressColor != pentColorTwo);  //or is ko run krenge tou bhi FALSE dega 

let firstName : string ="hammad";
let lastName : string = " ul haq";
console.log(firstName + lastName + ' wolf');  //ye dono name ko add krde ga kuch is trha HAMMAD UL HAQ or baad me jo mene wolf add kiya ha tou usko add krne ke baad HAMMAD UL HAQ WOLF dega !!! but ye small alphabets me dega kuke mene variable mene small letter me diya ha ! aap jesa input doge wesa hi output dega 

let myGoal ="programar"; //yha pe mene programar small letter me likha ha 
console.log(myGoal.toUpperCase()); //yha mene uppercase kiya ha tou PROGRAMAR hujae ga 
console.log(myGoal.toLowerCase());
console.log(myGoal.toLocaleUpperCase())

                       //  0         1        2
let freinds : string[] =["hammad","hasnain","inaam"];
freinds.push("fawad");  //no error
console.log(freinds);
//friends.push(39);  //error because it is a number 

let myFriends : Array <string> =[
    "hasnain",
    "usama",
    "fawad"
];
myFriends.push("maaz"); //this element is add in array
myFriends.push("wasif");  //this element is add in array
myFriends.pop();  //this element is remove in array
console.log(myFriends);

const friend : string[] =[];
friend.push("hasham"); //this element can be add in array
console.log("friend");
friend.pop(); //this element can be remove in array
console.log("freind");

const myWifes : readonly string[] =["Wife1" , "Wife2"];
//myWifes.push("wife3"); //gives error  ye is liye error dega kuke humne readonly use kiya ha tou hum is me jese bhi kuch add krenge error hi dega   
//myWife[3] = "wife3"; //gives error  ye is liye error dega kuke humne readonly use kiya ha tou hum is me jese bhi kuch add krenge error hi dega 
console.log(myWifes);

let ourTuple : [string,number,boolean] =["hammad",6,true];
//their is not safety other element are add or remove
ourTuple.push("inaam");
ourTuple.push(2);
ourTuple.push(false);
console.log(ourTuple);

let classDay : string ="wednesday"

if (classDay == "wednesday")  {
       console.log("Go to class");
} else {

       console.log("we are sleep and has a nice day");
}

let homeFood  ="daal chawal";
let moneyIHave =100;  // change this value to 300 for biryani or 350 or higher for zinger
let zingerPrice =350;

if (homeFood == "daal chawal" && moneyIHave == 300)  {  // this code will execute if both conditions are true

       console.log("go out and buy biryani")  

} else if (moneyIHave >= 350) {  // this code will execute if  above condition is false

       console.log("buy zinger") 

} else {  // this code will execute if both conditions are false

       console.log("daal chawal")

}

let WeekDayNumber : number = 5;


switch (WeekDayNumber) {
       case 1:
       
       console.log("Monday");  // this code will execute if weekDayNumber is 1

              break;
       
       case 2:

       console.log("Tuesday");  // this code will execute if weekDayNumber is 2

              break;

       case 3:

       console.log("Wednesday");  // this code will execute if weekDayNumber is 3
 
              break;

       case 4:
       
       console.log("Thursday");  // this code will execute if weekDayNumber is 4

              break;
       
       case 5:

       console.log("Friday");  // this code will execute if weekDayNumber is 5

              break;

       case 6:

       console.log("Saturday");  // this code will execute if weekDayNumber is 6

              break;

       case 7:

       console.log("Sunday");  // this code will execute if weekDayNumber is 7

              break;

       default:

       console.log("Invalidday");  // this code will execute if weekDayNumber is not between 1 to 7

              break;
}

let foodItem: string = 'Pizza';

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

let isMyBirthday = true;
let amIHappy = true;

if (isMyBirthday && amIHappy) {

       console.log("Happy Birthday");


}

if (isMyBirthday || amIHappy) {

       console.log("Happy Birthday And I Am Happy");

}

const freindNames : string[] =["fawad","hasnain","umar","eshan","inaam"]

let datalength =freindNames.length

for (let i = 0;i < datalength; i++) {

       console.log("datalength",datalength)

       console.log("My friend is",freindNames[i])

}

for (let i = 1;i <=10;i++) {

       let tableNumber : number = 5

       console.log(tableNumber,"x",i,"=",tableNumber*i)

}

for (let i = 1 ; i <= 100; i++) {

       console.log([i])

}

for (let i = 1; i <= 100; i++) {

       console.log("i am not late in every classes")
}

const myCars =["fortuner","porshe","farari","civic","corolla"];

let dataLength = myCars.length

for (let i = 0; i < dataLength; i++) {

       console.log("dataLength",dataLength)

       console.log("My car is",myCars [i])

}

const Freinds =["fawad","hasnain","umar","eshan","inaam"];

let index= 1;

for (let Freind of Freinds) {

       console.log(`my ${index} friend is ${Freind}`);

       index++;
}

let boys=["hammad","wasif","maaz","taha","asrar","hunain"]

let indexes = 1;

for (let boy of boys) {

       console.log(`boy ${indexes} is ${boy}`);

       indexes++;

}

let girls =["mariya","haiqa","hafsa","iqra","zainab"]

let indexs =1;

for (let girl of girls) {

       console.log(`girl ${index} is ${girl}`);
       
       index++;
}

let i = 1;

while (i <= 10) {

       console.log(6,"x",i,"=",6*i);

       i++;
       
}

let j = 11;

do {

       console.log(7,"x",j,"=",7*j,"this is 11 line")

       j++;
       
} while (j <= 10);


function admitCard(
       name: string, // parameter
       rollNumber: number, // parameter
       courseName: string = "Typescript", // parameter with default value
       phone?: number // optional parameter
   ): void {
   
       // function body
       console.log('#------------------------#');
   
       console.log("Name: " + name); // concatenation
       console.log(`Roll Number:  + ${rollNumber}`); // template literal (ES6)
       console.log("Course Name: " + courseName);
   
       // check if phone is not undefined
       if (phone) {
           console.log("Phone Number: " + phone);
       }
   
       console.log('#------------------------#');
   }
   
   // invoke function
   admitCard("sunny", 3537, "Next.js", 1234567890) // argument
   admitCard("erum", 422422, undefined, 1090078601) // argument with default value 
   
   
   // student list array object
   const studentsList = [
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
   ]

// loop through array of object
for (const student of studentsList) {

       // invoke function with object value as argument
       admitCard(student.name, student.rollNumber, student.courseName, student.phone)
   }
   

function myInfo():void {

       console.log("my name is hammad");
       console.log("i am pakistani");
       console.log("i am a student");
       
       console.log('#--------------------------#');
       
}

myInfo();
myInfo();
myInfo();

let user ="hammad";

let email ="hammadulhaq@gmail.com";

let passward =123;

console.log(user === "hammad"

&& email === "hammadulhaq@gmail.com"

&& passward === 123

)
