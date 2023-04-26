import { useState } from 'react';
import { SearchBooksPage } from './components/SearchBooksPage';
import { Login } from './components/Login';
import './index.css'
import { MyBooksPage } from './components/MyBooksPage';

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(localStorage.getItem('isAuth') === 'true');
  return (
    <div className="bg-gray-100 p-5">
      <Login setIsAuth={setIsAuth}/>
      <SearchBooksPage />
      <MyBooksPage />
    </div>
  );
}

export default App;
