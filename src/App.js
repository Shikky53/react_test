import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import HelloWorld from './pages/HelloWorld';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path= "/" exact element={<Home/>} />
      <Route path= "/apropos" exact element={<About/>} />
      <Route path= "/helloexo" exact element={<HelloWorld/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;