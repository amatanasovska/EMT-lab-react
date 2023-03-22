import logo from '../../logo.svg';
import './App.css';
import  React, {Component} from "react";
import Books from "../Books/BooksList/books";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'

import libraryRepository from "../../repository/libraryRepository";
import LibraryService from "../../repository/libraryRepository";
import Categories from "../Categories/categories";
import Header from "../Header/header"
import BookAdd from "../Books/BookAdd/bookadd";
import BookEdit from "../Books/BookEdit/bookedit";
import BookTake from "../Books/BookTake/booktake"
import BookAddCopy from "../Books/BookAdd/bookaddcopy";
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      books:[],
        categories:[],
        authors:[],
        selectedBook:{},
        selectedCopies:[]
    }
  }

  render(){
    return (
        <Router>
          <Header/>
          <main>
            <div className={"container"}>
              <Route path={"/books"} exact render={() =>
                  <Books books={this.state.books}
                  onDelete={this.deleteBook} onEdit={this.getBook} onTake={(id) => {
                      this.getCopies(id);
                      this.getBook(id);
                  }}/>}/>
                <Route path={"/"} exact render={() =>
                    <Books books={this.state.books}/>}/>
                <Route path={"/categories"} exact render={() =>
                    <Categories categories={this.state.categories}/>}/>
                <Route path={"/books/add"} exact render={() =>
                <BookAdd authors = {this.state.authors}
                         categories ={this.state.categories}
                         books = {this.state.books}
                         onAddBook = {this.addBook}/>}/>

                <Route path={"/books/edit"} exact render={() =>
                    <BookEdit authors = {this.state.authors}
                              categories ={this.state.categories}
                              books = {this.state.books}
                              onEditBook = {this.editBook}
                              book={this.state.selectedBook}/>}/>
                <Route path={"/books/take"} exact render={() =>
                    <BookTake
                        copies = {this.state.selectedCopies}
                        onTake = {this.takeBook}
                        onAddCopy = {this.getBook}
                        booktype={this.state.selectedBook}
                    />}/>
                <Route path={"/books/add/copy"} exact render={() =>
                    <BookAddCopy
                        booktype = {this.state.selectedBook}
                        onAdd = {this.addCopy}
                    />}/>
            </div>
          </main>
        </Router>

    );
  }
  loadBooks = () =>
  {
    LibraryService.fetchBooks().then(
        (data) =>{
          this.setState({
            books: data.data
          })
        }
    )

  }
    loadAuthors = () =>
    {
        LibraryService.fetchAuthors().then(
            (data) =>{
                this.setState({
                    authors: data.data
                })
            }
        )

    }
  loadCategories = () =>
  {
      LibraryService.fetchCategories().then(
          (data) =>{
              this.setState({
                  categories: data.data
              }

              )
              console.log(this.state.categories)
          }
      )
  }
  deleteBook = (id) =>
  {
      LibraryService.deleteBook(id).then(
          () => {
              this.loadBooks();
          }
      )
  }
    getBook = (id) => {
        LibraryService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }
    getCopies = (id) => {
        LibraryService.getCopies(id)
            .then((data) => {
                this.setState({
                    selectedCopies: data.data
                })
            })
    }
    takeBook = (id, booktype_id) =>
    {
        LibraryService.takeBook(id, booktype_id).then(
            () => {
                this.getCopies(booktype_id);
            }
        )
    }
    editBook = (id, name, categoryName, authorId, availableCopies) =>
    {
        LibraryService.editBook(id, name, categoryName, authorId, availableCopies).then(
            () => {
                this.loadBooks();
            }
        )
    }
  addBook = (name, categoryName, authorId, availableCopies) =>
  {
      LibraryService.addBook(name, categoryName, authorId, availableCopies).then(
          () => {
              this.loadBooks();
          }
      )
  }
    addCopy = (isTaken, bookType) =>
    {
        LibraryService.addCopy(isTaken, bookType).then(
            () => {
                this.getCopies(bookType);
            }
        )
    }
  componentDidMount() {
    this.loadBooks();
    this.loadCategories();
    this.loadAuthors();
  }
}

export default App;
