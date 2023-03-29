import { Book } from "../types/Book"
import { SearchBookCard } from "./SearchBookCard";

type Props = {
  books: Book[]
}

export const SearchBooks: React.FC<Props> = (props) => {
  const { books } = props;
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book, i) => {
        return <SearchBookCard key={i} book={book} />
      })}
    </ul>
  )
}
