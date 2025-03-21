import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Icon from 'react-icons-kit'
import Container from './components/Container';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container />
      </div>

      <Routes>
        <Route path='/home'/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
