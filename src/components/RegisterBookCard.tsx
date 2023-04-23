import { useEffect, useState } from "react";
import { OpenBDApiFetch } from "./OpenBDApiFetch";
import { Book } from "../types/Book"

type Props = {
  isbnId: string;
};

export const RegisterBookCard: React.FC<Props> = (props) => {
  const { isbnId } = props;
  const [book, setBook] = useState({
    title: '',
    image: ''
  })

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
      </div>
    </li>
  );
}
