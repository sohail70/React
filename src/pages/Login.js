import { useState } from 'react';

export default function Login() //agar Login ro ba l kochak benvisi error mide
{
    const [username , setUsername] = useState();
    const [password , setPassword] = useState();
    function login(){}
    return (

            <form className="m-2 w-full max-w-sm" id="customer" onSubmit={login}>
                    
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
                </form>

    )

}