import { useState } from 'react'
import './App.css'
import { ComicViewer } from './components/ComicViewer'
import { comics } from './comics'

function App() {
  const [currentComic] = useState(comics[0]);

  return (
    <div className="app-container">
      <ComicViewer comic={currentComic} />
    </div>
  )
}

export default App
