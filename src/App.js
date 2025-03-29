import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import Register from './components/Register';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container />
        <ToastContainer />
      </div>

      <Routes>
        <Route path='/' element={''}/>
        <Route path='/register' element={<Register />}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
