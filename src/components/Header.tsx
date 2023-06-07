import { Link } from "react-router-dom";
// import { Login } from './components/Login';

export const Header = () => {
  return (
    <div className="flex bg-blue-700">
      <Link className="px-2 text-white hover:bg-blue-600 pt-5" to={"/"}>
        My本棚
      </Link>
      <Link className="px-2 text-white hover:bg-blue-600 pt-5" to={"searchbook"}>
        書籍検索
      </Link>
      <Link className="px-2 text-white hover:bg-blue-600 pt-5" to={"/users"}>
        ユーザ一覧
      </Link>
      <Link className="px-2 text-white hover:bg-blue-600 pt-5" to={"/logout"}>
        ログアウト
      </Link>
      {/* <Login setIsAuth={setIsAuth}/> */}
    </div>
  )
}
