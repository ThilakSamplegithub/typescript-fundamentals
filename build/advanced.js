// Here I will redeclare same variable I used in index.ts I will get error but as soon as I type export default
// {} error disappears because they are nomore single module
let objectInside = {
    img: [2, 3, 4, 54, 5]
};
// generic functions are those functions which are reusable with different data type
// but I see its working for 1 argument only 
function sum(a) {
    return a;
}
let s = sum(1);
console.log(s);
sum("Hello");
sum(false);
//Interface is replacement of type but with additional benefit
const obj;
//# sourceMappingURL=advanced.js.map