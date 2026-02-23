import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';
import CodeBlock from '../components/ui/CodeBlock';

const mlTypes = [
    {
        title: 'Supervised Learning',
        emoji: '🎯',
        desc: 'The algorithm learns from labeled data — inputs paired with correct outputs. It learns to map inputs to outputs so it can predict labels for new, unseen data.',
        examples: ['Email spam detection', 'Image classification', 'Price prediction', 'Medical diagnosis'],
        algorithms: ['Linear Regression', 'Decision Trees', 'Random Forest', 'Support Vector Machines', 'Neural Networks'],
    },
    {
        title: 'Unsupervised Learning',
        emoji: '🔍',
        desc: 'The algorithm finds patterns in unlabeled data without predefined outputs. It discovers hidden structures, groupings, and relationships within the data.',
        examples: ['Customer segmentation', 'Anomaly detection', 'Topic modeling', 'Data compression'],
        algorithms: ['K-Means Clustering', 'DBSCAN', 'PCA', 'Autoencoders', 'Hierarchical Clustering'],
    },
    {
        title: 'Reinforcement Learning',
        emoji: '🎮',
        desc: 'The algorithm learns by trial and error, receiving rewards or penalties for its actions in an environment. It learns the best strategy (policy) to maximize cumulative reward.',
        examples: ['Game playing (AlphaGo)', 'Robotic control', 'Autonomous driving', 'Resource management'],
        algorithms: ['Q-Learning', 'Deep Q-Networks', 'Policy Gradient', 'Actor-Critic', 'PPO'],
    },
];

const sklearnCode = `# Complete Machine Learning Example with Scikit-learn
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, accuracy_score

# Step 1: Load the dataset
iris = load_iris()
X, y = iris.data, iris.target
print(f"Dataset shape: {X.shape}")
print(f"Classes: {iris.target_names}")

# Step 2: Split into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Step 3: Scale features (good practice)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Step 4: Train a Random Forest classifier
model = RandomForestClassifier(
    n_estimators=100,
    max_depth=3,
    random_state=42
)
model.fit(X_train_scaled, y_train)

# Step 5: Make predictions
predictions = model.predict(X_test_scaled)

# Step 6: Evaluate the model
accuracy = accuracy_score(y_test, predictions)
print(f"\\nAccuracy: {accuracy:.2%}")
print(f"\\nClassification Report:")
print(classification_report(
    y_test, predictions,
    target_names=iris.target_names
))`;

