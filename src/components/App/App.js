import logo from '../../logo.svg';
import './App.css';
import  React, {Component} from "react";
import Books from "../Books/books";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'

import libraryRepository from "../../repository/libraryRepository";
import LibraryService from "../../repository/libraryRepository";
import Categories from "../Categories/categories";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      books:[],
        categories:[]
    }
  }

  render(){
    return (
        <Router>
          {/*<Header/>*/}
          <main>
            <div className={"container"}>
              <Route path={"/books"} exact render={() =>
                  <Books books={this.state.books}/>}/>
                <Route path={"/categories"} exact render={() =>
                    <Categories categories={this.state.categories}/>}/>
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
  componentDidMount() {
    this.loadBooks();
    this.loadCategories();
  }
}

export default App;
