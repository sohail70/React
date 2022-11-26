import { useState , useEffect } from "react";
export default function Dictionary(){
    const [word , setWord] = useState('');
    const [word2, setWord2] = useState('');

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


    ///Separation of concerns
    useEffect(()=>{
        console.log("State Updated",word); 
    } , [word]);

    useEffect(()=>{
        console.log("State Updated",word2); 
    } , [word2]);

    return (
        <>
            <input type="text" onChange={(e)=>{ 
                setWord(e.target.value); //mohem ---> setWord function is asynchronous so they are not guaranteed to have the result immediately after so the console below have problems
                //console.log paeen khoob nist va bayad dar useEffect bala bashse --> khoodet chek kun
                // console.log("State Updated",word); //hanoz momkene set nashode bahse vase hamin khoob shayad log nakune --> ama age dar useEffect console bezari kar mikune chun pas az update shodan state kar mikune
            }} />
            <h2>Let's get the defintion for {word}</h2>


            <input type="text" onChange={(e)=>{ 
                setWord2(e.target.value); //mohem ---> setWord function is asynchronous so they are not guaranteed to have the result immediately after so the console below have problems
                //console.log paeen khoob nist va bayad dar useEffect bala bashse --> khoodet chek kun
                // console.log("State Updated",word); //hanoz momkene set nashode bahse vase hamin khoob shayad log nakune --> ama age dar useEffect console bezari kar mikune chun pas az update shodan state kar mikune
            }} />
            <h2>Let's get the defintion for {word2}</h2>
        </>
    )
}