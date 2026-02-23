import { Link } from 'react-router-dom';
import { FaBrain, FaGithub, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const footerLinks = {
    'Learn': [
        { name: 'About AI', path: '/about' },
        { name: 'Machine Learning', path: '/machine-learning' },
        { name: 'Deep Learning', path: '/deep-learning' },
        { name: 'AI Roadmap', path: '/roadmap' },
    ],
    'Explore': [
        { name: 'Applications', path: '/applications' },
        { name: 'AI Ethics', path: '/ethics' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ],
};

const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
];

export default function Footer() {
    return (
        <footer className="relative bg-dark-50 dark:bg-dark-900 border-t border-dark-200/50 dark:border-dark-800/50">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

            <div className="container-max section-padding !py-12 md:!py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-4 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center shadow-lg shadow-primary-500/20">
                                <FaBrain className="text-white text-xl" />
                            </div>
                            <span className="text-xl font-bold gradient-text">AI Learning Hub</span>
                        </Link>
                        <p className="text-dark-500 dark:text-dark-400 text-sm leading-relaxed max-w-md mb-6">
                            Your comprehensive guide to Artificial Intelligence. Learn AI concepts from fundamentals to advanced topics with structured content and real-world examples.
                        </p>
                        {/* Newsletter */}
                        <div className="flex gap-2 max-w-sm">
                            <div className="relative flex-1">
                                <HiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400" />
                                <input
                                    type="email"
                                    placeholder="Subscribe to newsletter"
                                    className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all"
                                />
                            </div>
                            <button className="px-4 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="font-semibold text-dark-900 dark:text-white mb-4">{title}</h4>
                            <ul className="space-y-2.5">
                                {links.map(link => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className="text-sm text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-dark-200/50 dark:border-dark-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-dark-400 dark:text-dark-500">
                        © {new Date().getFullYear()} AI Learning Hub. All rights reserved.
                    </p>
                    <div className="flex items-center gap-3">
                        {socialLinks.map(social => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="w-9 h-9 rounded-lg bg-dark-100 dark:bg-dark-800 flex items-center justify-center text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/50 transition-all"
                            >
                                <social.icon className="text-lg" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
