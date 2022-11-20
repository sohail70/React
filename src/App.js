import './App.css';
import Employee from './components/Employee'; // ./ means search in the same dir   --> u can use <Employee /> instead of <Employee> </Employee>
import {useState} from 'react'; //chera Employee ro to {} nazashti chun toye employee export default karde bodim
function App() {
  //! number one rule of state is you never assign a value to the var directly you always go through set function like setRole in below
  const [role,setRole] = useState('dev'); //role ye state hast na variable , setRole func hast va role ro set mikune - use set ham meghdare default migire ke dev dadim
  let role2='dev';
  console.log("We are about to list the employees");
  const showEmployess = true; //ghable return mishe var ham sakht - 
  return ( //chizi ke return mishe jsx hast ke shabih hamoon html hast --> albate logic ham mishe bargardond!
  // vase inke code js bezani toye paeen bayad ono to {} bezari
  //alabte deghat kun ke hamishe bayad single element bargardoni dar return pas kule tag haro bendaz to <> </> ya tag e div
  // har baskh code js ro to {} bezar
    <div className="App">
      {console.log("we are inside the return")} 
      {showEmployess ?
      <>
        <input type="text" onChange={(e)=>{
          console.log(e.target.value);
          //role2 = e.target.value; ---> in javab nemide yani baes nemishe Employe dovom yani abby set beshe --> solution use kardan az state hast ke bala import kardim va ba useState ijadesh kardim va ba setRole set esh mikunim --> state chun be UI vasl mishe vali variable na
          setRole(e.target.value);
        }} 
        />
          <Employee name="zart" role="intern"></Employee> 
          <Employee name="abby" role={role}/>  
          <Employee name="sam"/>
      </>
      : <p>you are not authorized to see the employee</p>}
    </div>
  );
}

export default App;
