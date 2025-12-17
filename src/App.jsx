import { useState } from 'react'
import { HashRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import './App.css'
import { ComicViewer } from './components/ComicViewer'
import { GalleryHome } from './components/GalleryHome'
import { comics } from './comics'

// Wrapper component to find comic by ID
const ComicViewerWrapper = () => {
  const { id } = useParams();
  const comic = comics.find(c => c.id === id);

  if (!comic) return <div style={{ textAlign: 'center', marginTop: '50px' }}>Comic not found! <Link to="/">Go Home</Link></div>;

  return (
    <div>
      <div style={{ padding: '1rem', maxWidth: '1000px', margin: '0 auto' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#666', fontWeight: 'bold' }}>← 回首頁</Link>
      </div>
      <ComicViewer comic={comic} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<GalleryHome />} />
          <Route path="/comic/:id" element={<ComicViewerWrapper />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
