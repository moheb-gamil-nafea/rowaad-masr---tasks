// Array methods
const array= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//1
    array.push('z')
//2
    array.unshift('a')
//3
    array.pop()
//4
    array.shift()
//5
    console.log(array.length)
//6
    console.table(array)
//7
    // array.map()
    const numbers = [1, 2, 3, 4];
    const doubled = numbers.map(number => number * 2);
    console.log(doubled);
//8
    console.log(array.indexOf('y'))
//9
    const RemoveFromArray = array.slice(0,3)
    console.table(RemoveFromArray)
//10
    // splice --> to replace or add elements to array
    array.splice(0,1,'apple')
    console.table(array)
    array.splice(0,1,'a')
    console.table(array)
//11
    // array.find() to find first element that fulfills the equation
    const number = [1, 12, 25, 42];
    console.log(number.find(number => number >20))
//12
    const arr=[1,2,3,4,5];
    arr.fill('a',0,5)
    console.table(arr)
//13
    const sort=['cucumber','mango','apple','grapes','watermelon','banana'];
    sort.sort()
    console.table(sort)
//15
    console.log(Array.from('Moheb'));
//16
    console.log(Array.isArray([1, 3, 5]));
    console.log(Array.isArray('[]'));
//17
    const fruits=['cucumber','mango','apple','grapes','watermelon','banana'];
    const result = fruits.filter((fruits) => fruits.length > 6);//removes any element with lleters less than or equal to 6 
    console.table(result)
//18
    const array1 = [5, 12, 8, 130, 44];
    const isLargeNumber = (element) => element > 13;
    console.log(array1.findIndex(isLargeNumber));// returns number of indexes that fulfills the equation
//19
    const array2 = [5, 12, 50, 130, 44];
    const found = array2.findLast((element) => element > 45);// returns the last index that fulfills the equation
//20
    const elements = ['Fire', 'Air', 'Water'];
    console.log(elements.join(' '));
//21
    const numberss = [1, 2, 3, 4, 5];
    const sum = numberss.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
    }, 0);
    console.log(sum); 
//22
    const mixedArray = [1, 'apple', null, undefined, { name: 'moheb' }];
    console.log(mixedArray.toString());
//23
    console.table(array.reverse())
//24
    console.table(array.toReversed())
//25
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.with(2, 6)); // [1, 2, 6, 4, 5]
//26
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
const a2 = [0, 1, [2, [3, [4, 5]]]];
console.log(a2.flat(Infinity));
//27
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));