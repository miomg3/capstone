import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import HeaderComponent from './Components/HeaderComponent';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Alert from './Components/Alert';
import Homepage from './Pages/Homepage';
import BookingPage from './Pages/BookingPage';
import { AlertProvider } from './context/alertContext';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <HeaderComponent />
        <Main>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/about" element={<div>About</div>}></Route>
            <Route path="/reservations" element={<BookingPage />}></Route>
          </Routes>
          <Alert />
        </Main>
        <Footer />
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
