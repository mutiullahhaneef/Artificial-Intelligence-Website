import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';
import CodeBlock from '../components/ui/CodeBlock';

const kerasCode = `# Building a CNN with TensorFlow/Keras
import tensorflow as tf
from tensorflow.keras import layers, models

# Build the model
model = models.Sequential([
    # Convolutional layers
    layers.Conv2D(32, (3, 3), activation='relu', 
                  input_shape=(28, 28, 1)),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    
    # Dense layers
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(10, activation='softmax')
])

# Compile
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Load MNIST dataset
(X_train, y_train), (X_test, y_test) = \\
    tf.keras.datasets.mnist.load_data()

# Normalize and reshape
X_train = X_train.reshape(-1, 28, 28, 1) / 255.0
X_test = X_test.reshape(-1, 28, 28, 1) / 255.0

# Train
history = model.fit(
    X_train, y_train,
    epochs=5,
    validation_split=0.2,
    batch_size=64
)

# Evaluate
test_loss, test_acc = model.evaluate(X_test, y_test)
print(f"Test Accuracy: {test_acc:.2%}")`;

const activationFunctions = [
    { name: 'ReLU', formula: 'f(x) = max(0, x)', use: 'Hidden layers (most popular)', pros: 'Fast computation, reduces vanishing gradient', cons: 'Can "die" (output always 0)' },
    { name: 'Sigmoid', formula: 'f(x) = 1 / (1 + e⁻ˣ)', use: 'Binary classification output', pros: 'Output range [0,1] — good for probabilities', cons: 'Vanishing gradient problem' },
    { name: 'Tanh', formula: 'f(x) = (eˣ - e⁻ˣ) / (eˣ + e⁻ˣ)', use: 'Hidden layers (alternative)', pros: 'Zero-centered output [-1,1]', cons: 'Vanishing gradient at extremes' },
    { name: 'Softmax', formula: 'f(xᵢ) = eˣⁱ / Σeˣʲ', use: 'Multi-class classification output', pros: 'Outputs sum to 1 (probability distribution)', cons: 'Computationally expensive for large classes' },
];

const architectures = [
    {
        name: 'CNN (Convolutional Neural Network)',
        emoji: '🖼️',
        desc: 'Designed for processing grid-like data (images). Uses convolutional filters to detect features like edges, textures, and shapes at different scales.',
        useCases: ['Image classification', 'Object detection', 'Face recognition', 'Medical imaging', 'Self-driving cars'],
        layers: ['Convolutional Layer', 'Pooling Layer', 'Flatten Layer', 'Dense Layer'],
    },
    {
        name: 'RNN (Recurrent Neural Network)',
        emoji: '🔄',
        desc: 'Designed for sequential data. Has internal memory that allows it to process sequences of inputs, making it ideal for time-dependent data.',
        useCases: ['Language translation', 'Speech recognition', 'Time series forecasting', 'Text generation', 'Music composition'],
        layers: ['Embedding Layer', 'LSTM/GRU Layer', 'Dropout Layer', 'Dense Layer'],
    },
    {
        name: 'Transformer',
        emoji: '⚡',
        desc: 'Uses self-attention mechanisms to process entire sequences simultaneously. Powers modern language models like GPT and BERT.',
        useCases: ['ChatGPT & language models', 'Machine translation', 'Text summarization', 'Code generation', 'Image generation (ViT)'],
        layers: ['Embedding + Positional', 'Multi-Head Attention', 'Feed-Forward', 'Layer Normalization'],
    },
];

