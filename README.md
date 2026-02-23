# AI Learning Hub 🧠

A modern, responsive, SEO-optimized educational website about Artificial Intelligence. Built with React + Vite + Tailwind CSS.

![AI Learning Hub](https://img.shields.io/badge/AI-Learning%20Hub-blue?style=for-the-badge)

## 🚀 Features

- **9 Educational Pages** — Home, About AI, Machine Learning, Deep Learning, Applications, Ethics, Roadmap, Blog, Contact
- **Dark/Light Mode** — Toggle with localStorage persistence
- **Fully Responsive** — Mobile-first design with hamburger menu
- **SEO Optimized** — Per-page meta tags with react-helmet-async
- **Python Code Examples** — Syntax-highlighted code blocks with copy functionality
- **Blog Section** — 3 articles with dynamic routing
- **Contact Form** — With validation and submission feedback
- **Smooth Animations** — Scroll-to-top, fade-in, slide-up effects
- **Glassmorphic Cards** — Modern UI with backdrop blur
- **FAQ Section** — Accordion-style expandable answers

## 📦 Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS 3 | Styling |
| React Router v6 | Client-side routing |
| React Helmet Async | SEO meta tags |
| React Icons | Icon library |

## 🛠 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/ai-learning-hub.git
cd ai-learning-hub

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 📁 Project Structure

```
ai-learning-hub/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Card.jsx
│   │   │   ├── CodeBlock.jsx
│   │   │   ├── FAQSection.jsx
│   │   │   └── SectionHeading.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── ScrollToTop.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   └── blogPosts.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AboutAI.jsx
│   │   ├── MachineLearning.jsx
│   │   ├── DeepLearning.jsx
│   │   ├── AIApplications.jsx
│   │   ├── AIEthics.jsx
│   │   ├── AIRoadmap.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🚀 Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

### Netlify

```bash
npm run build
```

Then drag and drop the `dist` folder to [netlify.com](https://netlify.com), or connect your GitHub repo.

### GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

npm run deploy
```

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |

## 📄 License

MIT License — feel free to use this project for learning, portfolio, or any purpose.

---

Built with ❤️ for the AI learning community.
