import {useState , useEffect, useLayoutEffect} from 'react'


export default function useFetch(url){
    const [data , setData] = useState();
    const [errorStatus , setErrorStatus] = useState();

    useEffect(()=>{
        fetch(url).then((response)=>{
            if (!response.ok){
                throw(response.status);
            }
            return response.json(); //gives us a promise
        }).then((data)=>{
            setData(data);
        }).catch((e)=>{
            setErrorStatus(e);
        });
    } , []); //execute once on an initial load
    
    return [data , errorStatus]; //errorStatus ro ham bargardonim ta dar component ha betoonim 404 ya 401 ya ina ro handle kunim
}