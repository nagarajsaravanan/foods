import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/js/Header'
import Footer from './components/footer/Footer'
import Home from './pages/Home/js/Home'

function App() {
  return (
    <div>
        <Header/>
          <Home />
        {/* <Footer /> */}
    </div>
  );
}

export default App;
