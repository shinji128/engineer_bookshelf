import { RegisterBookCard } from "./RegisterBookCard"

type RegisterBook = {
  isbnId: string;
  state: string;
}

type Props = {
  registerBooks: RegisterBook[]
}

export const RegisterBooks: React.FC<Props> = (props) => {
  const { registerBooks } = props;
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {registerBooks.map((book, i) => {
        return <RegisterBookCard key={i} isbnId={book.isbnId} state={book.state} />
      })}
    </ul>
  )
}
