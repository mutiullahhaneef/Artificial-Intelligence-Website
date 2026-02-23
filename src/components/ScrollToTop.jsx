import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HiArrowUp } from 'react-icons/hi';

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-lg shadow-primary-500/30 flex items-center justify-center hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
            aria-label="Scroll to top"
        >
            <HiArrowUp className="text-xl" />
        </button>
    );
}
