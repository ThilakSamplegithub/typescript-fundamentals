"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let n = 10; // it should be number only
n = 5;
let a = 'Hello';
a = 'world';
let again = true;
again = false;
let t = null; // | is or operator like 0+1=1 also called as unitype operator
// variable is not yet existing but if it exits its sting type only or null
t = "star";
t = null;
let s;
// s variable doesn't exist but if it exists it will be string only
s = "sut";
// lets see string litterals to check spellings as well as only 2 strings
let f = "foo";
f = 'bar';
f = 'foo';
// now lets add type safty for functions 
// what should be parameter type and what return type  should be?
const fun = (a, b) => {
    return `${a + b}`;
};
fun(1, 2);
fun(3, 5);
// If there is nothing to return give return type void
const func = (message) => {
    console.log(message);
};
func("Hello world");
// Now lets see Arrays 
// 1st way: Arrays litterals
let arr = [1, 2, 3];
arr = [4, 4];
// type safty for strings 
let arr2 = ['ori', 'vaari', 'needi'];
arr2 = ['kadura'];
// 2nd way of static check to string
let arr3 = [4, 5, 6];
// arr3=['whats app] not ok
arr3.push(8); // its ok
let arr4 = [2, 3, 5];
arr4 = ['this is string'];
// If I don't want any operation on array like push or pop then use readonly
let arr5 = [3, 5];
// arr5.push(9) not ok
// let's see about objects
// 1st way is record: we use it when we know key and keyvalue data type Exactly sure about it
let obj1 = {
    isMarried: false,
    isSingle: true
};
// Onather way of object representation is object litteral
let obj2 = {
    firstName: "Thilak",
    lastName: "singh",
    id: 4
};
// obj2.middleName="Firo" is not ok
obj2.firstName = "Thakur"; // is ok
let obj3 = {
    user1_age: 29,
    user1_name: "Thakur"
};
let arr6 = [
    { image: "image1", imagecount: 1 },
    { image: "image2", imagecount: 2 },
];
const objectInside = {
    image: ["img1", "img2", "3", "4"]
};
exports.default = {};
//# sourceMappingURL=index.js.map