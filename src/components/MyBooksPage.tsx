import { collection, query, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react";
import { RegisterBooks } from "./RegisterBooks";

type RegisterBook = {
  isbnId: string;
  state: string;
}

export const MyBooksPage = () => {
  const [registerBooks, setRegisterBooks] = useState<RegisterBook[]>([])
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) return<></>
      //ここでsetIsAuthを使う
      //カスタムフックにした方が良さげ
      const getRegisterBooks = async () => {
        const q = query(collection(db, `users/${user?.uid}/books`))
        const qq = await getDocs(q)
        setRegisterBooks(qq.docs.map((doc) => ({ isbnId: doc.id, state: doc.data().state })))
        return <></>
      }
      getRegisterBooks()
    })
  }, [])
  return (
    <RegisterBooks registerBooks={registerBooks} />
  )
}
