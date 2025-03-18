import {Routes, Route} from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Favorites from './pages/Favorites.jsx';
import Details from './pages/Details.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar/>
      <main className="min-h-[calc(100vh-80px)]">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/recipe-item/:id' element={<Details/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App