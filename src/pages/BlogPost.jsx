import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { HiArrowLeft, HiClock, HiCalendar } from 'react-icons/hi';
import { blogPosts } from '../data/blogPosts';

const categoryColors = {
    Beginner: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    Intermediate: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
    Advanced: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
};

export default function BlogPost() {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        return (
            <div className="section-padding text-center">
                <div className="container-max">
                    <h1 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">Post Not Found</h1>
                    <p className="text-dark-500 dark:text-dark-400 mb-6">The blog post you're looking for doesn't exist.</p>
                    <Link to="/blog" className="btn-primary">
                        <HiArrowLeft /> Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{post.title} - AI Learning Hub Blog</title>
                <meta name="description" content={post.excerpt} />
            </Helmet>

            {/* Hero */}
            <section className="relative section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-950 dark:via-dark-900 dark:to-primary-950/30">
                <div className="container-max max-w-3xl">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-500 mb-6 group">
                        <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
                    </Link>
                    <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
                            {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-dark-400 dark:text-dark-500">
                            <HiCalendar /> {post.date}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-dark-400 dark:text-dark-500">
                            <HiClock /> {post.readTime}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white leading-tight">
                        {post.title}
                    </h1>
                </div>
            </section>

            {/* Content */}
            <section className="section-padding bg-white dark:bg-dark-950">
                <div className="container-max max-w-3xl">
                    <article className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:text-dark-900 dark:prose-headings:text-white
            prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-dark-600 dark:prose-p:text-dark-300 prose-p:leading-relaxed prose-p:mb-4
            prose-li:text-dark-600 dark:prose-li:text-dark-300
            prose-strong:text-dark-900 dark:prose-strong:text-white
            prose-code:bg-dark-100 dark:prose-code:bg-dark-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-pre:bg-dark-50 dark:prose-pre:bg-dark-900 prose-pre:rounded-xl prose-pre:border prose-pre:border-dark-200 dark:prose-pre:border-dark-700
            prose-table:text-sm
            prose-th:text-left prose-th:py-2 prose-th:px-4 prose-th:border-b prose-th:border-dark-200 dark:prose-th:border-dark-700
            prose-td:py-2 prose-td:px-4 prose-td:border-b prose-td:border-dark-100 dark:prose-td:border-dark-800
          ">
                        <div dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />
                    </article>

                    {/* Navigation */}
                    <div className="mt-16 pt-8 border-t border-dark-200/50 dark:border-dark-800/50">
                        <Link to="/blog" className="btn-secondary">
                            <HiArrowLeft /> All Articles
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

function formatContent(content) {
    return content
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/^- (.+)$/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
        .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
        .replace(/\| (.+) \|/g, (match) => {
            const cells = match.split('|').filter(c => c.trim());
            return '<tr>' + cells.map(c => `<td>${c.trim()}</td>`).join('') + '</tr>';
        })
        .replace(/^(?!<[huplo])((?!<).+)$/gm, '<p>$1</p>')
        .replace(/<p>\s*<\/p>/g, '')
        .replace(/<p><tr>/g, '<table><tr>')
        .replace(/<\/tr><\/p>/g, '</tr></table>');
}
