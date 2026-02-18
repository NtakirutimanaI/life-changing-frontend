import React from 'react';
import { Link } from 'react-router-dom';
import { useLegacyScripts } from '../hooks/useLegacyScripts';
import { Gift, Heart, Megaphone, Handshake, PenTool, LayoutDashboard, Star, CheckCircle } from 'lucide-react';

export const HowWeWorkPage = () => {
    useLegacyScripts();

    return (
        <>
            <div className="hero-wrap" style={{ backgroundImage: "url('/images/how_we_work.jpg')", height: '350px', minHeight: '350px' }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center" style={{ height: '350px', paddingTop: '60px' }} data-scrollax-parent="true">
                        <div className="col-md-7 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
                            <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><Link
                                to="/">Home</Link></span> <span>How We Work</span></p>
                            <h1 className="mb-2 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">How We Work</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section bg-white" style={{ padding: '40px 0 20px 0' }}>
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#2c3e50', marginBottom: '15px' }}>More ways to support LCEO</h2>
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
                                <div className="p-3 d-flex align-items-center h-100" style={{ backgroundColor: '#f9fbfb', borderRadius: '4px', border: '1px solid #f0f2f2' }}>
                                    <div className="mr-3" style={{ color: '#00594f' }}>
                                        {item.icon}
                                    </div>
                                    <h5 className="mb-0" style={{ fontSize: '14px', fontWeight: '700' }}>
                                        <Link to="#" style={{ color: '#111', textDecoration: 'underline', textDecorationThickness: '1.5px', textUnderlineOffset: '3px' }}>
                                            {item.title}
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light" style={{ padding: '40px 0 10px 0' }}>
                <div className="container">
                    <div className="row">
                        {/* Featured Story - Left */}
                        <div className="col-md-8 ftco-animate mb-3">
                            <div className="featured-story-main" style={{ height: '420px', marginBottom: '0' }}>
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
                            </div>
                        </div>

                        {/* Secondary Story - Right */}
                        <div className="col-md-4 ftco-animate mb-3">
                            <div className="secondary-story-card" style={{ height: '420px' }}>
                                <img src="/images/cause-2.jpg" alt="Secondary Story" style={{ height: '220px' }} />
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
                            </div>
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
                        box-shadow: 0 10px 30px rgba(0,0,0,0.05);
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
                        <div className="col-md-8 text-center ftco-animate">
                            <span className="badge badge-light px-3 py-2 mb-2 font-weight-bold" style={{ color: '#076c5b', backgroundColor: '#e2f5f2', borderRadius: '50px', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                Our Impact Areas
                            </span>
                            <h2 className="mb-2 font-weight-bold" style={{ fontSize: '32px', color: '#111' }}>
                                Areas of Intervention
                            </h2>
                            <p style={{ fontSize: '16px', color: '#666' }}>LCEO operates across multiple strategic areas to create a protective and empowering environment.</p>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            { title: 'Education & Retention', image: '/images/cause-1.jpg', desc: 'Ensuring every girl has the resources and support to stay in school through community-led initiatives.' },
                            { title: 'SRHR & Dignity', image: '/images/cause-2.jpg', desc: 'Providing integrated knowledge and supplies for sexual reproductive health and dignity during menstruation.' },
                            { title: 'Gender & Protection', image: '/images/cause-4.jpg', desc: 'Advocating for rights and protecting girls from abuse and early pregnancy through legal aid systems.' },
                            { title: 'Economic Empowerment', image: '/images/image_1.jpg', desc: 'Building livelihoods for young women through targeted skills training and market accessibility.' },
                            { title: 'Individual Resilience', image: '/images/image_2.jpg', desc: 'Focusing on mental health and leadership through structured mentorship and mindset workshops.' },
                            { title: 'Emergency Response', image: '/images/bg_3.jpg', desc: 'Providing rapid support to girls and women in crisis situations through a dedicated rapid response team.' }
                        ].map((item, idx) => (
                            <div className="col-md-4 ftco-animate mb-3" key={idx}>
                                <div className="impact-card">
                                    <img src={item.image} alt={item.title} />
                                    <div className="impact-card-overlay">
                                        <h3 className="impact-card-title">{item.title}</h3>
                                        <p className="impact-card-desc">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light" style={{ padding: '40px 0' }}>
                <div className="container">
                    <div className="row justify-content-center mb-3">
                        <div className="col-md-8 text-center ftco-animate">
                            <span className="badge badge-light px-3 py-2 mb-2 font-weight-bold" style={{ color: '#076c5b', backgroundColor: '#e2f5f2', borderRadius: '50px', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                Our Methodology
                            </span>
                            <h2 className="mb-2 font-weight-bold" style={{ fontSize: '28px', color: '#111' }}>
                                The LCEO Process
                            </h2>
                        </div>
                    </div>

                    <div className="row align-items-stretch">
                        <div className="col-lg-5 mb-3 ftco-animate">
                            <div className="h-100 p-4 d-flex flex-column justify-content-between" style={{
                                background: 'linear-gradient(145deg, #076c5b 0%, #054d41 100%)',
                                borderRadius: '24px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div style={{ position: 'absolute', top: '15px', left: '15px', opacity: 0.1, color: 'white' }}>
                                    <LayoutDashboard size={60} strokeWidth={1} />
                                </div>
                                <div className="mt-2" style={{ position: 'relative', zIndex: 1 }}>
                                    <h3 className="text-white font-weight-bold mb-0" style={{ fontSize: '22px', lineHeight: '1.3' }}>
                                        A systemic approach to sustainable community transformation.
                                    </h3>
                                </div>
                                <div className="mt-3 pt-3 border-top" style={{ borderColor: 'rgba(255,255,255,0.1) !important' }}>
                                    <p className="text-white-50 mb-0" style={{ fontSize: '13px' }}>
                                        Our process ensures every intervention is evidence-based and community-led.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 ftco-animate">
                            <div className="row">
                                {[
                                    { step: '1. Needs Assessment', desc: 'Understanding the context and challenges through community consultations.' },
                                    { step: '2. Participatory Design', desc: 'Programs are co-created with communities to ensure relevance and ownership.' },
                                    { step: '3. Integrated Delivery', desc: 'Education support, mental health, and empowerment addressing interconnected challenges.' },
                                    { step: '4. Continuous Monitoring', desc: 'Regular tracking and feedback ensure programs stay effective.' }
                                ].map((step, idx) => (
                                    <div className="col-md-6 mb-3" key={idx}>
                                        <div className="p-3 bg-white d-flex flex-column h-100" style={{
                                            borderRadius: '20px',
                                            boxShadow: '0 5px 15px rgba(0,0,0,0.03)'
                                        }}>
                                            <h4 className="font-weight-bold mb-1" style={{ fontSize: '15px', color: '#076c5b' }}>{step.step}</h4>
                                            <p className="text-muted mb-0" style={{ fontSize: '12.5px', lineHeight: '1.5' }}>
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
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
                            <div className="col-md-3 ftco-animate mb-3" key={idx}>
                                <div className="sdg-item p-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '16px' }}>
                                    <div className="mb-2" style={{ color: '#076c5b' }}>
                                        <CheckCircle size={32} strokeWidth={1.5} />
                                    </div>
                                    <h5 className="font-weight-bold" style={{ fontSize: '14px' }}>{sdg.title}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>




        </>
    );
};
