import { useState } from "react"

export const Booksearch = () => {
  const [title, setTitle] = useState('')
  const googleBooksApi = 'https://www.googleapis.com/books/v1/volumes?q=';
  const searchGoogleBooks = async () => {
    const searchresult = await fetch(`${googleBooksApi}title:${title}`)
    console.log(searchresult.json())
  }
  return (
    <>
      <input type='text' placeholder='タイトル' onChange={(e) => setTitle(e.target.value)}/>
      <button onClick={searchGoogleBooks}>検索</button>
    </>
  )
};
