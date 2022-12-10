import {useState , useEffect, useLayoutEffect} from 'react'


export default function useFetch(url){
    const [data , setData] = useState();
    useEffect(()=>{
        fetch(url).then((response)=>{
            return response.json(); //gives us a promise
        }).then((data)=>{
            setData(data);
        });
    } , []); //execute once on an initial load
    
    return data;
}