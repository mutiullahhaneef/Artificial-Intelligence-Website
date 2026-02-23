export default function SectionHeading({ title, subtitle, centered = true }) {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
                {title}
            </h2>
            <div className={`h-1 w-20 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mb-4 ${centered ? 'mx-auto' : ''}`} />
            {subtitle && (
                <p className="text-dark-500 dark:text-dark-400 max-w-2xl mx-auto text-lg">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
