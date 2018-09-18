import React from 'react';
import WassupRow from './wassup-row';

let WassupList = (props) => 
    <ul className='wassup-list'>
        { props.wassups.map(wassup => 
            <WassupRow wassup={wassup} key={wassup.id} />
        ).reverse() }
    </ul>

export default WassupList;