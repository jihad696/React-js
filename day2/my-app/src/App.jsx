

import React from 'react';

// import './App.css';
// import About from './component/About';
// import Header from './component/Header';
// import Portfolio from './component/Portfolio';
// import Skills from './component/Skills';
// import Footer from './component/Footer';
import Register from './component/Register';
import TodoList from './component/toDo';
import Login from './component/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';



function App() {


  return <>
    <Register />
    <TodoList />
    <Login />
    <Header />
    <BrowserRouter>   {/*wrapper exist Here after installing routes packages through npm i react-router-dom command   */}
    <Header />
    <Routes>
      <Route path="/about" element={<About/>} />   {/*path is the url and element is the component to be rendered */}
      <Route path="/Movies/:id" element={<Movies/>} />   {/** /:id means dynamic data */}
      <Route path="contact" element={<Favorites/>} >  {/*nested route u don't have add / in path you write component name only */}
      <Route path="/favorites" element={<Favorites/>} />
      
      
      </Route>     {/*don't forget to add <Outlet/> element in contact component  */}
      <Route path="*" element={<NotFound/>} />
   
    </Routes>
    </BrowserRouter>
 

    </>
  
}

export default App
