import { collection, query, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react";
import { RegisterBooks } from "./RegisterBooks";

export const MyBooksPage = () => {
  const [isbnIds, setIsbnIds] = useState<any[]>([])
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) return<></>
      //ここでsetIsAuthを使う
      //カスタムフックにした方が良さげ
      const getRegisterBooks = async () => {
        const q = query(collection(db, `users/${user?.uid}/books`))
        const qq = await getDocs(q)
        setIsbnIds(qq.docs.map((doc) => doc.id))
        return <></>
      }
      getRegisterBooks()
    })
  }, [])
  return (
    <RegisterBooks isbnIds={isbnIds} />
  )
}
