import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.page';
import Login from './pages/Login.page';
import Favorite from './pages/Favorite.page';
import MovieDetail from './pages/MovieDetail.page';
import NoPage from './pages/NoPage.page';
import Movies from "./pages/Movies.page";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path="home" element={<Home />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="/moviedetail/:id" element={<MovieDetail />} />
           <Route path="/movies" element={<Movies/>} />
          <Route path="*" element={<NoPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
