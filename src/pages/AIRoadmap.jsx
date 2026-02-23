import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';

const roadmapSteps = [
    {
        step: 1,
        title: 'Mathematics Fundamentals',
        duration: '4-6 weeks',
        emoji: '📐',
        desc: 'Build a solid mathematical foundation. You don\'t need to be a math genius, but understanding these concepts is crucial for grasping how ML algorithms work.',
        topics: [
            { name: 'Linear Algebra', detail: 'Vectors, matrices, matrix operations, eigenvalues' },
            { name: 'Calculus', detail: 'Derivatives, partial derivatives, chain rule, gradients' },
            { name: 'Probability & Statistics', detail: 'Bayes theorem, distributions, hypothesis testing' },
            { name: 'Optimization', detail: 'Gradient descent, convex optimization basics' },
        ],
        resources: ['Khan Academy', '3Blue1Brown (YouTube)', 'MIT OpenCourseWare', 'Mathematics for Machine Learning (book)'],
    },
    {
        step: 2,
        title: 'Python Programming',
        duration: '4-8 weeks',
        emoji: '🐍',
        desc: 'Master Python — the #1 language for AI and ML. Focus on data-related libraries and writing clean, efficient code.',
        topics: [
            { name: 'Python Basics', detail: 'Variables, data types, loops, functions, OOP' },
            { name: 'NumPy', detail: 'Array operations, broadcasting, linear algebra operations' },
            { name: 'Pandas', detail: 'DataFrames, data cleaning, manipulation, analysis' },
            { name: 'Matplotlib/Seaborn', detail: 'Data visualization, plots, statistical graphics' },
        ],
        resources: ['Python.org tutorials', 'Automate the Boring Stuff', 'Kaggle Python course', 'Real Python'],
    },
    {
        step: 3,
        title: 'Machine Learning',
        duration: '8-12 weeks',
        emoji: '📊',
        desc: 'Learn the core ML algorithms, how to preprocess data, train models, and evaluate performance.',
        topics: [
            { name: 'Scikit-learn', detail: 'Classification, regression, clustering, pipelines' },
            { name: 'Data Preprocessing', detail: 'Feature scaling, encoding, handling missing data' },
            { name: 'Model Evaluation', detail: 'Cross-validation, confusion matrix, ROC curves' },
            { name: 'Feature Engineering', detail: 'Feature selection, PCA, feature creation techniques' },
        ],
        resources: ['Andrew Ng\'s ML Course (Coursera)', 'Hands-on ML with Scikit-learn (book)', 'Kaggle Learn', 'fast.ai'],
    },
    {
        step: 4,
        title: 'Deep Learning',
        duration: '8-12 weeks',
        emoji: '🧠',
        desc: 'Dive into neural networks and learn to build models with TensorFlow or PyTorch for complex tasks.',
        topics: [
            { name: 'Neural Networks', detail: 'Architecture, backpropagation, optimizers, regularization' },
            { name: 'TensorFlow/PyTorch', detail: 'Building, training, and deploying deep learning models' },
            { name: 'CNNs', detail: 'Image classification, object detection, transfer learning' },
            { name: 'RNNs & Transformers', detail: 'NLP, text generation, attention mechanisms' },
        ],
        resources: ['Deep Learning Specialization (Coursera)', 'PyTorch tutorials', 'fast.ai courses', 'Papers with Code'],
    },
    {
        step: 5,
        title: 'Projects & Portfolio',
        duration: '6-8 weeks',
        emoji: '🚀',
        desc: 'Apply everything you\'ve learned by building real projects. A strong portfolio is the best way to showcase your skills.',
        topics: [
            { name: 'Kaggle Competitions', detail: 'Compete in data science challenges, learn from top solutions' },
            { name: 'End-to-End Projects', detail: 'Data collection → preprocessing → modeling → deployment' },
            { name: 'GitHub Portfolio', detail: 'Document projects with READMEs, notebooks, and results' },
            { name: 'Blog & Share', detail: 'Write about your projects and learnings to build credibility' },
        ],
        resources: ['Kaggle', 'GitHub', 'Medium/Dev.to', 'Streamlit (for demos)'],
    },
    {
        step: 6,
        title: 'Advanced AI & Specialization',
        duration: 'Ongoing',
        emoji: '🎯',
        desc: 'Choose a specialization area and go deep. Stay current with the latest research and developments.',
        topics: [
            { name: 'NLP', detail: 'Transformers, BERT, GPT, text generation, chatbots' },
            { name: 'Computer Vision', detail: 'Object detection (YOLO), segmentation, GANs' },
            { name: 'Reinforcement Learning', detail: 'Q-learning, policy gradients, multi-agent systems' },
            { name: 'MLOps', detail: 'Model deployment, monitoring, CI/CD for ML, cloud platforms' },
        ],
        resources: ['arXiv papers', 'Hugging Face', 'Google AI Blog', 'Conference talks (NeurIPS, ICML)'],
    },
];

