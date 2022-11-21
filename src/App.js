import './index.css';
import Employee from './components/Employee'; // ./ means search in the same dir   --> u can use <Employee /> instead of <Employee> </Employee>
import {useState} from 'react'; //chera Employee ro to {} nazashti chun toye employee export default karde bodim
import {v4 as uuidv4} from 'uuid';



function App() {
  //! number one rule of state is you never assign a value to the var directly you always go through set function like setRole in below
  const [role,setRole] = useState('dev'); //role ye state hast na variable , setRole func hast va role ro set mikune - use set ham meghdare default migire ke dev dadim
  let role2='dev';
  const [employees,setEmployees] = useState(
      [
        {
          id :1,
          name: "Logan",
          role:"Expert",
          img:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/21/1464175888-hugh-jackman-muscles-claws-in-the-wolverine.jpg?crop=0.628xw:1.00xh;0.194xw,0&resize=480:*",
          alt: "Logan is missing", 
        },

        {
          id: 2,
          name: "X",
          role:"Mentor",
          img:"https://assets.entrepreneur.com/content/3x2/2000/20160901055636-ProfessorX.jpeg?auto=webp&quality=95&crop=16:9&width=675",
          alt: "X is missing",
        },

        {
          id:3,
          name: "Dead pool",
          role:"comedian",
          img:"https://i.pinimg.com/564x/fd/bc/a8/fdbca800caa7f8deeee2554c7a5ea54e.jpg",
          alt: "Dead pool is missing",
        },

        {
          id:4,
          name: "Magneto",
          role:"Expert",
          img:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Magneto.X-Men-Series.webp",
          alt: "Magneto is missing",
        },

        {
          id:5,
          name: "Cyclops",
          role:"Expert",
          img:"https://grantland.com/wp-content/uploads/2014/04/cyclops-hp.gif?w=706",
          alt: "Cyclops is missing",
        },

        {
          id:6,
          name: "Jane",
          role:"Expert",
          img: "https://static.tvtropes.org/pmwiki/pub/images/jeangrey.jpg",
          alt:  "Jane is missing",
        },

      ]
  );
  
  
  function updateEmployee(id,newName , newRole) // id? which employee to update . jaye newName va newRole mitoni object ham bezri
  {
    console.log('updateEmployee inside App.js');
    //create a new variable and assign it with setEmployees
    const updatedEmployess = employees.map((employee)=>{
      if(id===employee.id)
      {
        return {...employee , name: newName , role: newRole}; //... to expand any attributes of employee and put it in curly braces which is a new object --> ... is spreading if you wanna search - age doost nadari az ... use kuni bayad hame property har o benvisi masalm img:newImg ke bayad newImg ro ham be onvan parameter dar func begiri. albate mitoni benvisi img:employee.img ke hamoon ghabli bemoone vali nokte ine ke age ... nazari bayad hame ro bezari
      }
      else{
        return employee;
      }
    }); 
    setEmployees(updatedEmployess);
  }
  
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

          <div className='flex flex-wrap justify-center'>
            {employees.map( (employee)=>{
              //console.log(employee);
              console.log(uuidv4());
                return (<Employee keyGuid={uuidv4()} key={employee.id} id={employee.id} name ={employee.name} role ={employee.role} img ={employee.img} alt={employee.alt} updateEmployee={updateEmployee}/> ); //return age multiple line bod dar () bezaresh vagarna niazi nist
              } ) }         
          </div>
      </>
      : <p>you are not authorized to see the employee</p>}
    </div>
  );
}

export default App;
