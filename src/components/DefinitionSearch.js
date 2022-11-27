import { useState , useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function DefinitionSearch(){
    const [word , setWord] = useState('');
    // const [word2, setWord2] = useState('');

    const navigate = useNavigate();
//////////////////////////////////////////////////////////////
    ///option1) No dependency array ---> update for any state change

    // useEffect(()=>{
    //     console.log("State Updated",word+" "+word2);
    // });


    ///option2) Empty dep array --> execute once

    // useEffect(()=>{
    //     console.log("State Updated",word+" "+word2);
    // } , []);

    ///option3) restricting to a state 

    // useEffect(()=>{
    //     console.log("State Updated",word+" "+word2); //word2 inja chun async hast momkene hanooz beroz nashode bashe vali word hatam berooz shode chun useEffect arg dovomesh ro word dadim
    // } , [word]);
////////////////////////////////////////////////////////////////

    ///Separation of concerns
    useEffect(()=>{
        console.log("State Updated",word); 
    } , [word]);

    // useEffect(()=>{
    //     console.log("State Updated",word2); 
    // } , [word2]);

    return (
        <form className="flex space-between space-x-2 max-w-[300px]" 
            onSubmit={()=>{
            navigate('/dictionary/'+word);
        }}>
            <input className="shrink min-w-0 px-2 py-1 rounded" //shrink ro deghat kun ke tag e parent bayad flex neveshte bashi va zeman age min-w-0 ro nadi kar nemikune chun min-w default dare element ha --> alan bara mobile display ham behbod peyda kard
                placeholder="Dinosaur" type="text" onChange={(e)=>{ 
                setWord(e.target.value); //mohem ---> setWord function is asynchronous so they are not guaranteed to have the result immediately after so the console below have problems
                //console.log paeen khoob nist va bayad dar useEffect bala bashse --> khoodet chek kun
                // console.log("State Updated",word); //hanoz momkene set nashode bahse vase hamin khoob shayad log nakune --> ama age dar useEffect console bezari kar mikune chun pas az update shodan state kar mikune
            }} />
            {/* <h2>Let's get the defintion for {word}</h2> */}
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded"
             onClick={()=>{
                //console.log("click");
                //navigate('/definition/'+ word /*, {replace:true}*/); //replace true vaghti back mizani bad az search be page e ghabltar az dictionary ke ghab az dictionary tosh bodi mire --> history
            }}>Search</button>

{/* 
            <input type="text" onChange={(e)=>{ 
                setWord2(e.target.value); //mohem ---> setWord function is asynchronous so they are not guaranteed to have the result immediately after so the console below have problems
                //console.log paeen khoob nist va bayad dar useEffect bala bashse --> khoodet chek kun
                // console.log("State Updated",word); //hanoz momkene set nashode bahse vase hamin khoob shayad log nakune --> ama age dar useEffect console bezari kar mikune chun pas az update shodan state kar mikune
            }} />
            <h2>Let's get the defintion for {word2}</h2> */}
        </form>
    )
}