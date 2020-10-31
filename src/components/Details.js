import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

const Details = () =>{
    const {id}=useParams();
    const [detail, fetchDetail]=useState(null);
    
      useEffect(()=>{
        const fetchApi = async () =>{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            fetchDetail(response.data)
          };
        fetchApi();
        
    },[id]);

    
    return (
    <div>
        { detail !== null ?
        <div>
        <h1>CUSTOMER'S INFO</h1>
        <ul>
            <li>name: {detail.name}</li>
            <li>username: {detail.username}</li>
            <li>email: {detail.email}</li>
            <li>company: {detail.company.name}</li>
            <li>website: {detail.website}</li>
            <li>address: 
                <ul>
                    <li>street: {detail.address.street}</li>
                    <li>suite: {detail.address.suite}</li>
                    <li>city: {detail.address.city}</li>
                    <li>zipcode: {detail.address.zipcode}</li>
                </ul>
            </li>
        </ul>
        <Link to='/'> <button className="btn draw-border" >Back To Homepage</button></Link>
        </div> : <CircularProgress/>}
    </div>);
};

export default Details;