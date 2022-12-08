import './index.css';
import Header from './components/Header'
import Employees from './pages/Employees';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Customers from './pages/Customers'
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import NotFound from './components/NotFound';
import Customer from './pages/Customer';
import Login from './pages/Login';
import { createContext ,useState} from 'react';

export const LoginContext = createContext();

function App() {
  const [loggedIn , setLoggedIn] = useState(true);
  return (
  <LoginContext.Provider value={[loggedIn,setLoggedIn]}>
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/employees' element={<Employees/>}/>
          <Route path='/customers' element={<Customers/>}/>
          <Route path='/customers/:id' element={<Customer/>}/>
          <Route path='/dictionary' element={<Dictionary/>}/>
          <Route path='/dictionary/:search' element={<Definition/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/404' element={<NotFound/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Header>
    </BrowserRouter>
  </LoginContext.Provider>
  );
}

export default App;
