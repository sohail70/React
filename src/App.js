import './App.css';
import Employee from './components/Employee'; // ./ means search in the same dir   --> u can use <Employee /> instead of <Employee> </Employee>

function App() {
  console.log("We are about to list the employees");
  const showEmployess = true; //ghable return mishe var ham sakht
  return ( //chizi ke return mishe jsx hast ke shabih hamoon html hast --> albate logic ham mishe bargardond!
  // vase inke code js bezani toye paeen bayad ono to {} bezari
  //alabte deghat kun ke hamishe bayad single element bargardoni dar return pas kule tag haro bendaz to <> </> ya tag e div
  // har baskh code js ro to {} bezar
    <div className="App">
      {console.log("we are inside the return")} 
      {showEmployess ?
      <>
        <Employee name="zart" role="intern"></Employee> 
        <Employee name="abby" role="nurse"/>  
        <Employee name="sam"/>
      </>
      : <p>you are not authorized to see the employee</p>}
    </div>
  );
}

export default App;
