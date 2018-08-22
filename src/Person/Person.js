import React from 'react';
import classes from './Person.css';

const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click} >I'm {props.name}, I'm {props.age} year old</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;