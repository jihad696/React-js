import React, { useState } from "react";
import InputField from "./FormInput";

export default function Auth() {
    const [user, setUser] = useState({
      email: "",
      name: "",
      username: "",
      password: "",
      confirmPassword: ""
    });

    const [error, setError] = useState({});
    const [isLogin, setIsLogin] = useState(true);
  
    const handleChange = (ev) => {
      const { name, value } = ev.target;
      setUser(prev => ({ ...prev, [name]: value }));
  
      switch(name) {
        case "email":
          setError(prev => ({
            ...prev, 
            email: !value.includes("@") ? "Invalid email" : ""
          }));
          break;
        case "username":
          setError(prev => ({
            ...prev, 
            username: value.includes(" ") ? "No spaces allowed" : ""
          }));
          break;
        case "password":
          setError(prev => ({
            ...prev, 
            password: value.length < 8 ? "Password too short" : ""
          }));
          break;
        case "confirmPassword":
          setError(prev => ({
            ...prev, 
            confirmPassword: value !== user.password ? "Passwords don't match" : ""
          }));
          break;
        default:
          break;
      }
    };
  
    const handleSubmit = (ev) => {
      ev.preventDefault();
      console.log(isLogin ? "Login Data:" : "Register Data:", user);
    }; 

    
  
    return (
      <div>
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <InputField
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
                error={error.email}
              />
              <InputField
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </>
          )}
  
          <InputField
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Username"
            error={error.username}
          />
  
          <InputField
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
            error={error.password}
          />
  
          {!isLogin && (
            <InputField
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              error={error.confirmPassword}
            />
          )}
  
          <button type="submit">{isLogin ? "Login" : "Register"}</button>
        </form>
  
        <button onClick={() => setIsLogin(prev => !prev)}>
          {isLogin ? "Switch to Register" : "Switch to Login"}
        </button>
      </div>
    );
}