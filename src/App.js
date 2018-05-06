import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './external/BooksAPI'
import './App.css'

import BookList from './components/book/BookList'
import Search from './components/search/Search'


export default class App extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      book.shelf = shelf

      var newBooks = this.state.books.filter(b => b.id !== book.id)
      newBooks.push(book)

      this.setState({ books: newBooks })
    })
  }

  render() {
    const { books } = this.state

    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <div className='list-books'>
            <div className='list-books-title'>
              <h1>MyReads</h1>
            </div>
            <BookList
              books={ books }
              changeShelf={ this.changeShelf }
            />
            <div className="open-search">
              <Link to="/search">Search</Link>
            </div>
          </div>
        )} />
        <Route path='/search' render={ ({ history }) => (
          <Search
            books={ books }
            changeShelf={ this.changeShelf }
          />
        )} />
      </div>
    )
  }
}
