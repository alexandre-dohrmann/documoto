import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Pages from '../components/Pages';


const Nav = () => {

    return (
        <div>
            <div className="home-header-div">
                <div className="h1-div">
                    <img src={"/images/documoto.png"} className="App-logo" alt="logo" />
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="nav navbar-nav">
                    <li>
                        <Link className="nav-links m-4" to="/">Documoto Home</Link>
                    </li>
                </ul>
            </nav>
            <Pages />
        </div>
    );
}

export default Nav;