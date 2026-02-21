import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import {
    Heart,
    Users,
    Briefcase,
    GraduationCap,
    HandHeart,
    Share2,
    DollarSign,
    Calendar,
    ChevronRight,
    User
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLegacyScripts } from '../hooks/useLegacyScripts';
import { useLanguage } from '../lib/language-context';

export function GetInvolvedPage() {
    useLegacyScripts();
    const { t } = useLanguage();

    const ways = [
        {
            icon: <Heart size={60} strokeWidth={1} />,
            title: t('getinvolved.impact_circle_title'),
            description: t('getinvolved.impact_circle_desc'),
            benefits: [
                t('getinvolved.benefit_impact_updates'),
                t('getinvolved.benefit_annual_reports'),
                t('getinvolved.benefit_exclusive_events'),
                t('getinvolved.benefit_tax_receipts'),
            ],
            cta: t('getinvolved.impact_circle_cta'),
            link: '/donate',
            color: '#076c5b',
        },
        {
            icon: <DollarSign size={60} strokeWidth={1} />,
            title: t('getinvolved.one_time_title'),
            description: t('getinvolved.one_time_desc'),
            benefits: [
                t('getinvolved.benefit_choose_programs'),
                t('getinvolved.benefit_immediate_impact'),
                t('getinvolved.benefit_transparent_funds'),
                t('getinvolved.benefit_digital_receipt'),
            ],
            cta: t('getinvolved.one_time_cta'),
            link: '/donate',
            color: '#076c5b',
        },
        {
            icon: <Briefcase size={60} strokeWidth={1} />,
            title: t('getinvolved.corporate_title'),
            description: t('getinvolved.corporate_desc'),
            benefits: [
                t('getinvolved.benefit_co_branded'),
                t('getinvolved.benefit_employee_engagement'),
                t('getinvolved.benefit_reporting'),
                t('getinvolved.benefit_visibility'),
            ],
            cta: t('getinvolved.corporate_cta'),
            link: '/contact',
            color: '#076c5b',
        },
        {
            icon: <User size={60} strokeWidth={1} />,
            title: t('getinvolved.volunteer_title'),
            description: t('getinvolved.volunteer_desc'),
            benefits: [
                t('getinvolved.benefit_mentorship_ops'),
                t('getinvolved.benefit_skills_volunteering'),
                t('getinvolved.benefit_facilitation'),
                t('getinvolved.benefit_community_eng'),
            ],
            cta: t('getinvolved.volunteer_cta'),
            link: '/contact',
            color: '#076c5b',
        },
        {
            icon: <GraduationCap size={60} strokeWidth={1} />,
            title: t('getinvolved.sponsor_title'),
            description: t('getinvolved.sponsor_desc'),
            benefits: [
                t('getinvolved.benefit_personal_connection'),
                t('getinvolved.benefit_progress_photos'),
                t('getinvolved.benefit_letter_exchange'),
                t('getinvolved.benefit_lasting_impact'),
            ],
            cta: t('getinvolved.sponsor_cta'),
            link: '/contact',
            color: '#076c5b',
        },
        {
            icon: <Share2 size={60} strokeWidth={1} />,
            title: t('getinvolved.advocate_title'),
            description: t('getinvolved.advocate_desc'),
            benefits: [
                t('getinvolved.benefit_social_toolkit'),
                t('getinvolved.benefit_shareable_content'),
                t('getinvolved.benefit_ambassador_prog'),
                t('getinvolved.benefit_community_build'),
            ],
            cta: t('getinvolved.advocate_cta'),
            link: '/contact',
            color: '#076c5b',
        },
    ];

    const impactLevels = [
        {
            amount: '$25/month',
            impact: t('getinvolved.impact_menstrual_kits'),
            supporters: 124,
        },
        {
            amount: '$50/month',
            impact: t('getinvolved.impact_school_fees'),
            supporters: 89,
        },
        {
            amount: '$100/month',
            impact: t('getinvolved.impact_seed_capital'),
            supporters: 56,
        },
        {
            amount: '$250/month',
            impact: t('getinvolved.impact_full_sponsor'),
            supporters: 23,
        },
    ];

    return (
        <>
            <style>{`
        section, .ftco-section, .card, .staff-card, .btn, .staff-card:hover {
            box-shadow: none !important;
            border: none !important;
        }
      `}</style>

            {/* Hero Section */}
            <div className="hero-wrap" style={{ backgroundImage: "url('/images/bg_2.jpg')", height: '320px', minHeight: '320px' }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center" style={{ height: '320px', paddingTop: '60px' }}>
                        <div className="col-md-10 text-center px-3">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="mb-3 font-weight-bold"
                                style={{ fontSize: 'clamp(32px, 8vw, 48px)', lineHeight: '1.2', color: '#fff' }}
                            >
                                {t('getinvolved.hero_title')}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="mb-4 text-white opacity-90 mx-auto"
                                style={{ fontSize: 'clamp(15px, 4vw, 18px)', lineHeight: '1.6', maxWidth: '700px' }}
                            >
                                {t('getinvolved.hero_desc')}
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Counter Bar */}
            <section className="ftco-counter ftco-intro" style={{ marginTop: '-30px', position: 'relative', zIndex: 10 }}>
                <div className="container px-3">
                    <div className="row no-gutters">
                        <div className="col-md-12">
                            <div className="row no-gutters d-md-flex align-items-center justify-content-center p-3 p-md-4 bg-white" style={{ borderRadius: '24px', boxShadow: '0 15px 30px rgba(0,0,0,0.05)' }}>
                                <div className="col-md-10 text-center">
                                    <h4 className="font-weight-bold mb-0" style={{ color: '#122f2b', fontSize: 'clamp(16px, 4vw, 20px)' }}>
                                        {t('getinvolved.stats_banner')}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ways to Get Involved */}
            <section className="ftco-section bg-light" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="badge badge-light px-3 py-2 mb-3 font-weight-bold"
                                style={{ color: '#076c5b', backgroundColor: '#e2f5f2', borderRadius: '50px', fontSize: '11px', letterSpacing: '1.2px', textTransform: 'uppercase' }}
                            >
                                {t('getinvolved.badge')}
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="mb-4 font-weight-bold"
                                style={{ fontSize: '42px', lineHeight: '1.1', color: '#111', letterSpacing: '-1.5px' }}
                            >
                                {t('getinvolved.title')}
                            </motion.h2>
                            <p style={{ fontSize: '18px', color: '#666' }}>{t('getinvolved.subtitle')}</p>
                        </div>
                    </div>

                    <div className="row px-2">
                        {ways.map((way, idx) => (
                            <div className="col-md-4 mb-4 d-flex" key={idx}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="bg-white p-4 p-lg-5 d-flex flex-column w-100"
                                    style={{ borderRadius: '32px', border: '1px solid rgba(0,0,0,0.03)' }}
                                >
                                    <div className="mb-4 d-flex align-items-center justify-content-center" style={{ color: way.color, width: '60px', height: '60px' }}>
                                        {way.icon}
                                    </div>
                                    <h3 className="font-weight-bold mb-3" style={{ fontSize: 'clamp(20px, 5vw, 22px)', color: '#111' }}>{way.title}</h3>
                                    <p className="mb-4" style={{ color: '#666', lineHeight: '1.6', fontSize: '15px' }}>{way.description}</p>

                                    <ul className="mb-5 p-0" style={{ listStyle: 'none' }}>
                                        {way.benefits.map((benefit, bIdx) => (
                                            <li key={bIdx} className="d-flex align-items-start mb-2" style={{ fontSize: '14px', color: '#555' }}>
                                                <span className="mr-2" style={{ color: '#076c5b', fontWeight: 'bold' }}>›</span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link to={way.link} className="mt-auto d-flex align-items-center font-weight-bold" style={{ color: '#076c5b', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px', textDecoration: 'none' }}>
                                        {way.cta}
                                        <div className="ml-2 bg-emerald-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px', backgroundColor: '#e2f5f2' }}>
                                            <ChevronRight size={16} style={{ color: '#076c5b' }} />
                                        </div>
                                    </Link>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Levels Section */}
            <section className="ftco-section" style={{ backgroundColor: '#076c5b', padding: '100px 0' }}>
                <div className="container">
                    <div className="row mb-5 pb-3">
                        <div className="col-md-7 heading-section px-3">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="badge badge-light px-3 py-2 mb-3 font-weight-bold"
                                style={{ color: '#fff', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '50px', fontSize: '11px', letterSpacing: '1.2px', textTransform: 'uppercase' }}
                            >
                                {t('getinvolved.monthly_impact_badge')}
                            </motion.span>
                            <h2 className="text-white font-weight-bold" style={{ fontSize: 'clamp(32px, 8vw, 42px)', letterSpacing: '-1.5px' }}>{t('getinvolved.monthly_impact_title')}</h2>
                            <p className="text-white opacity-80" style={{ fontSize: '18px' }}>{t('getinvolved.monthly_impact_desc')}</p>
                        </div>
                    </div>

                    <div className="row px-2">
                        {impactLevels.map((level, idx) => (
                            <div className="col-md-12 mb-3" key={idx}>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="bg-white p-3 p-md-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between"
                                    style={{ borderRadius: '24px' }}
                                >
                                    <div className="d-flex align-items-center mb-3 mb-md-0">
                                        <div className="mr-3 mr-md-4">
                                            <span className="font-weight-black d-block" style={{ fontSize: 'clamp(24px, 6vw, 28px)', color: '#076c5b', lineHeight: '1' }}>{level.amount}</span>
                                            <Badge style={{ backgroundColor: '#eacfa2', color: '#076c5b', fontWeight: 'bold', fontSize: '10px' }}>{level.supporters} supporters</Badge>
                                        </div>
                                        <p className="mb-0 font-weight-bold" style={{ color: '#122f2b', fontSize: 'clamp(15px, 4vw, 18px)' }}>{level.impact}</p>
                                    </div>
                                    <Link to="/donate" className="btn px-4 py-3 font-weight-bold text-center" style={{ backgroundColor: '#076c5b', color: '#fff', borderRadius: '12px', fontSize: '14px' }}>
                                        {t('getinvolved.support_now_btn')}
                                    </Link>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Volunteer Section - Two-Column Style */}
            <section className="ftco-section p-0 overflow-hidden" style={{ backgroundColor: '#fff' }}>
                <div className="container-fluid p-0">
                    <div className="row no-gutters d-flex align-items-stretch">
                        <div className="col-md-6 d-flex align-items-center bg-light order-2 order-md-1" style={{ padding: 'clamp(30px, 8vw, 80px)' }}>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div style={{ color: '#076c5b', marginBottom: '20px' }}><HandHeart size={50} strokeWidth={1} /></div>
                                <h2 className="font-weight-bold mb-4" style={{ fontSize: 'clamp(32px, 8vw, 42px)', color: '#111', letterSpacing: '-1.5px', lineHeight: '1.1' }}>{t('getinvolved.volunteer_with_us')}</h2>
                                <p className="mb-4" style={{ color: '#555', fontSize: '16px', lineHeight: '1.7' }}>{t('getinvolved.volunteer_mission')}</p>
                                <ul className="mb-5 p-0" style={{ listStyle: 'none' }}>
                                    {[
                                        t('getinvolved.vol_mentorship'),
                                        t('getinvolved.vol_training'),
                                        t('getinvolved.vol_education'),
                                        t('getinvolved.vol_outreach')
                                    ].map((item, i) => (
                                        <li key={i} className="mb-2 d-flex align-items-center font-weight-bold" style={{ color: '#111', fontSize: '15px' }}>
                                            <span className="mr-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '24px', height: '24px', backgroundColor: '#e2f5f2', color: '#076c5b', fontSize: '12px', flexShrink: 0 }}>✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="btn px-5 py-3 font-weight-bold w-100 w-sm-auto text-center" style={{ backgroundColor: '#076c5b', color: '#fff', borderRadius: '50px' }}>{t('getinvolved.volunteer_cta')}</Link>
                            </motion.div>
                        </div>
                        <div className="col-md-6 order-1 order-md-2" style={{ backgroundImage: "url('/images/pic12.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}></div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Final Push */}
            <section className="ftco-section px-3" style={{ padding: '60px 0', backgroundColor: '#fff' }}>
                <div className="container text-center px-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-4 p-md-5"
                        style={{ background: 'linear-gradient(135deg, #076c5b 0%, #122f2b 100%)', borderRadius: '32px', color: '#fff' }}
                    >
                        <h2 className="text-white font-weight-bold mb-4" style={{ fontSize: 'clamp(28px, 8vw, 42px)', lineHeight: '1.2' }}>{t('getinvolved.ready_title')}</h2>
                        <p className="mx-auto mb-5 opacity-90" style={{ maxWidth: '600px', fontSize: 'clamp(16px, 4vw, 19px)', lineHeight: '1.6' }}>{t('getinvolved.ready_desc')}</p>
                        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                            <Link to="/donate" className="btn px-4 px-md-5 py-3 font-weight-bold text-center" style={{ backgroundColor: '#bef264', color: '#122f2b', borderRadius: '50px' }}>{t('getinvolved.donate_now_btn')}</Link>
                            <Link to="/contact" className="btn px-4 px-md-5 py-3 font-weight-bold border-white text-white text-center" style={{ borderRadius: '50px', border: '2px solid rgba(255,255,255,0.3) !important' }}>{t('getinvolved.contact_us_btn')}</Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
