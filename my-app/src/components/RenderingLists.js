import React from 'react'
import Book from './Book'

function RenderingLists(props) {
  const bookList = [
    "booktitle one",
    "booktitle two",
    "booktitle three",
    "booktitle four",
    "booktitle five"
  ]

  const books = [
    {
      title: "booktitle one",
      author: "author one",
      pages: 100
    },
    {
      title: "booktitle two",
      author: "author two",
      pages: 200
    },
    {
      title: "booktitle three",
      author: "author three",
      pages: 300
    },
    {
      title: "booktitle four",
      author: "author four",
      pages: 400
  }
  ]


  return (
    <div>
      {bookList.map(book => {
        return <h3>{book}</h3>
      })}
      
      <hr />

      {books.map(book => {
          return <Book book={book}/>
      })}
    </div>
  )
}

export default RenderingLists