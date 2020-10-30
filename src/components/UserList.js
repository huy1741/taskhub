import React from 'react';
import CustomerCard from './CustomerCard';

const UserList = ({info}) =>{
    const userDetails = info.map(user => 
       <CustomerCard key={user.id} data={user}/>
     )
    return userDetails;

};

export default UserList;
