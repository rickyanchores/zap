import React from 'react';


import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route exact component={Home}/>
        </Routes>
        <Home />
        <Products />
        <Footer />
      </Router>
    </div>
  )
}

export default App