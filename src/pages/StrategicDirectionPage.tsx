import React from 'react';
import { Link } from 'react-router-dom';
import { useLegacyScripts } from '../hooks/useLegacyScripts';
import { User, Users, Shield, Globe, BookOpen, TrendingUp, GraduationCap, Briefcase, Award, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const StrategicDirectionPage = () => {
    useLegacyScripts();

    return (
        <>
            <div className="hero-wrap" style={{ backgroundImage: "url('/images/bg_2.jpg')", height: '500px', minHeight: '500px' }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center" style={{ height: '500px', paddingTop: '100px' }}>
                        <div className="col-md-7 text-center">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="mb-4"
                            >
                                Empower a Future Today
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="mb-5"
                            >
                                We support girls, caregivers, and youth by promoting education, health, mentorship, and skills development to strengthen families and build resilient communities.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <Link to="/about" className="btn btn-white btn-outline-white px-4 py-3">Learn More</Link>
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-counter" id="section-counter" style={{ backgroundColor: '#00594f', padding: '25px 0' }}>
                <div className="container">
                    <div className="row align-items-center no-gutters">
                        <div className="col-lg-2 col-md-12 mb-3 mb-lg-0 ftco-animate">
                            <h2 className="text-white font-weight-bold mb-0" style={{ fontSize: '18px', borderLeft: '3px solid #4FB1A1', paddingLeft: '15px', lineHeight: '1.2' }}>
                                Our impact <br className="d-none d-lg-block" /> in 2024
                            </h2>
                        </div>
                        <div className="col-lg-10 col-md-12">
                            <div className="row no-gutters">
                                {[{ icon: <Users size={32} strokeWidth={1.5} />, number: '5000', label: 'Women & girls reached \n & empowered' },
                                  { icon: <GraduationCap size={32} strokeWidth={1.5} />, number: '1200', label: 'Girls stayed in school \n through our support' },
                                  { icon: <Briefcase size={32} strokeWidth={1.5} />, number: '450', label: 'Businesses launched \n and thriving' },
                                  { icon: <Award size={32} strokeWidth={1.5} />, number: '300', label: 'Change Champions \n trained as leaders' }].map((stat, idx) => (
                                    <div className="col-md-3 d-flex justify-content-center align-items-center mb-0 ftco-animate" key={idx}>
                                        <div className="d-flex align-items-center">
                                            <div className="mr-2" style={{ color: 'white', opacity: 0.9 }}>
                                                {stat.icon}
                                            </div>
                                            <div className="text-white">
                                                <div className="d-flex align-items-baseline">
                                                    <strong className="number" style={{ fontSize: '28px', fontWeight: '800' }}>{stat.number}</strong>
                                                    <span style={{ fontSize: '16px', marginLeft: '1px', fontWeight: '700' }}>+</span>
                                                </div>
                                                <span style={{ fontSize: '11px', textTransform: 'none', opacity: 0.85, display: 'block', lineHeight: '1.2', whiteSpace: 'pre-line' }}>
                                                    {stat.label}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section p-0 overflow-hidden" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container-fluid p-0">
                    <div className="row no-gutters d-flex align-items-stretch">
                        <div className="col-md-6" style={{
                            backgroundImage: "url('/images/cause-1.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            minHeight: '500px',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(to right, rgba(7, 108, 91, 0) 70%, rgba(7, 108, 91, 1) 100%)'
                            }}></div>
                        </div>

                        <div className="col-md-6 d-flex align-items-center" style={{
                            backgroundColor: '#076c5b',
                            padding: '80px',
                            color: '#ffffff'
                        }}>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="w-100"
                            >
                                <h2 className="text-white font-weight-bold mb-4" style={{
                                    fontSize: '48px',
                                    lineHeight: '1.1',
                                    letterSpacing: '-1.5px'
                                }}>
                                    Strategic Direction
                                </h2>

                                <p className="mb-4 text-white" style={{ fontSize: '19px', lineHeight: '1.7', opacity: '0.9' }}>
                                    LCEO’s strategic direction defines how we understand change, how we design our programs, and how we achieve results.
                                </p>

                                <p className="mb-5 text-white" style={{ fontSize: '19px', lineHeight: '1.7', opacity: '0.9' }}>
                                    Our work aligns with national and global priorities to achieve sustainable impact for girls and young women, building resilient communities.
                                </p>

                                <Link to="/about" className="d-flex align-items-center text-white font-weight-bold" style={{
                                    fontSize: '16px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    textDecoration: 'none'
                                }}>
                                    LEARN MORE
                                    <div className="ml-3 bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                                        <ChevronRight size={18} style={{ color: '#076c5b', marginLeft: '0px' }} />
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="p-5 bg-white rounded-lg" style={{ borderRadius: '32px', border: '1px solid rgba(0,0,0,0.05)' }}
                            >
                                <h3 className="mb-4 font-weight-bold" style={{ color: '#076c5b', fontSize: '32px', letterSpacing: '-1px' }}>Our Philosophy</h3>
                                <p className="lead" style={{ color: '#555', lineHeight: '1.9', fontSize: '20px' }}>
                                    LCEO believes that lasting transformation starts with mindset, identity, and mental resilience. We
                                    prioritize human capital development through integrated interventions that strengthen confidence,
                                    psychosocial wellbeing, education access, and economic empowerment. This approach enables girls and young
                                    women to pursue education, achieve economic independence, and emerge as leaders in their communities.
                                </p>
                            </motion.div>
                        </div>

                        <div className="col-md-12 text-left">
                            <div className="p-5 bg-white" style={{
                                borderRadius: '32px',
                                border: '1px solid rgba(0,0,0,0.05)'
                            }}>
                                <div className="row mb-5">
                                    <div className="col-lg-7">
                                        <motion.span
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5 }}
                                            className="badge badge-light px-3 py-2 mb-3 font-weight-bold" style={{ color: '#076c5b', backgroundColor: '#e2f5f2', borderRadius: '50px', fontSize: '11px', letterSpacing: '1.2px', textTransform: 'uppercase' }}
                                        >
                                            Change Model
                                        </motion.span>
                                        <motion.h2
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.1 }}
                                            className="mb-4 font-weight-bold" style={{ fontSize: '48px', lineHeight: '1.1', color: '#111', letterSpacing: '-2px' }}
                                        >
                                            Gender-Transformative <br /> Community Change.
                                        </motion.h2>
                                    </div>
                                    <div className="col-lg-5 d-flex align-items-end">
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                            style={{ fontSize: '18px', color: '#666', lineHeight: '1.8', marginBottom: '1.5rem' }}
                                        >
                                            LCEO implements its work through the Rugero Rwiza Community Change Model (RR-CCM), a gender-transformative framework that addresses the root causes of inequality at every level of society.
                                        </motion.p>
                                    </div>
                                </div>

                                <div className="row mt-5 pt-4">
                                    {[
                                        { level: '1. Individual Level', icon: <User size={60} strokeWidth={1} />, text: 'Building agency, confidence, and skills through mindset transformation and education access.' },
                                        { level: '2. Relational Level', icon: <Users size={60} strokeWidth={1} />, text: 'Transforming relationships by engaging male champions and peer mentorship circles.' },
                                        { level: '3. Structural Level', icon: <Shield size={60} strokeWidth={1} />, text: 'Addressing systemic barriers through partnerships with local leaders and policy advocacy.' }
                                    ].map((item, idx) => (
                                        <div className="col-md-4 mb-5 d-flex" key={idx}>
                                            <motion.div
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                                className="d-flex"
                                            >
                                                <div className="mr-3 d-flex align-items-start justify-content-center" style={{ width: '80px', flexShrink: 0 }}>
                                                    <div style={{ color: '#076c5b' }}>{item.icon}</div>
                                                </div>
                                                <div>
                                                    <h5 className="font-weight-bold mb-2 d-flex align-items-center" style={{ fontSize: '20px', color: '#111' }}>
                                                        {item.level} <span className="ml-2" style={{ fontSize: '16px', fontWeight: '900', color: '#076c5b', opacity: 0.8 }}>›</span>
                                                    </h5>
                                                    <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.7' }}>
                                                        {item.text}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section" style={{ backgroundColor: '#00594f', padding: '100px 0' }}>
                <div className="container">
                    <div className="row justify-content-start mb-5 pb-3">
                        <div className="col-md-12">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="mb-4 text-white font-weight-bold" style={{ fontSize: '42px', letterSpacing: '-1.5px' }}
                            >
                                National and Global Alignment
                            </motion.h2>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            { title: 'Rwanda Vision 2050', icon: <Globe className="text-white" size={60} strokeWidth={1} />, text: 'Contributing to human capital development, gender equality, and inclusive economic growth.' },
                            { title: 'NST2 Priorities', icon: <BookOpen className="text-white" size={60} strokeWidth={1} />, text: 'Aligned with Quality education, skills development, and social protection for inclusive growth.' },
                            { title: 'Economic Inclusion', icon: <TrendingUp className="text-white" size={60} strokeWidth={1} />, text: 'Directly contributing to SDG 1 (No Poverty) and SDG 8 (Decent Work) through empowerment.' },
                            { title: 'Gender & Education', icon: <GraduationCap className="text-white" size={60} strokeWidth={1} />, text: 'Fulfilling SDG 4 (Quality Education) and SDG 5 (Gender Equality) for girls to lead.' }
                        ].map((item, idx) => (
                            <div className="col-md-6 mb-5 d-flex" key={idx}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="d-flex"
                                >
                                    <div className="mr-4 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', flexShrink: 0 }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-weight-bold mb-3 d-flex align-items-center" style={{ fontSize: '24px' }}>
                                            {item.title} <span className="ml-2" style={{ fontSize: '18px', fontWeight: '900', opacity: 0.8 }}>›</span>
                                        </h4>
                                        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: '1.7' }}>
                                            {item.text}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
