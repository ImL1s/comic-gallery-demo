import { useState } from 'react'
import { HashRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import './App.css'
import { ComicViewer } from './components/ComicViewer'
import GalleryHome from './components/GalleryHome'
import NovelReader from './components/NovelReader'
import { comics } from './comics'

// Wrapper component to find comic by ID (Updated to match existing pattern but simplified import)
// Note: In previous step GalleryHome and ComicViewer were default exports, but in my view_file they were named imports?
// Let's check imports. GalleryHome.jsx has 'export default GalleryHome'.
// We should use default imports.

const ComicViewerWrapper = () => {
  const { id } = useParams();
  const comic = comics.find(c => c.id === id);

  if (!comic) return <div style={{ textAlign: 'center', marginTop: '50px' }}>Comic not found! <Link to="/">Back to Home</Link></div>;

  return (
    <ComicViewer comic={comic} />
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<GalleryHome />} />
          <Route path="/comic/:id" element={<ComicViewerWrapper />} />
          <Route path="/novel/:id" element={<NovelReader />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
