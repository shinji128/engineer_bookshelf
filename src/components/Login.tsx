import { Dispatch, SetStateAction } from 'react';
import { auth, provider } from '../firebase'
import { signInWithPopup } from "firebase/auth";

type Props = {
  setIsAuth: Dispatch<SetStateAction<boolean>>;
};

export const Login: React.FC<Props> = ({ setIsAuth }) => {
  const loginInGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', 'true');
      setIsAuth(true);
    });
  };
  return (
    <>
      <button onClick={loginInGoogle}>Googleでログイン</button>
    </>
  )
}
