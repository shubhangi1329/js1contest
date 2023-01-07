/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
 arr.map(print);
 function print(arritem){
  if(arritem.profession==="developer"){
    console.log(arritem);
  }
 }
}

function PrintDeveloperbyForEach() {
  arr.forEach(print2);
  function print2(arritem){
    if(arritem.profession=== "developer"){
      console.log(arritem);
    }
  }
}

function addData() {
  let obj={id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(obj);
  console.log(arr);
}

function removeAdmin() {
     let spliced=arr.splice(2,1);
     console.log(arr);
}

function concatenateArray() {
  let arr2=[
    {id:5,name:"kumud",age:"29",profession:"Singer"},
    {id:6,name:"shubhi",age:"24",profession:"Developer"},
    {id:7,name:"sristhi",age:"24",profession:"finance"},
  ];
  let concat=arr.concat(arr2);
  console.log(concat);
}
