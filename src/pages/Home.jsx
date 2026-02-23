import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaBrain, FaRobot, FaChartLine, FaShieldAlt, FaRoute, FaLaptopCode } from 'react-icons/fa';
import { HiArrowRight, HiSparkles } from 'react-icons/hi';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';
import FAQSection from '../components/ui/FAQSection';

const features = [
    { icon: FaBrain, title: 'About AI', desc: 'Understand the fundamentals of Artificial Intelligence, its history, and different types.', link: '/about' },
    { icon: FaChartLine, title: 'Machine Learning', desc: 'Explore supervised, unsupervised, and reinforcement learning with practical examples.', link: '/machine-learning' },
    { icon: FaRobot, title: 'Deep Learning', desc: 'Dive into neural networks, CNNs, RNNs, and advanced architectures.', link: '/deep-learning' },
    { icon: FaLaptopCode, title: 'AI Applications', desc: 'Discover how AI is transforming healthcare, finance, education, and more.', link: '/applications' },
    { icon: FaShieldAlt, title: 'AI Ethics', desc: 'Learn about bias, privacy, and responsible development of AI systems.', link: '/ethics' },
    { icon: FaRoute, title: 'Learning Roadmap', desc: 'Follow a structured path from beginner to advanced AI practitioner.', link: '/roadmap' },
];

const faqs = [
    { question: 'What is Artificial Intelligence?', answer: 'Artificial Intelligence (AI) is the simulation of human intelligence by computer systems. It includes learning from data, recognizing patterns, making decisions, and understanding natural language.' },
    { question: 'Do I need a math background to learn AI?', answer: 'Basic knowledge of linear algebra, calculus, probability, and statistics is helpful, but you can start learning AI concepts without deep math expertise. Many libraries abstract the math away.' },
    { question: 'What programming language is best for AI?', answer: 'Python is the most popular language for AI and Machine Learning due to its rich ecosystem of libraries like TensorFlow, PyTorch, scikit-learn, and NumPy.' },
    { question: 'How long does it take to learn AI?', answer: 'With consistent study (2-3 hours daily), you can grasp fundamentals in 3-6 months. Becoming proficient typically takes 1-2 years of hands-on practice and project work.' },
    { question: 'Is AI Learning Hub free?', answer: 'Yes! All content on AI Learning Hub is completely free. Our mission is to make quality AI education accessible to everyone.' },
];

export default function Home() {
    return (
        <>
            <Helmet>
                <title>AI Learning Hub - Learn Artificial Intelligence from Beginner to Advanced</title>
                <meta name="description" content="Your comprehensive guide to Artificial Intelligence. Learn AI, Machine Learning, and Deep Learning with structured educational content, examples, and a clear roadmap." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-950 dark:via-dark-900 dark:to-primary-950/30" />
                <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400/20 dark:bg-primary-500/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-400/20 dark:bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
                    backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />

                <div className="relative container-max section-padding">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-medium mb-8 animate-fade-in">
                            <HiSparkles className="text-lg" />
                            <span>Your Gateway to Artificial Intelligence</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
                            Master{' '}
                            <span className="gradient-text">Artificial Intelligence</span>{' '}
                            from Zero to Hero
                        </h1>

                        <p className="text-lg md:text-xl text-dark-500 dark:text-dark-400 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                            Explore AI, Machine Learning, and Deep Learning through structured lessons,
                            real-world examples, and hands-on Python code. Free for everyone.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            <Link to="/about" className="btn-primary text-lg">
                                Start Learning <HiArrowRight />
                            </Link>
                            <Link to="/roadmap" className="btn-secondary text-lg">
                                View Roadmap
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-16 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
                            {[
                                { value: '9+', label: 'Topics' },
                                { value: 'Free', label: 'Forever' },
                                { value: '100%', label: 'Beginner Friendly' },
                            ].map(stat => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                                    <div className="text-xs md:text-sm text-dark-500 dark:text-dark-400 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* What is AI */}
            <section className="section-padding bg-white dark:bg-dark-950">
                <div className="container-max">
                    <SectionHeading
                        title="What is Artificial Intelligence?"
                        subtitle="AI is the science of building machines that can think, learn, and make decisions like humans — but faster and at massive scale."
                    />
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {[
                            { title: 'Think', desc: 'AI systems process information, recognize patterns, and solve complex problems using algorithms.', emoji: '💭' },
                            { title: 'Learn', desc: 'Machine Learning allows AI to improve automatically through experience and data without explicit programming.', emoji: '📚' },
                            { title: 'Act', desc: 'From self-driving cars to medical diagnosis, AI takes actions that impact the real world.', emoji: '⚡' },
                        ].map(item => (
                            <div key={item.title} className="glass-card p-6 text-center hover:-translate-y-1 transition-all duration-300">
                                <div className="text-4xl mb-4">{item.emoji}</div>
                                <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-dark-500 dark:text-dark-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why AI Matters */}
            <section className="section-padding bg-dark-50 dark:bg-dark-900/50">
                <div className="container-max">
                    <SectionHeading
                        title="Why AI Matters"
                        subtitle="Artificial Intelligence is reshaping industries, creating new possibilities, and solving problems we couldn't tackle before."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Healthcare Revolution', desc: 'AI detects diseases earlier, personalizes treatment plans, and accelerates drug discovery.', emoji: '🏥' },
                            { title: 'Smart Education', desc: 'Adaptive learning platforms, automated grading, and personalized study paths for every student.', emoji: '🎓' },
                            { title: 'Financial Innovation', desc: 'Fraud detection, algorithmic trading, risk assessment, and automated customer service.', emoji: '💰' },
                            { title: 'Scientific Discovery', desc: 'AI accelerates research in climate science, genomics, physics, and materials science.', emoji: '🔬' },
                            { title: 'Creative AI', desc: 'From art generation to music composition, AI is becoming a creative collaborator.', emoji: '🎨' },
                            { title: 'Global Connectivity', desc: 'Language translation, content recommendation, and intelligent search connect the world.', emoji: '🌍' },
                        ].map(item => (
                            <div key={item.title} className="glass-card p-6 hover:-translate-y-1 transition-all duration-300">
                                <div className="text-3xl mb-3">{item.emoji}</div>
                                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-dark-500 dark:text-dark-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section-padding bg-white dark:bg-dark-950">
                <div className="container-max">
                    <SectionHeading
                        title="Explore Our Learning Modules"
                        subtitle="Comprehensive, structured content covering every aspect of Artificial Intelligence."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map(f => (
                            <Link key={f.link} to={f.link} className="group">
                                <Card icon={f.icon} title={f.title} description={f.desc} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding bg-dark-50 dark:bg-dark-900/50">
                <div className="container-max">
                    <SectionHeading
                        title="Frequently Asked Questions"
                        subtitle="Got questions about learning AI? We've got answers."
                    />
                    <FAQSection faqs={faqs} />
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="relative container-max text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your AI Journey?</h2>
                    <p className="text-primary-100 text-lg max-w-xl mx-auto mb-8">
                        Begin with the fundamentals and work your way up to advanced topics. No prerequisites required.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                            Begin Learning <HiArrowRight />
                        </Link>
                        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
