import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
    CheckCircle,
    Building2,
    GraduationCap,
    Briefcase,
    Info,
    Calendar,
    DollarSign,
    User,
    Mail,
    Lock
} from 'lucide-react';
import { useLanguage } from '../lib/language-context';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Checkbox } from '../components/ui/checkbox';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { ProgramStatus } from '../lib/types';

export function DonationPage() {
    const navigate = useNavigate();
    const { t, language } = useLanguage();
    const [showForm, setShowForm] = useState(false);
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [donationData, setDonationData] = useState({
        program: '',
        type: 'recurring',
        frequency: 'monthly',
        amount: '',
        customAmount: '',
        anonymous: false,
        message: '',
        paymentMethod: '',
        email: '',
        name: '',
    });

    const totalSteps = 5;
    const progress = (step / (totalSteps - 1)) * 100; // Step 5 is success
    const suggestedAmounts = [25, 50, 100, 250, 500];

    const handleNext = () => {
        if (step < totalSteps) {
            setStep(step + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            setShowForm(false);
        }
    };

    const handleCompleteDonation = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toast.success('Donation processed successfully! Thank you for your support.');
            setStep(5);
        }, 1500);
    };

    const calculateImpact = (amount: number) => {
        return {
            schoolSupplies: Math.floor(amount / 25),
            monthsOfMentorship: Math.floor(amount / 50),
            businessSeedCapital: Math.floor(amount / 200),
        };
    };

    const selectedAmount = parseInt(donationData.amount || donationData.customAmount || '0');
    const impact = calculateImpact(selectedAmount);

    const primaryBtnStyle = {
        backgroundColor: '#bef264',
        color: '#122f2b',
        borderRadius: '12px',
        border: 'none',
        fontWeight: '900',
        padding: '12px 30px',
        textTransform: 'uppercase' as const,
        fontSize: '14px',
        letterSpacing: '1px',
        transition: 'all 0.3s ease',

    };

    const secondaryBtnStyle = {
        backgroundColor: 'transparent',
        color: '#122f2b',
        borderRadius: '12px',
        border: '2px solid #e2e8f0',
        fontWeight: '700',
        padding: '10px 25px',
        fontSize: '14px',
        transition: 'all 0.3s ease'
    };

    const renderSplashScreen = () => (
        <div className="position-relative w-100 d-flex align-items-center justify-content-center overflow-hidden fade-in-up" style={{ minHeight: '85vh', paddingTop: '40px' }}>
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

            <div className="text-center position-relative z-index-1 p-3 animate-pop" style={{ maxWidth: '550px' }}>
                <div className="mb-3 d-inline-block px-3 py-1 rounded-pill bg-white border" style={{ color: '#076c5b', fontSize: '0.85rem', fontWeight: '700' }}>
                    {t('donation.trusted_platform')}
                </div>
                <h1 className="font-weight-bold mb-4" style={{ color: '#122f2b', lineHeight: '1.1', letterSpacing: '-1px', fontSize: '2.5rem' }}>
                    {t('donation.starts_here_title').split(' ').slice(0, 2).join(' ')}<br />
                    {t('donation.starts_here_title').split(' ').slice(2).join(' ')}
                </h1>
                <button
                    className="btn px-4 py-2 rounded-pill font-weight-bold transition-all"
                    style={{ backgroundColor: '#076c5b', color: '#fff', fontSize: '1.1rem', border: 'none', paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                    onClick={() => {
                        setShowForm(true);
                        setStep(1);
                    }}
                >
                    {t('donation.btn_start')}
                </button>
            </div>

            {/* Orbiting Circles */}
            <div className="d-none d-lg-block">
                <div className="position-absolute" style={{ top: '15%', right: '22%', zIndex: 2 }}>
                    <div className="position-relative animate-float delay-1">
                        <div className="rounded-circle p-1" style={{ width: '130px', height: '130px', background: 'conic-gradient(#076c5b 80%, #eee 0)', borderRadius: '50%' }}>
                            <div className="bg-white rounded-circle w-100 h-100 d-flex align-items-center justify-content-center p-1">
                                <div className="rounded-circle w-100 h-100" style={{ backgroundImage: "url('/images/bg_1.jpg')", backgroundSize: 'cover' }}></div>
                            </div>
                        </div>
                        <span className="position-absolute bg-white px-3 py-1 rounded-pill font-weight-bold" style={{ bottom: '-10px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.8rem', color: '#122f2b', whiteSpace: 'nowrap', border: '1px solid #eee' }}>{t('donation.program.education_name')}</span>
                    </div>
                </div>
                <div className="position-absolute" style={{ top: '45%', left: '15%', transform: 'translateY(-50%)', zIndex: 2 }}>
                    <div className="position-relative animate-float delay-2">
                        <div className="rounded-circle p-1" style={{ width: '140px', height: '140px', background: 'conic-gradient(#076c5b 40%, #eee 0)', borderRadius: '50%' }}>
                            <div className="bg-white rounded-circle w-100 h-100 d-flex align-items-center justify-content-center p-1">
                                <div className="rounded-circle w-100 h-100" style={{ backgroundImage: "url('/images/person_2.jpg')", backgroundSize: 'cover' }}></div>
                            </div>
                        </div>
                        <span className="position-absolute bg-white px-3 py-1 rounded-pill font-weight-bold" style={{ bottom: '-10px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.8rem', color: '#122f2b', border: '1px solid #eee' }}>{t('donation.program.medical_name')}</span>
                    </div>
                </div>
                <div className="position-absolute" style={{ bottom: '20%', right: '25%', zIndex: 2 }}>
                    <div className="position-relative animate-float delay-3">
                        <div className="rounded-circle p-1" style={{ width: '110px', height: '110px', background: 'conic-gradient(#076c5b 60%, #eee 0)', borderRadius: '50%' }}>
                            <div className="bg-white rounded-circle w-100 h-100 d-flex align-items-center justify-content-center p-1">
                                <div className="rounded-circle w-100 h-100" style={{ backgroundImage: "url('/images/person_4.jpg')", backgroundSize: 'cover' }}></div>
                            </div>
                        </div>
                        <span className="position-absolute bg-white px-3 py-1 rounded-pill font-weight-bold" style={{ bottom: '-10px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.8rem', color: '#122f2b', border: '1px solid #eee' }}>{t('donation.program.business_name')}</span>
                    </div>
                </div>
                <div className="position-absolute" style={{ top: '15%', left: '25%', zIndex: 2 }}>
                    <div className="position-relative animate-float delay-4">
                        <div className="rounded-circle p-1" style={{ width: '100px', height: '100px', background: 'conic-gradient(#076c5b 90%, #eee 0)', borderRadius: '50%' }}>
                            <div className="bg-white rounded-circle w-100 h-100 d-flex align-items-center justify-content-center p-1">
                                <div className="rounded-circle w-100 h-100" style={{ backgroundImage: "url('/images/image_5.jpg')", backgroundSize: 'cover' }}></div>
                            </div>
                        </div>
                        <span className="position-absolute bg-white px-3 py-1 rounded-pill font-weight-bold" style={{ bottom: '-10px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.8rem', color: '#122f2b', border: '1px solid #eee' }}>{t('donation.program.emergency_name')}</span>
                    </div>
                </div>
                <div className="position-absolute" style={{ top: '50%', right: '12%', transform: 'translateY(-50%)', zIndex: 2 }}>
                    <div className="position-relative animate-float delay-2">
                        <div className="rounded-circle p-1" style={{ width: '120px', height: '120px', background: 'conic-gradient(#076c5b 30%, #eee 0)', borderRadius: '50%' }}>
                            <div className="bg-white rounded-circle w-100 h-100 d-flex align-items-center justify-content-center p-1">
                                <div className="rounded-circle w-100 h-100" style={{ backgroundImage: "url('/images/image_1.jpg')", backgroundSize: 'cover' }}></div>
                            </div>
                        </div>
                        <span className="position-absolute bg-white px-3 py-1 rounded-pill font-weight-bold" style={{ bottom: '-10px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.8rem', color: '#122f2b', border: '1px solid #eee' }}>{t('donation.program.shelter_name')}</span>
                    </div>
                </div>
            </div>

            <div className="position-absolute w-100" style={{ bottom: '0', left: 0, padding: '0 20px 0px' }}>
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center text-md-left">
                        <div className="col-md-5 mb-3 mb-md-0 text-right pr-md-5 border-right" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                            <h2 className="font-weight-bold mb-0" style={{ color: '#122f2b', fontSize: '1.8rem' }}>
                                {t('donation.stats_title').split(' ').slice(0, 4).join(' ')}<br />
                                <span style={{ color: '#076c5b' }}>{t('donation.stats_title').split(' ').slice(4).join(' ')}</span>
                            </h2>
                        </div>
                        <div className="col-md-5 pl-md-5 text-left">
                            <p className="mb-0 text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                {t('donation.stats_desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderMultiStepForm = () => (
        <div className="py-8 d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <div className="w-100 animate-fadeIn" style={{ maxWidth: '480px' }}>
                {/* Compact Progress */}
                {step < 5 && (
                    <div className="mb-4 px-2">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="text-muted font-weight-bold" style={{ fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                Step {step} of 4
                            </span>
                            <span className="font-weight-bold" style={{ fontSize: '12px', color: '#076c5b' }}>{Math.round((step / 4) * 100)}%</span>
                        </div>
                        <div className="progress" style={{ height: '6px', borderRadius: '10px', backgroundColor: '#e2e8f0' }}>
                            <div className="progress-bar" style={{ width: `${(step / 4) * 100}%`, backgroundColor: '#076c5b', borderRadius: '10px', transition: 'width 0.5s ease' }}></div>
                        </div>
                    </div>
                )}

                <Card className="border-0 rounded-3xl overflow-hidden bg-white">
                    {/* Step 1: Program */}
                    {step === 1 && (
                        <div className="p-4 p-md-5">
                            <div className="mb-4">
                                <h3 className="font-weight-bold text-dark mb-2" style={{ fontSize: '24px', letterSpacing: '-0.5px' }}>{t('donation.direct_impact_title')}</h3>
                                <p className="text-muted small mb-0">{t('donation.direct_impact_desc')}</p>
                            </div>

                            <div className="space-y-3">
                                <div
                                    className={`p-3 border-2 rounded-2xl cursor-pointer transition-all d-flex align-items-center ${donationData.program === 'general' ? 'border-teal-500 bg-teal-50' : 'border-slate-50 hover:bg-slate-50'
                                        }`}
                                    onClick={() => setDonationData({ ...donationData, program: 'general' })}
                                >
                                    <div className="mr-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '48px', height: '48px', color: '#076c5b' }}>
                                        <Heart size={40} strokeWidth={1} fill="#076c5b" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className="font-weight-bold mb-0" style={{ fontSize: '15px' }}>{t('donation.where_needed_most')}</h6>
                                        <p className="text-muted mb-0" style={{ fontSize: '11px' }}>{t('donation.where_needed_most_desc')}</p>
                                    </div>
                                    {donationData.program === 'general' && <CheckCircle className="text-teal-600 w-5 h-5 ml-2" />}
                                </div>

                                {mockPrograms.filter(p => p.status === ProgramStatus.ACTIVE).map((program) => (
                                    <div
                                        key={program.id}
                                        className={`p-3 border-2 rounded-2xl cursor-pointer transition-all d-flex align-items-center ${donationData.program === program.id ? 'border-teal-500 bg-teal-50' : 'border-slate-50 hover:bg-slate-50'
                                            }`}
                                        onClick={() => setDonationData({ ...donationData, program: program.id })}
                                    >
                                        <div className="mr-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '48px', height: '48px', color: '#076c5b' }}>
                                            <span style={{ fontSize: '32px' }}>{program.category === 'EDUCATION' ? '🎓' : program.category === 'ENTREPRENEURSHIP' ? '💼' : '🎁'}</span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="font-weight-bold mb-0" style={{ fontSize: '14px' }}>{program.name[language] || program.name.en}</h6>
                                        </div>
                                        {donationData.program === program.id && <CheckCircle className="text-teal-600 w-5 h-5 ml-2" />}
                                    </div>
                                ))}
                            </div>

                            <div className="d-flex justify-content-end mt-5">
                                <button
                                    onClick={handleNext}
                                    disabled={!donationData.program}
                                    style={{ ...primaryBtnStyle, opacity: !donationData.program ? 0.6 : 1 }}
                                >
                                    {t('donation.continue')} <ArrowRight size={16} className="ml-2" />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Type */}
                    {step === 2 && (
                        <div className="p-4 p-md-5">
                            <div className="mb-4">
                                <h3 className="font-weight-bold text-dark mb-2" style={{ fontSize: '24px' }}>{t('donation.gift_choice_title')}</h3>
                                <p className="text-muted small mb-0">{t('donation.gift_choice_desc')}</p>
                            </div>

                            <div className="row g-3 mb-4">
                                <div className="col-6">
                                    <div
                                        className={`p-4 border-2 rounded-2xl cursor-pointer text-center transition-all ${donationData.type === 'recurring' ? 'border-teal-500 bg-teal-50' : 'border-slate-50 bg-slate-50/30'
                                            }`}
                                        onClick={() => setDonationData({ ...donationData, type: 'recurring' })}
                                    >
                                        <RefreshCcw className={`mx-auto mb-2 ${donationData.type === 'recurring' ? 'text-teal-600' : 'text-slate-400'}`} size={40} strokeWidth={1} />
                                        <h6 className="font-weight-bold mb-1" style={{ fontSize: '14px' }}>{t('donation.monthly_giving')}</h6>
                                        <Badge className="bg-emerald-500 text-[10px] px-2 py-0">Best Impact</Badge>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div
                                        className={`p-4 border-2 rounded-2xl cursor-pointer text-center transition-all ${donationData.type === 'one-time' ? 'border-teal-500 bg-teal-50' : 'border-slate-50 bg-slate-50/30'
                                            }`}
                                        onClick={() => setDonationData({ ...donationData, type: 'one-time' })}
                                    >
                                        <Heart className={`mx-auto mb-2 ${donationData.type === 'one-time' ? 'text-teal-600' : 'text-slate-400'}`} size={40} strokeWidth={1} />
                                        <h6 className="font-weight-bold mb-1" style={{ fontSize: '14px' }}>{t('donation.one_time_gift')}</h6>
                                    </div>
                                </div>
                            </div>

                            {donationData.type === 'recurring' && (
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                                    <Label className="font-weight-bold mb-3 d-block small">Select Frequency</Label>
                                    <div className="d-flex gap-4">
                                        {['monthly', 'quarterly', 'yearly'].map(freq => (
                                            <div key={freq} className="d-flex align-items-center gap-2 cursor-pointer" onClick={() => setDonationData({ ...donationData, frequency: freq })}>
                                                <div className={`w-4 h-4 rounded-circle border-2 d-flex align-items-center justify-content-center transition-all ${donationData.frequency === freq ? 'border-teal-600 bg-teal-600' : 'border-slate-300'}`}>
                                                    {donationData.frequency === freq && <div className="bg-white rounded-circle" style={{ width: '6px', height: '6px' }}></div>}
                                                </div>
                                                <span className="small font-weight-bold text-capitalize">{freq}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="d-flex justify-content-between mt-5">
                                <button onClick={handleBack} style={secondaryBtnStyle}>
                                    {t('donation.back')}
                                </button>
                                <button onClick={handleNext} style={primaryBtnStyle}>
                                    {t('donation.continue')} <ArrowRight size={16} className="ml-2" />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Amount */}
                    {step === 3 && (
                        <div className="p-4 p-md-5">
                            <div className="mb-4">
                                <h3 className="font-weight-bold text-dark mb-2" style={{ fontSize: '24px' }}>Donation Amount</h3>
                                <p className="text-muted small mb-0">See your impact grow as you choose</p>
                            </div>

                            <div className="grid grid-cols-3 gap-3 mb-4">
                                {suggestedAmounts.map(amt => (
                                    <div
                                        key={amt}
                                        className={`py-2 rounded-xl font-weight-black text-center cursor-pointer transition-all border-2 ${donationData.amount === amt.toString() ? 'border-teal-600 bg-teal-50 text-teal-700' : 'border-slate-100 bg-white text-slate-700 hover:border-teal-200 hover:bg-slate-50'
                                            }`}
                                        onClick={() => setDonationData({ ...donationData, amount: amt.toString(), customAmount: '' })}
                                        style={{ fontSize: '15px', letterSpacing: '-0.5px' }}
                                    >
                                        ${amt}
                                    </div>
                                ))}
                            </div>

                            <div className="mb-4">
                                <div className="position-relative">
                                    <DollarSign className="position-absolute text-muted" style={{ left: '15px', top: '50%', transform: 'translateY(-50%)' }} size={16} />
                                    <Input
                                        type="number"
                                        placeholder="Enter Custom Amount"
                                        className="pl-5 py-4 border-2 border-slate-100 rounded-xl font-weight-bold"
                                        style={{ fontSize: '14px' }}
                                        value={donationData.customAmount}
                                        onChange={e => setDonationData({ ...donationData, customAmount: e.target.value, amount: '' })}
                                    />
                                </div>
                            </div>

                            {selectedAmount > 0 && (
                                <div className="p-4 bg-teal-50 rounded-2xl border border-teal-100 mb-4 animate-fadeIn">
                                    <h6 className="font-weight-bold text-teal-800 mb-3 small d-flex align-items-center">
                                        <Heart size={14} className="mr-2" fill="#0d9488" /> YOUR IMPACT
                                    </h6>
                                    <div className="d-flex flex-wrap gap-2">
                                        {impact.schoolSupplies > 0 && <Badge variant="outline" className="bg-white border-teal-200 text-teal-700 py-1 font-bold">📚 {impact.schoolSupplies} Girls Supplies</Badge>}
                                        {impact.monthsOfMentorship > 0 && <Badge variant="outline" className="bg-white border-teal-200 text-teal-700 py-1 font-bold">👥 {impact.monthsOfMentorship} Mo. Mentorship</Badge>}
                                    </div>
                                </div>
                            )}

                            <div className="d-flex align-items-center mb-4 px-3 py-2 bg-slate-50 rounded-xl cursor-pointer" onClick={() => setDonationData({ ...donationData, anonymous: !donationData.anonymous })}>
                                <div className={`w-5 h-5 rounded-md border-2 mr-3 d-flex align-items-center justify-content-center transition-all ${donationData.anonymous ? 'bg-teal-600 border-teal-600' : 'bg-white border-slate-200'}`}>
                                    {donationData.anonymous && <Check size={12} className="text-white" strokeWidth={4} />}
                                </div>
                                <span className="small font-weight-bold text-slate-600">Donate Anonymously</span>
                            </div>

                            <div className="d-flex justify-content-between mt-5">
                                <button onClick={handleBack} style={secondaryBtnStyle}>
                                    {t('donation.back')}
                                </button>
                                <button onClick={handleNext} disabled={selectedAmount === 0} style={{ ...primaryBtnStyle, opacity: selectedAmount === 0 ? 0.6 : 1 }}>
                                    {t('donation.continue')} <ArrowRight size={16} className="ml-2" />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Payment */}
                    {step === 4 && (
                        <div className="p-4 p-md-5">
                            <div className="mb-4">
                                <h3 className="font-weight-bold text-dark mb-2" style={{ fontSize: '24px' }}>Secure Checkout</h3>
                            </div>

                            <div className="bg-slate-900 rounded-2xl p-4 mb-4 text-white">
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <span className="small font-weight-bold opacity-60">TOTAL CONTRIBUTION</span>
                                    <span className="font-weight-black text-teal-400" style={{ fontSize: '24px' }}>${selectedAmount}</span>
                                </div>
                                <p className="small mb-0 opacity-80">{donationData.type === 'recurring' ? 'Recurring ' + donationData.frequency : 'One-time support'}</p>
                            </div>

                            <div className="space-y-4 mb-5">
                                <div className="d-flex flex-column gap-3">
                                    <div className="position-relative">
                                        <User className="position-absolute text-muted" style={{ left: '15px', top: '50%', transform: 'translateY(-50%)' }} size={24} strokeWidth={1} />
                                        <Input
                                            placeholder="Full Name"
                                            className="pl-5 py-4 border-2 border-slate-100 rounded-xl"
                                            value={donationData.name}
                                            onChange={e => setDonationData({ ...donationData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="position-relative">
                                        <Mail className="position-absolute text-muted" style={{ left: '15px', top: '50%', transform: 'translateY(-50%)' }} size={24} strokeWidth={1} />
                                        <Input
                                            placeholder="Email Address"
                                            type="email"
                                            className="pl-5 py-4 border-2 border-slate-100 rounded-xl"
                                            value={donationData.email}
                                            onChange={e => setDonationData({ ...donationData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="d-flex gap-2">
                                    {['card', 'mobile', 'bank'].map(method => (
                                        <div
                                            key={method}
                                            className={`flex-grow-1 p-3 border-2 rounded-xl text-center cursor-pointer transition-all ${donationData.paymentMethod === method ? 'border-teal-500 bg-teal-50' : 'border-slate-50'
                                                }`}
                                            onClick={() => setDonationData({ ...donationData, paymentMethod: method })}
                                        >
                                            <div className="mb-2 d-flex align-items-center justify-content-center" style={{ color: donationData.paymentMethod === method ? '#076c5b' : '#94a3b8' }}>
                                                {method === 'card' ? <CreditCard size={32} strokeWidth={1} /> : method === 'mobile' ? <Smartphone size={32} strokeWidth={1} /> : <Building2 size={32} strokeWidth={1} />}
                                            </div>
                                            <div className="small font-weight-bold text-capitalize">{method}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="d-flex justify-content-center mb-4">
                                <div className="d-flex align-items-center text-muted small">
                                    <Lock size={20} strokeWidth={1} className="mr-1" /> SSL Secured Payment Processing
                                </div>
                            </div>

                            <div className="d-flex justify-content-between">
                                <button onClick={handleBack} style={secondaryBtnStyle}>
                                    {t('donation.back')}
                                </button>
                                <button
                                    onClick={handleCompleteDonation}
                                    disabled={loading || !donationData.paymentMethod || !donationData.email || !donationData.name}
                                    style={{ ...primaryBtnStyle, minWidth: '180px', opacity: (loading || !donationData.paymentMethod || !donationData.email || !donationData.name) ? 0.6 : 1 }}
                                >
                                    {loading ? <RefreshCcw className="animate-spin" size={20} /> : 'DONATE NOW'}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 5: Success */}
                    {step === 5 && (
                        <div className="p-4 p-md-5 text-center">
                            <div className="w-20 h-20 rounded-circle bg-teal-50 d-flex align-items-center justify-content-center mx-auto mb-4 animate-pop">
                                <div className="w-14 h-14 rounded-circle bg-teal-600 d-flex align-items-center justify-content-center">
                                    <Check className="text-white" size={32} strokeWidth={4} />
                                </div>
                            </div>

                            <h3 className="font-weight-bold text-dark mb-3" style={{ fontSize: '28px' }}>{t('donation.success_title')}</h3>
                            <p className="text-muted font-weight-bold mb-5 small">
                                Thank you, <span className="text-teal-600">{donationData.name}</span>! Your gift of <span className="text-teal-600">${selectedAmount}</span> will start making an impact immediately.
                            </p>

                            <div className="bg-slate-50 rounded-2xl p-4 mb-5 text-left border border-slate-100">
                                <h6 className="font-weight-bold text-dark mb-3 small uppercase tracking-wider">What's Next?</h6>
                                <div className="space-y-3">
                                    <div className="d-flex gap-3 align-items-start">
                                        <div className="w-6 h-6 rounded bg-teal-600 text-white d-flex align-items-center justify-content-center flex-shrink-0 small font-weight-bold">1</div>
                                        <span className="small text-muted font-weight-bold">Check your email for the receipt.</span>
                                    </div>
                                    <div className="d-flex gap-3 align-items-start">
                                        <div className="w-6 h-6 rounded bg-teal-600 text-white d-flex align-items-center justify-content-center flex-shrink-0 small font-weight-bold">2</div>
                                        <span className="small text-muted font-weight-bold">Receive monthly progress updates.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-column gap-3">
                                <button
                                    onClick={() => navigate('/')}
                                    style={primaryBtnStyle}
                                    className="w-100"
                                >
                                    Back
                                </button>
                                <button
                                    onClick={() => setStep(1)}
                                    style={secondaryBtnStyle}
                                    className="w-100"
                                >
                                    Back to Start
                                </button>
                            </div>
                        </div>
                    )}
                </Card>
            </div>
        </div>
    );

    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8faf9 0%, #f0f4f2 100%)', padding: '110px 15px 80px' }}>
            <style>{`
                .z-index-1 { z-index: 1; }
                .animate-fadeIn {
                    animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(15px); }
                    to { opacity: 1; transform: translateY(0); }
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
                    animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                }

                input:focus, textarea:focus {
                    outline: none !important;
                    border-color: #076c5b !important;
                    box-shadow: 0 0 0 4px rgba(7, 108, 91, 0.05) !important;
                }
                .space-y-3 > * + * { margin-top: 0.75rem; }
                .space-y-4 > * + * { margin-top: 1rem; }
                .font-weight-black { font-weight: 900; }
            `}</style>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        {!showForm ? (
                            renderSplashScreen()
                        ) : (
                            renderMultiStepForm()
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
