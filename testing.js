const myArray = [];
myArray.map((el) => {
  return el + 1;
});

for (let i = 0; i < 4; i++) {
  myArray.push(i);
  const mystring = 'here is a test';
  myArray.push(mystring);
}
