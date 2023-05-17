import { RegisterBook } from "./RegisterBook";
import { Book } from "../types/Book"

type Props = {
  book: Book;
};

export const SearchBookCard: React.FC<Props> = (props) => {
  const { book } = props;
  return (
    <li
      key={book.id}
      className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
    >
      <div className="flex flex-1 flex-col p-5">
        <img className="mx-auto h-32 w-32" src={book.volumeInfo.imageLinks?.thumbnail} alt="" />
        <h3 className="mt-6 text-sm text-gray-900">{book.volumeInfo.title}</h3>
      </div>
      <div>
        <RegisterBook book={book}/>
      </div>
    </li>
  )
}
