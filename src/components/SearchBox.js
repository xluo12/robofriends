import React from 'react';

const SearchBox = ({onInputChange}) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightest-blue'
                   type='search' 
                   placeholder='search robots' 
                   onChange={onInputChange} 
            />
        </div>     
    );
}

export default SearchBox;