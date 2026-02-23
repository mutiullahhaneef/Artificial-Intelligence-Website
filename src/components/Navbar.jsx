import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { HiMenu, HiX } from 'react-icons/hi';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import { FaBrain } from 'react-icons/fa';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About AI', path: '/about' },
    { name: 'Machine Learning', path: '/machine-learning' },
    { name: 'Deep Learning', path: '/deep-learning' },
    { name: 'Applications', path: '/applications' },
    { name: 'Ethics', path: '/ethics' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { darkMode, toggleTheme } = useTheme();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/80 dark:bg-dark-950/80 backdrop-blur-xl shadow-lg shadow-dark-900/5 dark:shadow-dark-900/30'
                : 'bg-transparent'
            }`}>
            <div className="container-max">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-all duration-300">
                            <FaBrain className="text-white text-xl" />
                        </div>
                        <span className="text-xl font-bold gradient-text hidden sm:block">AI Learning Hub</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${location.pathname === link.path
                                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50'
                                        : 'text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-dark-50 dark:hover:bg-dark-800/50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className="w-10 h-10 rounded-xl bg-dark-100 dark:bg-dark-800 flex items-center justify-center hover:bg-dark-200 dark:hover:bg-dark-700 transition-all duration-200"
                            aria-label="Toggle theme"
                        >
                            {darkMode ? (
                                <BsSunFill className="text-yellow-400 text-lg" />
                            ) : (
                                <BsMoonStarsFill className="text-primary-600 text-lg" />
                            )}
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden w-10 h-10 rounded-xl bg-dark-100 dark:bg-dark-800 flex items-center justify-center hover:bg-dark-200 dark:hover:bg-dark-700 transition-all duration-200"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="bg-white/95 dark:bg-dark-950/95 backdrop-blur-xl border-t border-dark-200/50 dark:border-dark-800/50 px-4 py-4 space-y-1">
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${location.pathname === link.path
                                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50'
                                    : 'text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-dark-50 dark:hover:bg-dark-800/50'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
