import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';

const applications = [
    {
        title: 'Healthcare',
        emoji: '🏥',
        color: 'from-blue-500 to-cyan-500',
        desc: 'AI is revolutionizing healthcare by enabling earlier diagnosis, personalized treatment, and accelerated drug discovery.',
        items: [
            { name: 'Medical Imaging', detail: 'AI analyzes X-rays, MRIs, and CT scans to detect diseases like cancer, pneumonia, and fractures with accuracy rivaling radiologists.' },
            { name: 'Drug Discovery', detail: 'AI models predict molecular properties and screen millions of compounds, reducing drug development time from years to months.' },
            { name: 'Personalized Medicine', detail: 'Analyzing patient genetics, lifestyle, and medical history to create tailored treatment plans.' },
            { name: 'Virtual Health Assistants', detail: 'AI chatbots for symptom checking, appointment scheduling, and patient monitoring.' },
        ],
    },
    {
        title: 'Finance',
        emoji: '💰',
        color: 'from-green-500 to-emerald-500',
        desc: 'Financial institutions use AI to detect fraud, automate trading, assess risk, and improve customer experience.',
        items: [
            { name: 'Fraud Detection', detail: 'Real-time analysis of transaction patterns to identify and prevent fraudulent activities before they cause damage.' },
            { name: 'Algorithmic Trading', detail: 'AI systems execute trades at optimal times based on market data analysis, sentiment analysis, and predictive models.' },
            { name: 'Risk Assessment', detail: 'Evaluating creditworthiness, loan default probability, and investment risks using ML models.' },
            { name: 'Chatbot Banking', detail: 'AI-powered customer service that handles inquiries, processes transactions, and provides financial advice 24/7.' },
        ],
    },
    {
        title: 'Education',
        emoji: '🎓',
        color: 'from-purple-500 to-violet-500',
        desc: 'AI personalizes learning experiences, automates administrative tasks, and makes education more accessible.',
        items: [
            { name: 'Adaptive Learning', detail: 'Platforms that adjust difficulty, pace, and content based on individual student performance and learning style.' },
            { name: 'Automated Grading', detail: 'AI systems that grade essays, assignments, and exams, freeing up teachers for personalized instruction.' },
            { name: 'Intelligent Tutoring', detail: 'AI tutors that provide one-on-one instruction, answer questions, and explain concepts in multiple ways.' },
            { name: 'Content Generation', detail: 'Creating quizzes, summaries, flashcards, and study materials automatically from course content.' },
        ],
    },
    {
        title: 'Cybersecurity',
        emoji: '🔒',
        color: 'from-red-500 to-orange-500',
        desc: 'AI strengthens cybersecurity by detecting threats faster, automating responses, and predicting attacks before they happen.',
        items: [
            { name: 'Threat Detection', detail: 'ML models analyze network traffic patterns to identify malware, intrusions, and zero-day attacks in real time.' },
            { name: 'Behavioral Analysis', detail: 'Monitoring user behavior to detect insider threats, compromised accounts, and unusual access patterns.' },
            { name: 'Automated Response', detail: 'AI systems that automatically contain, quarantine, and respond to security incidents without human intervention.' },
            { name: 'Vulnerability Assessment', detail: 'AI scans code and systems to identify security weaknesses before attackers can exploit them.' },
        ],
    },
    {
        title: 'Robotics',
        emoji: '🤖',
        color: 'from-indigo-500 to-blue-500',
        desc: 'AI enables robots to perceive their environment, make decisions, and perform complex tasks autonomously.',
        items: [
            { name: 'Autonomous Vehicles', detail: 'Self-driving cars use computer vision, sensor fusion, and reinforcement learning to navigate roads safely.' },
            { name: 'Manufacturing', detail: 'Industrial robots with AI perform precision assembly, quality inspection, and predictive maintenance.' },
            { name: 'Healthcare Robotics', detail: 'Surgical robots assist in minimally invasive procedures with super-human precision and consistency.' },
            { name: 'Service Robots', detail: 'Robots that deliver packages, clean facilities, assist elderly, and perform tasks in hazardous environments.' },
        ],
    },
];

export default function AIApplications() {
    return (
        <>
            <Helmet>
                <title>AI Applications - AI Learning Hub</title>
                <meta name="description" content="Explore how AI is transforming healthcare, finance, education, cybersecurity, and robotics with real-world applications and examples." />
            </Helmet>

            {/* Hero */}
            <section className="relative section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-950 dark:via-dark-900 dark:to-primary-950/30">
                <div className="container-max text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
                        🌍 Real-World Impact
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        AI <span className="gradient-text">Applications</span>
                    </h1>
                    <p className="text-lg text-dark-500 dark:text-dark-400 max-w-3xl mx-auto">
                        From diagnosing diseases to detecting fraud, AI is transforming every major industry.
                        Explore how artificial intelligence is being applied in the real world today.
                    </p>
                </div>
            </section>

            {/* Applications */}
            {applications.map((app, i) => (
                <section key={app.title} className={`section-padding ${i % 2 === 0 ? 'bg-white dark:bg-dark-950' : 'bg-dark-50 dark:bg-dark-900/50'}`}>
                    <div className="container-max max-w-5xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-4xl">{app.emoji}</span>
                            <div>
                                <h2 className="text-3xl font-bold text-dark-900 dark:text-white">{app.title}</h2>
                                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${app.color} mt-1`} />
                            </div>
                        </div>
                        <p className="text-dark-500 dark:text-dark-400 mb-8 max-w-3xl">{app.desc}</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {app.items.map(item => (
                                <div key={item.name} className="glass-card p-5 hover:-translate-y-0.5 transition-all duration-300">
                                    <h3 className="font-semibold text-dark-900 dark:text-white mb-2">{item.name}</h3>
                                    <p className="text-sm text-dark-500 dark:text-dark-400">{item.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}
