import React, { useEffect } from "react";
// import { useForm } from 'react-hook-form';



// 3l4an a2dr a3ml edit llobject aw array llm7twayat bta3tw b3ml spread operator
// 3l4an a3ml edit llproperties bta3t  b3ml spread operator 

export default function Login() {

    const {  // this built in hook you cannot change its name
        handleSubmit,    // this is used to handle the submit event
        register,
        formState: { errors },
    } = useForm();
    const login = (data) => {
        console.log(data);
    };


    useEffect(() => {    // it takes two parameters the first one is the function and the second one is the array of dependencies
        // here we use the use effect to make the page render only once
        
        console.log("mounting phase");  //call in the mounting phase

    },[])  
    // array is empty that means that it is in mounting phase

    useEffect(() => {    // it takes two parameters the first one is the function and the second one is the array of dependencies

        console.log("updating phase");  //call in the updating phase because the array is not empty
    },[isAuth]) // this means that the function will be called only when the isAuth value is changed


    useEffect(() => {    // it takes two parameters the first one is the function and the second one is the array of dependencies
        () => {
            console.log("unmounting phase");  //call in the unmounting phase
        }

    },[])
    return <>

<form onSubmit={() => {handleSubmit(login);}}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        name="emil"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        // this instead of using target mehtod to acces each value 
                        {...regsiter("email", {required: "Email is required", pattern: /^\S+@\S+$/i, message: "Invalid email"})}
                          // we use spread operator to edit its properties
                          // here the curly braces are used to write logic in the input field
                    />
                         {errors.email&&<p>{errors.email.message}</p>}  
                         {/* // this is used to display the error message for the email field */}


                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        {...regsiter("password", {required: "password is required", pattern: /^\S+@\S+$/i, message: "Invalid email"})}

                     
                    />
                    {errors.password&&<p>{errors.password.message}</p>}  

                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>

    
}