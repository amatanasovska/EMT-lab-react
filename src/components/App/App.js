import logo from '../../logo.svg';
import './App.css';
import  React, {Component} from "react";
import Books from "../Books/books";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'

import libraryRepository from "../../repository/libraryRepository";
import LibraryService from "../../repository/libraryRepository";
import Categories from "../Categories/categories";
import Header from "../Header/header"
import BookAdd from "../Books/BookAdd/bookadd";
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      books:[],
        categories:[],
        authors:[]
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
                  onDelete={this.deleteBook}/>}/>
                <Route path={"/"} exact render={() =>
                    <Books books={this.state.books}/>}/>
                <Route path={"/categories"} exact render={() =>
                    <Categories categories={this.state.categories}/>}/>
                <Route path={"/books/add"} exact render={() =>
                <BookAdd authors = {this.state.authors} categories ={this.state.categories} onAddBook = {this.addBook}/>}/>
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
  addBook = (name, categoryName, authorId, availableCopies) =>
  {
      LibraryService.addBook(name, categoryName, authorId, availableCopies).then(
          () => {
              this.loadBooks();
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
