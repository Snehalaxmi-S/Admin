import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route ,Routes} from 'react-router-dom'
import EmpList from './EmpList';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import EmpCreate from './EmpCreate';
import EmpDetails from './EmpDetails';
import EmpEdit from './EmpEdit';

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpList/>}></Route>
          <Route path='/employee/create' element={<EmpCreate/>}></Route>
          <Route path='/employee/detail/:empid' element={<EmpDetails/>}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit/>}></Route>

          
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
