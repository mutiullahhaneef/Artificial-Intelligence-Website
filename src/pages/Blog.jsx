import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiClock } from 'react-icons/hi';
import { blogPosts } from '../data/blogPosts';
import SectionHeading from '../components/ui/SectionHeading';

const categoryColors = {
    Beginner: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    Intermediate: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
    Advanced: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
};

export default function Blog() {
    return (
        <>
            <Helmet>
                <title>AI Blog - AI Learning Hub</title>
                <meta name="description" content="Read articles about Artificial Intelligence, Machine Learning, and Deep Learning. From beginner guides to advanced topics." />
            </Helmet>

            {/* Hero */}
            <section className="relative section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-950 dark:via-dark-900 dark:to-primary-950/30">
                <div className="container-max text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
                        ✍️ Latest Articles
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        AI <span className="gradient-text">Blog</span>
                    </h1>
                    <p className="text-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
                        In-depth articles, tutorials, and insights about Artificial Intelligence.
                        Written for learners at every level.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section-padding bg-white dark:bg-dark-950">
                <div className="container-max">
                    <SectionHeading title="Latest Articles" />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {blogPosts.map(post => (
                            <Link key={post.id} to={`/blog/${post.id}`} className="group">
                                <article className="glass-card overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 h-full flex flex-col">
                                    <div className="h-48 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 flex items-center justify-center text-6xl">
                                        {post.image}
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
                                                {post.category}
                                            </span>
                                            <span className="flex items-center gap-1 text-xs text-dark-400 dark:text-dark-500">
                                                <HiClock /> {post.readTime}
                                            </span>
                                        </div>
                                        <h2 className="text-lg font-semibold text-dark-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-sm text-dark-500 dark:text-dark-400 flex-1 mb-4">{post.excerpt}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-dark-400 dark:text-dark-500">{post.date}</span>
                                            <span className="flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 font-medium group-hover:gap-2 transition-all">
                                                Read More <HiArrowRight />
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
