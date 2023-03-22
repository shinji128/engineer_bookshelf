import { useState } from 'react';
import { BookSearch } from './components/BookSearch';
import { Login } from './components/Login';
import './index.css'

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(localStorage.getItem('isAuth') === 'true');

  return (
    <>
      <Login setIsAuth={setIsAuth}/>
      <BookSearch />
    </>
  );
}

export default App;
