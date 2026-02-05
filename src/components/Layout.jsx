import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Truck, Menu, X, Phone } from 'lucide-react';
import clsx from 'clsx';

export default function Layout({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const closeMenu = () => setMenuOpen(false);

    const NavItem = ({ to, children }) => (
        <NavLink
            to={to}
            onClick={closeMenu}
            className={({ isActive }) => clsx(
                "text-sm font-bold uppercase tracking-wide transition hover:text-white",
                isActive ? "text-rose-gold" : "text-rose-gray"
            )}
        >
            {children}
        </NavLink>
    );

    return (
        <div className="min-h-screen bg-rose-black font-body text-white flex flex-col">
            <nav className="fixed w-full z-50 backdrop-blur-md shadow-lg border-b-2 border-rose-orange bg-rose-black/95">
                <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
                    <Link to="/" onClick={closeMenu} className="flex items-center gap-2">

                        <span className="text-lg font-black font-heading text-rose-light-gray">
                            <img src="/roseGold.png" alt="roseGold" width={75} height={75} />
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        <NavItem to="/">Home</NavItem>
                        <NavItem to="/services">Services</NavItem>
                        <NavItem to="/areas">Areas</NavItem>
                        <NavItem to="/about">About</NavItem>
                        <NavItem to="/faq">FAQ</NavItem>
                        <a href="tel:+15551234567" className="px-4 py-2 rounded-lg font-bold flex items-center gap-2 text-white text-sm bg-rose-orange hover:bg-[#5a8dad] hover:text-white transition-colors">
                            <Phone className="w-4 h-4" /> (555) 123-4567
                        </a>
                    </div>

                    <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden px-4 py-4 space-y-3 bg-rose-black border-t border-rose-dark">
                        <NavItem to="/">Home</NavItem>
                        <NavItem to="/services">Services</NavItem>
                        <NavItem to="/areas">Areas</NavItem>
                        <NavItem to="/about">About</NavItem>
                        <NavItem to="/faq">FAQ</NavItem>
                        <a href="tel:+15551234567" className="block text-center py-3 rounded-lg font-bold text-white bg-rose-orange hover:bg-[#5a8dad] transition-colors">
                            Call (555) 123-4567
                        </a>
                    </div>
                )}
            </nav>

            <main className="flex-grow pt-16">
                {children}
            </main>

            <footer className="py-6 border-t border-zinc-800 text-center bg-rose-black">
                <p className="text-sm text-zinc-500">
                    © 2026 Rose Gold Hauling · Sacramento, CA · <a href="tel:+15551234567" className="text-rose-gold hover:underline">(555) 123-4567</a>
                </p>
            </footer>
        </div>
    );
}
