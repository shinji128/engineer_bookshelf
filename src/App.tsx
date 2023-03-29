import { useState } from 'react';
import { SearchBooksPage } from './components/SearchBooksPage';
import { Login } from './components/Login';
import './index.css'

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(localStorage.getItem('isAuth') === 'true');

  return (
    <>
      <Login setIsAuth={setIsAuth}/>
      <SearchBooksPage />
    </>
  );
}

export default App;
