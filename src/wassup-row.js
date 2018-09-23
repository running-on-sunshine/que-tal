import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let WassupRow = (props) => 
    <li className='wassup-row'>
        <p>{props.wassup.content}</p>

        <Link 
            className='read-more' 
            to={`/wassups/${props.wassup.id}`}
        >Read More</Link>
        
        <button
            className='remove-wassup-button'
            onClick={() => {
                props.dispatch({ type: 'REMOVE_WASSUP', id: props.wassup.id })
            }}
        >Delete</button>
    </li>

let ConnectedWassupRow = connect()(WassupRow);

export default ConnectedWassupRow;