export default function AIRoadmap() {
    return (
        <>
            <Helmet>
                <title>AI Learning Roadmap for Students - AI Learning Hub</title>
                <meta name="description" content="A step-by-step roadmap to learn AI: from math fundamentals and Python to Machine Learning, Deep Learning, projects, and specialization." />
            </Helmet>

            {/* Hero */}
            <section className="relative section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-950 dark:via-dark-900 dark:to-primary-950/30">
                <div className="container-max text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-6">
                        🗺️ Student Guide
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        AI Learning <span className="gradient-text">Roadmap</span>
                    </h1>
                    <p className="text-lg text-dark-500 dark:text-dark-400 max-w-3xl mx-auto">
                        A structured, step-by-step learning path to take you from complete beginner to AI practitioner.
                        Follow this roadmap to build a solid foundation and advance your skills systematically.
                    </p>
                </div>
            </section>

            {/* Roadmap */}
            <section className="section-padding bg-white dark:bg-dark-950">
                <div className="container-max max-w-4xl">
                    <SectionHeading title="Your Learning Journey" subtitle="Follow these 6 steps to master Artificial Intelligence." />

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 hidden sm:block" />

                        <div className="space-y-8">
                            {roadmapSteps.map((step) => (
                                <div key={step.step} className="relative sm:pl-20">
                                    {/* Step number */}
                                    <div className="hidden sm:flex absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-600 items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg shadow-primary-500/30 z-10">
                                        {step.step}
                                    </div>

                                    <div className="glass-card p-6 md:p-8">
                                        <div className="flex items-start gap-3 mb-4">
                                            <span className="text-3xl">{step.emoji}</span>
                                            <div>
                                                <div className="flex items-center gap-3 flex-wrap">
                                                    <h3 className="text-xl md:text-2xl font-bold text-dark-900 dark:text-white">
                                                        <span className="sm:hidden mr-2 text-primary-500">Step {step.step}:</span>
                                                        {step.title}
                                                    </h3>
                                                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">
                                                        {step.duration}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-dark-500 dark:text-dark-400 mt-2">{step.desc}</p>
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-3 mb-4">
                                            {step.topics.map(topic => (
                                                <div key={topic.name} className="bg-dark-50 dark:bg-dark-800/50 rounded-xl p-3">
                                                    <h4 className="font-semibold text-dark-900 dark:text-white text-sm mb-1">{topic.name}</h4>
                                                    <p className="text-xs text-dark-500 dark:text-dark-400">{topic.detail}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div>
                                            <h4 className="text-xs font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wider mb-2">📚 Recommended Resources</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {step.resources.map(r => (
                                                    <span key={r} className="px-3 py-1 bg-accent-50 dark:bg-accent-950/30 text-accent-700 dark:text-accent-300 text-xs rounded-lg">{r}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Tips */}
            <section className="section-padding bg-dark-50 dark:bg-dark-900/50">
                <div className="container-max max-w-4xl">
                    <SectionHeading title="Pro Tips for Success" subtitle="Advice from experienced AI practitioners." />
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { tip: 'Consistency over intensity', desc: '2 hours daily beats 14 hours on weekends. Build a habit.', emoji: '⏰' },
                            { tip: 'Learn by doing', desc: 'Don\'t just watch tutorials. Write code, build projects, break things.', emoji: '💻' },
                            { tip: 'Join communities', desc: 'Reddit, Discord, Kaggle forums — learn from others and share knowledge.', emoji: '👥' },
                            { tip: 'Read research papers', desc: 'Start with survey papers. Use Papers With Code to find implementations.', emoji: '📄' },
                            { tip: 'Document everything', desc: 'Keep a learning journal. Write blog posts about what you learn.', emoji: '📝' },
                            { tip: 'Stay curious', desc: 'AI evolves fast. Follow researchers, read blogs, attend conferences.', emoji: '🔭' },
                        ].map(item => (
                            <div key={item.tip} className="glass-card p-5 hover:-translate-y-0.5 transition-all duration-300">
                                <div className="text-2xl mb-2">{item.emoji}</div>
                                <h3 className="font-semibold text-dark-900 dark:text-white mb-1">{item.tip}</h3>
                                <p className="text-sm text-dark-500 dark:text-dark-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
