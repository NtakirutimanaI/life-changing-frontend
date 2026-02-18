import React from 'react';
import { Link } from 'react-router-dom';
import { useLegacyScripts } from '../hooks/useLegacyScripts';
import { Gift, Heart, Megaphone, Handshake, PenTool, LayoutDashboard, Star, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const HowWeWorkPage = () => {
    useLegacyScripts();

    return (
        <>
            <div className="hero-wrap" style={{ backgroundImage: "url('/images/how_we_work.jpg')", height: '350px', minHeight: '350px' }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center" style={{ height: '350px', paddingTop: '60px' }} data-scrollax-parent="true">
                        <div className="col-md-7 text-center">
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="breadcrumbs"><span className="mr-2"><Link
                                    to="/">Home</Link></span> <span>How We Work</span></motion.p>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="mb-2 bread">How We Work</motion.h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section bg-white" style={{ padding: '40px 0 20px 0' }}>
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                style={{ fontSize: '24px', fontWeight: '800', color: '#2c3e50', marginBottom: '15px' }}>More ways to support LCEO</motion.h2>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            { title: 'Leave a gift in your will', icon: <PenTool size={28} strokeWidth={1.5} /> },
                            { title: 'Make a regular donation', icon: <Heart size={28} strokeWidth={1.5} /> },
                            { title: 'Fundraise for LCEO', icon: <Megaphone size={28} strokeWidth={1.5} /> },
                            { title: 'Become a corporate supporter', icon: <Handshake size={28} strokeWidth={1.5} /> }
                        ].map((item, idx) => (
                            <div className="col-md-3 mb-3" key={idx}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="p-3 d-flex align-items-center h-100" style={{ backgroundColor: '#f9fbfb', borderRadius: '4px', border: '1px solid #f0f2f2' }}>
                                    <div className="mr-3" style={{ color: '#00594f' }}>
                                        {item.icon}
                                    </div>
                                    <h5 className="mb-0" style={{ fontSize: '14px', fontWeight: '700' }}>
                                        <Link to="#" style={{ color: '#111', textDecoration: 'underline', textDecorationThickness: '1.5px', textUnderlineOffset: '3px' }}>
                                            {item.title}
                                        </Link>
                                    </h5>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light" style={{ padding: '40px 0 10px 0' }}>
                <div className="container">
                    <div className="row">
                        {/* Featured Story - Left */}
                        <div className="col-md-8 mb-3">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="featured-story-main" style={{ height: '420px', marginBottom: '0' }}>
                                <img src="/images/cropped_upscaled_image.jpg" alt="Featured Story" />
                                <div className="featured-overlay" style={{ padding: '25px', height: '140px' }}>
                                    <div className="d-flex align-items-center mb-2">
                                        <span className="story-badge">Story</span>
                                        <span className="story-date">11 February 2026</span>
                                    </div>
                                    <h2 className="featured-title" style={{ fontSize: '26px', marginBottom: '10px' }}>
                                        Our mission to protect and empower, explained
                                    </h2>
                                    <p className="featured-desc" style={{ fontSize: '15px', marginTop: '10px' }}>
                                        Updated for 2026: Discover the five core pillars driving our community-led transformation and how we're scaling our impact across the region.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Secondary Story - Right */}
                        <div className="col-md-4 mb-3">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="secondary-story-card" style={{ height: '420px' }}>
                                <img src="/images/img1.jpg" alt="Secondary Story" style={{ height: '220px' }} />
                                <div className="secondary-overlay" style={{ padding: '20px', height: '200px' }}>
                                    <div className="d-flex align-items-center mb-1">
                                        <span className="story-badge">Story</span>
                                        <span className="story-date">17 February 2026</span>
                                    </div>
                                    <h3 className="secondary-title" style={{ fontSize: '18px', marginTop: '10px' }}>
                                        Impact of integrated mentorship
                                    </h3>
                                    <p className="secondary-desc" style={{ fontSize: '14px', marginTop: '10px' }}>
                                        Community leaders describe how our integrated approach is creating lasting change in local villages.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-white" style={{ padding: '50px 0' }}>
                <style>
                    {`
                    .featured-story-main {
                        position: relative;
                        overflow: hidden;
                        cursor: pointer;
                    }
                    .featured-story-main img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
                    }
                    .featured-story-main:hover img {
                        transform: scale(1.08);
                    }
                    .featured-overlay {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background: #00594f;
                        transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
                        color: white;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        z-index: 2;
                    }
                    .featured-story-main:hover .featured-overlay {
                        height: 100% !important;
                        background: rgba(0, 89, 79, 0.96);
                        justify-content: center;
                    }
                    .secondary-story-card {
                        position: relative;
                        overflow: hidden;
                        cursor: pointer;
                        background: #fff;
                        border: 1px solid #f0f2f2;
                    }
                    .secondary-story-card img {
                        width: 100%;
                        object-fit: cover;
                        transition: filter 0.3s ease;
                    }
                    .secondary-overlay {
                        background: #fff;
                        transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
                    }
                    .secondary-story-card:hover .secondary-overlay {
                        height: 100% !important;
                        transform: translateY(-180px);
                        background: #fff;
                    }
                    .story-badge {
                        background-color: #111;
                        color: white !important;
                        padding: 3px 12px;
                        font-size: 11px;
                        font-weight: 700;
                        margin-right: 15px;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                    }
                    .story-date {
                        font-size: 13px;
                        opacity: 0.7;
                    }
                    .featured-title {
                        font-weight: 800;
                        color: white;
                        text-decoration: underline;
                        text-decoration-thickness: 2px;
                        text-underline-offset: 6px;
                    }
                    .secondary-title {
                        font-weight: 800;
                        color: #00594f;
                        line-height: 1.3;
                    }
                    .featured-desc, .secondary-desc {
                        opacity: 0;
                        line-height: 1.7;
                        transition: opacity 0.4s ease;
                        color: rgba(255,255,255,0.9);
                    }
                    .secondary-desc {
                        color: #666;
                    }
                    .featured-story-main:hover .featured-desc, .secondary-story-card:hover .secondary-desc {
                        opacity: 1;
                    }

                    .impact-card {
                        position: relative;
                        height: 280px;
                        overflow: hidden;
                        border-radius: 0;
                        cursor: pointer;
                    }
                    .impact-card img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: transform 0.5s ease;
                    }
                    .impact-card:hover img {
                        transform: scale(1.1);
                    }
                    .impact-card-overlay {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background: #00594f;
                        padding: 15px 20px;
                        height: 54px;
                        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        color: white;
                        z-index: 2;
                    }
                    .impact-card:hover .impact-card-overlay {
                        height: 100%;
                        background: rgba(0, 89, 79, 0.92);
                        padding-top: 30px;
                    }
                    .impact-card-title {
                        font-size: 17px;
                        font-weight: 700;
                        margin-bottom: 15px;
                        white-space: nowrap;
                        text-transform: none;
                        display: inline-block;
                        width: fit-content;
                        position: relative;
                        color: #fff;
                    }
                    .impact-card:hover .impact-card-title {
                        white-space: normal;
                    }
                    .impact-card-title::after {
                        content: '';
                        position: absolute;
                        bottom: -4px;
                        left: 0;
                        width: 0;
                        height: 2px;
                        background-color: #fff;
                        transition: width 0.3s ease;
                    }
                    .impact-card:hover .impact-card-title::after {
                        width: 100%;
                    }
                    .impact-card-desc {
                        opacity: 0;
                        font-size: 14px;
                        line-height: 1.5;
                        transition: opacity 0.3s ease;
                        transition-delay: 0.1s;
                        margin-top: 5px;
                        color: rgba(255,255,255,0.9);
                    }
                    .impact-card:hover .impact-card-desc {
                        opacity: 1;
                    }
                    `}
                </style>
                <div className="container">
                    <div className="row justify-content-center mb-4">
                        <div className="col-md-8 text-center">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="badge badge-light px-3 py-2 mb-2 font-weight-bold" style={{ color: '#076c5b', backgroundColor: '#e2f5f2', borderRadius: '50px', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                Our Impact Areas
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="mb-2 font-weight-bold" style={{ fontSize: '32px', color: '#111' }}>
                                Areas of Intervention
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                style={{ fontSize: '16px', color: '#666' }}>LCEO operates across multiple strategic areas to create a protective and empowering environment.</motion.p>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            { title: 'Education & Retention', image: '/images/cause-1.jpg', desc: 'Ensuring every girl has the resources and support to stay in school through community-led initiatives.' },
                            { title: 'SRHR & Dignity', image: '/images/pic13.jpg', desc: 'Providing integrated knowledge and supplies for sexual reproductive health and dignity during menstruation.' },
                            { title: 'Gender & Protection', image: '/images/pic8.jpg', desc: 'Advocating for rights and protecting girls from abuse and early pregnancy through legal aid systems.' },
                            { title: 'Economic Empowerment', image: '/images/pic9.jpg', desc: 'Building livelihoods for young women through targeted skills training and market accessibility.' },
                            { title: 'Individual Resilience', image: '/images/testimonial1.jpg', desc: 'Focusing on mental health and leadership through structured mentorship and mindset workshops.' },
                            { title: 'Emergency Response', image: '/images/pic16.jpg', desc: 'Providing rapid support to girls and women in crisis situations through a dedicated rapid response team.' }
                        ].map((item, idx) => (
                            <div className="col-md-4 mb-3" key={idx}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    className="impact-card">
                                    <img src={item.image} alt={item.title} />
                                    <div className="impact-card-overlay">
                                        <h3 className="impact-card-title">{item.title}</h3>
                                        <p className="impact-card-desc">{item.desc}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light" style={{ padding: '60px 0' }}>
                <div className="container">
                    <div className="row justify-content-center mb-4">
                        <div className="col-md-8 text-center">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="badge badge-light px-3 py-2 mb-2 font-weight-bold" style={{ color: '#076c5b', backgroundColor: '#e2f5f2', borderRadius: '50px', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                                Our Methodology
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="mb-3 font-weight-bold" style={{ fontSize: '42px', color: '#111', letterSpacing: '-1.5px' }}>
                                The LCEO Process
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mx-auto" style={{ maxWidth: '800px', fontSize: '19px', color: '#666', lineHeight: '1.8' }}>
                                The Rugero Rwiza Community Change Model (RR-CCM) is our signature framework, engineered to move communities from vulnerability to complete self-reliance through a disciplined, phased approach.
                            </motion.p>
                        </div>
                    </div>

                    <div className="row align-items-stretch mb-4">
                        <div className="col-lg-4 mb-4">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="h-100 p-5 d-flex flex-column justify-content-between" style={{
                                    background: 'linear-gradient(165deg, #122f2b 0%, #076c5b 100%)',
                                    borderRadius: '32px',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                <div style={{ position: 'absolute', top: '30px', right: '30px', opacity: 0.1, color: 'white' }}>
                                    <LayoutDashboard size={120} strokeWidth={1} />
                                </div>
                                <div className="mt-2" style={{ position: 'relative', zIndex: 1 }}>
                                    <h3 className="text-white font-weight-bold mb-4" style={{ fontSize: '30px', lineHeight: '1.2' }}>
                                        A Systemic Engine for Social Change.
                                    </h3>
                                    <p className="text-white-50" style={{ fontSize: '16px', lineHeight: '1.9' }}>
                                        Our methodology is not just a set of activities; it's a strategic engine designed to break the cycles of generational poverty and gender-based inequality at their source.
                                    </p>
                                    <div className="mt-4 p-3 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                        <p className="text-white mb-0 small opacity-80">
                                            "Sustainable change only happens when the community takes ownership of the solution."
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-5 pt-4 border-top" style={{ borderColor: 'rgba(255,255,255,0.1) !important' }}>
                                    <div className="d-flex align-items-center">
                                        <div className="mr-3" style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'rgba(190, 242, 100, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Star size={22} color="#bef264" />
                                        </div>
                                        <p className="text-white mb-0 font-weight-bold" style={{ fontSize: '15px' }}>
                                            Certified Methodology
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="col-lg-8">
                            <div className="row">
                                {[
                                    { step: '01. Discovery Phase', desc: 'Long-term community immersion to understand cultural nuances and identify grassroots leadership potential.' },
                                    { step: '02. Holistic Insight', desc: 'Using multi-dimensional data to map the intersectional needs of education, health, and economic stability.' },
                                    { step: '03. Collaborative Co-Design', desc: 'Developing solutions alongside the community to ensure high adoption rates and local cultural alignment.' },
                                    { step: '04. Multi-Sector Execution', desc: 'Deploying high-impact interventions across multiple sectors simultaneously for maximum leverage.' },
                                    { step: '05. Dynamic Monitoring', desc: 'Continuous feedback loops and impact measurement to refine strategies in real-time.' },
                                    { step: '06. Phased Sustainability', desc: 'Systematic hand-over to trained community leaders to ensure the model survives beyond LCEO’s direct involvement.' }
                                ].map((step, idx) => (
                                    <div className="col-md-6 mb-4" key={idx}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                            className="p-5 bg-white d-flex flex-column h-100 transition-all hover:bg-teal-50/20" style={{
                                                borderRadius: '32px',
                                                border: '1px solid #f0f4f4'
                                            }}>
                                            <div className="mb-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: '#f0faf9', color: '#076c5b', fontSize: '14px', fontWeight: '800' }}>
                                                {idx + 1}
                                            </div>
                                            <h4 className="font-weight-bold mb-3" style={{ fontSize: '20px', color: '#122f2b', letterSpacing: '-0.5px' }}>{step.step.split('. ')[1]}</h4>
                                            <p className="text-muted mb-0" style={{ fontSize: '15px', lineHeight: '1.7' }}>
                                                {step.desc}
                                            </p>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* New Strategic Framework Section for added length */}
                    <div className="row mt-4 pt-2">
                        <div className="col-md-12">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="p-5" style={{ backgroundColor: '#fff', borderRadius: '32px', border: '1px solid #eef2f2' }}>
                                <div className="row align-items-center mb-5">
                                    <div className="col-md-6">
                                        <h3 className="font-weight-bold mb-2" style={{ fontSize: '28px', color: '#122f2b' }}>Detailed Strategic Framework</h3>
                                        <p className="text-muted mb-0">Our process broken down into major operational phases.</p>
                                    </div>
                                    <div className="col-md-6 text-md-right">
                                        <Link to="/contact" className="btn px-4 py-3 font-weight-bold" style={{ backgroundColor: '#076c5b', color: '#fff', borderRadius: '12px' }}>Download PDF Guide</Link>
                                    </div>
                                </div>
                                <div className="row">
                                    {[
                                        {
                                            title: 'Phase I: Foundation',
                                            icon: <CheckCircle size={24} />,
                                            details: 'Focuses on trust-building, legal frameworks, and community entry. We establish the Rugero Rwiza Hubs as centers of change and recruit local mentors.'
                                        },
                                        {
                                            title: 'Phase II: Transformation',
                                            icon: <CheckCircle size={24} />,
                                            details: 'The core implementation peak where scholarship, mental health training, and mentorship programs run daily at maximum capacity.'
                                        },
                                        {
                                            title: 'Phase III: Sustainability',
                                            icon: <CheckCircle size={24} />,
                                            details: 'Final transition phase focusing on local governance, cooperative formation, and building independent market links for beneficiaries.'
                                        }
                                    ].map((phase, idx) => (
                                        <div className="col-md-4 mb-4 mb-md-0" key={idx}>
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                                            >
                                                <div className="d-flex mb-3 align-items-center" style={{ color: '#076c5b' }}>
                                                    <div className="mr-3 p-2 rounded-lg" style={{ backgroundColor: '#e2f5f2' }}>{phase.icon}</div>
                                                    <h5 className="mb-0 font-weight-bold" style={{ fontSize: '18px', color: '#122f2b' }}>{phase.title}</h5>
                                                </div>
                                                <p className="text-muted" style={{ fontSize: '15px', lineHeight: '1.7' }}>{phase.details}</p>
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* New Core Principles Section for even more length */}
                    <div className="row mt-4 pt-4">
                        <div className="col-md-12 text-center mb-4">
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="font-weight-bold" style={{ fontSize: '28px', color: '#122f2b', letterSpacing: '-1.0px' }}>Core Principles of Engagement</motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-muted">The values that guide every step of our operational journey.</motion.p>
                        </div>
                        {[
                            {
                                title: 'Community Ownership',
                                desc: 'We don’t believe in "saving" communities. We believe in empowering them to lead their own change from within.',
                                icon: <Handshake size={32} />
                            },
                            {
                                title: 'Intersectional Focus',
                                desc: 'We address the interconnected barriers of gender, poverty, and geography to ensure no girl is left behind.',
                                icon: <LayoutDashboard size={32} />
                            },
                            {
                                title: 'Evidence-Driven',
                                desc: 'Every program is backed by rigorous data and real-world results, ensuring high-impact delivery.',
                                icon: <PenTool size={32} />
                            },
                            {
                                title: 'Radical Transparency',
                                desc: 'We maintain complete accountability to our beneficiaries, partners, and the global community.',
                                icon: <CheckCircle size={32} />
                            }
                        ].map((principle, idx) => (
                            <div className="col-md-3 mb-4" key={idx}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="text-center p-4 h-100" style={{ backgroundColor: '#fff', borderRadius: '24px', border: '1px solid #f0f4f4' }}>
                                    <div className="mb-3 d-inline-flex align-items-center justify-content-center" style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#e2f5f2', color: '#076c5b' }}>
                                        {principle.icon}
                                    </div>
                                    <h5 className="font-weight-bold mb-2" style={{ fontSize: '17px', color: '#122f2b' }}>{principle.title}</h5>
                                    <p className="small text-muted mb-0" style={{ lineHeight: '1.6' }}>{principle.desc}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    {/* New Key Results Section for even more length */}
                    <div className="row mt-4 pt-4 border-top" style={{ borderColor: 'rgba(0,0,0,0.05) !important' }}>
                        <div className="col-md-12 text-center mb-4">
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="font-weight-bold" style={{ fontSize: '32px', color: '#122f2b', letterSpacing: '-1.5px' }}>Methodology in Action: Key Results</motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-muted mx-auto" style={{ maxWidth: '600px' }}>The Rugero Rwiza Community Change Model is yielding measurable, life-altering results across our regions of operation.</motion.p>
                        </div>
                        {[
                            { label: 'Girls Empowered', value: '10,000+', desc: 'Direct beneficiaries of our integrated education and mental health support.' },
                            { label: 'Rugero Rwiza Hubs', value: '50+', desc: 'Community-led centers acting as safe spaces for learning and mentorship.' },
                            { label: 'School Retention', value: '95%', desc: 'Of our scholarship recipients remain in school through graduation.' },
                            { label: 'Local Mentors', value: '300+', desc: 'Trained community leaders sustaining the model at the grassroots level.' }
                        ].map((stat, idx) => (
                            <div className="col-md-3 mb-4" key={idx}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="text-center p-4">
                                    <div className="font-weight-bold mb-1" style={{ fontSize: '42px', color: '#076c5b', letterSpacing: '-2px' }}>{stat.value}</div>
                                    <h5 className="font-weight-bold mb-2" style={{ fontSize: '18px', color: '#122f2b' }}>{stat.label}</h5>
                                    <p className="small text-muted mb-0" style={{ lineHeight: '1.5' }}>{stat.desc}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="ftco-section" style={{ padding: '40px 0' }}>
                <div className="container">
                    <div className="row justify-content-center mb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-2" style={{ fontSize: '28px' }}>Aligned SDG Goals</h2>
                            <p style={{ fontSize: '15px' }}>LCEO contributes to the UN Sustainable Development Goals.</p>
                        </div>
                    </div>
                    <div className="row text-center">
                        {[
                            { title: 'SDG 1: No Poverty' },
                            { title: 'SDG 4: Quality Education' },
                            { title: 'SDG 5: Gender Equality' },
                            { title: 'SDG 8: Decent Work' }
                        ].map((sdg, idx) => (
                            <div className="col-md-3 mb-3" key={idx}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    className="sdg-item p-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '16px' }}>
                                    <div className="mb-2" style={{ color: '#076c5b' }}>
                                        <CheckCircle size={32} strokeWidth={1.5} />
                                    </div>
                                    <h5 className="font-weight-bold" style={{ fontSize: '14px' }}>{sdg.title}</h5>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>




        </>
    );
};
