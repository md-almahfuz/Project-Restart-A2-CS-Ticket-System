import React from 'react';
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="bg-black text-slate-400 py-12 px-6 md:px-16 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <h2 className="text-white text-2xl font-bold mb-4">CS — Ticket System</h2>
                        <p className="text-sm leading-relaxed max-w-sm">
                            Empowering support teams with intelligent tracking and seamless communication.
                            Built to scale your customer service and turn every interaction into a success story.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h6 className="text-white font-semibold mb-4 text-lg">Company</h6>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h6 className="text-white font-semibold mb-4 text-lg">Services</h6>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Products & Services</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Customer Stories</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Download Apps</a></li>
                        </ul>
                    </div>

                    {/* Social & Contact Links */}
                    <div>
                        <h6 className="text-white font-semibold mb-4 text-lg">Social Links</h6>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center gap-3">
                                <div className="bg-white text-black p-1 rounded-full flex items-center justify-center w-6 h-6">
                                    <FaXTwitter size={12} />
                                </div>
                                <a href="#" className="hover:text-white transition-colors">@CS_TicketSystem</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-white text-black p-1 rounded-sm flex items-center justify-center w-6 h-6">
                                    <FaLinkedinIn size={12} />
                                </div>
                                <a href="#" className="hover:text-white transition-colors">CS — Ticket System</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-white text-black p-1 rounded-full flex items-center justify-center w-6 h-6">
                                    <FaFacebookF size={12} />
                                </div>
                                <a href="#" className="hover:text-white transition-colors">CS — Ticket System</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-white text-black p-1 rounded-full flex items-center justify-center w-6 h-6">
                                    <IoMailOutline size={12} />
                                </div>
                                <a href="mailto:support@cst.com" className="hover:text-white transition-colors">support@cst.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Copyright Bar */}
                <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm">
                    <p>© 2026 CS — Ticket System. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;