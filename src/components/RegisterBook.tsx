import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { Book } from "../types/Book"

type Props = {
  book: Book;
};

export const RegisterBook: React.FC<Props> = (props) => {
  const { book } = props
  const isbnId = book.volumeInfo.industryIdentifiers.find(obj => obj.type === 'ISBN_13')?.identifier;
  const registerBook = async () => {
    await addDoc(collection(db, "books"), {
      title: book.volumeInfo.title,
      isbnId: isbnId,
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
