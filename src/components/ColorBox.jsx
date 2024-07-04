import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    
};

function ColorBox(props) {
    const [color, setColor] = useState("white");
    return (
        <div>
            <p>{color}</p>
            <button className='border-2 ' onClick={() => setColor('black')}>Change to black</button><br />
            <button className='border-2' onClick={() => setColor('white')}>Change to white</button>
        </div>
    );
}

export default ColorBox;