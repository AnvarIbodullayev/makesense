import React, { Component } from 'react';
import Button from '../button/button';
import './sectionWorks.css';

export default class SectionWorks extends Component {
    render() {
        return (
            <section id="sectionWorks">
                <div className="textBox text-center">
                    <h2>What We Do</h2>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        {/* 1 */}
                        <div className="work_item col-xl-12 col-12">
                            <div className="work_item__card">
                                <div className="c_card left blue"></div>
                                <div className="c_card right">
                                    <div className="c_card__text">
                                        <h1>Plumbing<br /> Company</h1>
                                        <p>Branding, Web site</p>
                                        <Button>
                                            <text>VIEW PROJECT</text>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="work_item col-xl-12 col-12">
                            <div className="work_item__card">
                                <div className="c_card right ">
                                    <div className="c_card__text">
                                        <h1>Pop Music<br /> Artist</h1>
                                        <p>Branding, Web site</p>
                                        <Button>
                                            <text>VIEW PROJECT</text>
                                        </Button>
                                    </div>
                                </div>
                                <div className="c_card left bak">
                                    
                                </div>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className="work_item col-xl-12 col-12">
                            <div className="work_item__card">
                                <div className="c_card left blue"></div>
                                <div className="c_card right">
                                    <div className="c_card__text">
                                        <h1>Construction<br /> Company</h1>
                                        <p>Branding, Web site</p>
                                        <Button>
                                            <text>VIEW PROJECT</text>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
