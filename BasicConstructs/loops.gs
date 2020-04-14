// for loop
function forLoop() {
  
  var fruitsArray = ['Apple','Banana','Pear','Strawberry'];
  
  var arrayLength = fruitsArray.length;
  
  Logger.log(fruitsArray);
  Logger.log(arrayLength); // 4
  
  for (var i = 0; i < fruitsArray.length; i++) {
    
    Logger.log(i);
    Logger.log(fruitsArray[i]);
    
  }
  
}


// forEach loop
function forEachLoop() {
  
  var numberArray = ['one', 'two', 'three', 'four'];
  
  numberArray.forEach(function(item,i) {
    
    Logger.log(item);
    Logger.log(i);
    
  });

}


// second forEach loop example
// call a function inside loop
function forEachLoopTemp() {
  
  var celciusArray = [0,13,19,11,24,29,34,17,4];
  
  var farenheitArray = [];
  
  celciusArray.forEach(function(celciusTemp) {
    
    // call function here
    var farenheitTemp = convertCtoF(celciusTemp);
    //Logger.log(farenheitTemp);
    
    farenheitArray.push(farenheitTemp);
    
  });
  Logger.log('Celcius Array:');
  Logger.log(celciusArray);
  
  Logger.log('Farenheit Array');
  Logger.log(farenheitArray);
  
  
}


// function to convert celcius to farenheit
function convertCtoF(t) {
  
  return (t * 9/5) + 32;
  
}


// forEach does not work for objects
// gives error
function forEachObjectTest() {
  
  var employee = {
    name: "Joe Bloggs",
    age: 25,
    title: "Data Analyst"
  }
  
  employee.forEach(function(item) {
    
    Logger.log(item);
    
  });
  
}


// instead, use a for...in loop with objects
function forInObjectLoop() {
  
  var employee = {
    name: "Joe Bloggs",
    age: 25,
    title: "Data Analyst"
  }
  
  for (var property in employee) {
    
    // log the key
    Logger.log(property); // e.g. name
    
    // log the corresponding value
    Logger.log(employee[property]); // e.g. Joe Bloggs
        
  }
  
}


