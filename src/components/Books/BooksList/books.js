import React from "react"
import BooksTerm from "../BooksTerm/booksterm";
import {Link} from "react-router-dom";

const books = (props) => {

    return (
      <div className={"container mm-4 mt-5"}>
          <div className={"row"}>
              <div className={"row"}>
                  <table className={"table"}>
                      <thead>
                      <tr>
                          <th scope={"col"}>
                              Name
                          </th>
                          <th scope={"col"}>
                              Category
                          </th>
                          <th scope={"col"}>
                              Author
                          </th>
                          <th scope={"col"}>
                              Available copies
                          </th>
                          <th scope={"col"}>
                              Actions
                          </th>
                      </tr>
                      </thead>
                      <tbody>
                      {props.books.map((item) => {
                              return (
                                  <BooksTerm term ={item} onDelete={props.onDelete}
                                             onEdit={props.onEdit} onTake={props.onTake}/>
                              )
                          }
                      )}
                      </tbody>
                  </table>
              </div>
          </div>
          <Link className={"btn btn-success ml-2"}
                // onClick={() => props.onEdit(props.term.id)}
                to={`/books/add`}>
              Add
          </Link>
      </div>

    );
}

export default books;