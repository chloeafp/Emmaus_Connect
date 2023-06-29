import React from 'react';

const Checkbox = ({name}) => {
    return (
        <div className='flex gap-3'>
            <input type="checkbox"/>
            <label htmlFor="">{name}</label>
            
        </div>
    );
};

export default Checkbox;