import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockPrograms } from '../lib/mock-data';
import { toast } from 'sonner';
import {
    Check,
    ArrowRight,
    ArrowLeft,
    RefreshCcw,
    Heart,
    Smartphone,
    CreditCard,
    Building2,
    Banknote,
    CheckCircle,
    Info,
    Layers,
    Briefcase,
    GraduationCap
} from 'lucide-react';

export function DonationPage() {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const [viewType, setViewType] = useState<'quick' | 'detailed'>('quick');
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        program: 'general',
        type: 'one-time',
        frequency: 'monthly',
        amount: '10',
        customAmount: '',
        anonymous: false,
        message: '',
        paymentMethod: 'card',
        email: '',
        name: '',
    });

    const totalSteps = 5;
    const progress = (step / totalSteps) * 100;
    const suggestedAmounts = [10, 25, 50, 100];
    const detailedSuggestedAmounts = [25, 50, 100, 250, 500, 1000];

    const impactPrograms = [
        { id: 'education', name: 'Education Support', icon: GraduationCap, color: '#076c5b', description: 'Help girls stay in school with scholarships and supplies.' },
        { id: 'medical', name: 'Medical Care', icon: Heart, color: '#dc2626', description: 'Provide health education and hygiene kits to communities.' },
        { id: 'business', name: 'Business Incubation', icon: Briefcase, color: '#d97706', description: 'Support women entrepreneurs with seed funding and mentorship.' },
        { id: 'emergency', name: 'Emergency Response', icon: Info, color: '#7e22ce', description: 'Provide rapid support to families in crisis situations.' },
        { id: 'shelter', name: 'Shelter & Safety', icon: Building2, color: '#2563eb', description: 'Ensure vulnerable women have a safe place to live.' },
    ];

    const handleNext = () => {
        setStep(prev => prev + 1);
        window.scrollTo(0, 0);
    };

    const handleCompleteDonation = () => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            toast.success('Donation processed successfully! Thank you for your support.');
            setStep(6); // Show success step for both views
        }, 2000);
    };

    const handleBack = () => {
        setStep(prev => prev - 1);
        window.scrollTo(0, 0);
    };

    const selectedAmount = parseInt(formData.amount || formData.customAmount || '0');

    const renderSplashScreen = () => (
        <div className="position-relative w-100 d-flex align-items-center justify-content-center overflow-hidden fade-in-up" style={{ minHeight: '85vh', paddingTop: '40px' }}>

            {/* Background Dotted Orbit Line */}
            <div className="position-absolute d-none d-md-block animate-spin-slow" style={{
                width: '650px',
                height: '650px',
                border: '2px dashed #e2e8f0',
                borderRadius: '50%',
                zIndex: 0,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}></div>

            {/* Central Content */}
            <div className="text-center position-relative z-index-1 p-3 animate-pop" style={{ maxWidth: '550px' }}>
                <div className="mb-3 d-inline-block px-3 py-1 rounded-pill bg-white border" style={{ color: '#076c5b', fontSize: '0.85rem', fontWeight: '700' }}>
                    #1 Trusted Impact Platform
                </div>
                <h1 className="font-weight-bold mb-4" style={{ color: '#122f2b', lineHeight: '1.1', letterSpacing: '-1px', fontSize: '2.5rem' }}>
                    Successful impact<br />
                    starts here
                </h1>
                <button
                    className="btn px-4 py-2 rounded-pill font-weight-bold transition-all"
                    style={{ backgroundColor: '#076c5b', color: '#fff', fontSize: '1.1rem', border: 'none', paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                    onClick={() => {
                        setShowForm(true);
                        setViewType('quick');
                    }}
                >
                    Start Donating
                </button>
            </div>

            {/* Orbiting Circles (Absolute Positioned) - Hidden on mobile for simplicity, or adjusted */}
            <div className="d-none d-lg-block">
                {/* 1. Education (Top Right) */}
                <div className="position-absolute" style={{ top: '15%', right: '22%', zIndex: 2 }}>
                    <div className="position-relative animate-float delay-1">
                        <div className="rounded-circle p-1" style={{ width: '130px', height: '130px', background: 'conic-gradient(#076c5b 80%, #eee 0)', borderRadius: '50%' }}>
                            <div className="bg-white rounded-circle w-100 h-100 d-flex align-items-center justify-content-center p-1">
                                <div className="rounded-circle w-100 h-100" style={{ backgroundImage: "url('/images/bg_1.jpg')", backgroundSize: 'cover' }}></div>
                            </div>
                        </div>
                        <span className="position-absolute bg-white px-3 py-1 rounded-pill font-weight-bold" style={{ bottom: '-10px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.8rem', color: '#122f2b', whiteSpace: 'nowrap', border: '1px solid #eee' }}>Education</span>
                    </div>
                </div>

                {/* 2. Medical (Left) */}
                <div className="position-absolute" style={{ top: '45%', left: '15%', transform: 'translateY(-50%)', zIndex: 2 }}>
                    <div className="position-relative animate-float delay-2">
                        <div className="rounded-circle p-1" style={{ width: '140px', height: '140px', background: 'conic-gradient(#076c5b 40%, #eee 0)', borderRadius: '50%' }}>
                            <div className="bg-white rounded-circle w-100 h-100 d-flex align-items-center justify-content-center p-1">
                                <div className="rounded-circle w-100 h-100" style={{ backgroundImage: "url('/images/person_2.jpg')", backgroundSize: 'cover' }}></div>
                            </div>
                        </div>
                        <span className="position-absolute bg-white px-3 py-1 rounded-pill font-weight-bold" style={{ bottom: '-10px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.8rem', color: '#122f2b', border: '1px solid #eee' }}>Medical</span>
                    </div>
                </div>

                {/* 3. Business (Bottom Right) */}
                <div className="position-absolute" style={{ bottom: '20%', right: '25%', zIndex: 2 }}>
                    <div className="position-relative animate-float delay-3">
                        <div className="rounded-circle p-1" style={{ width: '110px', height: '110px', background: 'conic-gradient(#076c5b 60%, #eee 0)', borderRadius: '50%' }}>
                            <div className="bg-white rounded-circle w-100 h-100 d-flex align-items-center justify-content-center p-1">
                                <div className="rounded-circle w-100 h-100" style={{ backgroundImage: "url('/images/person_4.jpg')", backgroundSize: 'cover' }}></div>
                            </div>
                        </div>
                        <span className="position-absolute bg-white px-3 py-1 rounded-pill font-weight-bold" style={{ bottom: '-10px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.8rem', color: '#122f2b', border: '1px solid #eee' }}>Business</span>
                    </div>
                </div>

                {/* 4. Emergency (Top Left) */}
                <div className="position-absolute" style={{ top: '15%', left: '25%', zIndex: 2 }}>
                    <div className="position-relative animate-float delay-4">
                        <div className="rounded-circle p-1" style={{ width: '100px', height: '100px', background: 'conic-gradient(#076c5b 90%, #eee 0)', borderRadius: '50%' }}>
                            <div className="bg-white rounded-circle w-100 h-100 d-flex align-items-center justify-content-center p-1">
                                <div className="rounded-circle w-100 h-100" style={{ backgroundImage: "url('/images/image_5.jpg')", backgroundSize: 'cover' }}></div>
                            </div>
                        </div>
                        <span className="position-absolute bg-white px-3 py-1 rounded-pill font-weight-bold" style={{ bottom: '-10px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.8rem', color: '#122f2b', border: '1px solid #eee' }}>Emergency</span>
                    </div>
                </div>

                {/* 5. Shelter (Right) */}
                <div className="position-absolute" style={{ top: '50%', right: '12%', transform: 'translateY(-50%)', zIndex: 2 }}>
                    <div className="position-relative animate-float delay-2">
                        <div className="rounded-circle p-1" style={{ width: '120px', height: '120px', background: 'conic-gradient(#076c5b 30%, #eee 0)', borderRadius: '50%' }}>
                            <div className="bg-white rounded-circle w-100 h-100 d-flex align-items-center justify-content-center p-1">
                                <div className="rounded-circle w-100 h-100" style={{ backgroundImage: "url('/images/image_1.jpg')", backgroundSize: 'cover' }}></div>
                            </div>
                        </div>
                        <span className="position-absolute bg-white px-3 py-1 rounded-pill font-weight-bold" style={{ bottom: '-10px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.8rem', color: '#122f2b', border: '1px solid #eee' }}>Shelter</span>
                    </div>
                </div>
            </div>

            {/* Bottom Stats Section */}
            <div className="position-absolute w-100" style={{ bottom: '0', left: 0, padding: '0 20px 0px' }}>
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center text-md-left">
                        <div className="col-md-5 mb-3 mb-md-0 text-right pr-md-5 border-right" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                            <h2 className="font-weight-bold mb-0" style={{ color: '#122f2b', fontSize: '1.8rem' }}>
                                More than $5M raised<br />
                                <span style={{ color: '#076c5b' }}>every year on LCEO.*</span>
                            </h2>
                        </div>
                        <div className="col-md-5 pl-md-5 text-left">
                            <p className="mb-0 text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                Get started in just a few minutes — with helpful options to pick the perfect cause
                                and share it with the world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderQuickDonation = () => (
        <div className="row no-gutters shadow-lg rounded-xl overflow-hidden" style={{ minHeight: 'auto', border: '1px solid rgba(0,0,0,0.05)' }}>
            {/* Left Side: Impact */}
            <div className="col-lg-5 p-4 md:p-5 d-flex flex-column justify-content-center text-white position-relative" style={{ minHeight: '300px', backgroundColor: '#122f2b', backgroundImage: 'linear-gradient(rgba(18, 47, 43, 0.88), rgba(18, 47, 43, 0.98)), url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="position-relative z-index-1">
                    <div className="rounded-circle d-inline-flex p-3 mb-4 shadow-sm" style={{
                        background: 'rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                        <Heart size={36} color="#076c5b" fill="#076c5b" strokeWidth={1.5} />
                    </div>
                    <h1 className="font-weight-bold mb-3 responsive-impact-title" style={{
                        lineHeight: '1.1',
                        color: '#ffffff',
                        textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                        letterSpacing: '-0.5px'
                    }}>Join the <br /><span style={{ color: '#076c5b' }}>Impact Circle</span></h1>
                    <p className="lead mb-4 opacity-90 font-weight-bold" style={{ fontSize: '1.1rem', color: '#e0eeeb' }}>
                        Every dollar transforms a life in the Bugesera District of Rwanda.
                    </p>

                    <div className="mt-4">
                        {[
                            { amt: '$25', text: 'School supplies for 3 girls', color: '#076c5b' },
                            { amt: '$50', text: 'IkiraroBiz Skills training', color: '#d97706' },
                            { amt: '$100', text: 'Micro-business starter kit', color: '#7e22ce' },
                            { amt: '$250', text: 'One year of shelter & safety', color: '#dc2626' }
                        ].map((item, i) => (
                            <div key={i} className="d-flex align-items-center mb-2 px-3 py-2 rounded-lg transition-all" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <div className="rounded p-1 mr-3 text-center font-weight-bold d-flex align-items-center justify-content-center shadow-sm" style={{ width: '42px', height: '28px', backgroundColor: '#fff', color: item.color, fontSize: '0.8rem' }}>
                                    {item.amt}
                                </div>
                                <span className="mb-0 font-weight-bold text-truncate" style={{ color: '#fff', fontSize: '0.9rem' }}>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="col-lg-7 bg-white p-4 p-md-5 d-flex flex-column justify-content-center">
                <div className="d-flex justify-content-between align-items-start mb-4">
                    <div>
                        <h2 className="font-weight-bold text-dark mb-0" style={{ fontSize: '1.8rem' }}>Make a Donation</h2>
                        <p className="text-muted small mb-0">Your gift is secure and tax-deductible.</p>
                    </div>
                    <button className="btn btn-link text-muted p-0" onClick={() => setShowForm(false)}>
                        <ArrowLeft size={24} />
                    </button>
                </div>

                <div className="mb-4">
                    <label className="text-uppercase small font-weight-bold text-muted mb-3 d-block">Select Amount (USD)</label>
                    <div className="row mx-n2">
                        {suggestedAmounts.map(amt => (
                            <div className="col-3 px-2 mb-3" key={amt}>
                                <button
                                    className={`btn btn-block py-3 font-weight-bold transition-all shadow-sm ${formData.amount === amt.toString() ? 'btn-primary' : 'btn-light'}`}
                                    style={{
                                        backgroundColor: formData.amount === amt.toString() ? '#076c5b' : '#f8f9fa',
                                        borderColor: formData.amount === amt.toString() ? '#076c5b' : '#eee',
                                        color: formData.amount === amt.toString() ? '#fff' : '#444',
                                        borderRadius: '10px'
                                    }}
                                    onClick={() => setFormData({ ...formData, amount: amt.toString(), customAmount: '' })}
                                >
                                    ${amt}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-2 position-relative">
                        <div className="position-absolute h-100 d-flex align-items-center px-3 text-muted" style={{ left: 0, top: 0, zIndex: 10 }}>$</div>
                        <input
                            type="number"
                            className="form-control form-control-lg bg-light border-0 py-4 shadow-sm"
                            placeholder="Custom Amount"
                            style={{ borderRadius: '12px', fontSize: '1.25rem', paddingLeft: '2.5rem' }}
                            value={formData.customAmount}
                            onChange={e => setFormData({ ...formData, customAmount: e.target.value, amount: '' })}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg border-light py-4"
                            placeholder="Your Name"
                            style={{ borderRadius: '10px', fontSize: '0.95rem' }}
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input
                            type="email"
                            className="form-control form-control-lg border-light py-4"
                            placeholder="Email Address"
                            style={{ borderRadius: '10px', fontSize: '0.95rem' }}
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <textarea
                        className="form-control border-light py-3 px-3"
                        rows={2}
                        placeholder="Message of encouragement (Optional)"
                        style={{ borderRadius: '10px', fontSize: '0.95rem' }}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                </div>

                <button
                    className="btn btn-block py-3 font-weight-bold text-white mb-4 shadow-lg transition-all"
                    style={{ backgroundColor: '#076c5b', borderRadius: '12px', fontSize: '1.1rem', minHeight: '60px' }}
                    onClick={handleCompleteDonation}
                    disabled={loading || !selectedAmount || !formData.email || !formData.name}
                >
                    {loading ? (
                        <>
                            <RefreshCcw className="animate-spin mr-2 d-inline-block" size={20} />
                            Securing Payment...
                        </>
                    ) : `Donate $${selectedAmount || '0'} Now`}
                </button>

                <div className="text-center pt-2">
                    <button className="btn btn-link btn-sm font-weight-bold" style={{ color: '#076c5b' }} onClick={() => setViewType('detailed')}>
                        Advanced Options: Select Programs & Recurring Gifts
                    </button>
                    <div className="mt-3 d-flex justify-content-center align-items-center opacity-50">
                        <div className="mx-2"><CreditCard size={14} className="mr-1" /> Visa</div>
                        <div className="mx-2"><Smartphone size={14} className="mr-1" /> MoMo</div>
                        <div className="mx-2"><Building2 size={14} className="mr-1" /> Bank</div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderDetailedDonation = () => (
        <div className="row justify-content-center">
            <div className="col-lg-8">
                {/* Progress */}
                <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-muted font-weight-bold small">Step {step} of {totalSteps}</span>
                        <span className="font-weight-bold small" style={{ color: '#076c5b' }}>{Math.round(progress)}% Complete</span>
                    </div>
                    <div className="progress" style={{ height: '8px', background: '#eef2f2', borderRadius: '10px' }}>
                        <div className="progress-bar" style={{
                            width: `${progress}%`,
                            background: '#076c5b',
                            borderRadius: '10px',
                            transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}></div>
                    </div>
                </div>

                <div className="card shadow-lg border-0" style={{ borderRadius: '24px' }}>
                    <div className="card-body p-4 p-md-5">

                        {/* Step 1: Program Selection */}
                        {step === 1 && (
                            <div className="animate-fadeIn">
                                <h2 className="font-weight-bold mb-2 text-dark" style={{ fontSize: '2rem' }}>Direct Your Impact</h2>
                                <p className="text-muted mb-5" style={{ fontSize: '1.1rem' }}>Choose a specific area to support or donate where it's needed most.</p>

                                <div className="donation-options">
                                    {/* Option: Where Needed Most */}
                                    <div
                                        className={`p-4 mb-4 border-2 rounded-xl cursor-pointer transition-all d-flex align-items-center ${formData.program === 'general' ? 'border-[#076c5b] bg-[#e2f5f2]' : 'border-gray-100 hover:border-gray-200 bg-white'}`}
                                        style={{ border: formData.program === 'general' ? '2px solid #076c5b' : '1px solid #f8f9fa' }}
                                        onClick={() => setFormData({ ...formData, program: 'general' })}
                                    >
                                        <div className="icon-box mr-4 d-flex align-items-center justify-content-center shadow-sm" style={{
                                            width: '60px',
                                            height: '60px',
                                            backgroundColor: '#076c5b',
                                            borderRadius: '15px'
                                        }}>
                                            <Heart size={30} color="white" fill="white" strokeWidth={1.5} />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h5 className="font-weight-bold mb-1 text-dark">Where Needed Most</h5>
                                            <p className="text-muted mb-0 small" style={{ fontSize: '0.95rem' }}>Allow LCEO to direct your gift to areas of highest priority.</p>
                                        </div>
                                        <div className="ml-3">
                                            <div className={`p-1 rounded-circle border-2 ${formData.program === 'general' ? 'border-[#076c5b] bg-[#076c5b]' : 'border-gray-300'}`} style={{ width: '22px', height: '22px' }}>
                                                {formData.program === 'general' && <Check size={12} color="white" strokeWidth={5} />}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mx-n2">
                                        {impactPrograms.map(prog => (
                                            <div className="col-md-6 px-2 mb-3" key={prog.id}>
                                                <div
                                                    className={`p-4 border-2 h-100 rounded-xl cursor-pointer transition-all d-flex align-items-start ${formData.program === prog.id ? 'border-[#076c5b] bg-[#e2f5f2]' : 'border-gray-100 hover:border-gray-200 bg-white'}`}
                                                    style={{ border: formData.program === prog.id ? '2px solid #076c5b' : '1px solid #f8f9fa' }}
                                                    onClick={() => setFormData({ ...formData, program: prog.id })}
                                                >
                                                    <div className="icon-box mr-3 d-flex align-items-center justify-content-center shadow-sm" style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        backgroundColor: formData.program === prog.id ? '#076c5b' : '#f8f9fa',
                                                        borderRadius: '12px',
                                                        color: formData.program === prog.id ? 'white' : '#076c5b'
                                                    }}>
                                                        <prog.icon size={24} strokeWidth={1.5} />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="font-weight-bold mb-1 text-dark" style={{ fontSize: '1rem' }}>{prog.name}</h6>
                                                        <p className="text-muted mb-0 small" style={{ fontSize: '0.85rem', lineHeight: '1.2' }}>{prog.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between mt-5 align-items-center pt-3">
                                    <button className="btn btn-link text-muted font-weight-bold p-0" onClick={() => setViewType('quick')}>
                                        Switch back to quick donation
                                    </button>
                                    <button
                                        className="btn btn-primary px-5 py-3 font-weight-bold d-flex align-items-center rounded-pill shadow-md"
                                        style={{ backgroundColor: '#076c5b', border: 'none' }}
                                        onClick={handleNext}
                                    >
                                        Continue <ArrowRight size={20} className="ml-2" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Gift Choice */}
                        {step === 2 && (
                            <div className="animate-fadeIn">
                                <h2 className="font-weight-bold mb-2 text-dark" style={{ fontSize: '2rem' }}>Gift Choice</h2>
                                <p className="text-muted mb-4" style={{ fontSize: '1.1rem' }}>Sustain our mission with a monthly gift or make a one-time contribution.</p>

                                <div className="row mb-5">
                                    <div className="col-6">
                                        <button
                                            className={`btn btn-block py-4 rounded-xl font-weight-bold transition-all ${formData.type === 'recurring' ? 'bg-[#076c5b] text-white shadow-lg' : 'bg-gray-50 text-muted border-0'}`}
                                            onClick={() => setFormData({ ...formData, type: 'recurring' })}
                                        >
                                            <RefreshCcw size={24} className="mb-2 d-block mx-auto" />
                                            Monthly Giving
                                        </button>
                                    </div>
                                    <div className="col-6">
                                        <button
                                            className={`btn btn-block py-4 rounded-xl font-weight-bold transition-all ${formData.type === 'one-time' ? 'bg-[#122f2b] text-white shadow-lg' : 'bg-gray-50 text-muted border-0'}`}
                                            onClick={() => setFormData({ ...formData, type: 'one-time' })}
                                        >
                                            <Heart size={24} className="mb-2 d-block mx-auto" />
                                            One-Time Gift
                                        </button>
                                    </div>
                                </div>

                                <div className="row mx-n2">
                                    {detailedSuggestedAmounts.map(amt => (
                                        <div className="col-4 mb-3 px-2" key={amt}>
                                            <button
                                                className={`btn btn-block py-3 font-weight-bold rounded-xl border-2 transition-all ${selectedAmount === amt ? 'border-[#076c5b] bg-[#e2f5f2] text-[#076c5b]' : 'border-gray-100 bg-white'}`}
                                                onClick={() => setFormData({ ...formData, amount: '', customAmount: amt.toString() })}
                                            >
                                                ${amt}
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-2">
                                    <div className="position-relative">
                                        <span className="position-absolute h-100 d-flex align-items-center px-4 text-muted" style={{ left: 0, top: 0, zIndex: 10 }}>$</span>
                                        <input
                                            type="number"
                                            className="form-control form-control-lg bg-light border-0 py-4 shadow-sm"
                                            placeholder="Enter other amount"
                                            style={{ borderRadius: '15px', paddingLeft: '3rem' }}
                                            value={formData.customAmount}
                                            onChange={e => setFormData({ ...formData, customAmount: e.target.value, amount: '' })}
                                        />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between mt-5 pt-3">
                                    <button className="btn btn-light px-4 py-3 rounded-pill font-weight-bold" onClick={handleBack}>
                                        <ArrowLeft size={18} className="mr-2" /> Back
                                    </button>
                                    <button
                                        className="btn btn-primary px-5 py-3 rounded-pill font-weight-bold shadow-md"
                                        style={{ backgroundColor: '#076c5b', border: 'none' }}
                                        onClick={handleNext}
                                        disabled={!selectedAmount}
                                    >
                                        Continue <ArrowRight size={18} className="ml-2" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Donor Details */}
                        {step === 3 && (
                            <div className="animate-fadeIn">
                                <h2 className="font-weight-bold mb-2 text-dark" style={{ fontSize: '2rem' }}>About You</h2>
                                <p className="text-muted mb-5" style={{ fontSize: '1.1rem' }}>Help us keep you updated on the impact of your gift.</p>

                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <label className="small font-weight-bold text-muted text-uppercase mb-2 d-block">Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg border-gray-200 py-3"
                                            placeholder="Full Name"
                                            style={{ borderRadius: '12px' }}
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label className="small font-weight-bold text-muted text-uppercase mb-2 d-block">Email Address</label>
                                        <input
                                            type="email"
                                            className="form-control form-control-lg border-gray-200 py-3"
                                            placeholder="Email Address"
                                            style={{ borderRadius: '12px' }}
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="small font-weight-bold text-muted text-uppercase mb-2 d-block">Message of Support (Optional)</label>
                                    <textarea
                                        className="form-control border-gray-200 py-3"
                                        rows={3}
                                        placeholder="Your message to the girls and community..."
                                        style={{ borderRadius: '12px' }}
                                        value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>

                                <div className="p-3 rounded-xl bg-gray-50 border-0 d-flex align-items-center mb-4">
                                    <input
                                        type="checkbox"
                                        id="anon-check-detailed"
                                        className="mr-3"
                                        style={{ width: '20px', height: '20px' }}
                                        checked={formData.anonymous}
                                        onChange={e => setFormData({ ...formData, anonymous: e.target.checked })}
                                    />
                                    <label htmlFor="anon-check-detailed" className="mb-0 font-weight-medium text-dark cursor-pointer select-none">
                                        Show my donation as "Anonymous" on public feeds
                                    </label>
                                </div>

                                <div className="d-flex justify-content-between mt-5">
                                    <button className="btn btn-light px-4 py-3 rounded-pill font-weight-bold" onClick={handleBack}>
                                        <ArrowLeft size={18} className="mr-2" /> Back
                                    </button>
                                    <button
                                        className="btn btn-primary px-5 py-3 rounded-pill font-weight-bold shadow-md"
                                        style={{ backgroundColor: '#076c5b', border: 'none' }}
                                        onClick={handleNext}
                                        disabled={!formData.name || !formData.email}
                                    >
                                        Payment Method <ArrowRight size={18} className="ml-2" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Payment Method */}
                        {step === 4 && (
                            <div className="animate-fadeIn">
                                <h2 className="font-weight-bold mb-2 text-dark" style={{ fontSize: '2rem' }}>Payment Method</h2>
                                <p className="text-muted mb-5" style={{ fontSize: '1.1rem' }}>Select your preferred way to support our mission.</p>

                                <div className="row">
                                    {[
                                        { id: 'card', name: 'Credit / Debit Card', icon: CreditCard, subtitle: 'Visa, Mastercard, Amex' },
                                        { id: 'mobile', name: 'Mobile Money', icon: Smartphone, subtitle: 'MTN, Airtel/Tigo Money' },
                                        { id: 'bank', name: 'Bank Transfer', icon: Building2, subtitle: 'Direct Wire / EFT' },
                                        { id: 'paypal', name: 'PayPal', icon: Layers, subtitle: 'Fast and secure' }
                                    ].map(method => (
                                        <div className="col-12 mb-3" key={method.id}>
                                            <div
                                                className={`p-4 border-2 rounded-xl cursor-pointer transition-all d-flex align-items-center ${formData.paymentMethod === method.id ? 'border-[#076c5b] bg-[#e2f5f2]' : 'border-gray-100 hover:border-gray-200 bg-white'}`}
                                                style={{ border: formData.paymentMethod === method.id ? '2px solid #076c5b' : '1px solid #f8f9fa' }}
                                                onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
                                            >
                                                <div className={`p-3 rounded-xl mr-4 ${formData.paymentMethod === method.id ? 'bg-[#076c5b] text-white' : 'bg-gray-50 text-muted'}`}>
                                                    <method.icon size={24} />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="font-weight-bold mb-0">{method.name}</h6>
                                                    <p className="small text-muted mb-0">{method.subtitle}</p>
                                                </div>
                                                <div className={`p-1 rounded-circle border-2 ${formData.paymentMethod === method.id ? 'border-[#076c5b] bg-[#076c5b]' : 'border-gray-300'}`} style={{ width: '22px', height: '22px' }}>
                                                    {formData.paymentMethod === method.id && <Check size={12} color="white" strokeWidth={5} />}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="d-flex justify-content-between mt-5">
                                    <button className="btn btn-light px-4 py-3 rounded-pill font-weight-bold" onClick={handleBack}>
                                        <ArrowLeft size={18} className="mr-2" /> Back
                                    </button>
                                    <button
                                        className="btn btn-primary px-5 py-3 rounded-pill font-weight-bold shadow-md"
                                        style={{ backgroundColor: '#076c5b', border: 'none' }}
                                        onClick={handleNext}
                                        disabled={!formData.paymentMethod}
                                    >
                                        Review Donation <ArrowRight size={18} className="ml-2" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 5: Review & Confirm */}
                        {step === 5 && (
                            <div className="animate-fadeIn">
                                <h2 className="font-weight-bold mb-2 text-dark" style={{ fontSize: '2rem' }}>Review Summary</h2>
                                <p className="text-muted mb-4" style={{ fontSize: '1.1rem' }}>Please verify your donation details below.</p>

                                <div className="bg-gray-50 rounded-2xl p-4 mb-4 border border-gray-100">
                                    <div className="d-flex justify-content-between mb-3 pb-3 border-bottom border-gray-200">
                                        <div className="text-muted font-weight-bold small text-uppercase">Program</div>
                                        <div className="font-weight-bold text-dark">{formData.program === 'general' ? 'Where Needed Most' : impactPrograms.find(p => p.id === formData.program)?.name}</div>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3 pb-3 border-bottom border-gray-200">
                                        <div className="text-muted font-weight-bold small text-uppercase">Frequency</div>
                                        <div className="font-weight-bold text-dark capitalize">{formData.type}</div>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3 pb-3 border-bottom border-gray-200">
                                        <div className="text-muted font-weight-bold small text-uppercase">Donor</div>
                                        <div className="text-right">
                                            <div className="font-weight-bold text-dark">{formData.name}</div>
                                            <div className="small text-muted">{formData.email}</div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3 pb-3 border-bottom border-gray-200">
                                        <div className="text-muted font-weight-bold small text-uppercase">Payment</div>
                                        <div className="font-weight-bold text-dark capitalize">{formData.paymentMethod}</div>
                                    </div>
                                    <div className="d-flex justify-content-between pt-3">
                                        <div className="text-dark font-weight-bold h5 mb-0">Total Amount</div>
                                        <div className="h4 font-weight-bold mb-0" style={{ color: '#076c5b' }}>${selectedAmount} USD</div>
                                    </div>
                                </div>

                                <div className="p-3 bg-white border border-gray-200 rounded-xl small mb-5 d-flex align-items-center">
                                    <Info size={20} className="text-muted mr-3 flex-shrink-0" />
                                    <p className="mb-0 text-muted">
                                        By clicking "Complete Donation", you agree to our Terms of Service and Privacy Policy. Your payment information is processed securely.
                                    </p>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <button className="btn btn-light px-4 py-3 rounded-pill font-weight-bold" onClick={handleBack} disabled={loading}>
                                        <ArrowLeft size={18} className="mr-2" /> Back
                                    </button>
                                    <button
                                        className="btn btn-success px-5 py-3 rounded-pill font-weight-bold shadow-lg d-flex align-items-center"
                                        style={{ backgroundColor: '#28a745', border: 'none', minWidth: '220px', justifyContent: 'center' }}
                                        onClick={handleCompleteDonation}
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <RefreshCcw className="animate-spin mr-2" size={20} />
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                Complete Donation <CheckCircle className="ml-2" size={20} />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8faf9 0%, #f0f4f2 100%)', padding: '110px 15px 80px' }}>
            <style>{`
                .donation-card {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .donation-card:hover {
                    border-color: #4c9789 !important;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(0,0,0,0.06);
                }
                .active-donation-card {
                    border-color: #4c9789 !important;
                    background-color: #f0f7f6 !important;
                    box-shadow: 0 4px 12px rgba(76, 151, 137, 0.12);
                }
                .rounded-xl {
                    border-radius: 20px !important;
                }
                .no-gutters {
                    margin-right: 0;
                    margin-left: 0;
                }
                .no-gutters > [class*="col-"] {
                    padding-right: 0;
                    padding-left: 0;
                }
                .z-index-1 { z-index: 1; }
                .space-y-4 > * + * { margin-top: 1.5rem; }
                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-pulse {
                    animation: pulse 2s infinite;
                }
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
                .hover-scale {
                    transition: all 0.3s ease;
                }
                .hover-scale:hover {
                    transform: scale(1.02);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
                }
                .bg-success-light {
                    background-color: #e6f4ea;
                }
                /* Button Hover Fixes */
                .btn-lceo-primary { color: #fff !important; }
                .btn-lceo-primary:hover {
                    background-color: #3d7a6e !important;
                    color: #fff !important;
                    transform: translateY(-1px);
                }
                .btn-lceo-dark { color: #fff !important; }
                .btn-lceo-dark:hover {
                    background-color: #0d2420 !important;
                    color: #fff !important;
                    transform: translateY(-1px);
                }
                .btn-lceo-outline:hover {
                    background-color: #4c9789 !important;
                    color: #fff !important;
                    border-color: #4c9789 !important;
                    transform: translateY(-1px);
                }
                .btn-lceo-outline-secondary:hover {
                    background-color: #6c757d !important;
                    color: #fff !important;
                    border-color: #6c757d !important;
                    transform: translateY(-1px);
                }
                .btn-lceo-link:hover {
                    color: #3d7a6e !important;
                    text-decoration: none !important;
                }
                .btn-share-social {
                    background-color: #ffffff;
                    border: 1px solid #e9ecef !important;
                    color: #495057 !important;
                }
                .btn-share-social:hover {
                    background-color: #f8f9fa !important;
                    border-color: #dee2e6 !important;
                    color: #122f2b !important;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
                }
                .cursor-pointer {
                    cursor: pointer;
                }
                .gap-2 { gap: 0.5rem; }
                .gap-3 { gap: 1rem; }
                .gap-4 { gap: 1.5rem; }
                .responsive-title { font-size: 1.75rem; }
                .responsive-lead { font-size: 0.95rem; }
                .responsive-impact-title { font-size: 2rem; }
                @media (min-width: 768px) {
                    .responsive-title { font-size: 3.5rem; }
                    .responsive-lead { font-size: 1.25rem; }
                    .responsive-impact-title { font-size: 2.8rem; }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .delay-1 { animation-delay: 0s; }
                .delay-2 { animation-delay: 1.5s; }
                .delay-3 { animation-delay: 3s; }
                .delay-4 { animation-delay: 4.5s; }
                
                @keyframes spin-slow {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 120s linear infinite;
                }
                
                @keyframes popIn {
                    0% { transform: scale(0.8); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
                }
                .animate-pop {
                    animation: popIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                }
            `}</style>
            <div className="container">
                <div className="row justify-content-center">
                    <div className={viewType === 'quick' && step !== 5 && showForm ? "col-xl-10" : "col-lg-12"}>
                        {!showForm ? (
                            renderSplashScreen()
                        ) : step === 6 ? (
                            <div className="animate-fadeIn">
                                {/* Progress for Step 5 */}
                                <div className="mb-5">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-muted font-weight-bold small">Process Completed</span>
                                        <span className="font-weight-bold small" style={{ color: '#076c5b' }}>100% Complete</span>
                                    </div>
                                    <div className="progress" style={{ height: '8px', background: '#eef2f2', borderRadius: '10px' }}>
                                        <div className="progress-bar" style={{
                                            width: '100%',
                                            background: '#076c5b',
                                            borderRadius: '10px'
                                        }}></div>
                                    </div>
                                </div>

                                <div className="card shadow-lg border-0" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                                    <div className="card-body p-4 p-md-5 text-center">
                                        <div className="mb-4">
                                            <div className="rounded-circle d-inline-flex p-4 shadow-sm" style={{ backgroundColor: '#e2f5f2' }}>
                                                <CheckCircle size={60} style={{ color: '#076c5b' }} />
                                            </div>
                                        </div>

                                        <h2 className="font-weight-bold mb-3 text-dark" style={{ fontSize: '2.5rem' }}>Thank You for Your Support!</h2>
                                        <p className="text-muted mb-5 mx-auto" style={{ maxWidth: '650px', fontSize: '1.2rem' }}>
                                            Your donation of <strong style={{ color: '#076c5b' }}>${selectedAmount}</strong> will make a lasting impact on the lives of young women and girls in our programs.
                                        </p>

                                        <div className="p-4 rounded-xl mb-5 mx-auto" style={{ backgroundColor: '#f8faf9', maxWidth: '600px', border: '1px solid #eef2f2' }}>
                                            <h5 className="font-weight-bold text-dark mb-4">What Happens Next?</h5>
                                            <div className="text-left">
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="bg-white rounded-circle d-flex align-items-center justify-content-center mr-3 font-weight-bold" style={{ width: '32px', height: '32px', minWidth: '32px', color: '#076c5b', border: '2px solid #076c5b' }}>1</div>
                                                    <div className="text-muted font-weight-bold">A confirmation receipt has been sent to {formData.email}</div>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="bg-white rounded-circle d-flex align-items-center justify-content-center mr-3 font-weight-bold" style={{ width: '32px', height: '32px', minWidth: '32px', color: '#076c5b', border: '2px solid #076c5b' }}>2</div>
                                                    <div className="text-muted font-weight-bold">We'll send you updates on the direct impact of your gift</div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="bg-white rounded-circle d-flex align-items-center justify-content-center mr-3 font-weight-bold" style={{ width: '32px', height: '32px', minWidth: '32px', color: '#076c5b', border: '2px solid #076c5b' }}>3</div>
                                                    <div className="text-muted font-weight-bold">You can track your impact through your donor dashboard</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center flex-wrap mb-5 gap-3">
                                            <button className="btn btn-light btn-lg px-5 py-3 rounded-pill font-weight-bold" onClick={() => navigate('/')}>Return Home</button>
                                            <button className="btn btn-primary btn-lg px-5 py-3 rounded-pill font-weight-bold shadow-lg d-flex align-items-center justify-content-center" style={{ backgroundColor: '#076c5b', border: 'none' }} onClick={() => navigate('/donor')}>
                                                View Dashboard <ArrowRight size={20} className="ml-2" />
                                            </button>
                                        </div>

                                        <hr className="my-4 mx-auto" style={{ maxWidth: '80%', opacity: 0.1 }} />

                                        <div>
                                            <p className="text-muted small font-weight-bold mb-3">Share your support:</p>
                                            <div className="d-flex justify-content-center flex-wrap gap-2">
                                                <button className="btn btn-light mb-2 mx-1 px-4 py-2 rounded-xl small font-weight-bold transition-all hover-scale btn-share-social">Share on Facebook</button>
                                                <button className="btn btn-light mb-2 mx-1 px-4 py-2 rounded-xl small font-weight-bold transition-all hover-scale btn-share-social">Share on Twitter</button>
                                                <button className="btn btn-light mb-2 mx-1 px-4 py-2 rounded-xl small font-weight-bold transition-all hover-scale btn-share-social">Share via Email</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="animate-fadeIn">
                                {viewType === 'quick' ? renderQuickDonation() : renderDetailedDonation()}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
