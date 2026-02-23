import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutAI from './pages/AboutAI';
import MachineLearning from './pages/MachineLearning';
import DeepLearning from './pages/DeepLearning';
import AIApplications from './pages/AIApplications';
import AIEthics from './pages/AIEthics';
import AIRoadmap from './pages/AIRoadmap';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';

function App() {
    return (
        <HelmetProvider>
            <ThemeProvider>
                <Router>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<AboutAI />} />
                            <Route path="/machine-learning" element={<MachineLearning />} />
                            <Route path="/deep-learning" element={<DeepLearning />} />
                            <Route path="/applications" element={<AIApplications />} />
                            <Route path="/ethics" element={<AIEthics />} />
                            <Route path="/roadmap" element={<AIRoadmap />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/blog/:id" element={<BlogPost />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </Layout>
                </Router>
            </ThemeProvider>
        </HelmetProvider>
    );
}

export default App;
