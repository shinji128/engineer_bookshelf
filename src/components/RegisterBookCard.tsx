import { useEffect, useState } from "react";
import { OpenBDApiFetch } from "./OpenBDApiFetch";
import { Book } from "../types/Book"
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

type Props = {
  isbnId: string;
  state: string;
};

export const RegisterBookCard: React.FC<Props> = (props) => {
  const { isbnId, state } = props;
  const [book, setBook] = useState({
    title: '',
    image: ''
  })
  const [bookState, setBookState] = useState(state)

  const bookNextState = () => {
    switch(bookState) {
      case '積読':
        return '読中'
      case '読中':
        return '読了'
      default:
        return '積読'
    }
  }

  const onClickChangeState = () => {
    setBookState(bookNextState)
    const bookRef = doc(db, `users/${auth.currentUser?.uid}/books`, String(isbnId));
    updateDoc(bookRef, {
      state: bookNextState()
    });
  }

  useEffect(() => {
    const getRegisterBooks = async() => {
      const res = await OpenBDApiFetch({ isbnId: isbnId });
      if (!res) return
      const books = res.items
      books.forEach((book: Book) => {
        setBook({
          title: book.volumeInfo.title,
          image: book.volumeInfo.imageLinks?.thumbnail
        })
      })
    }
    getRegisterBooks()
  }, [isbnId])
  return (
    <li
      key={isbnId}
      className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
    >
      <div className="flex flex-1 flex-col p-5">
        <img className="mx-auto h-32 w-32" src={book.image} alt="" />
        <h3 className="mt-6 text-sm text-gray-900">{book.title}</h3>
        <button onClick={onClickChangeState}>{bookState}</button>
      </div>
    </li>
  );
}
