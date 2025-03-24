
import React, {Component} from "react";
import Link  from "./Link/Link";


// in mounting phase constructor is called first then render is called then componentDidMount is called 
// in updating phase render is called first then componentDidUpdate is called 

export default class Header extends Component{
    constructor()
    {
        super();  // call the constructor of the parent class 
        console.log("Constructor Called");
        this.state = { // any dynamic data that you want to display in the component should be stored in the state (like a variable)
            username: "Ammar",
            age:20,
            skill:[] // you can add as many variables as you want
        }
    }

    componentDidMount() // this function is called after the render function is called in the mounting phase
    // if i want to apply logic after the render function is called i will write it in the componentDidMount function 
    {
        console.log("Component Mounted");
    }

    componentDidUpdate() // this function is called after the render function is called in the updating phase
    // if i want to apply logic after the render function is called i will write it in the componentDidUpdate function 
    {
        console.log("Component Updated");
    }

    toggleName=()=> {

        this.setState({username:this.state.username === "Ammar" ? "Osame" : "Ammar"})    //ternary operator is used to change the state of the component
        // this.setState({username: this.state.username === "Ammar" ? "Osama" : "Ammar"})
        // if the username is Ammar then change it to Osama else change it to Am
    }


    render() // write anything you want to inside the render component
    {
        console.log("Render Called");
        return <> 




        <Link name="About" url="https://www.google.com"/>
        {/* <Link name="Home" url="http://www.google.come"/>
        <Link name="Products" url="http://www.google.come"/>
         < Link name="Contact" url="http://www.google.come"/> */}

         <img src="/vite.svg" alt="google" width="100px" height="100px"/>  {/* //you import image from public folder*/}



         

    


        
        
        
        
        
         {/* React.Fragment is used to return multiple elements and it is equal to <></> cuz return can only return one element*/}
        {/* <button onClick={this.toggleName}>ChangeName</button> this is a best practice to use arrow function in the onClick event */}
        {/* <p className="h1">Hello {this.state.username}</p>     { /* className must be used instead of class in react cuz class is a reserved keyword in react */}
        {/* <label htmlFor="username">userName</label>  // htmlFor is used instead of for in react cuz for is a reserved keyword in react */}
        {/* <input type="text" id="username"/> */}
        </> 

    }    
}



// the cycle of the component is as follows
// 1- constructor is called
// 2- render is called
// 3- componentDidMount is called

//why the logic in DidMount cuz i want to aplly it on elements that are already rendered










//it isn't necessary to use all these methods in the component
// the only necessary method is the render method 