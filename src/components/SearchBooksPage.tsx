import { useState } from "react"
import { GoogleBooksApiFetch } from "./GoogleBooksApiFetch"
import { Book } from "../types/Book"
import { SearchBooks } from "./SearchBooks";

type BookApiResponse = {
  items: Book[];
};

export const SearchBooksPage = () => {
  const [title, setTitle] = useState('')
  const [searchBooks, setSearchBooks] = useState<Book[]>([]);

  const getSearchBooks = async() => {
    const res = await GoogleBooksApiFetch({ title: title });
    const data = res as BookApiResponse;
    const books = data.items;
    const filteredBooks = books.filter( book => {
      const identifiers = book.volumeInfo.industryIdentifiers;
      return identifiers?.some(identifier => identifier.type === 'ISBN_13');
    });
    setSearchBooks(filteredBooks);
  }

  return (
    <div>
      <input type='text' placeholder='タイトル' onChange={(e) => setTitle(e.target.value)}/>
      <button onClick={getSearchBooks}>検索</button>
      <div className="bg-gray-100 p-5">
        <SearchBooks books={searchBooks}/>
      </div>
    </div>
  )
};
