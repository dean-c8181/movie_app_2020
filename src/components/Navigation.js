import React from 'react';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

function Navigation() {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;