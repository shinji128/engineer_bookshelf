import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/AuthSlice';

export const Login = () => {
  const dispatch = useDispatch();
  const loginInGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      dispatch(login());
    });
  };
  return (
    <>
      <button className="px-2 text-white hover:bg-blue-600 pt-5" onClick={loginInGoogle}>ログイン</button>
    </>
  )
}
