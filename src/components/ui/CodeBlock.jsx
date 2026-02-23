import { useState } from 'react';
import { HiClipboard, HiCheck } from 'react-icons/hi';

export default function CodeBlock({ code, language = 'python', title = '' }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="rounded-2xl overflow-hidden border border-dark-200/50 dark:border-dark-700/50 my-6">
            <div className="flex items-center justify-between px-4 py-2.5 bg-dark-100 dark:bg-dark-800/80">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-red-400" />
                        <span className="w-3 h-3 rounded-full bg-yellow-400" />
                        <span className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="text-xs font-medium text-dark-500 dark:text-dark-400 ml-2">{title || language}</span>
                </div>
                <button
                    onClick={handleCopy}
                    className="text-dark-400 hover:text-dark-600 dark:hover:text-dark-200 transition-colors"
                    aria-label="Copy code"
                >
                    {copied ? <HiCheck className="text-green-500" /> : <HiClipboard />}
                </button>
            </div>
            <pre className="p-4 overflow-x-auto bg-dark-50 dark:bg-dark-900/80 text-sm leading-relaxed">
                <code className="font-mono text-dark-800 dark:text-dark-200">{code}</code>
            </pre>
        </div>
    );
}
