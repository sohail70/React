import './App.css';
import Employee from './components/Employee'; // ./ means search in the same dir   --> u can use <Employee /> instead of <Employee> </Employee>

function App() {
  console.log("We are about to list the employees");
  const showEmployess = true; //ghable return mishe var ham sakht
  return ( //chizi ke return mishe jsx hast ke shabih hamoon html hast --> albate logic ham mishe bargardond!
  // vase inke code js bezani toye paeen bayad ono to {} bezari
  //alabte deghat kun ke hamishe bayad single element bargardoni dar return pas kule tag haro bendaz to <> </> ya tag e div
    <div className="App">
      {showEmployess ?
      <>
        <Employee></Employee> 
        <Employee/>  
        <Employee/>
      </>
      : <p>you are not authorized to see the employee</p>}
    </div>
  );
}

export default App;
