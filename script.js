const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
let cnt=0;
const numberOfBooksRead = () => {
  // write your code here
	if(readingStatus==true){
		cnt++;
	}
};
console.log(cnt);
// Do not change the code below

alert(numberOfBooksRead());
