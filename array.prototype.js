// 배열 내장함수 1. forEach
// : 배열 안에 있는 원소들을 가지고 어떤 작업을 일괄적으로 할 떄 사용.
var array1 = ["a", "b", "c"];

// 1-1. for문
for (var i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}
// 1-2. forEach
array1.forEach(function(elements) {
  console.log(elements);
});

// 1-3. forEach 화살표 함수 사용방법
array1.forEach(elements => {
  console.log(elements);
});

// -------------------------------------------------------------------- //

// 배열 내장함수 2. map
// : 배열 안의 원소를 변환 할 때 사용
// EX. 배열 안의 원소를 제곱 시키기
var array2 = [1, 2, 3, 4, 5];
var square1 = [];
var square2 = [];
var square3 = [];

// 1-1. for문
for (var i = 0; i < array2.length; i++) {
  square1.push(array2[i] * array2[i]);
}
console.log(square1);

// 1-2. forEach문
array2.forEach(function(n) {
  square2.push(n * n);
});
console.log(square2);

// 1-3. forEach 화살표 함수 사용 방법
array2.forEach(n => square3.push(n * n));
console.log(square3);

// 1-4 map
var squared = array2.map(n => n * n);
console.log(squared);

// -------------------------------------------------------------------- //

// 배열 내장 함수 3. indexOf
// 특정 요소가 배열의 몇번 째인지 알아보는 내장함수
var array3 = ["a", "b", "c"];
var index = array3.indexOf("b");
console.log(index); // 두번째 배열에 위치 '1'
// 일치하는 것이 없을 때는 -1

// -------------------------------------------------------------------- //

// 배열 내장 함수 4. findIndex
// 배열의 요소가 객체이거나 조건으로 찾을 때 사용
var todos = [
  { id: 1, done: true },
  { id: 2, done: true },
  { id: 3, done: true },
  { id: 4, done: false }
];

var index1 = todos.findIndex(obj => obj.id === 3);
console.log(index1);

// -------------------------------------------------------------------- //

// 배열 내장 함수 5. find
// 찾은 값 자체를 반환 할 때 사용
var index2 = todos.find(obj => obj.id === 3);
console.log(index2);

// -------------------------------------------------------------------- //

// 배열 내장 함수 6. filter
// 특정 조건을 만족하는 원소들을 찾아서 새로운 배열을 만듦.

// 6-1
var index3 = todos.filter(todo => todo.done === false);
// var index3 = todos.filter(todo => !todo.done);
// var index3 = todos.filter(todo => todo.done !== true);
console.log(index3);

// -------------------------------------------------------------------- //

// 배열 내장 함수 7. splice
// 기존의 배열을 삭제 또는 교체, 새 요소를 추가하여 배열의 내용을 변경
// array.splice(start, deleteCount, item1, item2..)
const spliceNumbers = [10, 20, 30, 40];
const spliceIndex = spliceNumbers.indexOf(30);
spliceNumbers.splice(spliceIndex, 1); // [30]
console.log(spliceNumbers);           // [10, 20, 40]

// 배열 내장 함수 8. slice
// 기존의 배열은 그대로 둔 뒤에 잘라내서 새로운 배열 객체로 반환
// array.slice(begin, end)
const sliceNumber = [10, 20, 30, 40];
const sliceIndex = sliceNumber.slice(2);
console.log(sliceIndex); // [30, 40]
console.log(sliceNumber); // [10, 20, 30, 40]

// -------------------------------------------------------------------- //

// 배열 내장 함수 9. shift, pop, unshift, push
// shift는 첫번째 원소를 추출해줌. shift는 기본 배열을 삭제함.
// pop은 마지막 원소를 삭제시킴. 


// concat 
// 여러개의 배열을 하나의 배열로 만들어줌, 기존의 값을 건드리지 않음.

// join
// 배열의 값을 문자열 값으로 합쳐줄 떄 사용 
