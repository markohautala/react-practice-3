import React from 'react'

function Book(props) {
  const { book } = props
  return (
    <div>
      <h3>{book.title}</h3>
      <p>by: {book.author}</p>
      <p>pages: {book.pages}</p>
    </div>
  )
}

export default Book