import React, { Component } from 'react';
import Button from '../button/button';
import './footer.css';
import f_img from '../assets/footer_image.webp';
import instagram from '../assets/SocialMedia/instagram.svg';
import behance from '../assets/SocialMedia/behance.svg';
import linkedin from '../assets/SocialMedia/linkedin.svg';

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="bg"></div>
                <div className="footer_textBox text-center">
                    <h2>About Us</h2>
                    <div className="footer_image">
                        <img className="w-100" src={f_img} />
                    </div>
                    <h3>Makense Team</h3>
                    <h4>Developer</h4>
                </div>
                <div className="container">
                    {/* footer_cont */}
                    <div className="footer_cont">
                        <div className="row">
                            {/* 1 */}
                            <div className="footer_block col-xl-6 col-12">
                                <p>Lorem, ipsum dolor sit amet 
                                    consectetur adipisicing elit.
                                    Ab assumenda vel omnis, sequi unde modi.
                                </p>
                                <p>Lorem, ipsum dolor sit amet 
                                    consectetur adipisicing elit. 
                                    Ab assumenda vel omnis, sequi unde modi 
                                    facilis nulla perferendis eveniet quae repudiandae. 
                                    Quaerat, nobis. Itaque natus, repudiandae eos aspernatur sapiente aut.
                                </p>
                                <p>Lorem, ipsum dolor sit amet 
                                    consectetur adipisicing elit. 
                                    Ab assumenda vel omnis, sequi unde modi 
                                    facilis nulla perferendis eveniet quae repudiandae. 
                                    Quaerat, nobis. Itaque natus, repudiandae eos aspernatur sapiente aut.
                                </p>
                            </div>
                            {/* 2 */}
                            <div className="footer_block col-xl-6 col-12">
                            <p>Lorem, ipsum dolor sit amet 
                                    consectetur adipisicing elit.
                                    Ab assumenda vel omnis, sequi unde modi.
                                </p>
                                <p>Lorem, ipsum dolor sit amet 
                                    consectetur adipisicing elit. 
                                    Ab assumenda vel omnis, sequi unde modi 
                                    facilis nulla perferendis eveniet quae repudiandae. 
                                    Quaerat, nobis. Itaque natus, repudiandae eos aspernatur sapiente aut.
                                </p>
                                <p>Lorem, ipsum dolor sit amet 
                                    consectetur adipisicing elit. 
                                    Ab assumenda vel omnis, sequi unde modi 
                                    facilis nulla perferendis eveniet quae repudiandae. 
                                    Quaerat, nobis. Itaque natus, repudiandae eos aspernatur sapiente aut.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Interested text */}
                    <div className="footer_down">
                        <h2>Interested To Work Us?</h2>
                        <Button>
                            <text>LET'S TAL!</text>
                        </Button>
                        <div className="footer_icons">
                            <div className="icons_item">
                                <img className="w-100" src={instagram} />
                            </div>
                            <div className="icons_item">
                                <img className="w-100" src={behance} />
                            </div>
                            <div className="icons_item">
                                <img className="w-100" src={linkedin} />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
