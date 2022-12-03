import { useEffect , useState } from "react";
import { Link } from "react-router-dom";
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
        </>
    );
}