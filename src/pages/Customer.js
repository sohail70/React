import { useParams , useNavigate, Navigate } from "react-router-dom";
import { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import NotFound from "../components/NotFound";
import { baseUrl } from "../shared";


export default function Customer(){
    const {id} = useParams(); //useParam returns the object but we only want the id so we put it in {} to destructure that
    const [customer , setCustomer] = useState();
    const [tempCustomer , setTempCustomer] = useState();
    const [notFound , setNotFound] = useState();
    const [changed , setChanged] = useState(false);
    const [error , setError] = useState();  

    const navigate = useNavigate();
    

    useEffect(()=>{ // ta vaghti update mikunim input haye paeen dar return ro ye chizi benvise --> tempCustomer ye state ast va useEffect state change ro mifahme
        // console.log('customer' , customer);
        // console.log('temp customer' , tempCustomer); 
        // console.log(changed);
        //////////////////////////////////////////////////////j
        if(!customer) return;
        if(!tempCustomer) return;
        console.log(customer , tempCustomer);
        let equal = true;
        if(customer.name !== tempCustomer.name){
            equal = false;
        }

        if(customer.industry !== tempCustomer.industry){
            equal = false;
        }

        if(equal){
            setChanged(false);
        }
    });

    useEffect(()=>{
        console.log('useEffect'); //dobar useEffect ro mibini chun strict mode et active hast --> felan bezar bashe chun dar dev mode hastim
        const url =baseUrl+'api/customers/' + id;
        fetch(url)
        .then((response)=>{
            if(response.status===404)
            {
                // navigate('/404'); //ravesh 1:redirect to a 404 page (new URL)
                setNotFound(true); //ravesh 2: render a 404 compoent in this page

            }
            if(!response.ok)
            {
                // console.log(response);
                throw new Error('Sth went wrong, try again later');
            }

            return response.json();
        })
        .then((data)=>{
            setCustomer(data.customer); //data e ma dar backend chanta property dare vase hamiin az dot use kardim
            setTempCustomer(data.customer);
            setError(undefined);
        })
        .catch((e)=>{
            setError(e.message);
        })
    } , []);


   function updateCustomer()
   {
       const url = baseUrl + 'api/customers/' + id;
       fetch(url , {method: 'POST' , headers: {'Content-Type': 'application/json'}  , body:JSON.stringify(tempCustomer)})
       .then((response)=>{
        //    console.log('response',response);
            if(!response.ok) throw new Error('Sth went wrong');
            return response.json();
        })
       .then((data)=>{
            setCustomer(data.customer);
            setChanged(false); //vaghti successful shod false mikunim ta button ha hazf beshe bad az save kardan
            console.log(data); //updated object from the data base
            setError(undefined);
       })
       .catch((e)=>{
            // console.log('e',e);
            setError(e.message); //age 'e' khali bezari cosnole error mide --> objects are not valid as a react child --> bayad string esh yani e.message ro begiri
            
       })
   } 

    return (
        <>
            {notFound? <><NotFound/> <p>The customer with id {id} was not found </p></>: null}
            {customer ? 
            <div>
                <p className= "m-2 block px-2" type="text">ID: {tempCustomer.id}</p> 
                <input className= "m-2 block px-2" type="text" value={tempCustomer.name} onChange={(e)=>{ //e is the event
                    setChanged(true);
                    setTempCustomer({...tempCustomer , name:e.target.value}) ; //...temCustomer ke id ro mizere az ghabl va e.target.value har chi to input gozashti ro minvise
                }}/>
                <input className= "m-2 block px-2" type="text" value={tempCustomer.industry} onChange={(e)=>{
                    setChanged(true);
                    setTempCustomer({...tempCustomer , industry:e.target.value}) ;
                }}/>
                {changed ? <><button className="m-2" onClick={(e)=>{
                    setTempCustomer({...customer}); //agar cancel ro bezani bargarde be halate avalie
                    setChanged(false);
                    }}>Cancel</button> {' '}
                    <button className="m-2" onClick={updateCustomer}>Save</button> </>: null}
            <button  onClick={(e)=>{
                console.log("Deleting...");
                const url = baseUrl + 'api/customers/' + id; // id for which item you are deleting
                fetch(url , {method:'DELETE', headers:{'Content-Type': 'application/json'}}).then((response)=>{
                    if(!response.ok)
                    {
                        throw new Error("sth went wrong");
                    }
                    // return response.json();// ino niazi nist --> hcun then e paeen nizai nist
                    //assume things went well
                    navigate('/customers');
                })
                // .then((data)=>{}) // ino nizai nist chun dar Backend dar views.py dar baskhshe Delete Http_no_content ro miferestim pas data ee nemiad ke bakhym az in the nuse kunim
                .catch((e)=>{
                        console.log(e);
                        setError(e.message); // if there is a problem deleting it
                    })
            }}>Delete</button> 
            
            </div> 
                    : null}

                {error? <p>{error}</p> : null}
            <br />
            <Link to='/customers'>Go back</Link>
        </>
    );
}