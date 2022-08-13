import { Box } from '@chakra-ui/react'
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';




function App() {



  return (
    <Router>
      <Box className='App'>
        <Navbar />
        <Box>
          <Routes>
            <Route exact path='/' element={<Home />}>
          
            </Route>
            <Route path='/create' element={ <Create/>}>
           
            </Route>
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
