
import {useState, useEffect } from "react"


export default function Definition(){
    const [word , setWord] = useState();

    useEffect(()=>{
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello') //jaye hello mitoni ye vocab dg bezari
            .then((response) => response.json())
            .then((data) => {
                setWord(data[0].meanings);
                console.log(data[0].meanings);
            });
    },[]); //Empty dep array --> exec once
    return (
    <>
        <h1>Here is a definition: </h1>
        {word.map((meaning)=>{
            return <p>
                        {meaning.partOfSpeech +' '}:
                        {meaning.definitions[0].definition}
                    
                   </p>
        })}
    </>
    );
    
}