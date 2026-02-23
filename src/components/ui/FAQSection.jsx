import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

function FAQItem({ question, answer }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="glass-card overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-5 text-left"
            >
                <span className="font-medium text-dark-900 dark:text-white pr-4">{question}</span>
                <HiChevronDown className={`text-xl text-primary-500 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-5 pb-5 text-sm text-dark-500 dark:text-dark-400 leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
}

export default function FAQSection({ faqs }) {
    return (
        <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
}
