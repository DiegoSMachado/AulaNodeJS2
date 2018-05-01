console.log('starting app');

setTimeout(() =>{
  console.log('inside os callback');
}, 2000);

setTimeout(() => {
  console.log('second timeout');
},0);

console.log('Finishing Up')
