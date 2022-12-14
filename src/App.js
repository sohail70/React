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
import { createContext ,useEffect,useState} from 'react';
import { baseUrl } from './shared';
import Register from './pages/Register';
export const LoginContext = createContext();

function App() {
  
  useEffect(()=>{
    function refreshTokens(){

      if(localStorage.refresh){ // ta age user logout kard chun oonja local storage ro clear kardim dg in run nemishe va khoob ham hast ke vaghti logout kardim in run nashe hamash
        const url = baseUrl+'api/token/refresh/'; //forward slash akhar ro nazari unexpected token eroor mide
        fetch(url,{
          method:'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            refresh: localStorage.refresh,
          })
        }).then((response)=>{
          return response.json();
        }).then((data)=>{
          console.log("TOKEN",data);
          localStorage.access = data.access;
          localStorage.refresh = data.refresh;
          setLoggedIn(true); // just to be sure --> malom nist age bezarim nazarim aya iradi rokh mide ya na? :)
        })
      } 
    }

    
      const minutes = 1000*60 ; //one minute
      refreshTokens(); // ta bare aval ham immediately execute she va 3 minutes sabr nakunim hamoon aval
      setInterval(refreshTokens,minutes*3); //har 3 minutes in useEffect run she

    
  },[]);
  
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
          <Route path='/register' element={<Register/>}/>
          <Route path='/404' element={<NotFound/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Header>
    </BrowserRouter>
  </LoginContext.Provider>
  );
}

export default App;
