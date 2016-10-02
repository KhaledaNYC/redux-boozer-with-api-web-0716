import React from 'react';
import NavBar from './nav_bar';
import { Link } from 'react-router';

export default (props) => {
    return (
      <div>
    < NavBar  title="🍹🍸🍹🍸🍹🍸Boozr🍹🍸🍹🍸🍹🍸" url="/" />
        <div className='container'>
          <Link to="/cocktails">Get yo drank on!</Link><br></br>
          <Link to="/cocktails/new">Create a drank</Link>
          { props.children }
        </div>

      </div>
    )
};
