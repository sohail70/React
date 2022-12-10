import { useState , useEffect , useContext} from 'react';
import { baseUrl } from '../shared';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';

export default function Login() //agar Login ro ba l kochak benvisi error mide
{
    const [username , setUsername] = useState();
    const [password , setPassword] = useState();
    const [email , setEmail] = useState();

    const location = useLocation();
    const navigate = useNavigate();

    const [loggedIn , setLoggedIn] = useContext(LoginContext);

    useEffect(()=>{ //that will log users out automatically if they visit this page --> chun age az ghab login bashi bad register kuni kheili jaleb nist
        localStorage.clear();
        setLoggedIn(false);
    },[]);

    useEffect(()=>{
        // console.log("location: ",location);
        console.log(location?.state?.previousUrl); //chera ? gozashti chun age az page a login be login biay error mide chun null hast state dar location --->pas age null bood undefined beshe pas az ? use mikunim
    })

    function register(e){
        e.preventDefault();
        const url = baseUrl + 'api/register/';
        fetch(url,{method: 'POST' , headers:{'Content-Type': 'application/json'}, body: JSON.stringify({email:email ,username: username , password: password})}).then((response)=>{
            return response.json();
        })
        .then((data)=>{
            localStorage.setItem('access' , data.access);
            localStorage.setItem('refresh' , data.refresh);
            console.log(localStorage); // bebin chi rafte to local storage ---> mifahmi ke token ye object hast ba  property
            setLoggedIn(true);
            // console.log(location);
            // console.log(location?.state);
            // console.log(location?.state?.previousUrl);
            navigate(location?.state?.previousUrl ? location.state.previousUrl : '/customers');
        })

    }
    return (

            <form className="m-2 w-full max-w-sm" id="customer" onSubmit={register}>


                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/4">
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="md:w-3/4">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email"  type="email" value={email} onChange={(e)=>{
                                setEmail(e.target.value);
                            }}/>
                        </div>
                    </div>



                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/4">
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="md:w-3/4">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="username"  type="text" value={username} onChange={(e)=>{
                                setUsername(e.target.value);
                            }}/>
                        </div>
                    </div>


                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/4">
                            <label htmlFor="password">Password</label>
                        </div>

                        <div className="md:w-3/4">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="password" type="password" value={password} onChange={(e)=>{
                                setPassword(e.target.value);
                            }}/>
                        </div>
                    </div>

                    <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>Register</button>
                </form>

    )

}