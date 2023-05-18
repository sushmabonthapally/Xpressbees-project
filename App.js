import './App.css';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Order from './Order';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Login/>}/>
          <Route path = '/order' element = {<Order/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
