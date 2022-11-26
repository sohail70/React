
import {useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import { useParams , useNavigate , Link} from "react-router-dom";
import NotFound from "../components/NotFound";


export default function Definition(){
    const [word , setWord] = useState();
    const [notFound , setNotFound] = useState(false);
    //console.log(useParams());
    let {search} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        // fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello') //jaye hello mitoni ye vocab dg bezari
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+search) //jaye hello mitoni ye vocab dg bezari
            .then((response) => {
                console.log(response.status);
                if(response.status===404)
                {
                    setNotFound(true);
                    // navigate('/404'); // jaye in az componet use kun chun redirect url ro taghir mide vali ma mikhaym kalame wrong emon ham namayesh dade beshe
                }
                return response.json();
            })
            .then((data) => {
                setWord(data[0].meanings);
                //console.log(data[0].meanings);
            });
    },[]); //Empty dep array --> exec once


    if (notFound===true){
        return (
            <>
                <NotFound/>
                <Link to="/dictionary">Search Another</Link>
            </>
        );
    }

    return (
    <>
        {/* <h1>Here is a definition: </h1>
        {word? word.map((meaning)=>{
            return <p key={uuidv4()}>
                        {meaning.partOfSpeech +' '}:
                        {meaning.definitions[0].definition}
                    
                   </p>
        }) : null} */}



        
        {word? 
        <>
        <h1>Here is a definition: </h1>
        {word.map((meaning)=>{
            return <p key={uuidv4()}>
                        {meaning.partOfSpeech +' '}:
                        {meaning.definitions[0].definition}
                    
                   </p>
        })}</>
        : null}
    </>
    );
    
}