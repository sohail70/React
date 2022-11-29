import { useEffect , useState } from "react";

export default function Customers(){
    const [customers , setCustomers] = useState();
    useEffect(()=>{
        console.log("Fetching...");
        fetch('http://localhost:8000/api/customers/') // forward slash akhar moheme
        .then((response)=>{return response.json()}) //reponse is here -->mitoni {} va return ro ham nazari
        .then((data)=>{ //data to assign to some state
            console.log(data);
            setCustomers(data);
        }) 
    },[]); //remmeber the empty dependency array
    return <h1>Hello There!</h1>;
}