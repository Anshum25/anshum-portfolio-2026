import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetail from './pages/ProjectDetail';
import BlogPage from './pages/BlogPage';
import BlogDetail from './pages/BlogDetail';
import { BottomNavBar } from './components/ui/bottom-nav-bar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <main className="flex-grow pb-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
          </Routes>
        </main>
        <BottomNavBar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
