import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';

export const SearchModal = () => {
    return (
        <div className="modal fade" id="searchModal" tabIndex={-1} role="dialog" aria-labelledby="searchModalLabel" aria-hidden="true">
            <style>{`
                #searchModal .modal-content {
                    border: none;
                    border-radius: 0;
                    min-height: 100vh;
                    background: #fff;
                }
                #searchModal .modal-body {
                    padding-top: 100px;
                    max-width: 900px;
                    margin: 0 auto;
                    position: relative;
                }
                .search-title {
                    font-size: 24px;
                    font-weight: 800;
                    color: #000;
                    margin-bottom: 20px;
                }
                .search-input-group {
                    display: flex;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    overflow: hidden;
                    margin-bottom: 40px;
                    height: 54px;
                }
                .search-icon-wrapper {
                    padding: 0 15px;
                    display: flex;
                    align-items: center;
                    color: #076c5b;
                }
                .search-input-group input {
                    flex-grow: 1;
                    border: none;
                    padding: 10px;
                    font-size: 18px;
                    outline: none !important;
                }
                .search-btn {
                    background: #00594f;
                    color: #fff;
                    border: none;
                    padding: 0 40px;
                    font-weight: 700;
                    font-size: 18px;
                    transition: background 0.3s;
                }
                .search-btn:hover {
                    background: #076c5b;
                }
                .explore-title {
                    font-size: 22px;
                    font-weight: 800;
                    color: #000;
                    margin-bottom: 25px;
                }
                .explore-links {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px 40px;
                }
                .explore-link {
                    color: #555;
                    font-size: 16px;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                .explore-link:hover {
                    color: #076c5b;
                    text-decoration: underline;
                }
                .close-search {
                    position: absolute;
                    top: 40px;
                    right: 40px;
                    font-size: 40px;
                    background: none;
                    border: none;
                    color: #aaa;
                    cursor: pointer;
                }
                .share-sidebar {
                    position: absolute;
                    left: -120px;
                    top: 120px;
                    background: #fff;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                    border: 1px solid #eee;
                    border-radius: 4px;
                    display: flex;
                    flex-direction: column;
                    width: 44px;
                }
                .share-header {
                    background: #00594f;
                    color: #fff;
                    font-size: 10px;
                    text-transform: uppercase;
                    padding: 8px 0;
                    text-align: center;
                    font-weight: 700;
                }
                .share-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 12px 0;
                    color: #00594f;
                    transition: background 0.2s;
                    border-bottom: 1px solid #eee;
                    text-decoration: none;
                }
                .share-icon:last-child {
                    border-bottom: none;
                }
                .share-icon:hover {
                    background: #f8f9fa;
                    color: #076c5b;
                }
                @media (max-width: 991px) {
                    .share-sidebar {
                        display: none;
                    }
                    .explore-links {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>

            <div className="modal-dialog modal-full" role="document" style={{ maxWidth: '100%', margin: 0 }}>
                <div className="modal-content">
                    <button type="button" className="close-search" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>

                    <div className="modal-body">
                        {/* Vertical Share Sidebar */}
                        <div className="share-sidebar">
                            <div className="share-header">Share</div>
                            <a href="#" className="share-icon"><Facebook size={18} strokeWidth={1.5} /></a>
                            <a href="#" className="share-icon"><Twitter size={18} strokeWidth={1.5} /></a>
                            <a href="#" className="share-icon"><Linkedin size={18} strokeWidth={1.5} /></a>
                            <a href="#" className="share-icon"><LinkIcon size={18} strokeWidth={1.5} /></a>
                        </div>

                        <h2 className="search-title">Search LCEO website</h2>

                        <form action="#" className="search-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="search-input-group">
                                <div className="search-icon-wrapper">
                                    <Search size={22} strokeWidth={1.5} />
                                </div>
                                <input type="text" placeholder="" autoFocus />
                                <button type="submit" className="search-btn">Search</button>
                            </div>
                        </form>

                        <div className="explore-section">
                            <h3 className="explore-title">Explore</h3>
                            <div className="explore-links">
                                <Link to="/donate" className="explore-link" data-dismiss="modal">Support LCEO</Link>
                                <Link to="/impact-stories" className="explore-link" data-dismiss="modal">Stories of Change</Link>
                                <Link to="/how-we-work" className="explore-link" data-dismiss="modal">How We Work</Link>
                                <Link to="/about" className="explore-link" data-dismiss="modal">Our Mission</Link>
                                <Link to="/strategic-direction" className="explore-link" data-dismiss="modal">Strategic Direction</Link>
                                <Link to="/resources" className="explore-link" data-dismiss="modal">Knowledge Hub</Link>
                                <Link to="/contact" className="explore-link" data-dismiss="modal">Contact us</Link>
                                <Link to="/help-faq" className="explore-link" data-dismiss="modal">Help & FAQ</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
