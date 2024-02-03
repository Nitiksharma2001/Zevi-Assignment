import './App.css';
import Navbar from './views/navbar/Navbar';
import Main from './views/products/Main';
import SearchPage from './views/searchPage/SearchPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/search" element={<Main />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
