import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BookSelfChanger from './BookSelfChanger.js'

export default class Book extends Component{
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render(){
    const { book, books, changeShelf } = this.props

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+ book.imageLinks.smallThumbnail +')' }}></div>
            <BookSelfChanger
              book={ book }
              books={ books }
              changeShelf={ changeShelf }
            />
          </div>
          <div className="book-title">
            { book.title }
          </div>
          {
            books.authors && book.autors.map( (autor, index) => (
              <div className="book-authors" key={ index }>
                { autor }
              </div>
            ))
          }
        </div>
      </li>
    )
  }
}
