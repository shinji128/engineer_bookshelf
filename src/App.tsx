import { useState } from 'react';
import { Booksearch } from './components/Booksearch';
import { Login } from './components/Login';

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(localStorage.getItem('isAuth') === 'true');

  return (
    <>
      <Login setIsAuth={setIsAuth}/>
      <Booksearch />
    </>
  );
}

export default App;
