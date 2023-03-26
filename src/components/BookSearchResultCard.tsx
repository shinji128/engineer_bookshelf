type Book = {
  id: string;
  volumeInfo: {
    title: string;
    imageLinks: {
      thumbnail: string;
    }
  }
}

type Props = {
  book: Book;
};

export const BookSearchResultCard: React.FC<Props> = (props) => {
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
        <div className="text-lg">登録</div>
          {/* <a
            href={`mailto:${book.email}`}
            className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
          >
            <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            Email
          </a> */}
      </div>
    </li>
  )
}