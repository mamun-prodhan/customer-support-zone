import React from 'react';

const Header = () => {
    return (
        <div className=' bg-base-100 shadow-sm'>
        <div className="max-w-360 w-full mx-auto navbar">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl font-bold">CS — Ticket System</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal gap-5 px-1">
                    <li><a>Home</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Changelog</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Download</a></li>
                    <li><a>Contact</a></li>
                    <li className='py-1 px-2 rounded-md text-white font-semibold text-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2]'><a>+ New Ticket</a></li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Header;