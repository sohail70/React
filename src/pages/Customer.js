import { useParams , useNavigate, Navigate } from "react-router-dom";
import { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import NotFound from "../components/NotFound";
import { baseUrl } from "../shared";


export default function Customer(){
    const {id} = useParams(); //useParam returns the object but we only want the id so we put it in {} to destructure that
    const [customer , setCustomer] = useState();
    const [notFound , setNotFound] = useState();
    const navigate = useNavigate();

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
            return response.json()
        })
        .then((data)=>{
            setCustomer(data.customer); //data e ma dar backend chanta property dare vase hamiin az dot use kardim
        })
    } , []);


    

    return (
        <>
            {notFound? <><NotFound/> <p>The customer with id {id} was not found </p></>: null}
            {customer ? 
            <div>
                <p>{customer.id}</p>
                <p>{customer.name}</p>
                <p>{customer.industry}</p>
            </div> 
            
                    : null}
            <button onClick={(e)=>{
                console.log("Deleting...");
                const url = baseUrl + 'api/customers/' + id; // id for which item you are deleting
                fetch(url , {method:'DELETE'}).then((response)=>{
                    if(!response.ok)
                    {
                        throw new Error("sth went wrong");
                    }
                    // return response.json();// ino niazi nist --> hcun then e paeen nizai nist
                    //assume things went well
                    navigate('/customers');
                })
                // .then((data)=>{}) // ino nizai nist chun dar Backend dar views.py dar baskhshe Delete Http_no_content ro miferestim pas data ee nemiad ke bakhym az in the nuse kunim
                .catch(()=>{
                        console.log(e);
                    })
            }}>Delete</button> 
            <br />
            <Link to='/customers'>Go back</Link>
        </>
    );
}