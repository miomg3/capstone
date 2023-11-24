import './css/App.css';
import HeaderComponent from './Components/HeaderComponent';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className='App'>
    <HeaderComponent />
      <Main>
        <Routes> 
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<div>About</div>}></Route>
          <Route path="/reservations" element={<div>Reservations</div>}></Route>
        </Routes> 
      </Main>
    <Footer />
    </div>
  );
}

export default App;
