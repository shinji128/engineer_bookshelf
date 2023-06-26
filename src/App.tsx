import { SearchBooksPage } from './components/SearchBooksPage';
import { Login } from './components/Login';
import './index.css'
import { MyBooksPage } from './components/MyBooksPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './components/Header';
import { Logout } from './components/Logout';
import { rootState } from './store';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={rootState}>
      <Router>
        <Header />
        <div className="bg-gray-100 min-h-screen p-5">
          <Routes>
            <Route path="/" element={<MyBooksPage />} />
            <Route path="/searchbook" element={<SearchBooksPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
