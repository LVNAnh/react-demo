import React, { useState } from 'react';
import PropTypes from 'prop-types';

Counter.propTypes = {
    
};

function Counter(props) {
    const [Count, setCount] = useState(0);
    return (
        <div>
            <p>{Count}</p>
            <button className='border-2' onClick={()=>setCount(x=>x+1)}>Increase</button><br></br>
            <button className='border-2' onClick={()=>setCount(x=>x-1)}>Decrease</button>
        </div>
    );
}

export default Counter;