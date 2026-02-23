import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';

const timeline = [
    { year: '1950', title: 'The Turing Test', desc: 'Alan Turing proposes a test for machine intelligence in his landmark paper "Computing Machinery and Intelligence."' },
    { year: '1956', title: 'AI is Born', desc: 'The Dartmouth Conference coins the term "Artificial Intelligence" and establishes it as a field of study.' },
    { year: '1966', title: 'ELIZA Chatbot', desc: 'Joseph Weizenbaum creates ELIZA, one of the first chatbot programs that simulated conversation.' },
    { year: '1997', title: 'Deep Blue', desc: 'IBM\'s Deep Blue defeats world chess champion Garry Kasparov, showcasing the power of AI in strategic games.' },
    { year: '2011', title: 'Watson on Jeopardy', desc: 'IBM Watson defeats human champions on the game show Jeopardy!, demonstrating natural language understanding.' },
    { year: '2012', title: 'Deep Learning Breakthrough', desc: 'AlexNet wins the ImageNet competition by a huge margin, sparking the deep learning revolution.' },
    { year: '2016', title: 'AlphaGo', desc: 'DeepMind\'s AlphaGo defeats Go world champion Lee Sedol, a milestone in AI game-playing ability.' },
    { year: '2022', title: 'Generative AI Era', desc: 'ChatGPT and DALL-E bring generative AI to the mainstream, transforming how we interact with AI.' },
];

const aiTypes = [
    { title: 'Narrow AI (Weak AI)', desc: 'Designed for specific tasks. This is the AI we have today — virtual assistants, recommendation systems, image recognition. It excels at one thing but cannot generalize.', examples: ['Siri & Alexa', 'Google Search', 'Netflix Recommendations', 'Self-driving features'], color: 'primary' },
    { title: 'General AI (Strong AI)', desc: 'A theoretical AI that matches human intelligence across all domains. It could learn, reason, and solve problems just like a human. This doesn\'t exist yet.', examples: ['Human-level reasoning', 'Cross-domain learning', 'Emotional understanding', 'Creative thinking'], color: 'accent' },
    { title: 'Super AI', desc: 'A hypothetical AI that surpasses human intelligence in every way — creativity, problem-solving, social skills. This is a concept from futurist discussions and science fiction.', examples: ['Beyond human cognition', 'Self-improvement', 'Scientific breakthroughs', 'Theoretical concept'], color: 'primary' },
];

