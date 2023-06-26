import { Link } from "react-router-dom";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const Header = () => {
  const { isAuth } = useSelector((rootState: RootState) => rootState.auth);
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
      {isAuth ? <Logout /> : <Login />}
    </div>
  )
}
