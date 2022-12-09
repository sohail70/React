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
  const [loggedIn , setLoggedIn] = useState(localStorage.access ? true : false);

  function changedLoggedIn(value){
    setLoggedIn(value);
    if( value == false)
    {
      localStorage.clear(); // to remove the access and refresh token when ever the user is logged out --> Deghat kun ke in kule localStorage ro pak mikune pas age az localStorage vase darkmode va light mode dari use mikuni behtarespecifically access and refresh token ro delete kuni
    }
  }

  return (
  <LoginContext.Provider value={[loggedIn,changedLoggedIn]}>
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
