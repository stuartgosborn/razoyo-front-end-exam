import React from 'react';

export default function Header() {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg ">
                <div
                    className="container-fluid"
                    
                >
                    <div>
                        <a href="/">

                        <h1 className="homeHdr">Selleck Motors</h1>
                        </a>
                        <a href="https://www.youtube.com/watch?v=NBmkbwwDsFo"style={{textDecoration: 'none'}}>

                        <p className="tagLine " >We&apos;ve Got the Goods</p>
                        </a>
                    </div>
                    <button
                        className="navbar-toggler home-link"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse home-link" id="navbarNav" >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Home
                                </a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
