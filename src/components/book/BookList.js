import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BookSelf from './BookSelf'

export default class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, changeShelf } = this.props
    const shelfs = [
      { title: 'Currently reading', type: 'currentlyReading' },
      { title: 'Want to Read', type: 'wantToRead' },
      { title: 'Read', type: 'read' }
    ]

    return(
      <div className="list-books-content">
      {
        shelfs.map( (shelf, index) => {
          const shelfBooks = books.filter( book => book.shelf === shelf.type )
          return(
            <div className="bookshelf" key={ index }>
              <h2 className="bookshelf-title">{ shelf.title }</h2>
              <div className="bookshelf-books">
                <BookSelf
                  books={ shelfBooks }
                  changeShelf={ changeShelf }
                />
              </div>
            </div>
          )
        })
      }
      </div>
    )
  }
}
