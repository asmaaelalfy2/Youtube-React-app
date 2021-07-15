import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

 
  const onInputChange = (event) => {
    setTerm(event.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
    //   console.log(this.state.term)
    //   console.log(res)
  };

  return (
    <div className='search-bar ui segment'>
      <form className='ui form' onSubmit={onSubmit}>
        <div className='field'>
          <label>Videos</label>
          <input type='text' value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