export default function MachineLearning() {
    return (
        <>
            <Helmet>
                <title>Machine Learning - AI Learning Hub</title>
                <meta name="description" content="Learn Machine Learning fundamentals: supervised, unsupervised, and reinforcement learning. Includes overfitting/underfitting concepts and scikit-learn code examples." />
            </Helmet>

            {/* Hero */}
            <section className="relative section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-950 dark:via-dark-900 dark:to-primary-950/30">
                <div className="container-max text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
                        📊 Core Topic
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="gradient-text">Machine Learning</span>
                    </h1>
                    <p className="text-lg text-dark-500 dark:text-dark-400 max-w-3xl mx-auto">
                        Machine Learning is a subset of AI that enables systems to learn and improve from experience
                        without being explicitly programmed. It focuses on developing algorithms that can access data
                        and use it to learn for themselves.
                    </p>
                </div>
            </section>

            {/* What is ML */}
            <section className="section-padding bg-white dark:bg-dark-950">
                <div className="container-max max-w-4xl">
                    <SectionHeading title="What is Machine Learning?" />
                    <div className="glass-card p-6 md:p-8">
                        <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-4">
                            Machine Learning (ML) is a branch of Artificial Intelligence that gives computers the ability to
                            learn without being explicitly programmed. Instead of writing rules by hand, you feed data into an
                            algorithm, and it finds patterns and makes decisions on its own.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 mt-6">
                            <div className="bg-primary-50 dark:bg-primary-950/30 rounded-xl p-4">
                                <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Traditional Programming</h4>
                                <p className="text-sm text-dark-500 dark:text-dark-400">Input + <strong>Rules</strong> → Output</p>
                                <p className="text-xs text-dark-400 dark:text-dark-500 mt-1">Developer writes all the rules</p>
                            </div>
                            <div className="bg-accent-50 dark:bg-accent-950/30 rounded-xl p-4">
                                <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Machine Learning</h4>
                                <p className="text-sm text-dark-500 dark:text-dark-400">Input + Output → <strong>Rules</strong></p>
                                <p className="text-xs text-dark-400 dark:text-dark-500 mt-1">Algorithm learns the rules from data</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of ML */}
            <section className="section-padding bg-dark-50 dark:bg-dark-900/50">
                <div className="container-max">
                    <SectionHeading title="Types of Machine Learning" subtitle="Three fundamental paradigms that define how machines learn from data." />
                    <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {mlTypes.map(type => (
                            <div key={type.title} className="glass-card p-6 hover:-translate-y-1 transition-all duration-300">
                                <div className="text-3xl mb-3">{type.emoji}</div>
                                <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-3">{type.title}</h3>
                                <p className="text-sm text-dark-500 dark:text-dark-400 mb-4">{type.desc}</p>

                                <h4 className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">Real-World Examples</h4>
                                <ul className="space-y-1 mb-4">
                                    {type.examples.map(ex => (
                                        <li key={ex} className="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />{ex}
                                        </li>
                                    ))}
                                </ul>

                                <h4 className="text-xs font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wider mb-2">Algorithms</h4>
                                <div className="flex flex-wrap gap-1.5">
                                    {type.algorithms.map(alg => (
                                        <span key={alg} className="px-2 py-1 bg-dark-100 dark:bg-dark-700/50 rounded-md text-xs text-dark-600 dark:text-dark-300">{alg}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Overfitting & Underfitting */}
            <section className="section-padding bg-white dark:bg-dark-950">
                <div className="container-max max-w-4xl">
                    <SectionHeading title="Overfitting & Underfitting" subtitle="Two critical challenges every ML practitioner must understand." />
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="glass-card p-6 border-l-4 border-red-500">
                            <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-3">📈 Overfitting</h3>
                            <p className="text-sm text-dark-500 dark:text-dark-400 mb-3">
                                The model memorizes training data, including noise and outliers, and fails to generalize to new data. It performs great on training data but poorly on test data.
                            </p>
                            <h4 className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-2">Signs</h4>
                            <ul className="space-y-1 text-sm text-dark-600 dark:text-dark-300">
                                <li>• Very high training accuracy</li>
                                <li>• Low test/validation accuracy</li>
                                <li>• Large gap between train and test performance</li>
                            </ul>
                            <h4 className="text-xs font-semibold text-green-500 uppercase tracking-wider mt-3 mb-2">Solutions</h4>
                            <ul className="space-y-1 text-sm text-dark-600 dark:text-dark-300">
                                <li>• Add more training data</li>
                                <li>• Use regularization (L1, L2)</li>
                                <li>• Apply dropout (for neural networks)</li>
                                <li>• Simplify the model</li>
                            </ul>
                        </div>
                        <div className="glass-card p-6 border-l-4 border-yellow-500">
                            <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-3">📉 Underfitting</h3>
                            <p className="text-sm text-dark-500 dark:text-dark-400 mb-3">
                                The model is too simple to capture the underlying patterns in the data. It performs poorly on both training and test data.
                            </p>
                            <h4 className="text-xs font-semibold text-yellow-500 uppercase tracking-wider mb-2">Signs</h4>
                            <ul className="space-y-1 text-sm text-dark-600 dark:text-dark-300">
                                <li>• Low training accuracy</li>
                                <li>• Low test accuracy</li>
                                <li>• Model too simplistic for the data</li>
                            </ul>
                            <h4 className="text-xs font-semibold text-green-500 uppercase tracking-wider mt-3 mb-2">Solutions</h4>
                            <ul className="space-y-1 text-sm text-dark-600 dark:text-dark-300">
                                <li>• Use a more complex model</li>
                                <li>• Add more features</li>
                                <li>• Reduce regularization</li>
                                <li>• Train for more epochs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Code Example */}
            <section className="section-padding bg-dark-50 dark:bg-dark-900/50">
                <div className="container-max max-w-4xl">
                    <SectionHeading title="Scikit-learn Example" subtitle="A complete, runnable Machine Learning example using Python and scikit-learn." />
                    <CodeBlock code={sklearnCode} language="python" title="ml_example.py" />
                    <div className="glass-card p-6 mt-6">
                        <h3 className="font-semibold text-dark-900 dark:text-white mb-2">📝 What This Code Does</h3>
                        <ol className="space-y-2 text-sm text-dark-500 dark:text-dark-400">
                            <li><strong className="text-dark-900 dark:text-white">1.</strong> Loads the Iris dataset (150 samples of flowers with 4 features)</li>
                            <li><strong className="text-dark-900 dark:text-white">2.</strong> Splits data into 80% training and 20% testing</li>
                            <li><strong className="text-dark-900 dark:text-white">3.</strong> Scales features using StandardScaler (best practice)</li>
                            <li><strong className="text-dark-900 dark:text-white">4.</strong> Trains a Random Forest classifier with 100 trees</li>
                            <li><strong className="text-dark-900 dark:text-white">5.</strong> Makes predictions on unseen test data</li>
                            <li><strong className="text-dark-900 dark:text-white">6.</strong> Evaluates and prints accuracy and detailed metrics</li>
                        </ol>
                    </div>
                </div>
            </section>
        </>
    );
}