export default function DeepLearning() {
    return (
        <>
            <Helmet>
                <title>Deep Learning - AI Learning Hub</title>
                <meta name="description" content="Learn Deep Learning: neural networks, layers, activation functions, CNNs, RNNs, and Transformers. Includes TensorFlow/Keras code examples." />
            </Helmet>

            {/* Hero */}
            <section className="relative section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-950 dark:via-dark-900 dark:to-primary-950/30">
                <div className="container-max text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-900/50 text-accent-700 dark:text-accent-300 text-sm font-medium mb-6">
                        🧠 Advanced Topic
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="gradient-text">Deep Learning</span>
                    </h1>
                    <p className="text-lg text-dark-500 dark:text-dark-400 max-w-3xl mx-auto">
                        Deep Learning is a subset of Machine Learning that uses artificial neural networks with many layers
                        to model complex patterns in data. It powers the most impressive AI achievements today.
                    </p>
                </div>
            </section>

            {/* Neural Networks */}
            <section className="section-padding bg-white dark:bg-dark-950">
                <div className="container-max max-w-4xl">
                    <SectionHeading title="Neural Networks" subtitle="The building blocks of Deep Learning — inspired by the human brain." />
                    <div className="glass-card p-6 md:p-8 mb-8">
                        <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-4">
                            An artificial neural network consists of interconnected nodes (neurons) organized in layers.
                            Each connection has a weight that is adjusted during training. Data flows through the network,
                            gets transformed at each layer, and produces an output prediction.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-4 mt-6">
                            <div className="bg-primary-50 dark:bg-primary-950/30 rounded-xl p-4 text-center">
                                <div className="text-2xl mb-2">📥</div>
                                <h4 className="font-semibold text-dark-900 dark:text-white text-sm">Input Layer</h4>
                                <p className="text-xs text-dark-500 dark:text-dark-400 mt-1">Receives raw data features</p>
                            </div>
                            <div className="bg-accent-50 dark:bg-accent-950/30 rounded-xl p-4 text-center">
                                <div className="text-2xl mb-2">⚙️</div>
                                <h4 className="font-semibold text-dark-900 dark:text-white text-sm">Hidden Layers</h4>
                                <p className="text-xs text-dark-500 dark:text-dark-400 mt-1">Extract & transform features</p>
                            </div>
                            <div className="bg-primary-50 dark:bg-primary-950/30 rounded-xl p-4 text-center">
                                <div className="text-2xl mb-2">📤</div>
                                <h4 className="font-semibold text-dark-900 dark:text-white text-sm">Output Layer</h4>
                                <p className="text-xs text-dark-500 dark:text-dark-400 mt-1">Produces prediction</p>
                            </div>
                        </div>
                    </div>

                    {/* Key Concepts */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { title: 'Weights & Biases', desc: 'Parameters the network learns during training. Weights determine the strength of connections.', emoji: '⚖️' },
                            { title: 'Forward Pass', desc: 'Data flows from input to output through all layers, producing a prediction.', emoji: '➡️' },
                            { title: 'Loss Function', desc: 'Measures how wrong predictions are. The goal is to minimize this value.', emoji: '📊' },
                            { title: 'Backpropagation', desc: 'Calculates gradients of the loss with respect to weights, enabling learning.', emoji: '🔙' },
                        ].map(item => (
                            <div key={item.title} className="glass-card p-4">
                                <div className="text-xl mb-2">{item.emoji}</div>
                                <h4 className="font-semibold text-dark-900 dark:text-white text-sm mb-1">{item.title}</h4>
                                <p className="text-xs text-dark-500 dark:text-dark-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Activation Functions */}
            <section className="section-padding bg-dark-50 dark:bg-dark-900/50">
                <div className="container-max max-w-5xl">
                    <SectionHeading title="Activation Functions" subtitle="Non-linear functions that enable neural networks to learn complex patterns." />
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-dark-200 dark:border-dark-700">
                                    <th className="text-left py-3 px-4 font-semibold text-dark-900 dark:text-white">Name</th>
                                    <th className="text-left py-3 px-4 font-semibold text-dark-900 dark:text-white">Formula</th>
                                    <th className="text-left py-3 px-4 font-semibold text-dark-900 dark:text-white">Best For</th>
                                    <th className="text-left py-3 px-4 font-semibold text-dark-900 dark:text-white hidden md:table-cell">Pros</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activationFunctions.map(af => (
                                    <tr key={af.name} className="border-b border-dark-100 dark:border-dark-800 hover:bg-primary-50/50 dark:hover:bg-primary-950/20 transition-colors">
                                        <td className="py-3 px-4 font-medium text-primary-600 dark:text-primary-400">{af.name}</td>
                                        <td className="py-3 px-4 font-mono text-xs text-dark-600 dark:text-dark-300">{af.formula}</td>
                                        <td className="py-3 px-4 text-dark-500 dark:text-dark-400">{af.use}</td>
                                        <td className="py-3 px-4 text-dark-500 dark:text-dark-400 hidden md:table-cell">{af.pros}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Architectures */}
            <section className="section-padding bg-white dark:bg-dark-950">
                <div className="container-max">
                    <SectionHeading title="Deep Learning Architectures" subtitle="Specialized neural network designs for different types of data and tasks." />
                    <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {architectures.map(arch => (
                            <div key={arch.name} className="glass-card p-6 hover:-translate-y-1 transition-all duration-300">
                                <div className="text-3xl mb-3">{arch.emoji}</div>
                                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">{arch.name}</h3>
                                <p className="text-sm text-dark-500 dark:text-dark-400 mb-4">{arch.desc}</p>

                                <h4 className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">Use Cases</h4>
                                <ul className="space-y-1 mb-4">
                                    {arch.useCases.map(uc => (
                                        <li key={uc} className="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />{uc}
                                        </li>
                                    ))}
                                </ul>

                                <h4 className="text-xs font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wider mb-2">Key Layers</h4>
                                <div className="flex flex-wrap gap-1.5">
                                    {arch.layers.map(l => (
                                        <span key={l} className="px-2 py-1 bg-dark-100 dark:bg-dark-700/50 rounded-md text-xs text-dark-600 dark:text-dark-300">{l}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Code Example */}
            <section className="section-padding bg-dark-50 dark:bg-dark-900/50">
                <div className="container-max max-w-4xl">
                    <SectionHeading title="CNN Code Example" subtitle="Build a Convolutional Neural Network for digit recognition using TensorFlow/Keras." />
                    <CodeBlock code={kerasCode} language="python" title="cnn_mnist.py" />
                </div>
            </section>
        </>
    );
}
