import './App.css';
import './Components/Login.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/Login.js';
import Signup from './Components/Register';
import Home from './Components/Home';
import AddOrUpdate from './Components/AddUpdate';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element ={<Login />}></Route>
    <Route path="/register" element ={<Signup />}></Route>
    <Route path="/home" element ={<Home />}></Route>
    <Route path="/add" element ={<AddOrUpdate />}></Route>
    <Route path="/update/:id" element ={<AddOrUpdate />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;