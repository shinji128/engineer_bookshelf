import { useState } from 'react';
import { SearchBooksPage } from './components/SearchBooksPage';
import { Login } from './components/Login';
import './index.css'
import { MyBooksPage } from './components/MyBooksPage';
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './components/Header';

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(localStorage.getItem('isAuth') === 'true');
  return (
    <>
      <Router>
        <Header />
        <div className="bg-gray-100 min-h-screen p-5">
          <Routes>
            <Route path="/" element={<MyBooksPage />} />
            <Route path="/searchbook" element={<SearchBooksPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
