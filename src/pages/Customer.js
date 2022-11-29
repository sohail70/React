import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import { Link } from "react-router-dom";

export default function Customer(){
    const {id} = useParams(); //useParam returns the object but we only want the id so we put it in {} to destructure that
    const [customer , setCustomer] = useState();
    useEffect(()=>{
        console.log('useEffect'); //dobar useEffect ro mibini chun strict mode et active hast --> felan bezar bashe chun dar dev mode hastim
        const url = 'http://localhost:8000/api/customers/' + id;
        fetch(url)
        .then((response)=>{return response.json()})
        .then((data)=>{
            setCustomer(data.customer); //data e ma dar backend chanta property dare vase hamiin az dot use kardim
        })
    } , []);
    return (
        <>
            {customer ? 
            <div>
                <p>{customer.id}</p>
                <p>{customer.name}</p>
                <p>{customer.industry}</p>
            </div> 
            
                    : null}
            
            <Link to='/customers'>Go back</Link>
        </>
    );
}