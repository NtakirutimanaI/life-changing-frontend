import React from 'react';
import { Link } from 'react-router-dom';
import { useLegacyScripts } from '../hooks/useLegacyScripts';
import { FileText, Download, PlayCircle, Image as ImageIcon, Calendar, Clock, MapPin, Mail, ArrowRight, Video, File, FileCode } from 'lucide-react';

export const ResourcesPage = () => {
    useLegacyScripts();

    const annualReports = [
        {
            title: "2024 Annual Impact Report",
            type: "PDF",
            size: "2.4 MB",
            date: "Feb 2025",
            isLatest: true
        },
        {
            title: "2023 Annual Report",
            type: "PDF",
            size: "2.1 MB",
            date: "Jan 2024",
            isLatest: false
        },
        {
            title: "2022 Year in Review",
            type: "PDF",
            size: "1.8 MB",
            date: "Jan 2023",
            isLatest: false
        }
    ];

    const programBriefs = [
        {
            title: "IkiraroBiz Entrepreneurship Model",
            type: "PDF",
            size: "1.2 MB",
            date: "Jan 2025"
        },
        {
            title: "Girls School Retention Strategy",
            type: "PDF",
            size: "980 KB",
            date: "Dec 2024"
        },
        {
            title: "Human Capital Development Framework",
            type: "PDF",
            size: "1.5 MB",
            date: "Nov 2024"
        },
        {
            title: "Pad Box Initiative Case Study",
            type: "PDF",
            size: "750 KB",
            date: "Oct 2024"
        }
    ];

    const researchPublications = [
        {
            title: "Gender-Transformative Change in Rwanda",
            type: "PDF",
            size: "3.2 MB",
            date: "Dec 2024"
        },
        {
            title: "Economic Empowerment Impact Study",
            type: "PDF",
            size: "2.8 MB",
            date: "Sep 2024"
        },
        {
            title: "Mental Resilience & Mindset Shift Report",
            type: "PDF",
            size: "2.1 MB",
            date: "Jun 2024"
        }
    ];

    const multimedia = [
        {
            title: "LCEO Documentary 2024",
            type: "Video",
            date: "Jan 2025",
            action: "View"
        },
        {
            title: "Beneficiary Success Stories",
            type: "Video",
            date: "Dec 2024",
            action: "View"
        },
        {
            title: "Program Overview Presentation",
            type: "PPT",
            size: "5.6 MB",
            date: "Nov 2024",
            action: "Download"
        }
    ];

    const photoGallery = [
        {
            title: "2024 Program Activities",
            type: "Album",
            date: "Dec 2024",
            action: "View"
        },
        {
            title: "Community Events 2024",
            type: "Album",
            date: "Nov 2024",
            action: "View"
        },
        {
            title: "Training & Workshops",
            type: "Album",
            date: "Oct 2024",
            action: "View"
        }
    ];

    const upcomingEvents = [
        {
            type: "In-Person",
            title: "Annual Stakeholder Meeting",
            date: "March 15, 2025",
            time: "10:00 AM - 2:00 PM",
            location: "Bugesera District Office"
        },
        {
            type: "Public Event",
            title: "IkiraroBiz Graduation Ceremony",
            date: "April 22, 2025",
            time: "9:00 AM - 12:00 PM",
            location: "Nyamata Community Center"
        },
        {
            type: "Program Activity",
            title: "Girls Empowerment Workshop",
            date: "May 8, 2025",
            time: "2:00 PM - 5:00 PM",
            location: "Safe Space Centers"
        }
    ];

    const renderResourceCard = (item: any) => (
        <div className="flex items-center bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 h-100 transition-all duration-300 hover:border-teal-500/30 group">
            <div className="mr-4 flex items-center justify-center" style={{ width: '56px', height: '56px', flexShrink: 0 }}>
                {item.type === 'PDF' && <FileText size={48} strokeWidth={1} className="text-teal-600" />}
                {item.type === 'Video' && <Video size={48} strokeWidth={1} className="text-teal-600" />}
                {item.type === 'PPT' && <FileCode size={48} strokeWidth={1} className="text-teal-600" />}
                {item.type === 'Album' && <ImageIcon size={48} strokeWidth={1} className="text-teal-600" />}
            </div>
            <div className="flex-grow">
                <div className="flex items-center mb-1">
                    <h5 className="font-bold mb-0 text-slate-800 dark:text-slate-100 group-hover:text-teal-600 transition-colors" style={{ fontSize: '1rem' }}>{item.title}</h5>
                    {item.isLatest && (
                        <span className="badge ml-2 px-2 py-0.5 text-white rounded-full bg-amber-400 font-bold" style={{ fontSize: '9px' }}>LATEST</span>
                    )}
                </div>
                <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs mt-1 space-x-2">
                    <span className="font-bold text-teal-600/70">{item.type}</span>
                    {item.size && (
                        <>
                            <span className="opacity-30">•</span>
                            <span>{item.size}</span>
                        </>
                    )}
                    <span className="opacity-30">•</span>
                    <span>{item.date}</span>
                </div>
            </div>
            <button className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-teal-600 group-hover:text-white transition-all">
                {item.action === 'View' ? <PlayCircle size={16} /> : <Download size={16} />}
            </button>
        </div>
    );

    return (
        <div className="bg-slate-50 dark:bg-slate-950">
            <style>{`
                /* Styles from HowWeWorkPage for Impact Section */
                .impact-card {
                    position: relative;
                    border-radius: 15px;
                    overflow: hidden;
                    margin-bottom: 10px;
                    height: 350px;
                    transition: all 0.3s ease;
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
                    height: 100%;
                    background: rgba(0, 89, 79, 0.92);
                    padding-top: 40px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    opacity: 0;
                    transition: all 0.3s ease;
                }
                .impact-card:hover .impact-card-overlay {
                    opacity: 1;
                }
                .impact-card-title {
                    font-size: 19px;
                    font-weight: 700;
                    margin-bottom: 20px;
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
                    font-size: 15px;
                    line-height: 1.6;
                    transition: opacity 0.3s ease;
                    transition-delay: 0.1s;
                    margin-top: 10px;
                    color: rgba(255,255,255,0.9);
                    padding: 0 20px;
                }
                .impact-card:hover .impact-card-desc {
                    opacity: 1;
                }

                /* 3D Flip Card Animation for Events */
                .event-perspective {
                    perspective: 1500px;
                    height: 480px;
                    margin-bottom: 30px;
                }
                .event-flip-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
                    transform-style: preserve-3d;
                    cursor: pointer;
                }
                .event-perspective:hover .event-flip-inner {
                    transform: rotateY(180deg);
                }
                .event-flip-front, .event-flip-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                    border-radius: 8px;
                    overflow: hidden;
                }
                .event-flip-front img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .event-flip-back {
                    background: #122f2b;
                    color: white;
                    transform: rotateY(180deg);
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    padding: 40px 30px;
                    text-align: left;
                }
                .event-title-top {
                    font-size: 22px;
                    font-weight: 900;
                    color: #122f2b;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    text-align: center;
                    margin-bottom: 12px;
                }
                .yellow-underline {
                    width: 60px;
                    height: 4px;
                    background: #bef264;
                    margin: 0 auto 35px auto;
                    border-radius: 2px;
                }
                .middle-card-tilt {
                    transform: rotateY(-15deg);
                }
                .event-perspective:hover .middle-card-tilt {
                    transform: rotateY(180deg);
                }
            `}</style>
            <div className="hero-wrap" style={{ backgroundImage: "url('/images/pic15.jpg')", height: '450px', minHeight: '450px', position: 'relative' }}>
                <div className="overlay" style={{ background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7))', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}></div>
                <div className="container h-full relative z-10">
                    <div className="row no-gutters slider-text align-items-center justify-content-center" style={{ height: '450px' }}>
                        <div className="col-md-9 ftco-animate text-center">
                            <p className="breadcrumbs mb-2"><span className="mr-2"><Link
                                to="/" className="text-teal-400">Home</Link></span> <span className="text-white opacity-70">Resources</span></p>
                            <h1 className="mb-4 text-white font-bold" style={{ fontSize: '3.5rem', lineHeight: 1.1 }}>Reports, Research & Media</h1>
                            <p className="text-white/80 mx-auto" style={{ fontSize: '1.25rem', maxWidth: '700px' }}>Access our latest impact reports, program briefs, and multimedia content showcasing our work across Rwanda.</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="pt-6 pb-0">
                <div className="container">
                    {/* Annual Reports */}
                    <div className="row mb-6">
                        <div className="col-md-12 mb-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-1 w-12 bg-teal-500 rounded-full"></div>
                                <span className="text-teal-600 font-bold tracking-widest text-xs uppercase">Accountability</span>
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Annual Reports</h2>
                        </div>
                        {annualReports.map((report, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4 ftco-animate">
                                {renderResourceCard(report)}
                            </div>
                        ))}
                    </div>

                    {/* Program Briefs */}
                    <div className="row mb-6">
                        <div className="col-md-12 mb-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-1 w-12 bg-teal-500 rounded-full"></div>
                                <span className="text-teal-600 font-bold tracking-widest text-xs uppercase">Strategy</span>
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Program Briefs</h2>
                        </div>
                        {programBriefs.map((brief, index) => (
                            <div key={index} className="col-lg-6 mb-4 ftco-animate">
                                {renderResourceCard(brief)}
                            </div>
                        ))}
                    </div>

                    {/* Research & Publications */}
                    <div className="row mb-6">
                        <div className="col-md-12 mb-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-1 w-12 bg-teal-500 rounded-full"></div>
                                <span className="text-teal-600 font-bold tracking-widest text-xs uppercase">Knowledge</span>
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Research & Publications</h2>
                        </div>
                        {researchPublications.map((pub, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4 ftco-animate">
                                {renderResourceCard(pub)}
                            </div>
                        ))}
                    </div>

                    <div className="row">
                        {/* Multimedia */}
                        <div className="col-lg-6 mb-6">
                            <div className="mb-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="h-1 w-12 bg-teal-500 rounded-full"></div>
                                    <span className="text-teal-600 font-bold tracking-widest text-xs uppercase">Video</span>
                                </div>
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Multimedia</h2>
                            </div>
                            <div className="space-y-4">
                                {multimedia.map((item, index) => (
                                    <div key={index} className="ftco-animate">
                                        {renderResourceCard(item)}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Photo Gallery */}
                        <div className="col-lg-6 mb-6">
                            <div className="mb-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="h-1 w-12 bg-teal-500 rounded-full"></div>
                                    <span className="text-teal-600 font-bold tracking-widest text-xs uppercase">Gallery</span>
                                </div>
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Photo Gallery</h2>
                            </div>
                            <div className="space-y-4">
                                {photoGallery.map((item, index) => (
                                    <div key={index} className="ftco-animate">
                                        {renderResourceCard(item)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Multimedia Gallery - Visual Grid */}
                    <div className="row mb-0">
                        <div className="col-md-12 mb-3">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 text-left">Impact In Action</h2>
                            <p className="text-slate-600 dark:text-slate-400 text-left">Visual highlights from our operations across the country.</p>
                        </div>

                        {/* Card 1 */}
                        <div className="col-md-4 mb-4 ftco-animate">
                            <a href="#" className="block h-full text-decoration-none">
                                <div className="impact-card">
                                    <img src="/images/p7.jpg" alt="School Materials" />
                                    <div className="impact-card-overlay">
                                        <h3 className="impact-card-title">School Materials Distribution</h3>
                                        <p className="impact-card-desc">Distribution of essential learning supplies to partner schools in rural districts to support student retention.</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Card 2 */}
                        <div className="col-md-4 mb-4 ftco-animate">
                            <a href="#" className="block h-full text-decoration-none">
                                <div className="impact-card">
                                    <img src="/images/p4.jpg" alt="Vocational Training" />
                                    <div className="impact-card-overlay">
                                        <h3 className="impact-card-title">Vocational Training Session</h3>
                                        <p className="impact-card-desc">Practical skills workshops and mentorship programs empowering youth with sustainable livelihood opportunities.</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Card 3 */}
                        <div className="col-md-4 mb-4 ftco-animate">
                            <a href="https://vimeo.com/45830194" className="block h-full text-decoration-none">
                                <div className="impact-card">
                                    <img src="/images/p5.jpg" alt="Keza's Journey" />
                                    <div className="impact-card-overlay">
                                        <h3 className="impact-card-title">Keza's Journey (Video)</h3>
                                        <p className="impact-card-desc">Watch the inspiring story of how community support and resilience transformed one family's future features.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Redesigned Upcoming Events Section */}
            <section className="pt-0 pb-6 bg-white overflow-hidden">
                <div className="container">
                    <div className="row justify-content-center mb-1">
                        <div className="col-md-8 text-center heading-section ftco-animate">
                            <span className="subheading" style={{ color: '#4FB1A1', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Events</span>
                            <h2 className="mb-3" style={{ fontSize: '40px', fontWeight: '900', color: '#122f2b' }}>Upcoming Events & Activities</h2>
                            <p className="text-muted">Join us at our upcoming events and see our programs in action</p>
                        </div>
                    </div>

                    <div className="row mt-0">
                        {/* Slot 1: WHO WE ARE */}
                        <div className="col-lg-4 mb-2 ftco-animate">
                            <h3 className="event-title-top">Who We Are</h3>
                            <div className="yellow-underline"></div>
                            <div className="event-perspective">
                                <div className="event-flip-inner">
                                    <div className="event-flip-front">
                                        <img src="/images/pic14.jpg" alt="Stakeholder Meeting" />
                                    </div>
                                    <div className="event-flip-back">
                                        <div className="mb-auto">
                                            <span className="badge px-3 py-1 mb-4" style={{ backgroundColor: 'rgba(190, 242, 100, 0.15)', color: '#bef264', borderRadius: '50px', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase' }}>{upcomingEvents[0].type}</span>
                                            <h4 className="text-white font-black mb-4" style={{ fontSize: '24px', lineHeight: '1.2' }}>{upcomingEvents[0].title}</h4>
                                            <div className="space-y-4 text-white/80">
                                                <div className="flex items-center"><Calendar size={18} className="mr-3 text-teal-400" /> <span className="font-semibold">{upcomingEvents[0].date}</span></div>
                                                <div className="flex items-center"><Clock size={18} className="mr-3 text-teal-400" /> <span>{upcomingEvents[0].time}</span></div>
                                                <div className="flex items-start"><MapPin size={18} className="mr-3 text-teal-400 mt-1" /> <span>{upcomingEvents[0].location}</span></div>
                                            </div>
                                        </div>
                                        <button className="btn w-fit px-5 py-3 mt-8 font-weight-bold" style={{ backgroundColor: '#bef264', color: '#122f2b', borderRadius: '12px', border: 'none', transition: 'all 0.3s ease' }}>
                                            Register Interest
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slot 2: WHAT WE DO (Mid-tilted style) */}
                        <div className="col-lg-4 mb-2 ftco-animate">
                            <h3 className="event-title-top">What We Do</h3>
                            <div className="yellow-underline"></div>
                            <div className="event-perspective">
                                <div className="event-flip-inner middle-card-tilt">
                                    <div className="event-flip-front">
                                        <img src="/images/pic2.jpg" alt="Graduation Ceremony" />
                                    </div>
                                    <div className="event-flip-back" style={{ background: '#1a1a4a' }}> {/* Deep Blue as in reference image */}
                                        <div className="mb-auto">
                                            <span className="badge px-3 py-1 mb-4" style={{ backgroundColor: 'rgba(190, 242, 100, 0.15)', color: '#bef264', borderRadius: '50px', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase' }}>{upcomingEvents[1].type}</span>
                                            <h4 className="text-white font-black mb-4" style={{ fontSize: '24px', lineHeight: '1.2' }}>{upcomingEvents[1].title}</h4>
                                            <p className="text-white/70 mb-5 leading-relaxed" style={{ fontSize: '15px' }}>
                                                Celebrating the resilience and achievements of IkiraroBiz graduates as they launch their entrepreneurial journeys.
                                            </p>
                                            <div className="space-y-4 text-white/80">
                                                <div className="flex items-center"><Calendar size={18} className="mr-3 text-teal-400" /> <span className="font-semibold">{upcomingEvents[1].date}</span></div>
                                                <div className="flex items-center"><Clock size={18} className="mr-3 text-teal-400" /> <span>{upcomingEvents[1].time}</span></div>
                                            </div>
                                        </div>
                                        <button className="btn w-fit px-5 py-3 mt-8 font-weight-bold" style={{ backgroundColor: '#2ba898', color: 'white', borderRadius: '12px', border: 'none', transition: 'all 0.3s ease' }}>
                                            LEARN MORE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slot 3: WHY WE DO IT */}
                        <div className="col-lg-4 mb-2 ftco-animate">
                            <h3 className="event-title-top">Why We Do It</h3>
                            <div className="yellow-underline"></div>
                            <div className="event-perspective">
                                <div className="event-flip-inner">
                                    <div className="event-flip-front">
                                        <img src="/images/pic19.jpg" alt="Empowerment Workshop" />
                                    </div>
                                    <div className="event-flip-back">
                                        <div className="mb-auto">
                                            <span className="badge px-3 py-1 mb-4" style={{ backgroundColor: 'rgba(190, 242, 100, 0.15)', color: '#bef264', borderRadius: '50px', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase' }}>{upcomingEvents[2].type}</span>
                                            <h4 className="text-white font-black mb-4" style={{ fontSize: '24px', lineHeight: '1.2' }}>{upcomingEvents[2].title}</h4>
                                            <div className="space-y-4 text-white/80">
                                                <div className="flex items-center"><Calendar size={18} className="mr-3 text-teal-400" /> <span className="font-semibold">{upcomingEvents[2].date}</span></div>
                                                <div className="flex items-center"><Clock size={18} className="mr-3 text-teal-400" /> <span>{upcomingEvents[2].time}</span></div>
                                                <div className="flex items-start"><MapPin size={18} className="mr-3 text-teal-400 mt-1" /> <span>{upcomingEvents[2].location}</span></div>
                                            </div>
                                        </div>
                                        <button className="btn w-fit px-5 py-3 mt-8 font-weight-bold" style={{ backgroundColor: '#bef264', color: '#122f2b', borderRadius: '12px', border: 'none', transition: 'all 0.3s ease' }}>
                                            Register Interest
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};
