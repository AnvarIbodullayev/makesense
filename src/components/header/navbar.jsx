import React, { Component } from 'react'
import linear from "../assets/linear.png";

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <a href="#" className="navbar-brand">Makesense</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <img src={linear} className="w-100" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">PORTFOLIO</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">ABOUT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
