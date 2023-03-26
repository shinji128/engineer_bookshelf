import { useState } from "react"
import { BookSearchResultCard } from "./BookSearchResultCard";

type Book = {
  id: string;
  volumeInfo: {
    title: string;
    imageLinks: {
      thumbnail: string;
    }
  }
}

export const BookSearch = () => {
  const [title, setTitle] = useState('')
  const [searchAllBook, setSearchAllBook] = useState<Book[]>([]);
  const googleBooksApi = 'https://www.googleapis.com/books/v1/volumes?q=';

  const googleBooksFetch = () => {
    return new Promise((resolve, rejects) => {
      fetch(`${googleBooksApi}title:${title}&maxResults=40`)
        .then((res) => res.json())
        .then(data => resolve(data))
    })
  }

  const getSearchBooks = async() => {
    const res: any = await googleBooksFetch()
    setSearchAllBook(res.items)
  }

  return (
    <div>
      <input type='text' placeholder='タイトル' onChange={(e) => setTitle(e.target.value)}/>
      <button onClick={getSearchBooks}>検索</button>
      <div className="bg-gray-100 p-5">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {searchAllBook.map((book:Book, i) => {
            return <BookSearchResultCard key={i} book={book} />
          })}
        </ul>
      </div>
    </div>
  )
};