export default function AboutAI() {
    return (
        <>
            <Helmet>
                <title>About Artificial Intelligence - AI Learning Hub</title>
                <meta name="description" content="Learn what Artificial Intelligence is, its history from 1950 to today, types of AI (narrow, general, super), and the difference between strong and weak AI." />
            </Helmet>

            {/* Hero */}
            <section className="relative section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-950 dark:via-dark-900 dark:to-primary-950/30">
                <div className="container-max text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
                        📖 Foundation
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        What is <span className="gradient-text">Artificial Intelligence</span>?
                    </h1>
                    <p className="text-lg text-dark-500 dark:text-dark-400 max-w-3xl mx-auto">
                        Artificial Intelligence is the science and engineering of making intelligent machines,
                        especially intelligent computer programs, that can perform tasks that typically require human intelligence.
                    </p>
                </div>
            </section>

            {/* Definition */}
            <section className="section-padding bg-white dark:bg-dark-950">
                <div className="container-max">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeading title="Understanding AI" subtitle="A clear, simple explanation of what AI really means." />
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="glass-card p-6">
                                <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-3">🔬 Formal Definition</h3>
                                <p className="text-dark-500 dark:text-dark-400 leading-relaxed">
                                    AI refers to the simulation of human intelligence processes by computer systems. These processes include
                                    <strong className="text-dark-900 dark:text-white"> learning</strong> (acquiring information and rules),
                                    <strong className="text-dark-900 dark:text-white"> reasoning</strong> (using rules to reach conclusions), and
                                    <strong className="text-dark-900 dark:text-white"> self-correction</strong>.
                                </p>
                            </div>
                            <div className="glass-card p-6">
                                <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-3">💡 Simple Explanation</h3>
                                <p className="text-dark-500 dark:text-dark-400 leading-relaxed">
                                    Think of AI as teaching a computer to think and learn. Instead of giving it step-by-step instructions for every situation,
                                    you show it examples and let it figure out patterns on its own — just like how children learn by observing the world around them.
                                </p>
                            </div>
                        </div>
                        <div className="glass-card p-6 mt-6">
                            <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-3">🎯 Key Capabilities of AI</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {['Visual perception & image recognition', 'Speech recognition & language understanding', 'Decision-making & problem solving', 'Language translation & generation', 'Learning from data & experience', 'Pattern recognition & prediction'].map(cap => (
                                    <div key={cap} className="flex items-start gap-2">
                                        <span className="text-primary-500 mt-1">✦</span>
                                        <span className="text-sm text-dark-600 dark:text-dark-300">{cap}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* History Timeline */}
            <section className="section-padding bg-dark-50 dark:bg-dark-900/50">
                <div className="container-max">
                    <SectionHeading title="History of AI" subtitle="Key milestones in the journey from theoretical concept to everyday reality." />
                    <div className="max-w-3xl mx-auto">
                        <div className="relative">
                            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500" />
                            {timeline.map((item, i) => (
                                <div key={item.year} className={`relative flex items-start gap-6 mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    <div className={`hidden md:block flex-1 ${i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                                        <div className="glass-card p-4 inline-block">
                                            <div className="text-sm font-bold text-primary-600 dark:text-primary-400 mb-1">{item.year}</div>
                                            <h3 className="font-semibold text-dark-900 dark:text-white mb-1">{item.title}</h3>
                                            <p className="text-xs text-dark-500 dark:text-dark-400">{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary-500 shadow-lg shadow-primary-500/30 -translate-x-1/2 mt-2 z-10" />
                                    <div className="md:hidden glass-card p-4 ml-10">
                                        <div className="text-sm font-bold text-primary-600 dark:text-primary-400 mb-1">{item.year}</div>
                                        <h3 className="font-semibold text-dark-900 dark:text-white mb-1">{item.title}</h3>
                                        <p className="text-xs text-dark-500 dark:text-dark-400">{item.desc}</p>
                                    </div>
                                    <div className="hidden md:block flex-1" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of AI */}
            <section className="section-padding bg-white dark:bg-dark-950">
                <div className="container-max">
                    <SectionHeading title="Types of AI" subtitle="Understanding the three broad categories of Artificial Intelligence." />
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {aiTypes.map(type => (
                            <div key={type.title} className="glass-card p-6 hover:-translate-y-1 transition-all duration-300">
                                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">{type.title}</h3>
                                <p className="text-sm text-dark-500 dark:text-dark-400 mb-4">{type.desc}</p>
                                <h4 className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">Examples</h4>
                                <ul className="space-y-1.5">
                                    {type.examples.map(ex => (
                                        <li key={ex} className="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                                            {ex}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strong vs Weak AI */}
            <section className="section-padding bg-dark-50 dark:bg-dark-900/50">
                <div className="container-max">
                    <SectionHeading title="Strong AI vs Weak AI" subtitle="What's the real difference between narrow and general intelligence?" />
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                        <div className="glass-card p-6 border-l-4 border-primary-500">
                            <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-3">🎯 Weak AI (Narrow AI)</h3>
                            <ul className="space-y-2 text-sm text-dark-500 dark:text-dark-400">
                                <li>• Designed for <strong className="text-dark-900 dark:text-white">specific tasks</strong></li>
                                <li>• Current state of AI technology</li>
                                <li>• Cannot transfer knowledge between domains</li>
                                <li>• Examples: ChatGPT, Google Translate, Tesla Autopilot</li>
                                <li>• Very effective within its domain</li>
                            </ul>
                        </div>
                        <div className="glass-card p-6 border-l-4 border-accent-500">
                            <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-3">🌐 Strong AI (General AI)</h3>
                            <ul className="space-y-2 text-sm text-dark-500 dark:text-dark-400">
                                <li>• Matches <strong className="text-dark-900 dark:text-white">human-level intelligence</strong></li>
                                <li>• Currently theoretical — does not exist yet</li>
                                <li>• Can learn and apply knowledge across all domains</li>
                                <li>• Would have consciousness and self-awareness</li>
                                <li>• Major goal of AI research</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
