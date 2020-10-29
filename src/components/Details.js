import React from 'react';
import {useParams} from 'react-router';
import { Link } from 'react-router-dom';
import Button from './Button';
const Details = ({dataname}) =>{
    const {id}=useParams();
    const filteredLists = dataname.find(number => number.id == id);
    console.log(filteredLists);
    
    return (<div>
        <h1>CUSTOMER'S INFO</h1>
        <ul>
            <li>name: {filteredLists.name}</li>
            <li>username: {filteredLists.username}</li>
            <li>email: {filteredLists.email}</li>
            <li>company: {filteredLists.company.name}</li>
            <li>website: {filteredLists.website}</li>
            <li>address: 
                <ul>
                    <li>street: {filteredLists.address.street}</li>
                    <li>suite: {filteredLists.address.suite}</li>
                    <li>city: {filteredLists.address.city}</li>
                    <li>zipcode: {filteredLists.address.zipcode}</li>
                </ul>
            </li>
        </ul>
        <Link to='/'> <button class="btn draw-border" >Back To Homepage</button></Link>
    </div>);
};

Details.defaultProps = {
    initialValues: {
        dataname:[]
    }
};
export default Details;