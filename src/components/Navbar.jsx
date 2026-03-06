import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>

                        <li><a>FAQ</a></li>
                        <li><a>Blow</a></li>

                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>


                    </ul>
                </div>
                <div className="flex items-center">
                    {/* Logo Image */}
                    <img src="/resources/logo.png" alt="Logo" className="h-20 w-auto" />

                    {/* Your Text with btn-ghost padding removed */}
                    <a className="btn btn-ghost text-xl px-2 min-h-0 h-auto">Ticket System</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>

                    <li><a>FAQ</a></li>
                    <li><a>Blow</a></li>

                    <li><a>Download</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button
                    className="flex items-center gap-2 px-5 py-2 rounded-md bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all active:scale-95 text-sm"
                // onClick={() => document.getElementById('new_ticket_modal').showModal()}
                >
                    <FaPlus size={12} className="opacity-90" />
                    <span className="tracking-wide">New Ticket</span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;