import React from 'react';
import CustomerCard from './CustomerCard';


const UserList = ({info}) =>{
    const userDetails = info.map(user => 
        <div><CustomerCard key={user.id} data={user}/></div>
     )
    return userDetails;

};

export default UserList;
