import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Details from './components/Details';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserList from './components/UserList';

const App = () => {
  const [info, fetchData]=useState([]);
  
  const fetchApi = async () =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    fetchData(response.data)
  };

  


  useEffect(()=>{
    fetchApi();
    
},[]);
  



return(
    <Router>
    <Switch>
      <Route exact path="/"><div  className="container"> <UserList info={info}/> </div></Route>
      {info.length === 0 ? null : <Route exact path="/users/:id"><div  className="container1"><Details dataname={info}/></div></Route>}
    </Switch>
    </Router>);}

export default App;
