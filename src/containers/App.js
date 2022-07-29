import { Box, Text } from '@chakra-ui/react'
import {useState, useEffect} from "react";
import Navbar from '../Navbar/Navbar';
import Home from '../Home';




function App() {
  const [random, setRandom] = useState(0);
  const link = "http://www.google.com"
// function randomNumber(min,max){
//   let x = (max - min + 1) + min;
//   console.log('dd'+ x);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// useEffect(()=>{
//   const interval = setInterval(() => {
//     setRandom(randomNumber(1,Math.random()*20))
//   }, 1000);



//   return () =>{
//     clearInterval(interval);
//   }
// }, [])

// useEffect(()=>{
//   if(random === 10){
//     console.log('change is 10')
//   }else{
//   console.log('change is not 10')
//   }
// })
  const title = "Welcome to  my Store";
  const likes = 50;
  const Person = { name: 'Yoshi', age: '30' };

  // function rand() {
 
  // let random = Math.random() * 20;
  // let num;
  //  for (var i = 0; i < random; i++) {
  //    num = Math.random() * 20;
  //  }
  //  console.log(num)
  // setRandom(num);
  // }

  return (
    <Box className='App'>
      <Navbar/>
      <Box className='content'>
        <Home/>
        {/* <Text>{title}</Text>
        <p>Liked {likes} times</p>

        {/* <p>{Person}</p> */}
        {/* <p>{10}</p>
        <p>{"hello, ninjas"}</p>
        <p>{[1, 2, 3, 4, 5, 6, 7]}</p>
        <p>{random}</p>
        <a href={link}>Google</a> */}
      </Box>
    </Box>
  );
}

export default App;
