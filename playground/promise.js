var asyncAdd = (a, b) => {
  return new Promise ((resolve, reject)=>{
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number') {
        resolve(a+b);
      } else {
        reject('Os argumentos precisam ser números');
      }
    },1500);
  });
};

asyncAdd(5, 7).then((res) => {
  console.log('Primeiro resultado: ',res);
  return asyncAdd(res, 33);
}, (errorMessage) =>{
  console.log(errorMessage);
}).then((res) => {
  console.log('Segundo resultado: ',res);
},(errorMessage) => {
  console.log(errorMessage);
});

// var promessa = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     resolve('Funcionou');
//     //reject('rejeitado');
//   }, 2500);
// });
//
// promessa.then((message)=>{
//   console.log('Success: ',message);
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage);
// });
