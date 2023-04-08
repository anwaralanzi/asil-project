import React from 'react';
import './App.css';
import Nav from './Nav';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Slid from './Slid';
import Home from './pages/Home';
import Router from './componants/Router';
// import {ChakraProvider} from '@Chakra-ui/react' 
function App() {
  return (


    <ChakraProvider theme={theme}>
      <Router></Router>
     </ChakraProvider>

  );
}

export default App;
