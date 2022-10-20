import React from "react";
import './App.css';
import Home from  "./pages/Homepage";
import Footer  from "./components/footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {Route, Redirect, Switch} from "react-router-dom";


function App() {
  return (
     <>
      <Navbar/>
        <Switch>
            <Route exact path= "/"  component={Home} />
            <Route exact path= "/contact"  component={Contact} />
            <Route exact path= "/about"  component={About} />
            <Route exact path= "/register"  component={Register} />
            <Route exact path= "/login" component={Login}/>
        </Switch>
        <Footer/>
     </>
  );
}

export default App;
