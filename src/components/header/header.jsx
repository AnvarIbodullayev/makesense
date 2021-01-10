import React, { Component } from 'react';
import Button from '../button/button';
import './header.css';
import Navbar from './navbar';

export default class Header extends Component {
    render() {
        return (
            <header>
                <main className="container">
                    <Navbar />
                    <div className="textBlock text-center">
                        <div>
                            <h1>Grow Your <br />Business Online</h1>
                            <h6>It's time change things</h6>
                            <Button>
                                <text>LET'S TALK!</text>
                            </Button>
                        </div>
                    </div>
                </main>
            </header>
        )
    }
}
