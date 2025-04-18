import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BrowseCharacters from "./components/BrowseCharacters";
import CharacterDetailWrapper from "./components/CharacterDetailWrapper";
import Comics from "./components/Comics";
import NotFound from "./components/NotFound";
import NavigationBar from "./components/NavigationBar";
import './App.css'

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/browse-characters' element={<BrowseCharacters />} />
        <Route path='/character-details/:id' element={<CharacterDetailWrapper />} />
        <Route path='/comics' element={<Comics />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;