const getOne = async () => {
  const response = await fetch("http://127.0.0.1:3001/one");
  const data = await response.text();
  console.log(data);
};

const getTwo = async () => {
  const response = await fetch("http://127.0.0.1:3001/two");
  const data = await response.text();
  console.log(data);
};

getOne();
getTwo();

console.log("Hey I'm here");
