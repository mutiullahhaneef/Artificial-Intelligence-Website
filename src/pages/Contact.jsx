import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { HiMail, HiLocationMarker, HiPhone, HiPaperAirplane } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import SectionHeading from '../components/ui/SectionHeading';

const contactInfo = [
    { icon: HiMail, label: 'Email', value: 'hello@ailearninghub.com', href: 'mailto:hello@ailearninghub.com' },
    { icon: HiLocationMarker, label: 'Location', value: 'Available Worldwide', href: '#' },
    { icon: HiPhone, label: 'Support', value: 'Online Support Only', href: '#' },
];

const socialLinks = [
    { icon: FaGithub, label: 'GitHub', href: '#' },
    { icon: FaLinkedin, label: 'LinkedIn', href: '#' },
    { icon: FaTwitter, label: 'Twitter', href: '#' },
];

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Backend integration placeholder
        console.log('Form submitted:', form);
        setSubmitted(true);
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <>
            <Helmet>
                <title>Contact Us - AI Learning Hub</title>
                <meta name="description" content="Get in touch with AI Learning Hub. Send us a message, suggest topics, or reach out for collaboration." />
            </Helmet>

            {/* Hero */}
            <section className="relative section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-950 dark:via-dark-900 dark:to-primary-950/30">
                <div className="container-max text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
                        💬 Get in Touch
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="gradient-text">Contact</span> Us
                    </h1>
                    <p className="text-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
                        Have questions, suggestions, or want to collaborate? We'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section-padding bg-white dark:bg-dark-950">
                <div className="container-max max-w-5xl">
                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* Info */}
                        <div className="lg:col-span-2 space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-2">Let's Connect</h2>
                                <p className="text-sm text-dark-500 dark:text-dark-400">
                                    Fill out the form or reach out through any of the channels below.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {contactInfo.map(info => (
                                    <a key={info.label} href={info.href} className="flex items-center gap-3 group">
                                        <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950/50 flex items-center justify-center group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
                                            <info.icon className="text-primary-600 dark:text-primary-400" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-dark-400 dark:text-dark-500">{info.label}</div>
                                            <div className="text-sm font-medium text-dark-900 dark:text-white">{info.value}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-dark-900 dark:text-white mb-3">Follow Us</h3>
                                <div className="flex gap-2">
                                    {socialLinks.map(s => (
                                        <a key={s.label} href={s.href} aria-label={s.label} className="w-10 h-10 rounded-xl bg-dark-100 dark:bg-dark-800 flex items-center justify-center text-dark-500 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/50 transition-all">
                                            <s.icon className="text-lg" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-3">
                            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
                                {submitted && (
                                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 px-4 py-3 rounded-xl text-sm">
                                        ✅ Message sent successfully! We'll get back to you soon.
                                    </div>
                                )}

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">Name</label>
                                        <input
                                            type="text" id="name" name="name" value={form.name} onChange={handleChange} required
                                            className="w-full px-4 py-2.5 bg-dark-50 dark:bg-dark-800/80 border border-dark-200 dark:border-dark-700 rounded-xl text-sm text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">Email</label>
                                        <input
                                            type="email" id="email" name="email" value={form.email} onChange={handleChange} required
                                            className="w-full px-4 py-2.5 bg-dark-50 dark:bg-dark-800/80 border border-dark-200 dark:border-dark-700 rounded-xl text-sm text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">Subject</label>
                                    <input
                                        type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} required
                                        className="w-full px-4 py-2.5 bg-dark-50 dark:bg-dark-800/80 border border-dark-200 dark:border-dark-700 rounded-xl text-sm text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">Message</label>
                                    <textarea
                                        id="message" name="message" value={form.message} onChange={handleChange} required rows={5}
                                        className="w-full px-4 py-2.5 bg-dark-50 dark:bg-dark-800/80 border border-dark-200 dark:border-dark-700 rounded-xl text-sm text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                                        placeholder="Your message..."
                                    />
                                </div>

                                <button type="submit" className="btn-primary w-full justify-center">
                                    <HiPaperAirplane className="rotate-90" /> Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
