import React from 'react';
import { Link } from 'react-router-dom';
import { useLegacyScripts } from '../hooks/useLegacyScripts';
import { User, Users, Shield, Globe, BookOpen, TrendingUp, GraduationCap, Briefcase, Award, ChevronRight } from 'lucide-react';

export const StrategicDirectionPage = () => {
    useLegacyScripts();

    return (
        <>
            <div className="hero-wrap" style={{ backgroundImage: "url('/images/bg_2.jpg')", height: '500px', minHeight: '500px' }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center" style={{ height: '500px', paddingTop: '100px' }} data-scrollax-parent="true">
                        <div className="col-md-7 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
                            <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Empower a Future Today</h1>
                            <p className="mb-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">We support girls, caregivers, and youth by promoting education, health, mentorship, and skills development to strengthen families and build resilient communities.</p>

                            <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><Link to="/about"
                                className="btn btn-white btn-outline-white px-4 py-3">Learn More</Link></p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-counter" id="section-counter" style={{ backgroundColor: '#00594f', padding: '40px 0' }}>
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-md-12 ftco-animate">
                            <h2 className="text-white font-weight-bold" style={{ fontSize: '24px' }}>Our impact in 2024</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 d-flex align-items-center mb-0 ftco-animate">
                            <div className="d-flex align-items-center">
                                <div className="mr-3" style={{ color: 'white', opacity: 0.9 }}>
                                    <Users size={45} strokeWidth={1.5} />
                                </div>
                                <div className="text-white">
                                    <div className="d-flex align-items-baseline">
                                        <strong className="number" data-number="5000" style={{ fontSize: '36px', fontWeight: '800' }}>0</strong>
                                        <span style={{ fontSize: '20px', marginLeft: '2px', fontWeight: '700' }}>+</span>
                                    </div>
                                    <span style={{ fontSize: '13px', textTransform: 'none', opacity: 0.85, display: 'block', lineHeight: '1.2' }}>
                                        Women & girls reached <br /> & empowered
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 d-flex align-items-center mb-0 ftco-animate">
                            <div className="d-flex align-items-center">
                                <div className="mr-3" style={{ color: 'white', opacity: 0.9 }}>
                                    <GraduationCap size={45} strokeWidth={1.5} />
                                </div>
                                <div className="text-white">
                                    <div className="d-flex align-items-baseline">
                                        <strong className="number" data-number="1200" style={{ fontSize: '36px', fontWeight: '800' }}>0</strong>
                                        <span style={{ fontSize: '20px', marginLeft: '2px', fontWeight: '700' }}>+</span>
                                    </div>
                                    <span style={{ fontSize: '13px', textTransform: 'none', opacity: 0.85, display: 'block', lineHeight: '1.2' }}>
                                        Girls stayed in school <br /> through our support
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 d-flex align-items-center mb-0 ftco-animate">
                            <div className="d-flex align-items-center">
                                <div className="mr-3" style={{ color: 'white', opacity: 0.9 }}>
                                    <Briefcase size={45} strokeWidth={1.5} />
                                </div>
                                <div className="text-white">
                                    <div className="d-flex align-items-baseline">
                                        <strong className="number" data-number="450" style={{ fontSize: '36px', fontWeight: '800' }}>0</strong>
                                        <span style={{ fontSize: '20px', marginLeft: '2px', fontWeight: '700' }}>+</span>
                                    </div>
                                    <span style={{ fontSize: '13px', textTransform: 'none', opacity: 0.85, display: 'block', lineHeight: '1.2' }}>
                                        Businesses launched <br /> and thriving
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 d-flex align-items-center mb-0 ftco-animate">
                            <div className="d-flex align-items-center">
                                <div className="mr-3" style={{ color: 'white', opacity: 0.9 }}>
                                    <Award size={45} strokeWidth={1.5} />
                                </div>
                                <div className="text-white">
                                    <div className="d-flex align-items-baseline">
                                        <strong className="number" data-number="300" style={{ fontSize: '36px', fontWeight: '800' }}>0</strong>
                                        <span style={{ fontSize: '20px', marginLeft: '2px', fontWeight: '700' }}>+</span>
                                    </div>
                                    <span style={{ fontSize: '13px', textTransform: 'none', opacity: 0.85, display: 'block', lineHeight: '1.2' }}>
                                        Change Champions <br /> trained as leaders
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section p-0 overflow-hidden" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container-fluid p-0">
                    <div className="row no-gutters d-flex align-items-stretch">
                        {/* Image Side */}
                        <div className="col-md-6" style={{
                            backgroundImage: "url('/images/cause-1.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            minHeight: '450px',
                            position: 'relative'
                        }}>
                            {/* Subtle gradient to transition into the green side */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(to right, rgba(7, 108, 91, 0) 70%, rgba(7, 108, 91, 1) 100%)'
                            }}></div>
                        </div>

                        {/* Content Side */}
                        <div className="col-md-6 d-flex align-items-center" style={{
                            backgroundColor: '#076c5b',
                            padding: '60px 80px',
                            color: '#ffffff'
                        }}>
                            <div className="w-100">
                                <h2 className="text-white font-weight-bold mb-4" style={{
                                    fontSize: '42px',
                                    lineHeight: '1.2',
                                    letterSpacing: '-1px'
                                }}>
                                    Strategic Direction
                                </h2>

                                <p className="mb-4 text-white" style={{ fontSize: '18px', lineHeight: '1.6', opacity: '0.9' }}>
                                    LCEO’s strategic direction defines how we understand change, how we design our programs, and how we achieve results.
                                </p>

                                <p className="mb-5 text-white" style={{ fontSize: '18px', lineHeight: '1.6', opacity: '0.9' }}>
                                    Our work aligns with national and global priorities to achieve sustainable impact for girls and young women, building resilient communities.
                                </p>

                                <Link to="/about" className="d-flex align-items-center text-white font-weight-bold" style={{
                                    fontSize: '16px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    textDecoration: 'none'
                                }}>
                                    LEARN MORE
                                    <div className="ml-2 bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px' }}>
                                        <ChevronRight size={16} className="text-dark" style={{ color: '#076c5b', marginLeft: '0px' }} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ftco-animate mb-5">
                            <div className="p-5 bg-white rounded-lg" style={{ borderRadius: '24px', border: '1px solid rgba(0,0,0,0.05)' }}>
                                <h3 className="mb-4 font-weight-bold" style={{ color: '#076c5b', fontSize: '28px' }}>Our Philosophy</h3>
                                <p className="lead" style={{ color: '#555', lineHeight: '1.8' }}>
                                    LCEO believes that lasting transformation starts with mindset, identity, and mental resilience. We
                                    prioritize human capital development through integrated interventions that strengthen confidence,
                                    psychosocial wellbeing, education access, and economic empowerment. This approach enables girls and young
                                    women to pursue education, achieve economic independence, and emerge as leaders in their communities.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-12 ftco-animate mb-5 text-left">
                            <div className="p-5 bg-white" style={{
                                borderRadius: '24px',
                                border: '1px solid rgba(0,0,0,0.05)'
                            }}>
                                <div className="row mb-5">
                                    <div className="col-lg-7">
                                        <span className="badge badge-light px-3 py-2 mb-3 font-weight-bold" style={{ color: '#076c5b', backgroundColor: '#e2f5f2', borderRadius: '50px', fontSize: '11px', letterSpacing: '1.2px', textTransform: 'uppercase' }}>
                                            Change Model
                                        </span>
                                        <h2 className="mb-4 font-weight-bold" style={{ fontSize: '46px', lineHeight: '1.1', color: '#111', letterSpacing: '-1.5px' }}>
                                            Gender-Transformative <br /> Community Change.
                                        </h2>
                                    </div>
                                    <div className="col-lg-5 d-flex align-items-end">
                                        <p style={{ fontSize: '17px', color: '#666', lineHeight: '1.7', marginBottom: '1.5rem', fontWeight: 400 }}>
                                            LCEO implements its work through the Rugero Rwiza Community Change Model (RR-CCM), a gender-transformative framework that addresses the root causes of inequality at every level of society.
                                        </p>
                                    </div>
                                </div>

                                <div className="row mt-5 pt-4">
                                    {/* 1. Individual Level */}
                                    <div className="col-md-4 mb-5 d-flex">
                                        <div className="mr-3 d-flex align-items-start justify-content-center" style={{ width: '80px', flexShrink: 0 }}>
                                            <User size={60} strokeWidth={1} style={{ color: '#076c5b' }} />
                                        </div>
                                        <div>
                                            <h5 className="font-weight-bold mb-2 d-flex align-items-center" style={{ fontSize: '20px', color: '#111' }}>
                                                1. Individual Level <span className="ml-2" style={{ fontSize: '16px', fontWeight: '900', color: '#076c5b', opacity: 0.8 }}>›</span>
                                            </h5>
                                            <p style={{ fontSize: '15.5px', color: '#666', lineHeight: '1.6' }}>
                                                Building agency, confidence, and skills through mindset transformation and education access.
                                            </p>
                                        </div>
                                    </div>

                                    {/* 2. Relational Level */}
                                    <div className="col-md-4 mb-5 d-flex">
                                        <div className="mr-3 d-flex align-items-start justify-content-center" style={{ width: '80px', flexShrink: 0 }}>
                                            <Users size={60} strokeWidth={1} style={{ color: '#076c5b' }} />
                                        </div>
                                        <div>
                                            <h5 className="font-weight-bold mb-2 d-flex align-items-center" style={{ fontSize: '20px', color: '#111' }}>
                                                2. Relational Level <span className="ml-2" style={{ fontSize: '16px', fontWeight: '900', color: '#076c5b', opacity: 0.8 }}>›</span>
                                            </h5>
                                            <p style={{ fontSize: '15.5px', color: '#666', lineHeight: '1.6' }}>
                                                Transforming relationships by engaging male champions and peer mentorship circles.
                                            </p>
                                        </div>
                                    </div>

                                    {/* 3. Structural Level */}
                                    <div className="col-md-4 mb-5 d-flex">
                                        <div className="mr-3 d-flex align-items-start justify-content-center" style={{ width: '80px', flexShrink: 0 }}>
                                            <Shield size={60} strokeWidth={1} style={{ color: '#076c5b' }} />
                                        </div>
                                        <div>
                                            <h5 className="font-weight-bold mb-2 d-flex align-items-center" style={{ fontSize: '20px', color: '#111' }}>
                                                3. Structural Level <span className="ml-2" style={{ fontSize: '16px', fontWeight: '900', color: '#076c5b', opacity: 0.8 }}>›</span>
                                            </h5>
                                            <p style={{ fontSize: '15.5px', color: '#666', lineHeight: '1.6' }}>
                                                Addressing systemic barriers through partnerships with local leaders and policy advocacy.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="ftco-section" style={{ backgroundColor: '#00594f', padding: '100px 0' }}>
                <div className="container">
                    <div className="row justify-content-start mb-5 pb-3">
                        <div className="col-md-12 heading-section ftco-animate">
                            <h2 className="mb-4 text-white font-weight-bold" style={{ fontSize: '40px' }}>National and Global Alignment</h2>
                        </div>
                    </div>
                    <div className="row">
                        {/* Item 1: Rwanda Vision 2050 */}
                        <div className="col-md-6 mb-5 d-flex ftco-animate">
                            <div className="mr-4 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', flexShrink: 0 }}>
                                <Globe className="text-white" size={60} strokeWidth={1} />
                            </div>
                            <div>
                                <h4 className="text-white font-weight-bold mb-3 d-flex align-items-center" style={{ fontSize: '22px' }}>
                                    Rwanda Vision 2050 <span className="ml-2" style={{ fontSize: '18px', fontWeight: '900', opacity: 0.8 }}>›</span>
                                </h4>
                                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: '1.6' }}>
                                    Contributing to human capital development, gender equality, and inclusive economic growth as envisioned in Rwanda's long-term aspirations.
                                </p>
                            </div>
                        </div>

                        {/* Item 2: NST2 Priorities */}
                        <div className="col-md-6 mb-5 d-flex ftco-animate">
                            <div className="mr-4 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', flexShrink: 0 }}>
                                <BookOpen className="text-white" size={60} strokeWidth={1} />
                            </div>
                            <div>
                                <h4 className="text-white font-weight-bold mb-3 d-flex align-items-center" style={{ fontSize: '22px' }}>
                                    NST2 Priorities <span className="ml-2" style={{ fontSize: '18px', fontWeight: '900', opacity: 0.8 }}>›</span>
                                </h4>
                                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: '1.6' }}>
                                    Aligned with the National Strategy for Transformation: Quality education, skills development, and social protection for inclusive growth.
                                </p>
                            </div>
                        </div>

                        {/* Item 3: Economic Inclusion */}
                        <div className="col-md-6 mb-5 d-flex ftco-animate">
                            <div className="mr-4 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', flexShrink: 0 }}>
                                <TrendingUp className="text-white" size={60} strokeWidth={1} />
                            </div>
                            <div>
                                <h4 className="text-white font-weight-bold mb-3 d-flex align-items-center" style={{ fontSize: '22px' }}>
                                    Economic Inclusion <span className="ml-2" style={{ fontSize: '18px', fontWeight: '900', opacity: 0.8 }}>›</span>
                                </h4>
                                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: '1.6' }}>
                                    Directly contributing to SDG 1 (No Poverty) and SDG 8 (Decent Work) by building resilient families through community-led economic empowerment.
                                </p>
                            </div>
                        </div>

                        {/* Item 4: Quality & Gender Equality */}
                        <div className="col-md-6 mb-5 d-flex ftco-animate">
                            <div className="mr-4 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', flexShrink: 0 }}>
                                <GraduationCap className="text-white" size={60} strokeWidth={1} />
                            </div>
                            <div>
                                <h4 className="text-white font-weight-bold mb-3 d-flex align-items-center" style={{ fontSize: '22px' }}>
                                    Gender & Education <span className="ml-2" style={{ fontSize: '18px', fontWeight: '900', opacity: 0.8 }}>›</span>
                                </h4>
                                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: '1.6' }}>
                                    Fulfilling SDG 4 (Quality Education) and SDG 5 (Gender Equality) to ensure every girl has the opportunity to lead and thrive in her community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    );
};
