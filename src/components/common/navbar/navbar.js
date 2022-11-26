import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>
  <React.Fragment>
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/service'>Service</Link>
        </li>
        <li>
          <Link to='/team'>Team</Link>
        </li>
      </ul>
    </div>
  </React.Fragment>;

export default Home;