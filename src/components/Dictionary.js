import { useState , useEffect } from "react";
export default function Dictionary(){
    const [word , setWord] = useState('');
    
    useEffect(()=>{
        console.log("State Updated",word);
    })

    return (
        <>
            <input type="text" onChange={(e)=>{ 
                setWord(e.target.value); //mohem ---> setWord function is asynchronous so they are not guaranteed to have the result immediately after so the console below have problems
                //console.log paeen khoob nist va bayad dar useEffect bala bashse --> khoodet chek kun
                // console.log("State Updated",word); //hanoz momkene set nashode bahse vase hamin khoob shayad log nakune --> ama age dar useEffect console bezari kar mikune chun pas az update shodan state kar mikune
            }} />
            <h1>Let's get the defintion for {word}</h1>
        </>
    )
}