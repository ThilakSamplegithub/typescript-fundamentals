// Here I will redeclare same variable I used in index.ts I will get error but as soon as I type export default
// {} error disappears because they are nomore single module
let objectInside={
    img:[2,3,4,54,5]
}
// generic functions are those functions which are reusable with different data type
// but I see its working for 1 argument only 
function sum <Type>(a:Type){
    return a
}
let s=sum<number>(1)
console.log(s)
sum<string>("Hello")
sum<boolean>(false)
//Interface is replacement of type but with additional benefit
// see I don't have =
interface NewObj{
    userName:string;
    user_lastName:string;
    isMarried:boolean;
}
// const userInfo:newObj={
//     userName:"Thakur Thilak",
//     user_lastName:"Singh",
//     isMarried:false
// }
// benefit of using interface
// extends
interface Admin extends NewObj{
    isIA:boolean;
    isStudentofMasaibefore:true;
}
const newObject:Admin={
userName:"Tharki",
user_lastName:"jidimethla",
isMarried:true,
isIA:true,
isStudentofMasaibefore:true
}
// tuple
//  topple means defined array with defined values and defined length
type arrType=[number,number,number,string,boolean,null|number]
let arr:arrType=[1,2,3,"4",true,7]
//optional I can ignore onather argumaent 
const optionalFunc=(a:number,b?:number)=>{
    return a+b
}
optionalFunc(2)
// classes in typescript
class Animal{
    name:string;
    a:number
    constructor(name:string,age:number){
        this.name=name;
        this.a=age;
    }
}
const newAnimal=new Animal("Tommy",12)
class Dog extends Animal{
    speed:number  // key type is also defined
  constructor(name:string,age:number,speed:number){  // parameter type is defined 
super(name,age)   // super takes from parent class 
this.speed=speed
  }
}
const newDog=new Dog("jimmy",5,200)