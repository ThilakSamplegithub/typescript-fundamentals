let n:number=10 // it should be number only
n=5
let a:string='Hello'
a='world'
let again:boolean=true
again=false
let t:null|string=null  // | is or operator like 0+1=1 also called as unitype operator
// variable is not yet existing but if it exits its sting type only or null
t="star"
t=null
let s:undefined|string
// s variable doesn't exist but if it exists it will be string only
s="sut"
// lets see string litterals to check spellings as well as only 2 strings
let f:"foo"|"bar"="foo"
f='bar'
f='foo'
// now lets add type safty for functions 
// what should be parameter type and what return type  should be?
const fun=(a:number,b:number):string=>{
return `${a+b}`
}
fun(1,2)
fun(3,5)
// If there is nothing to return give return type void
const func=(message:string):void=>{
    console.log(message)
}
func("Hello world")
// Now lets see Arrays 
// 1st way: Arrays litterals
let arr:number[]=[1,2,3]
arr=[4,4]
// type safty for strings 
let arr2:string[]=['ori','vaari','needi']
arr2=['kadura']
// 2nd way of static check to string
let arr3:Array <number>=[4,5,6]
// arr3=['whats app] not ok
arr3.push(8)// its ok
let arr4:Array<number|string>=[2,3,5]
arr4=['this is string']
// If I don't want any operation on array like push or pop then use readonly
let arr5:readonly number[]=[3,5] 
// arr5.push(9) not ok
// let's see about objects
// 1st way is record: we use it when we know key and keyvalue data type Exactly sure about it
let obj1:Record <string,boolean>={
    isMarried:false,
    isSingle:true
}
// Onather way of object representation is object litteral
let obj2:{firstName:string;lastName:string;id:number;}={
    firstName:"Thilak",
    lastName:"singh",
    id:4
}
// obj2.middleName="Firo" is not ok
obj2.firstName="Thakur"// is ok
//2nd way to represent objects using type,it can be used for anything but mostly used for objects
type newObj={user1_age:number,user1_name:string}
let obj3:newObj={
    user1_age:29,
    user1_name:"Thakur"
}
// intersection of objects

// objects inside array
type newObj2={image:string,imagecount:number}
let arr6:newObj2[]=[
{image:"image1",imagecount:1},
{image:"image2",imagecount:2},
]
// arrays inside object
type newObj3={image:string[]}
const objectInside:newObj3 ={
    image:["img1","img2","3","4"]
}
//  intersection of object
type Admin={batch:string;name:string}
type user={name:string;role?:string|number}
const obj:Admin & user={
    batch:"Rct211",
    name:"Ankit",
    // role:5
}
export default {}