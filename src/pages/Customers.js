import { data } from "autoprefixer";
import { useEffect , useState } from "react";
import { json, Link } from "react-router-dom";
import AddCustomer from "../components/AddCustomer";
import { baseUrl } from "../shared";

export default function Customers(){
    const [customers , setCustomers] = useState();
    useEffect(()=>{
        console.log("Fetching...");
        fetch(baseUrl+'api/customers/') // forward slash akhar moheme
        .then((response)=>{return response.json()}) //reponse is here -->mitoni {} va return ro ham nazari
        .then((data)=>{ //data to assign to some state
            console.log(data);
            setCustomers(data.customers);  // cutomers array e dakhele object ro migirim ke bottonim roye array map bezanim
        }) 
    },[]); //remmeber the empty dependency array --> to do this only once in initial load


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
            // make sure the list is updated appropriately
        })
        .catch((e)=>{
            console.log(e);
        });

    }


    return(
        <>
            <h1>Here are our customers</h1>
            <ul>
            {customers? customers.map((customer)=>{
                return (
                    <li key={customer.id}>
                        <Link to={"/customers/"+customer.id}>{customer.name}</Link>
                    </li>
                )
            }) : null}
            </ul>
            <AddCustomer newCustomer={newCustomer}/>
        </>
    );
}