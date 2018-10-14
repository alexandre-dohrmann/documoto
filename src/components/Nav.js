import React from 'react';


const Nav = () => {

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            </div>
            <div className="mx-auto order-0">
                <img src={"/images/documoto-hp.png"} className="navbar-brand mx-auto app-logo" alt="logo" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link nav-links" href="/pages">Home</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;