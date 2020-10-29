import React from 'react';
import '../App.css';
import Avatar from '@material-ui/core/Avatar';
import Button from './Button';

const CustomerCard = (props) =>{
    
    return <div className="card">
            <Avatar className="card__image">{props.data.name.charAt(0)}</Avatar>           
            <h1 className="card__name">{props.data.name}</h1>
            <p className="card__name1">@{props.data.username}</p>
            <p className="card__name2">{props.data.email}</p>
            <Button data={props.data}/>
            
    </div>
};

export default CustomerCard;