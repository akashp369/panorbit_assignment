import logo from './logo.svg';
import './App.css';
import Account from './component/Account';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Account/>}/>;
        <Route path='/home' element={<Home/>}/>;
      </Routes>
    </div>
  );
}

export default App;
