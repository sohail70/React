/* //First Example

// define employee component as a function
// we use this comp from another comp such as App.js

function Employee(props){ //Employee is a template ---> not specific employee
    // dakhele html tag age bashi niazi be "" nist mesle Employee-- har var ro to {} mizari ama age dakhle {} bashi niazi be {} vase har var  nist ama vase string bayad "" bezari
    //deghat kun parent comp is responsible for data thats to be displayed --> props inside the child comp should not be changed---> yani value be props nade modfyesh nakun---> inkar dar parent comp yani App dar App.js anjam mishe
    //! pas dar kul vazife in component disply kardan value hast va nachange kardanesh --> change ba parent hast ke ma dar App.js ba state inkaro kardim

    // props.name = "spspsps"; // we are not meant to change the value of gthe props in the child --> error mide --> balke bayad dar parent az tarigh state taghiresh bedi --> state ba var fargh dare --> state can be tied to use interface --> state taghir kune UI uodate mishe automatic
    return( 
    <>    
    <h3>Employee {props.name}</h3>
    <p>{props.role ? props.role: "No role"}</p>
    {props.role ? <p class="role">{props.role} </p> : <p class="norole">No role</p>}
    </>
    )
     //pass name in App.js as an attribute
}


export default Employee; // to use Employee comp inside  other files 


*/

import EditEmployee from "./EditEmployee";


//Example 2 --> adding css after installing tailwind
// py-8 -->padding y axis hast   ---> 8 rem ---> padding-top: 0.5rem; /* 8px */    va  padding-bottom: 0.5rem; /* 8px */
// max-w-sm ---> max width small hast ---> ina hame dar doc e tailwind hast negah kun
// mx-auto ---> margin x auto --> which will center it
// space-y-2  --> space between ro search kun ---> mishe margin-top: 0.5rem; /* 8px */
// sm:py-4 ---> only on small screens hast vaghti sm: ro mibini
function Employee(props){  
    return(
    <div className="m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img className="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={props.img} alt={props.alt}/>
        <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
                {props.name}
            </p>
            <p className="text-slate-500 font-medium">
                {props.role}
            </p>
        </div>
        
        <EditEmployee name={props.name} role={props.role}/>
        
    </div>
  </div> );
}


export default Employee; // to use Employee comp inside  other files 