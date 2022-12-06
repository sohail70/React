import { data } from "autoprefixer";
import { useEffect , useState } from "react";
import { json, Link } from "react-router-dom";
import AddCustomer from "../components/AddCustomer";
import { baseUrl } from "../shared";

export default function Customers(){
    const [customers , setCustomers] = useState();
    const [show , setShow] = useState(false); //true ke bashe Modal dar AddCustomer open by default mishe vaghti page customer ro baz mikuni
    useEffect(()=>{
        console.log("Fetching...");
        fetch(baseUrl+'api/customers/') // forward slash akhar moheme
        .then((response)=>{return response.json()}) //reponse is here -->mitoni {} va return ro ham nazari
        .then((data)=>{ //data to assign to some state
            console.log(data);
            setCustomers(data.customers);  // cutomers array e dakhele object ro migirim ke bottonim roye array map bezanim
        }) 
    },[]); //remmeber the empty dependency array --> to do this only once in initial load

    function toggleShow(){
        setShow(!show)
    }

    function newCustomer(name , industry){
        
        // console.log('adding customer ...');
        const data = {name: name , industry: industry};
        const url = baseUrl + 'api/customers/'; // forward slash akhar ro nazari error mide bakcedn garche mishe dar backedn ye chizi ro false kard ta niazi for slash e akhari nabashe
        fetch(url , {method:'POST' , headers:{'Content-Type': 'application/json'}, body:JSON.stringify(data)}) //valid body for a fetch
        .then((response)=>{
            if(!response.ok)
            {
                throw new Error('Sth went wrong');
            }
            return response.json(); // in return koja mire? mire to then e badi to variable data  
        }).then((data)=>{
            // assume the add was successful
            // hide the modal
            toggleShow();
            // make sure the list is updated appropriately
            // console.log(data); 
            setCustomers([...customers,data.customer]);
        })
        .catch((e)=>{
            console.log(e);
        });

    }


    return(
        <>
            <h1>Here are our customers</h1>
           
            {customers? customers.map((customer)=>{
                return (
                    <div className="m-2" key={customer.id}>
                        <Link to={"/customers/"+customer.id}>
                            <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded no-underline'>
                                {customer.name}
                            </button>
                        </Link>
                    </div>
                )
            }) : null}
            <AddCustomer newCustomer={newCustomer} show={show} toggleShow = {toggleShow}/>
        </>
    );
}