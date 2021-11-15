function getData(){
  fetch('/site/history/data_out.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(json){
      console.log(json)
    })
}
// getData()





// let myDearData;
//
// function getData(){
//   fetch('/site/history/data_out.json')
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(json){
//       return JSON.stringify(json)
//     })
// }
//
// myDearData = getData()
// console.log(myDearData)






///////////////////////////so far, this one works best!!!
let data;

async function getTheData() {
  let response = await fetch('/site/history/data_out.json');
  let data = await response.json()
  return JSON.stringify(data)
  //console.log(JSON.stringify(data))
}
data = getTheData()
console.log(data)






// // https://stackoverflow.com/questions/60498409/nodejs-returning-data-from-async-fetch-on-a-variable-to-reuse
// let myDesiredResult;
//
// async function getTheData2() {
//   if (typeof myDesiredResult === 'undefined') {
//     const result = await fetch('/site/history/data_out.json');
//     myDesiredResult = await result.json();
//   }
//   return myDesiredResult;
// }
//
// // call the function asynchronously
// (async function(){
//   // await the results here inside an async function
//   const results = await getTheData2();
//   JSON.stringify(results);
// }());
//
// console.log(myDesiredResult)




// https://usefulangle.com/post/248/javascript-async-anonymous-function-iife
// (async ()=> {
//   let response = await fetch('/site/history/data_out.json');
//   let json_data = await response.json()
//   return json_data
// })();
