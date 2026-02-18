import React from 'react';
import { Link } from 'react-router-dom';
import { useLegacyScripts } from '../hooks/useLegacyScripts';
import { Check, Globe, Users, GraduationCap, Briefcase, Award } from 'lucide-react';

export const ImpactStoriesPage = () => {
    useLegacyScripts();

    return (
        <>
            {/* Hero Section */}
            <div className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url('/images/bg_2.jpg')", height: '350px', minHeight: '350px' }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center" style={{ height: '350px', paddingTop: '60px' }} data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
                            <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><Link
                                to="/">Home</Link></span> <span>Impact & Stories</span></p>
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{ fontSize: '36px' }}>Transforming Lives, Building Futures</h1>
                            <p className="mb-4 text-white" style={{ fontSize: '1.1rem' }}>Every statistic represents a life changed. Every number
                                tells a story of resilience, growth, and empowerment.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Split Design Impact Section */}
            <section className="ftco-section bg-white" style={{ padding: '40px 0' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 ftco-animate pr-lg-5">
                            <span className="badge badge-light px-3 py-2 mb-2 font-weight-bold" style={{ color: '#076c5b', backgroundColor: '#e2f5f2', borderRadius: '50px', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                About Charitian
                            </span>
                            <h2 className="mb-3" style={{ fontSize: '32px', fontWeight: '800', color: '#122f2b', lineHeight: '1.2' }}>
                                Together, We Make <br />
                                A Difference!
                            </h2>
                            <p className="mb-3" style={{ color: '#666', fontSize: '15px', lineHeight: '1.6' }}>
                                Every statistic represents a life changed. See the real impact of LCEO's work across education, entrepreneurship, and empowerment.
                            </p>
                            <p>
                                <Link to="/donate" className="btn px-4 py-2 font-weight-bold" style={{ backgroundColor: '#076c5b', color: '#fff', fontSize: '13px', borderRadius: '12px', border: 'none' }}>Make A Donation</Link>
                            </p>
                        </div>

                        <div className="col-md-6 ftco-animate position-relative mt-4 mt-md-0">
                            {/* ... kept grid ... */}
                            <div className="row no-gutters">
                                <div className="col-8 offset-4 mb-3">
                                    <div style={{
                                        backgroundImage: "url('/images/cause-1.jpg')",
                                        height: '240px',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        borderRadius: '8px',
                                        boxShadow: '15px -15px 0px rgba(7, 108, 91, 0.05)'
                                    }}></div>
                                </div>
                                <div className="position-absolute" style={{ top: '15%', left: '0', width: '45%', zIndex: 2 }}>
                                    <div style={{
                                        backgroundImage: "url('/images/cause-2.jpg')",
                                        height: '180px',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        borderRadius: '8px',
                                        border: '6px solid #fff',
                                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                                    }}></div>
                                </div>
                                <div className="col-6 pr-2">
                                    <div style={{
                                        backgroundImage: "url('/images/cause-3.jpg')",
                                        height: '140px',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        borderRadius: '8px',
                                    }}></div>
                                </div>
                                <div className="col-6">
                                    <div style={{
                                        backgroundImage: "url('/images/cause-4.jpg')",
                                        height: '120px',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        borderRadius: '8px',
                                    }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Numbers Section */}
            <section className="ftco-section" style={{ padding: '50px 0', backgroundColor: '#fcfdfd' }}>
                <div className="container">
                    <div className="row justify-content-center mb-4 pb-2">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <span className="badge px-4 py-2 mb-2" style={{ backgroundColor: '#e8f7f5', color: '#076c5b', fontSize: '11px', fontWeight: 'Bold', borderRadius: '50px' }}>Our Impact</span>
                            <h2 className="mb-2" style={{ fontSize: '32px', fontWeight: '800', color: '#122f2b' }}>Measurable Change</h2>
                            <p className="mb-0" style={{ color: '#666', fontSize: '15px' }}>Tracking our progress across education, entrepreneurship, and empowerment.</p>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            { icon: <Users size={32} strokeWidth={1.5} />, num: '5,000+', label: 'Reached & Empowered', sub: 'Vulnerable girls supported.' },
                            { icon: <GraduationCap size={32} strokeWidth={1.5} />, num: '1,200+', label: 'Stayed In School', sub: 'Facilitated protection.' },
                            { icon: <Briefcase size={32} strokeWidth={1.5} />, num: '450+', label: 'Businesses launched', sub: 'Supported by IkiraroBiz.' },
                            { icon: <Award size={32} strokeWidth={1.5} />, num: '300+', label: 'Champions Trained', sub: 'Mindset shift leaders.' },
                        ].map((stat, i) => (
                            <div className="col-md-3 d-flex ftco-animate mb-3" key={i}>
                                <div className="p-3 bg-white shadow-sm text-center w-100" style={{ borderRadius: '12px', border: '1px solid #f0f2f2' }}>
                                    <div className="icon-section d-flex align-items-center justify-content-center mb-2" style={{ color: '#076c5b' }}>
                                        {stat.icon}
                                    </div>
                                    <h3 className="font-weight-bold mb-1" style={{ color: '#122f2b', fontSize: '1.8rem' }}>{stat.num}</h3>
                                    <span className="position mb-1 d-block text-uppercase" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.5px', color: '#076c5b' }}>{stat.label}</span>
                                    <p className="small text-muted mb-0">{stat.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SDG Alignment Section */}
            <section className="ftco-section bg-white" style={{ padding: '50px 0' }}>
                <div className="container">
                    <div className="row justify-content-center mb-4 pb-2">
                        <div className="col-md-10 text-center ftco-animate">
                            <span className="badge badge-light px-3 py-2 mb-2 font-weight-bold" style={{ color: '#076c5b', backgroundColor: '#e2f5f2', borderRadius: '50px', fontSize: '11px', letterSpacing: '1.2px', textTransform: 'uppercase' }}>
                                Global Agenda
                            </span>
                            <h2 className="mb-2 font-weight-bold" style={{ fontSize: '36px', color: '#111', letterSpacing: '-1px' }}>
                                Aligned with Global Goals
                            </h2>
                            <p className="mx-auto mb-0" style={{ maxWidth: '700px', color: '#666', fontSize: '16px' }}>
                                LCEO’s programs contribute directly to the 2030 Agenda for Sustainable Development in Rwanda.
                            </p>
                        </div>
                    </div>

                    <div className="row d-flex align-items-stretch no-gutters">
                        {/* Light Card */}
                        <div className="col-lg-4 mb-4 mb-lg-0 ftco-animate">
                            <div className="p-4 h-100 d-flex flex-column" style={{
                                backgroundColor: '#f0f9f8',
                                borderRadius: '24px 0 0 24px',
                                border: '1px solid rgba(7, 108, 91, 0.05)'
                            }}>
                                <h3 className="font-weight-bold mb-2" style={{ fontSize: '20px', color: '#111' }}>Community Resilience</h3>
                                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6', marginBottom: '25px' }}>
                                    Building health, education, and basic stability for the most vulnerable.
                                </p>

                                <div className="mt-auto">
                                    {[
                                        { id: 1, title: 'No Poverty', progress: 78 },
                                        { id: 3, title: 'Good Health', progress: 85 },
                                        { id: 4, title: 'Quality Education', progress: 92 }
                                    ].map(sdg => (
                                        <div key={sdg.id} className="mb-3">
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <span className="font-weight-bold" style={{ fontSize: '13px', color: '#111' }}>Goal {sdg.id}: {sdg.title}</span>
                                                <span className="font-weight-bold" style={{ color: '#076c5b', fontSize: '12px' }}>{sdg.progress}%</span>
                                            </div>
                                            <div className="progress" style={{ height: '4px', backgroundColor: 'rgba(7, 108, 91, 0.1)', borderRadius: '10px' }}>
                                                <div className="progress-bar" style={{ width: `${sdg.progress}%`, backgroundColor: '#076c5b' }}></div>
                                            </div>
                                        </div>
                                    ))}
                                    <Link to="/about" className="btn btn-primary w-100 py-2 mt-3 border-0 font-weight-bold" style={{ backgroundColor: '#122f2b', borderRadius: '12px', fontSize: '13px' }}>
                                        View Report
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Dark Card */}
                        <div className="col-lg-8 ftco-animate">
                            <div className="p-4 h-100 d-flex text-white" style={{
                                backgroundColor: '#076c5b',
                                borderRadius: '0 24px 24px 0',
                                border: '1px solid rgba(7, 108, 91, 0.1)'
                            }}>
                                <div className="row w-100">
                                    <div className="col-md-7 d-flex flex-column">
                                        <h3 className="font-weight-bold mb-2 text-white" style={{ fontSize: '24px' }}>Societal Transformation</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: '1.7', marginBottom: '25px' }}>
                                            Driving long-term gender equality and structural reduction of systemic inequalities.
                                        </p>

                                        <div className="mt-auto">
                                            {[
                                                { id: 5, title: 'Gender Equality', progress: 88 },
                                                { id: 8, title: 'Economic Growth', progress: 75 },
                                                { id: 10, title: 'Reduced Inequality', progress: 82 }
                                            ].map(sdg => (
                                                <div key={sdg.id} className="mb-3">
                                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                                        <span className="font-weight-bold" style={{ fontSize: '13px' }}>Goal {sdg.id}: {sdg.title}</span>
                                                        <span className="font-weight-bold" style={{ color: '#fff', fontSize: '12px' }}>{sdg.progress}%</span>
                                                    </div>
                                                    <div className="progress" style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '10px' }}>
                                                        <div className="progress-bar" style={{ width: `${sdg.progress}%`, backgroundColor: '#fff' }}></div>
                                                    </div>
                                                </div>
                                            ))}
                                            <button className="btn btn-white w-100 py-2 mt-3 font-weight-bold" style={{ borderRadius: '12px', fontSize: '13px', color: '#076c5b' }}>
                                                Partner With Us
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col-md-5 pl-md-4 mt-4 mt-md-0 border-left" style={{ borderColor: 'rgba(255,255,255,0.1) !important' }}>
                                        <h6 className="font-weight-bold text-uppercase mb-3" style={{ letterSpacing: '1px', fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>Key Outcomes</h6>
                                        <ul className="list-unstyled mb-0">
                                            {[
                                                'Bridging tech gaps',
                                                'Economic loops',
                                                'Community advocacy',
                                                'Policy integration',
                                                'Retention models',
                                                'Resilience hubs'
                                            ].map((item, idx) => (
                                                <li key={idx} className="d-flex align-items-start mb-2">
                                                    <Check size={16} className="mr-2" style={{ color: '#fff', marginTop: '2px' }} />
                                                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.9)' }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};
