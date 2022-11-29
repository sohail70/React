import { useEffect , useState } from "react";
import { Link } from "react-router-dom";
export default function Customers(){
    const [customers , setCustomers] = useState();
    useEffect(()=>{
        console.log("Fetching...");
        fetch('http://localhost:8000/api/customers/') // forward slash akhar moheme
        .then((response)=>{return response.json()}) //reponse is here -->mitoni {} va return ro ham nazari
        .then((data)=>{ //data to assign to some state
            console.log(data);
            setCustomers(data.customers);  // cutomers array e dakhele object ro migirim ke bottonim roye array map bezanim
        }) 
    },[]); //remmeber the empty dependency array --> to do this only once in initial load
    return(
        <>
            <h1>Here are out customers</h1>
            {customers? customers.map((customer)=>{
                return <p><Link to={"/customers/"+customer.id}>{customer.name}</Link></p>
            }) : null}
        </>
    );
}