import { Link } from 'react-router-dom';
import React from 'react';

const Button = (props) =>{
    return <Link to={`/users/${props.data.id}`}> <button class="btn draw-border" >More Details</button></Link>
}

export default Button;

