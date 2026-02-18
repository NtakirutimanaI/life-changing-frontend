import React from 'react';
import { Link } from 'react-router-dom';
import { FloatingScrollToTop } from './FloatingScrollToTop';
import { Chatbot } from './Chatbot';
import { Send, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="ftco-footer ftco-section" style={{
            backgroundColor: '#051a1aff',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.05'%3E%3Cpath d='M30 0L60 30 30 60 0 30z'/%3E%3Cpath d='M30 5L55 30 30 55 5 30z'/%3E%3Cpath d='M30 10L50 30 30 50 10 30z'/%3E%3Cpath d='M30 15L45 30 30 45 15 30z'/%3E%3Cpath d='M30 20L40 30 30 40 20 30z'/%3E%3Cpath d='M30 25L35 30 30 35 25 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            paddingTop: '0px',
            paddingBottom: '0px',
            marginBottom: '0px',
            color: 'rgba(255,255,255,0.9)',
            position: 'relative'
        }}>
            <div style={{
                height: '15px',
                width: '100%',
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='15' viewBox='0 0 40 15' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='15' fill='%23076c5b'/%3E%3Cpath d='M0 15 L20 0 L40 15 M0 10 L20 -5 L40 10 M0 20 L20 5 L40 20' stroke='%23eacfa2' stroke-width='2.5' fill='none'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat-x',
                marginBottom: '56px'
            }}></div>
            <div className="container">

                <div className="row justify-content-center mb-5 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <div className="col-md-10 text-center ftco-animate">
                        <h2 className="mb-2 text-white font-weight-bold" style={{ fontSize: '36px', letterSpacing: '-1px' }}>Stay Connected</h2>
                        <p className="mb-4" style={{ color: 'rgba(204, 201, 201, 0.7)', fontSize: '18px' }}>
                            Subscribe to our newsletter for updates, impact stories, and ways to get involved
                        </p>
                        <form className="subscribe-form d-flex justify-content-center mt-4">
                            <div className="position-relative d-flex align-items-center" style={{ width: '100%', maxWidth: '550px' }}>
                                <input type="email" className="form-control" placeholder="Enter your email"
                                    style={{
                                        height: '60px',
                                        background: 'rgba(255,255,255,0.08)',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        color: '#fff',
                                        borderRadius: '12px',
                                        paddingLeft: '24px',
                                        paddingRight: '160px',
                                        width: '100%'
                                    }} />
                                <button type="submit" className="btn d-flex align-items-center justify-content-center"
                                    style={{
                                        position: 'absolute',
                                        right: '6px',
                                        top: '6px',
                                        bottom: '6px',
                                        padding: '0 25px',
                                        background: '#051a1aff',
                                        color: '#fff',
                                        fontWeight: '700',
                                        borderRadius: '10px',
                                        border: 'none',
                                        whiteSpace: 'nowrap',
                                        fontSize: '15px',
                                        transition: 'all 0.3s ease'
                                    }}>
                                    <Send size={16} className="mr-2" strokeWidth={2} />
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row mb-5">
                    {/* Brand */}
                    <div className="col-md-3">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2 text-white" style={{ fontWeight: 700 }}>LCEO</h2>
                            <p>Empowering vulnerable young women and girls in Rwanda through education, entrepreneurship, and health programs.</p>
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5 display-flex">
                                <li className="ftco-animate"><a href="#" style={{ background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Facebook size={20} strokeWidth={1.5} /></a></li>
                                <li className="ftco-animate"><a href="#" style={{ background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Twitter size={20} strokeWidth={1.5} /></a></li>
                                <li className="ftco-animate"><a href="#" style={{ background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Instagram size={20} strokeWidth={1.5} /></a></li>
                                <li className="ftco-animate"><a href="#" style={{ background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Linkedin size={20} strokeWidth={1.5} /></a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-3">
                        <div className="ftco-footer-widget mb-4 ml-md-4">
                            <h2 className="ftco-heading-2 text-white" style={{ fontWeight: 700 }}>Quick Links</h2>
                            <ul className="list-unstyled">
                                <li><Link to="/about" className="py-2 d-block">About Us</Link></li>
                                <li><Link to="/how-we-work" className="py-2 d-block">How We Work</Link></li>
                                <li><Link to="/strategic-direction" className="py-2 d-block">Strategic Direction</Link></li>
                                <li><Link to="/impact-stories" className="py-2 d-block">Impact & Stories</Link></li>
                                <li><Link to="/resources" className="py-2 d-block">Resources</Link></li>
                                <li><Link to="/contact" className="py-2 d-block">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Get Involved */}
                    <div className="col-md-3">
                        <div className="ftco-footer-widget mb-4 ml-md-4">
                            <h2 className="ftco-heading-2 text-white" style={{ fontWeight: 700 }}>Get Involved</h2>
                            <ul className="list-unstyled">
                                <li><Link to="/donate" className="py-2 d-block">Donate</Link></li>
                                <li><Link to="/contact" className="py-2 d-block">Monthly Giving</Link></li>
                                <li><Link to="/contact" className="py-2 d-block">Volunteer</Link></li>
                                <li><Link to="/contact" className="py-2 d-block">Partner With Us</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div className="col-md-3">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2 text-white" style={{ fontWeight: 700 }}>Contact Us</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li><div className="d-flex align-items-start"><MapPin size={22} className="mr-3 mt-1" style={{ color: '#eacfa2' }} strokeWidth={2} /><span className="text"><strong>Address:</strong> Bugesera District, Nyamata Sector Eastern Province, Rwanda</span></div></li>
                                    <li><a href="tel:+250788123456" className="d-flex align-items-center"><Phone size={22} className="mr-3" style={{ color: '#eacfa2' }} strokeWidth={2} /><span className="text"><strong>Phone:</strong> +250 788 123 456</span></a></li>
                                    <li><a href="mailto:info.lceo@gmail.com" className="d-flex align-items-center"><Mail size={22} className="mr-3" style={{ color: '#eacfa2' }} strokeWidth={2} /><span className="text"><strong>Email:</strong> info.lceo@gmail.com</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row py-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <div className="col-md-12 text-center">
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginBottom: '0' }}>
                            Copyright &copy; {new Date().getFullYear()} Life-Changing Endeavor Organization. All rights reserved.
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
};
