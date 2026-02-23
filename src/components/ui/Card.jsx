export default function Card({ icon: Icon, title, description, className = '' }) {
    return (
        <div className={`glass-card p-6 hover:shadow-xl hover:shadow-primary-500/10 dark:hover:shadow-primary-500/5 hover:-translate-y-1 transition-all duration-300 group ${className}`}>
            {Icon && (
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 dark:from-primary-500/20 dark:to-accent-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-2xl text-primary-600 dark:text-primary-400" />
                </div>
            )}
            <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">{title}</h3>
            <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed">{description}</p>
        </div>
    );
}
