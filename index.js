//*  SPREAD (...)

//! Spread operatörü, JavaScript'te üç nokta (...) sembolü ile temsil edilen bir operatördür. ES6 (ECMAScript 2015) ile birlikte JavaScript'e eklenmiştir ve birçok farklı kullanımı bulunmaktadır. Spread operatörü, bir dizi (array), bir nesne (object) veya başka bir iterable (yinelenebilir) veri yapısındaki elemanları ayrıştırarak (ayrı ayrı) kullanmamızı sağlar.

//* 1array concatination
//örnek
const flyingVehicles = ["aircraft", "helicopter", "drone"];
const automobile = ["truck", "suv", "Car"];
const allVehicles1 = [flyingVehicles, automobile];
console.log(allVehicles1);
const allVehicles2 = [...automobile, "Bicyle", ...flyingVehicles];
console.log(allVehicles2);

//örnek
const citrus = ["orange", "lime", "lemon"];
const fruits = ["apple", ...citrus, "banana", "chery", "pear"];
console.log(fruits);

//* 2String spread
let buryan = "Buryan yemegi hangi yoreye aittir.";
const charBuryan = [...buryan];
console.log(buryan);
console.log(charBuryan);

//*3 Max() - Dizileri fonksiyonlara acik bir sekilde parametre vermek icin
console.log(Math.max(1, 2, 3, 33, 4, 5));

const numbers = [3, 1, 23, 49, 52, 44];
console.log(Math.max(...numbers));

//*4 Array Copy

const myNumbers = [3, 5, 5, [7, 8]];
const herNumbers = [-5, -4, ...myNumbers, -22]; // Concat
console.log(myNumbers);
console.log(herNumbers);

//*5 Object Copy
const myObj = { a: 1, b: 2, c: 4 };
const herObj = { a: 2, z: 4, c: 3 };

const copyObj = { ...myObj };

console.log(copyObj);
copyObj.c = 44;
console.log(myObj);
console.log(copyObj);

const combinedObjs = { ...myObj, ...herObj };
console.log(combinedObjs);
