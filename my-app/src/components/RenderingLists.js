import React from 'react'
import Book from './Book'

function RenderingLists(props) {

  const books = [
    {
      title: "booktitle one",
      author: "author one",
      pages: 100,
      id: 1
    },
    {
      title: "booktitle two",
      author: "author two",
      pages: 200,
      id: 2
    },
    {
      title: "booktitle three",
      author: "author three",
      pages: 300,
      id: 3
    },
    {
      title: "booktitle four",
      author: "author four",
      pages: 400,
      id: 4
  }
  ]


  return (
    <div>

      {books.map(book => {
          return <Book key={book.id} book={book}/>
      })}
    </div>
  )
}

export default RenderingLists