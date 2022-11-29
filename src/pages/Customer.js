import { useParams } from "react-router-dom";

export default function Customer(){
    const {id} = useParams(); //useParam returns the object but we only want the id so we put it in {} to destructure that
    return (
        <>
            <p>{id}</p>
        </>
    );
}