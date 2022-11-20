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