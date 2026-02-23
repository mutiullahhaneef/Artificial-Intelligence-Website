import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';

const ethicsTopics = [
    {
        title: 'Bias & Fairness',
        emoji: '⚖️',
        color: 'border-yellow-500',
        desc: 'AI systems can perpetuate and amplify existing societal biases present in training data, leading to discriminatory outcomes.',
        points: [
            'Facial recognition has higher error rates for certain demographics',
            'Hiring algorithms may discriminate based on gender or ethnicity',
            'Loan approval models can reflect historical lending biases',
            'Predictive policing may unfairly target minority communities',
        ],
        solutions: [
            'Use diverse, representative training datasets',
            'Conduct regular bias audits and testing',
            'Implement fairness-aware ML techniques',
            'Build diverse AI development teams',
        ],
    },
    {
        title: 'Privacy & Surveillance',
        emoji: '🔏',
        color: 'border-red-500',
        desc: 'AI enables unprecedented levels of data collection, analysis, and surveillance, raising serious privacy concerns.',
        points: [
            'Mass surveillance through facial recognition in public spaces',
            'Collection and analysis of personal data without informed consent',
            'Social media profiling and behavioral prediction',
            'Smart devices constantly listening and recording',
        ],
        solutions: [
            'Implement strong data protection regulations (like GDPR)',
            'Use privacy-preserving techniques (federated learning, differential privacy)',
            'Require explicit consent for data collection',
            'Grant individuals control over their data',
        ],
    },
    {
        title: 'Job Displacement',
        emoji: '💼',
        color: 'border-blue-500',
        desc: 'AI automation is transforming the job market — eliminating some roles while creating entirely new ones.',
        points: [
            'Manufacturing and assembly line jobs are increasingly automated',
            'Data entry and routine administrative tasks are being replaced',
            'Customer service roles are shifting to AI chatbots',
            'Transportation jobs face disruption from autonomous vehicles',
        ],
        solutions: [
            'Invest in workforce reskilling and upskilling programs',
            'Develop AI augmentation tools that enhance human capabilities',
            'Create social safety nets for displaced workers',
            'Focus education on skills AI cannot easily replicate',
        ],
    },
    {
        title: 'Responsible AI',
        emoji: '🤝',
        color: 'border-green-500',
        desc: 'Building AI systems that are transparent, accountable, safe, and aligned with human values and societal benefit.',
        points: [
            'Many AI systems operate as unexplainable "black boxes"',
            'Unclear accountability when AI makes harmful decisions',
            'Potential misuse of AI for deepfakes and misinformation',
            'Environmental cost of training large AI models',
        ],
        solutions: [
            'Develop explainable AI (XAI) techniques',
            'Establish clear governance frameworks and regulations',
            'Create AI ethics review boards in organizations',
            'Promote open research and transparent development',
        ],
    },
];

const principles = [
    { name: 'Fairness', desc: 'AI should treat all people equitably and not discriminate', icon: '⚖️' },
    { name: 'Transparency', desc: 'AI decisions should be explainable and understandable', icon: '🔍' },
    { name: 'Privacy', desc: 'Personal data must be protected and used responsibly', icon: '🔒' },
    { name: 'Accountability', desc: 'Clear responsibility for AI outcomes and errors', icon: '📋' },
    { name: 'Safety', desc: 'AI systems should be reliable and not cause harm', icon: '🛡️' },
    { name: 'Inclusivity', desc: 'AI should benefit all people regardless of background', icon: '🌍' },
];

export default function AIEthics() {
    return (
        <>
            <Helmet>
                <title>AI Ethics - AI Learning Hub</title>
                <meta name="description" content="Explore the ethical challenges of AI: bias, privacy, job displacement, and responsible development. Learn about frameworks for building ethical AI systems." />
            </Helmet>

            {/* Hero */}
            <section className="relative section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-950 dark:via-dark-900 dark:to-primary-950/30">
                <div className="container-max text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm font-medium mb-6">
                        ⚠️ Critical Topic
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        AI <span className="gradient-text">Ethics</span>
                    </h1>
                    <p className="text-lg text-dark-500 dark:text-dark-400 max-w-3xl mx-auto">
                        As AI becomes more powerful and pervasive, understanding the ethical implications is essential.
                        How do we ensure AI serves humanity fairly, safely, and responsibly?
                    </p>
                </div>
            </section>

            {/* Principles */}
            <section className="section-padding bg-white dark:bg-dark-950">
                <div className="container-max">
                    <SectionHeading title="Core Principles of Ethical AI" subtitle="The foundational values that should guide every AI system." />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                        {principles.map(p => (
                            <div key={p.name} className="glass-card p-5 text-center hover:-translate-y-1 transition-all duration-300">
                                <div className="text-3xl mb-2">{p.icon}</div>
                                <h3 className="font-semibold text-dark-900 dark:text-white mb-1">{p.name}</h3>
                                <p className="text-sm text-dark-500 dark:text-dark-400">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ethics Topics */}
            {ethicsTopics.map((topic, i) => (
                <section key={topic.title} className={`section-padding ${i % 2 === 0 ? 'bg-dark-50 dark:bg-dark-900/50' : 'bg-white dark:bg-dark-950'}`}>
                    <div className="container-max max-w-4xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-4xl">{topic.emoji}</span>
                            <h2 className="text-3xl font-bold text-dark-900 dark:text-white">{topic.title}</h2>
                        </div>
                        <p className="text-dark-500 dark:text-dark-400 mb-8 max-w-3xl">{topic.desc}</p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className={`glass-card p-6 border-l-4 ${topic.color}`}>
                                <h3 className="font-semibold text-dark-900 dark:text-white mb-3">🚨 Key Concerns</h3>
                                <ul className="space-y-2">
                                    {topic.points.map(p => (
                                        <li key={p} className="flex items-start gap-2 text-sm text-dark-500 dark:text-dark-400">
                                            <span className="text-red-400 mt-0.5">•</span> {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="glass-card p-6 border-l-4 border-green-500">
                                <h3 className="font-semibold text-dark-900 dark:text-white mb-3">✅ Solutions</h3>
                                <ul className="space-y-2">
                                    {topic.solutions.map(s => (
                                        <li key={s} className="flex items-start gap-2 text-sm text-dark-500 dark:text-dark-400">
                                            <span className="text-green-400 mt-0.5">•</span> {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}
