import React from 'react';
// importing components from the app
import './App.css';
import Main from '../main/Main.js';
import SearchBar from '../searchbar/SearchBar.js';
import BooksList from '../bookslist/BooksList.js';
import * as BookAPI from '../../util/bookAPI.js';
// importing modules from node
import { Route} from 'react-router-dom';

class App extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      query: '',
      //the word query will be to check if the query match word in order to activate the componentdidmount
      word: ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']
    }

    this.updateQuery = this.updateQuery.bind(this);
    this.clearQuery = this.clearQuery.bind(this);
  }




  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
    if ((this.state.query) && (this.state.word.includes(this.state.query))) {
    //calling the API here
    BookAPI.search(this.state.query)
      .then(books => this.setState({books: books}));
    }
  }

  clearQuery = (query) => {
    this.updateQuery('')
  }



  render() {
    return (
      <div>
        {/* Main landing page */}
        <Route exact path='/' render={() => (
          <Main />
        )} />
        {/* Page to Search new books */}
        <Route exact path='/search' render={() => (
          <div>
            <SearchBar
              query={this.state.query}
              updateQuery={this.updateQuery}
            />
            <BooksList books={this.state.books}/>
          </div>
        )} />
      </div>
    );
  }
}

export default App;
