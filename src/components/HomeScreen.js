import React from 'react';
import Banner from '../components/Banner.js';
import '../components/HomeScreen.css';
import Nav from '../components/Nav.js';

function HomeScreen() {
  return (
    <div className="homeScreen">
        <Nav />
        
        <Banner />

        {/* ROW */}

    </div>
  )
}

export default HomeScreen;