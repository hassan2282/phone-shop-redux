import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Icon from 'react-icons-kit'
import Container from './components/Container';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container />
      </div>

      <Routes>
        <Route path='/home'/>
        <Route path='/register' element={<Register />}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
