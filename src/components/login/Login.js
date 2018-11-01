import React from 'react';
import {Link} from 'react-router-dom';
export default () => (
    <form>
        <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email"></input>
        </div>
        <button><Link to="/home">Login</Link></button>
    </form>
)