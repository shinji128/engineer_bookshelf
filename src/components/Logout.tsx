import { auth } from '../firebase'
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/AuthSlice';

export const Logout = () => {
  const dispatch = useDispatch();
  const loginOutGoogle = () => {
    console.log(123)
    signOut(auth).then((result) => {
      dispatch(logout());
    });
  };
  return (
    <>
      <button className="px-2 text-white hover:bg-blue-600 pt-5" onClick={loginOutGoogle}>ログアウト</button>
    </>
  )
}
