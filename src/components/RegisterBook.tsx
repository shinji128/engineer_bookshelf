import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { Book, STATES } from "../types/Book"

type Props = {
  book: Book;
};

export const RegisterBook: React.FC<Props> = (props) => {
  const { book } = props
  const isbnId = book.volumeInfo.industryIdentifiers.find(obj => obj.type === 'ISBN_13')?.identifier;
  const registerBook = async () => {
    await setDoc(doc(db, `users/${auth.currentUser?.uid}/books`, String(isbnId)), {
      title: book.volumeInfo.title,
      isbnId: isbnId,
      state: STATES.UNREAD,
      user: {
        username: auth.currentUser?.displayName,
        id: auth.currentUser?.uid
      }
    })
  }
  return (
    <button onClick={registerBook}>登録</button>
  )
}
